import React, { useState } from 'react';
import './Header.css';


const Header = () => {
    const [menu, setMenu] = useState("");
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Order Your Favrourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertiese. Our main goal is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
                <button>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>View Menu</a>
                </button>
            </div>
        </div>
    )
}

export default Header
