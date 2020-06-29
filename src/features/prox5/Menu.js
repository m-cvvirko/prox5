import React from 'react';

export const Menu = () => {
    return (
        <>
        <div className="hay-avatar">
            <span className="viktor">Viktor</span>
        </div>
        <div className="menu">
            <div style={{width:'inherit'}}>
                <div className="avater-icon"></div>
            </div>
            <div className="menu-item selected-item-bg" style={{top:'43px'}}>
                <div className="start selected-item">Start</div>
            </div>
            {/* <div className="menu-item" style="top:66px"> */}
            <div className="menu-item" style={{top:'66px'}}>
                <div className="your-cart">Your Cart</div>
            </div>
            <div className="menu-item" style={{top:'90px'}}>
                <div className="favourites">Favourites</div>
            </div>
            <div className="menu-item" style={{top:'115px'}}>
                <div className="your-orders">Your Orders</div>
            </div>
            <div className="divider" style={{top:'171px'}}></div>
            <div className="menu-item" style={{top:'226px'}}>
                <div className="sign-out">Sign Out</div>
            </div>
        </div>
        </>
    );
};

// export default Menu;