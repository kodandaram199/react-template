/**
 * Created by kodanda_rama on 7/7/17.
 */
import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
    return(
        <nav className="navbar navbar-default navbar-fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/home" className="navbar-brand spacing">Hello World</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li className="transparent-button"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;