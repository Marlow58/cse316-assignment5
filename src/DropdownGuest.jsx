// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react'

// Dropdown will be available starting "MEDIUM" screen size (as stated in Bootstrap)
// MENU------[SIGN IN][REGISTER]-[USER BUTTON]
// ------------------------------Click to Open
// 
// ------------------------------[Register!]
// ------------------------------if you are registered
// ------------------------------[Sign in!]
// ------------------------------USERMODE BUTTONS
// ------------------------------[USER NEWS]
// ------------------------------[LIST CHARACTER]
// ------------------------------[LIST UNIVERSE] <- May need to study about relationship between universe and character once frontend finishes
// ------------------------------<br />
// ------------------------------[LIST ART]
// ------------------------------[LIST WRITING]
// ------------------------------[]
// IF you are not logged in, GUEST mode applies
    // User button is replaced w/ "Sign In" button
    // Sidebar cannot expand as User button is required for sidebar activation
// IF you are logged in, USER mode applies
    // User sidebar can be activated by 
// React states: How can I make sure the user is "logged in" or not?
// Example from https://getbootstrap.com/docs/5.3/components/navbar/#offcanvas
const DropdownGuest = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            {/* Project is unnamed so far, so I call it Assignment 5 for the mock-up */}
            <a className="navbar-brand" href="#">Assignment 5</a>
            {/* Should be replaced by the user icon at the end */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Your Profile</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* Guest Mode */}
            <div className="offcanvas-body">
                {/* Register */}
                <form>
                    {/* Name input */}
                    <label for="fname">Username:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    {/* Password input */}
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label><br />
                    <input type="password" class="form-control" id="inputPassword" /><br />
                    {/* Email button */}
                    <button className="btn btn-primary">Continue with Email</button>
                </form>
                {/* Sign in */}
                Already registered?
                <button className="btn btn-outline-primary">Sign In</button>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default DropdownGuest