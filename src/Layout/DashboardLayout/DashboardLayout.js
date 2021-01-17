import React from 'react';
import './dashboard.scss';

import { Header, Footer, Sidebar } from '../../components/View';

function DashboardLayout({ children, ...rest }) {
    
    return (
        <div className="dashboard_wrap">
            <div className="dashboard_header">
                <Header />
            </div>
            <div className="dashboard_layout">
                <div className="dashboard_sidebar">
                    <Sidebar />
                </div>
                <div className="dashboard_body">
                    {children}
                </div>
            </div>
            <div className="dashboard_footer">
                <Footer />
            </div>
        </div>
    )
}

export default DashboardLayout;
