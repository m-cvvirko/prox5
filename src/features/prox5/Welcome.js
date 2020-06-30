import React from 'react';
import './Welcome.css'

const start = {
    fontWeight: 500,
    fontFamily: 'Avenir+Next',
};

export const Welcome = () => {
    return (
        <>
        <input type="checkbox" id="btnCtrl" />
        <label className="btn p-0" htmlFor="btnCtrl">
        {/* <div className="phone-01 open-menu"> */}
        <section className="welcome">
        <div className="phone-01">
            <div className="phone-01">
                <div className="phone-01">
                    <div className="phone-01">
                        <div className="title-bar">
                            <div className="avatar">
                                <div className="rectangle"></div>
                                <div className="rectangle-copy-5"></div>
                                <div className="rectangle-copy-6"></div>
                                <div className="start" style={start}>START</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </label>
        </>
    );
};

// export default Welcome;