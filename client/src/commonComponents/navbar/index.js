import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
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
        <div className="navbar">
            <ul>
                <li><Link to={'/MystakeFrontPage'}>Home</Link></li>
                <li><Link to={'/addTodoItem'}>Add Todo Item</Link></li>
                <li><Link to={'/about'}>About Us</Link></li>
            </ul>
        </div>
    );
  }
}

export default Navbar;