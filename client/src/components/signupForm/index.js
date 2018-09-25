import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import '../../App.css';
import logo from '../../logo-blue.svg';
import { Button } from 'reactstrap';
import { ValidationUserInput } from '../../Validations/validations'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { signupAction } from '../../actions/signupAction'
class SignUpPage extends Component {

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
        if (!ValidationUserInput(this.state, 'signup')) {
            return false;
        } else {

            const payload = {
                email: this.state.email,
                password: this.state.password
            };
            this.props.signupAction(payload);
            fetch(
                `http://localhost:3000/signUpDetails`,
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
                    browserHistory.push('/MystakeFrontPage');
                })
                .catch((error) => {
                    console.log('@@', error);
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
                <div className="loginDiv">
                    Already have an account? <a href='/loginPage' style={{ color: "dodgerblue" }}>Click here</a>
                </div>
                <div className="signUpDiv">
                    <Card className="GridcolSize2 newRegisterPage disabled-card">
                        <CardBody>
                            <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                            <p className="pTag">Please fill in this form to create an account.</p>
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
                                <label><b>Repeat Password</b></label>
                                <input className="inputField" type="password"
                                    placeholder="Enter password"
                                    name="repeatPassword"
                                    value={this.state.repeatPassword}
                                    onChange={(e) => this.onUpdate('repeatPassword', e.currentTarget.value)}
                                    required />
                                <label><b style={{ marginLeft: "20px", marginBottom: "5px" }}>Remember me</b>
                                    <input style={{ float: "left" }} type="checkbox"
                                        defaultChecked={this.state.chkbox}
                                        name="remember"
                                    />
                                </label>


                                <p> By creating an account you agree to our <a href="https://www.mystake.io/" style={{ color: "dodgerblue" }}> Terms and Privacy </a> .</p>
                                <div>
                                    <Button className="submitOrCancel" style={{ backgroundColor: "#56b75b" }} onClick={() => this.OnSubmit()}>
                                        Sign Up
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
// const mapActionsToProps = {
//     simpleAction: simpleAction
// }
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

// const mapStateToProps = createSelector();

//    const mapDispatchToProps = {
//     simpleAction,
//    };


//    export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//    )(SignUpPage);