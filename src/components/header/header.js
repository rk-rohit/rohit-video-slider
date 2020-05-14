import React from 'react';
import { Link } from 'react-router-dom';
import upcomingIcon from "../../assest/up-icon.png"

const Header = ()=> {
	return(
		<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav navbar-nav ml-auto" >
            <Link className="nav-item nav-link active" to="/">
              <small>Upcoming <img src={upcomingIcon} /></small>
              Live Consultation
            </Link>
            <Link className="nav-item nav-link" to="/buy-plan">Buy Plans</Link>
            <Link className="nav-item nav-link" to="/view-plans">View Plans</Link>
            <Link className="nav-item nav-link login-btn" to="/login">Log In</Link>
          </div>
        </div>
      </div>
  	</nav>	
	)
}

export default Header