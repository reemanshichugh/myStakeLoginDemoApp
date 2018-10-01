import React, { Component } from 'react';
import logo from '../../logo-blue.svg';
// import logOut  from './/logout-button-blue-hi.png';
import '../../App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import Navbar from '../../commonComponents/navbar';
import { browserHistory } from 'react-router';
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        {/* <h1 className="App-title">AboutUs</h1> */}
      </div>
    );
  }
}

export default AboutUs;