import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import '../../styles/components/navigationBar.css'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage() {
    browserHistory.push('')
  }

  render() {
    return (
      <div className="sideNavbar">
        <nav>
          <ul class="navbar-nav">
            <li>
              <a class="nav-link" href="/MyStakeFrontPage">Home</a>
            </li>
            <li>
              <a class="nav-link" href="/addTodoItem">Add todo item</a>
            </li>
            <li>
              <a class="nav-link" href="/about">About us</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;