import React, { Component } from 'react';
import logo from '../../logo-blue.svg';
// import logOut  from './/logout-button-blue-hi.png';
import '../../App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import Navbar from '../../commonComponents/navbar';
import { browserHistory } from 'react-router';
// import AddTodoItem from '../addTodoItem';
// import AboutUs from '../aboutUs';
const Dashboard = withRouter(class Dashboard extends Component {
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
      <div className="App">
        <Navbar props={this.props}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="logOutButton" onClick={(e) => this.logOut(e)}>
            Log Out
         </button>
          <h1 className="App-title">Welcome to myStake Tech Stack</h1>

        </header>
        
        {/*<Switch>
          <Route path="/MystakeFrontPage/addTodoItem" component={AddTodoItem} />
          <Route path="/MystakeFrontPage/about" component={AboutUs} />
        </Switch>*/}
      </div>
    );
  }
})

const Header = () => (
    <Switch>
        <Route path="/MystakeFrontPage" component={Dashboard} />
    </Switch>
)

// const mapStateToProps = state => ({
//   credentials: state.signupReducer.credentials,
// })

export default compose(withRouter)(Header);