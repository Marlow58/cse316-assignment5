// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// The design of this page will be
// TOP DROPDOWN - For you
// MIDDLE DROPDOWN - For others
// The second dropdown is about accessing the user of a character, if you are visiting someone else's character.
// Maybe the world version could be added, but only if this project has progressed to a sufficient point
// USER VERSION
// Type:USER <- Other types include WORLD and HELP. Username is given
// [USER NEWS]
// [LIST CHARACTER]
// [LIST UNIVERSE] <- May need to study about relationship between universe and character once frontend finishes
// <br />
// [LIST ART]
// [LIST WRITING]
// No Profile/Preference/Sign Out features here

// React states: How can I make sure the user is "logged in" or not?
// Example from https://getbootstrap.com/docs/5.3/components/navbar/#offcanvas
// This one would be brighter, also no dropdown but instead a left sidebar, named it just for consistency
const DropdownOwner = () => {
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

            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {/* List the bulletins/characters/universes */}
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">List Bulletins</a>
                        <a className="nav-link active" aria-current="page" href="#">List Characters</a>
                        <a className="nav-link active" aria-current="page" href="#">List Universes</a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    {/* List drawings and writings irrespective of universe */}
                    <li className="nav-item">
                        <a className="nav-link" href="#">List Drawings</a>
                        <a className="nav-link" href="#">List Writings</a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    {/* Other actions with your profile */}
                    <li className="dropdown-menu dropdown-menu-dark">
                        {/* Chose to do 3 for the sake of rule of 3 */}
                        <a className="dropdown-item" href="#">Settings</a>
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Sign out</a>
                    </li>
                </ul>
                {/* Not sure if I need a search button */}
                {/* Handy, but can also be used for doxxing or other bad faith actions */}
                {/* <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-success" type="submit">Search</button>
                </form> */}
            </div>
            </div>
        </div>
    </nav>
  )
}

export default DropdownOwner