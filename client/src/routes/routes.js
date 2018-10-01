import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Router, browserHistory} from 'react-router';
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
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignUpPage} />
                    <Route path="/MystakeFrontPage" component={Dashboard} />
                    <Route path="/loginPage" component={LoginPage} />
                    <Route path="/user/search" component={FrontPage} />
                    <Route component={FrontPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}