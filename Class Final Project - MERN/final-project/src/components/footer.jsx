import React, { Component } from 'react';
import Copyright from './common/copyright';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
      const {user} = this.props;
        return ( <React.Fragment>

<footer className="bg-secondary text-center text-lg-start">

  <div className="container p-4">

    <div className="row">

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase text-white">About Us</h5>

        <p className="text-white">
        Final Projects was founded in 2015 by an israeli by the name of Gabriel Rebayev, some of the most successful businesses has used Final Projects to promote their business online since then.
        </p>
      </div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase text-white">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <Link to="/" className="footer-links">Home</Link>
          </li>
          <li>
            <Link to="/about" className="footer-links">About</Link>
          </li>
          {user && <React.Fragment>
            <li className="nav-item">
        <Link className="footer-links" to="/business-cards">Business Cards</Link>
      </li>
      <li className="nav-item">
        <Link className="footer-links" to="/favorites">Favorite Cards</Link>
      </li>
            </React.Fragment>}
          { user && user.biz && <React.Fragment>
            <li>
            <Link to="/my-cards" className="footer-links">My Cards</Link>
          </li>
        </React.Fragment>}
        </ul>
      </div>

    </div>

  </div>

<Copyright />

</footer>
        </React.Fragment> );
    }
}
 
export default Footer;