import React from 'react';
import Form from './common/form';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import userService from '../services/userService';
import http from '../services/httpService';
import {Redirect} from 'react-router-dom';
import {apiUrl} from '../config.json';
import {toast} from 'react-toastify';

class Signup extends Form {
    state = { 
        data: { email: "", password: "", name: ""},
        errors: {}
     }

     schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(6).label("Password"),
        name: Joi.string().required().min(2).label("Name"),
    }

    doSubmit = async () => {

        const data =  {...this.state.data}
        data.biz = false;
        try{

        await http.post(`${apiUrl}/users`, data);
        toast.success(`Congrats ${data.name}, You Registered Successfully!`)
        this.props.history.replace('/');

        } catch( ex ){
            if ( ex.response && ex.response.status === 400 ) {
                this.setState({ errors: { email: ex.response.data } });
            } 
        }
     }  
     render() { 
        if(userService.getCurrentUser()) return <Redirect to="/" />
        return ( <div className="container">
            <PageHeader titleText="Signup Page" />
        <div className="row">
            <div className="col-12">
                <p className="text-center">Here you can register new account for free</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form onSubmit={this.handleSubmit} autoComplete="Off" method="POST">
                    { this.renderInput("email", "", "email", "Email") }
                    { this.renderInput("password", "", "password", "Password") }
                    { this.renderInput("name", "", "name", "Name") }
                    { this.renderButton("Signup") }
                </form>
            </div>
        </div>
    </div> );
    }
}
 
export default Signup;