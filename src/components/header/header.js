import React from 'react';
import { Link } from 'react-router-dom';
import upcomingIcon from "../../assest/up-icon.png"

const Header = ()=> {
	return(
		<nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="nav navbar-nav ml-auto" >
            <Link class="nav-item nav-link active" href="#">
              <small>Upcoming <img src={upcomingIcon} /></small>
              Live Consultation
            </Link>
            <Link class="nav-item nav-link" to="/buy-plan">Buy Plans</Link>
            <Link class="nav-item nav-link" to="/view-plans">View Plans</Link>
            <Link class="nav-item nav-link login-btn" to="/login">Log In</Link>
          </div>
        </div>
      </div>
  	</nav>	
	)
}

export default Header