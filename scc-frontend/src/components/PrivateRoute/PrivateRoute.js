// PRIVATE ROUTE

// REACT IMPORTS
import React, { Component } from 'react'
// REDUX IMPORTS
import { connect } from 'react-redux';
// ROUTER IMPORTS
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/auth"
                        }}
                    />
                )
        }
    />
);


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps)(PrivateRoute);

