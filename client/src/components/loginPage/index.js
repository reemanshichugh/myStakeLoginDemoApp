import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import '../../App.css';
import logo from '../../logo-blue.svg';
import { Button } from 'reactstrap';
import { ValidationUserInput } from '../../Validations/validations'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { createSelector } from 'reselect';
import { signupAction } from '../../actions/signupAction'
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chkbox: true,
            password: '',
            repeatPassword: '',
            email: '',
        };
        this.onUpdate = this.onUpdate.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
        this.onCancelForm = this.onCancelForm.bind(this);
    }

    onUpdate(key, value) {
        this.setState({ [key]: value }, function () {
        });
    }

    OnSubmit() {
        if (!ValidationUserInput(this.state,'login')) {
            return false;
        } else {
            
            const payload = {
                email: this.state.email,
                password: this.state.password
            };
            this.props.signupAction(payload);
            fetch(
                `http://localhost:3000/checkUserDetails`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log('!!!', res);
                    if(res && res.message === 'User Exists'){
                        browserHistory.push('/MystakeFrontPage');

                    } else if(res && res.message === 'No User'){
                        alert('User with this email and password does not exists', 'danger');
                        return false;
                    }
                })
                .catch((error) => {
                    console.log('@@errorerror', error);
                });
        }
    }


    onCancelForm() {
        this.setState({
            email: '',
            password: '',
            repeatPassword: '',
        })
    }

    render() {
        return (
            <div>
                <header className="headerOfSignUp">
                    <img src={logo} className="App-logo" alt="logo" />

                </header>
                <div className="signUpDiv">
                    <Card className="GridcolSize2 newRegisterPage disabled-card">
                        <CardBody>
                            <h2 style={{ textAlign: "center" }}>Log In</h2>
                        </CardBody>
                    </Card>
                    <div style={{ margin: "30px" }}>
                        <form >
                            <div className="container">
                                <label><b>Email</b></label>
                                <input className="inputField" type="text"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(e) => this.onUpdate('email', e.currentTarget.value)}
                                    required />
                                <label><b>Password</b></label>
                                <input className="inputField" type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={(e) => this.onUpdate('password', e.currentTarget.value)}
                                    required />
                                <div>
                                    <Button className="submitOrCancel" style={{ backgroundColor: "#56b75b" }} onClick={() => this.OnSubmit()}>
                                        Log In
                                        </Button>
                                    <Button className="submitOrCancel" style={{ backgroundColor: "red" }} onClick={() => this.onCancelForm()}>
                                        Cancel
                                        </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    signupAction: (data) => dispatch(signupAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
