// LOGIN

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Login.css'
// REDUX IMPORTS
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const user = {
          email: `${email.value}`,
          password: `${password.value}`,
        };
        this.props.login(user);
    }

    render() {
        return (
            <div className="LoginFULL">
                <form onSubmit={this.handleLogin}>
                    <center><h2>LOGIN</h2></center>
                    <table>
                        <tr>
                            <td>E-MAIL:</td>
                            <td>
                                <input type="text" name="email" id="email" />
                            </td>
                        </tr>
                        <tr>
                            <td>PASSWORD:</td>
                            <td>
                                <input type="password" name="password" id="password" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ "text-align": "center" }}>
                                <input type="submit" value="LOGIN" className="loginBttn" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login })(Login);