import React from 'react';
import './Footer.css';
import logo from '../../Image/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container ">
                <div className="d-flex footer-top-part">
                    <div className="col-6">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-3">
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <a className="nav-link " href="#">About online food</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Read our blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign up to deliver</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add your restaurant</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <a className="nav-link " href="#">Get help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Read FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">View all cities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Restaurants near me</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex text-white">
                    <div className="col-8 copyright">
                        <small>Copyright © 2020 Online Food</small>
                    </div>
                    <div className="col-4">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Terms of use</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;