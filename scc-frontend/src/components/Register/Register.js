// REGISTER

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Register.css'
// REDUX IMPORTS
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';

class Register extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, SSN } = e.target.elements;
    const newUser = {
      email: `${email.value}`,
      password: `${password.value}`,
      name: `${name.value}`,
      SSN: `${SSN.value}`
    };
    this.props.register(newUser);
  }

  render() {
    return (
      <div className="RegisterFULL">
        <form onSubmit={this.handleSubmit}>
          <center><h2>회원가입</h2></center>
          <table>
            <tr>
              <td>이름:</td>
              <td>
                <input type="text" name="name" id="name" />
              </td>
            </tr>
            <tr>
              <td>EMAIL:</td>
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
              <td>주민번호:</td>
              <td>
                <input type="number" name="SSN" id="SSN" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ "text-align": "center" }}>
                <input type="submit" value="회원가입" className="registerBttn" />
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

export default connect(mapStateToProps, { register })(Register);