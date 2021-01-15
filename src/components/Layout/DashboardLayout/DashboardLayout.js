import React from 'react';
import './DashboardLayout.css';

import { Header, Footer, Sidebar } from '../../View';

function DashboardLayout({ children, ...rest }) {
    
    return (
        <>
            <div className="header1">
                <Header />
            </div>
            <div className="layout">
                <div className="sidebar">
                    <Sidebar />
                </div>
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

export default DashboardLayout;
