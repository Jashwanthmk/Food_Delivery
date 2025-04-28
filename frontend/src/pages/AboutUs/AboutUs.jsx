import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-header">
                <img src={assets.company_banner} alt="About Us Banner" className="about-us-banner" />
                <h1>About Us</h1>
            </div>
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>Who We Are</h2>
                    <p>
                        Welcome to [Your Company Name], a leading provider of [Your Company’s Services/Products]. 
                        Our company was founded in [Year] with the vision to deliver [purpose or mission of the company].
                        We specialize in [mention the fields or areas you operate in].
                    </p>

                    <h2>Our Mission</h2>
                    <p>
                        At [Your Company Name], we aim to revolutionize [mention the specific industry or area you are working in] by
                        providing [list products/services]. Our mission is to offer exceptional value to our clients by delivering 
                        top-notch quality, innovation, and customer satisfaction. We strive to be leaders in the [industry] industry.
                    </p>

                    <h2>Our Values</h2>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Customer Centricity</li>
                        <li>Excellence</li>
                        <li>Teamwork</li>
                    </ul>
                    
                    <h2>Our Team</h2>
                    <p>
                        Our team consists of passionate professionals from various fields, including [mention departments or skills].
                        Each member brings unique skills and ideas to help us grow and serve our customers better.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src={assets.team_photo} alt="Our Team" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
