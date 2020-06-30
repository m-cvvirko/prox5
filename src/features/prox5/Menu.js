import React from 'react';
import './Menu.css'

const avatar = {
    fontWeight: 800,
    fontFamily: 'Avenir+Next',
};

export const Menu = () => {
    return (
        <>
        <div className="hay-avatar">
            <span className="viktor" style={avatar}>Viktor</span>
        </div>
        <div className="menu">
            <div style={{width:'inherit'}}>
                <div className="avater-icon"></div>
            </div>
            <div className="menu-item" style={{top:'43px'}}>
                <div className="start">Start</div>
            </div>
            <div className="menu-item" style={{top:'60px'}}>
                <div className="your-cart">Your Cart</div>
            </div>
            <div className="menu-item" style={{top:'78px'}}>
                <div className="favourites">Favourites</div>
            </div>
            <div className="menu-item" style={{top:'98px'}}>
                <div className="your-orders">Your Orders</div>
            </div>
            <div className="divider" style={{top:'142px'}}></div>
            <div className="menu-item" style={{top:'190px'}}>
                <div className="sign-out">Sign Out</div>
            </div>
        </div>
        </>
    );
};

// export default Menu;