import React from 'react';
import './landing.scss';
import { Footer } from '../../components/View';

import { Link } from 'react-router-dom';

function LandingLayout({ children, ...rest }) {
    return (
        <>
            <div className="landing_header">
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
            <div className="landing_layout">
                <div className="landing_body">
                    {children}
                </div>
            </div>
            <div className="landing_footer">
                <Footer />
            </div>
        </>
    )
}

export default LandingLayout;
