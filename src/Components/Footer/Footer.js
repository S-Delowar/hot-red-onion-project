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
                        <ul class="nav flex-column ">
                            <li class="nav-item">
                                <a class="nav-link " href="#">About online food</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Read our blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sign up to deliver</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Add your restaurant</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul class="nav flex-column ">
                            <li class="nav-item">
                                <a class="nav-link " href="#">Get help</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Read FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">View all cities</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Restaurants near me</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex text-white">
                    <div className="col-8 copyright">
                        <small>Copyright © 2020 Online Food</small>
                    </div>
                    <div className="col-4">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Privacy Policy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Terms of use</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;