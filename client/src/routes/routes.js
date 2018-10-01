import React from 'react';
import { Route } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
// import SignUpPage from './SignUp';
import FrontPage from '../components/frontPage';
// import App from './App';
import SignUpPage from '../components/signupForm';
import LoginPage from '../components/loginPage';
import Dashboard from '../components/dashboard';
import AddTodoItem from '../components/addTodoItem';
import AboutUs from '../components/aboutUs';
export default class Routes extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={SignUpPage} />
                <Route path="/MystakeFrontPage" component={Dashboard}>
                    <Route path="/addTodoItem" component={AddTodoItem} />
                    <Route path="/about" component={AboutUs} />
                </Route>
                <Route path="/loginPage" component={LoginPage} />
                <Route path="/user/search" component={FrontPage} />
            </Router>
        );
    }
}