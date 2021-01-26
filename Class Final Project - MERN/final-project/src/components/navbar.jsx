import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {  }
    render() { 
      const { user } = this.props;
        return ( <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
  <Link className="navbar-brand" to="/"><img src="/images/brand.png" alt="final project" width="160" height="60" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/about">About</Link>
      </li>
      { user && user.biz && <React.Fragment>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/my-cards">My Cards</Link>
      </li>
        </React.Fragment>}
        { user && 
        <React.Fragment>
          <li className="nav-item">
        <Link className="nav-link text-white" to="/business-cards">Business Cards</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/favorites">Favorite Cards</Link>
      </li>
        </React.Fragment>
        }
    </ul>
  </div>
  </div>
</nav>
        </React.Fragment> );
    }
}
 
export default Navbar;