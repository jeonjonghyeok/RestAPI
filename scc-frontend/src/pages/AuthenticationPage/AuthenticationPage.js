// AUTHENTICATION PAGE

// REACT IMPORTS
import React, { Component } from 'react';
// CUSTOM COMPONENT IMPORTS
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register'
// STYLESHEET
import './AuthenticationPage.css';
// REDUX IMPORTS
import {connect} from 'react-redux';

class AuthenticationPage extends Component {

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            console.log("AUTHENTICATED")
            window.location.replace('/');
        }
    }

    render() {
        return (
            <div className='authMain'>
                <Login />
                <Register />
            </div>
        );
    }

}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps)(AuthenticationPage);
