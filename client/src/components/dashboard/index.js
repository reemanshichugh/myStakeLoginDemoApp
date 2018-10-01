import React, { Component } from 'react';
import logo from '../../logo-blue.svg';
// import logOut  from './/logout-button-blue-hi.png';
import '../../App.css';
import { connect } from 'react-redux';
import Navbar from '../../commonComponents/navbar';
import { browserHistory } from 'react-router';
class Dashboard extends Component {
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

  logOut() {
    browserHistory.push('/');
  }

  render() {
    const response = this.state.response;
    return (
      <section>
        <div >
          <div className="App">
            <header className="App-header">
              <h3 class="userName">dfggbvfdcvg</h3>
              <img src={logo} className="App-logo" alt="logo" />
              <button className="logOutButton" onClick={(e) => this.logOut(e)}>
                Log Out
         </button>
              <h1 className="App-title">Welcome to myStake Tech Stack</h1>
              <Navbar />
            </header>
            <main>
              <section>
                <div className="container">

                </div>
              </section>
            </main>
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}



const mapStateToProps = state => ({
  credentials: state.signupReducer.credentials,
})

export default connect(mapStateToProps)(Dashboard);