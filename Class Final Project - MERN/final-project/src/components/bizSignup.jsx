import React from 'react';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import Form from './common/form';
import http from '../services/httpService';
import {apiUrl} from '../config.json';
import {Redirect} from 'react-router-dom';
import userService from '../services/userService';

class BizSignup extends Form {

    state = { 
        data: { email: "", password: "", name: "" },
        errors: {}
    }

     schema = {
         email: Joi.string().required().email().label("Email"),
         password: Joi.string().required().min(6).label("Password"),
         name: Joi.string().required().min(2).label("Name"),
     }

     doSubmit = async () => {

        const data = { ...this.state.data };
        data.biz = true;
    
        try {
    
          await http.post(`${apiUrl}/users`, data);
          await userService.login(data.email, data.password);
          window.location = '/';
    
        } catch(ex){
    
          if( ex.response && ex.response.status === 400 ){
            this.setState({errors: {email: 'Email is taken'}});
          }
    
        }
    
      }
    

    render() { 
        if(userService.getCurrentUser()) return <Redirect to="/" />
        return ( <div className="container">
            <PageHeader titleText="Business Registration Form" />
        <div className="row">
            <div className="col-12">
                <p className="text-center">Open a new business account now!</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form onSubmit={this.handleSubmit} autoComplete="Off" method="POST">
                    { this.renderInput("email", "", "email", "Email") }
                    { this.renderInput("password", "", "password", "Password") }
                    { this.renderInput("name", "", "name", "Name") }
                    { this.renderButton("Sign up") }
                </form>
            </div>
        </div>
    </div> );
    }
}
 
export default BizSignup;