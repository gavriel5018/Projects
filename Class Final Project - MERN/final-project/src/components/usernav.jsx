import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Signin from './signin';

class UserNav extends Component {
    state = {  }
    render() { 
        const {user} = this.props;
        return ( <React.Fragment>
            { !user && <React.Fragment> <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container">
                    <Signin />

                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <strong className="register">dont have an account?</strong> <Link to='/signup' className="usernav-link"><strong>Sign up</strong></Link> <strong className="register">now!</strong><br />
                        <strong className="register">or</strong> <Link to='/biz-Signup' className="usernav-link"><strong>Sign up a free business account</strong></Link>
                        </li>
                    </ul>
                </div>
</nav>
</React.Fragment>}

{user && <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container text-white">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        Welcome {user.name}!
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="usernav" to="/logout">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
</nav>
    </React.Fragment>}
        </React.Fragment> );
    }
}
 
export default UserNav;