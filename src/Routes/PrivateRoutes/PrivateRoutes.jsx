import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DashboardLayout } from "../../layout";

function PrivateRoutes({ component: Component, socket, ...rest }) {
    return (
        <Route {...rest} render={ props => (
            localStorage.getItem('isLogin') ?
                // Dashboard Layout
                <DashboardLayout> 
                    <Component {...props} socket={socket}/>
                </DashboardLayout>
                : <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoutes;
