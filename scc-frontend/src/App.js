// APP
// DESC:    Entry point

// REACT IMPORTS
import React, { Component } from 'react'
// ROUTER IMPORTS
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
// NAVBAR IMPORT
import Navbar from './components/Navbar/navbar';
// PAGE IMPORTS
import HomePage from './pages/HomePage/HomePage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Dashboard from './pages/Dashboard/Dashboard';
// REDUX IMPORTS
import { store } from "./store";
import { loadUser } from "./actions/authActions";
// AXIOS IMPORT
import axios from 'axios';
axios.defaults.baseURL = 'http://34.64.168.102:5000';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/auth' component={AuthenticationPage} />
          <PrivateRoute exact path='/dashboard/:tab' component={Dashboard} />
        </Router>
      </div>
    );
  }

}

export default App;