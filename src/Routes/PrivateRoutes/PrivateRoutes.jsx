import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DashboardLayout } from "../../Layout";

function PrivateRoutes({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('isLogin') ?
                // Dashboard Layout
                <DashboardLayout> 
                    <Component {...props} />
                </DashboardLayout>
                : <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoutes;
