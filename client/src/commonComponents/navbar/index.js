import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        route: '/MystakeFrontPage',
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(e, link) {
      e.preventDefault();
        this.props.props.history.push(link)
    //   this.setState({
    //       route: link
    //   })
  }

  render() {
    console.log(this.props, 'props');
    return (
        <div className="navbar">
            <ul>
                <li><a onClick={(e) => this.goToPage(e, '/MystakeFrontPage')}>Home</a></li>
                <li><a onClick={(e) => this.goToPage(e, '/MystakeFrontPage/addTodoItem')}>Add Todo Item</a></li>
                <li><a onClick={(e) => this.goToPage(e, '/MystakeFrontPage/about')}>About Us</a></li>
            </ul>
        </div>
    );
  }
}

export default Navbar;