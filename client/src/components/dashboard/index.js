import React, { Component } from 'react';
import logo from '../../logo-blue.svg';
// import logOut  from './/logout-button-blue-hi.png';
import '../../App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from '../../commonComponents/navbar';
import { browserHistory, withRouter } from 'react-router';
import AddTodoItem from '../addTodoItem';
import AboutUs from '../aboutUs';
import Header from '../../commonComponents/header'
const Dashboard = class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responce: '',
      personName: '',
      age: '',
      responseAge: '',
    };
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    fetch(
      `http://localhost:3000/checkUserIsLoggedIn`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((res) => {
        console.log('!!!isLoggedInisLoggedIn', res);
        if (res && res.isLoggedIn === null) {
          this.props.history.push('/');
        }
      })
      .catch((error) => {
        console.log('@@errorerror', error);
      });
  }

  logOut() {
    fetch(
      `http://localhost:3000/logout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((res) => {
        console.log('!!!', res);
          this.props.history.push('/');
      })
      .catch((error) => {
        console.log('@@errorerror', error);
      });
  }

  render() {
    const response = this.state.response;

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/MystakeFrontPage/addTodoItem" component={AddTodoItem} />
          <Route path="/MystakeFrontPage/about" component={AboutUs} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;