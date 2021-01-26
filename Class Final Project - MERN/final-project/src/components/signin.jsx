import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import userService from '../services/userService';
import { Redirect } from 'react-router-dom';

class Signin extends Form {
    state = { 
        data: {email: "", password: ""},
        errors: {}
     }

     schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(6).label("Password")
     }

     doSubmit = async () => {
        const { email, password} = this.state.data;
        try {
            await userService.login(email, password);
            window.location = '/';
        } catch(ex) {
            if ( ex.response && ex.response.status === 400 ) {
                this.setState({ errors: { email: ex.response.data } });
            }
        }
    }

    render() { 
        if( userService.getCurrentUser() ) return <Redirect to="/" />
        return ( 
            <ul className="navbar-nav">
            <li className="nav-item">
            <form onSubmit={this.handleSubmit} autoComplete="Off" method="POST" className="signin">
                { this.renderInput("email", "", "email", "Email") }&nbsp;
                { this.renderInput("password", "", "password", "Password") }&nbsp;
                <button className="mt-4 btn btn-success" disabled={this.validate()}>Sign in</button>
            </form>
        </li>
        </ul>
         );
    }
}
 
export default Signin;