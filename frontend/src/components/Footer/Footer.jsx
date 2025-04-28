import './Footer.css';
import { assets } from '../../assets/assets';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Footer = () => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling to the top
        });
    };

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to='/'>
                        <img src={assets.logo_white} alt="" className='logo_white' />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum facilis natus libero asperiores itaque aliquid nesciunt ipsam tenetur magni sit, unde assumenda similique sunt error ab excepturi iure fugiat?</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                        <a href="https://www.x.com/"><img src={assets.twitter_icon} alt="" /></a>
                        <a href="https://www.linkedin.com/"><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>
                            <Link
                                to='/'
                                onClick={() => {
                                    setMenu("home");
                                    scrollToTop();  // Scroll to top on click
                                }}>
                                Home
                            </Link>
                        </li>
                        <li>  
                            <Link to='/about-us'
                            onClick={()=>{
                                scrollToTop();
                            }}>About Us</Link>
                        </li>

                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+08663452213</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024</p>
        </div>
    );
};

export default Footer;
