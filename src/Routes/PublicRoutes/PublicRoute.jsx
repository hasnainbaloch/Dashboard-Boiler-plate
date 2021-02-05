import React from "react";
import { Redirect, Route } from "react-router-dom";
import { LandingLayout } from "../../layout";

const PublictRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isLogin") ? (
          <Redirect to="/dashboard" />
        ) : rest.layout ? (
          // Landing Layout
          <LandingLayout>
            <Component {...props} />
          </LandingLayout>
        ) : (
          // without layout
          <Component {...props} />
        )
      }
    />
  );
};

export default PublictRoute;
