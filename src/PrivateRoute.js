// PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Assuming your JWT token is stored in local storage under the key "jwtToken"
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />
            }
        />
    );
};

export default PrivateRoute;
