/**
 * Created by kodanda_rama on 7/7/17.
 */
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return(
        <div className="container">
            <div className="row top-space container-padding" style={{marginBottom: "2%"}}>
                <hr/>
                <div className="row">
                    <div className="col-md-9">
                        &copy; 2017 Company
                    </div>
                    <div className="col-md-1">
                        <Link to="/terms" >Terms</Link>
                    </div>
                    <div className="col-md-1">
                        <Link to="/partner" >Partner</Link>
                    </div>
                    <div className="col-md-1">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;