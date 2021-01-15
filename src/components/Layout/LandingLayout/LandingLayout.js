import React from 'react';
import './LandingLayout.css';
import { Footer } from '../../View';

import { Link } from 'react-router-dom';

function LandingLayout({ children, ...rest }) {
    return (
        <>
            <div className="header">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="layout">
                <div className="body">
                    {children}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default LandingLayout;
