import React, { Component } from 'react';
import logo from '../../logo-blue.svg';
// import logOut  from './/logout-button-blue-hi.png';
import '../../App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import Navbar from '../../commonComponents/navbar';
import { browserHistory } from 'react-router';


class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: true,
    };
    this.myFunction = this.myFunction.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.showTableFunc = this.showTableFunc.bind(this);
  }

  callApi = async () => {
    const response = await fetch('/sz');
    const body = await response.json();
    console.log(body, 'body');
    if (response.status !== 202) throw Error(body.message);
    // this.setState({ response: body.userFromRepo });
    return body;
  };


  showTableFunc(){
    this.setState({ showTable: !this.state.showTable });
  }

  // Function to check whether entered age is numeric or not
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }


  // Function to update values entered by user
  onUpdate(key, value) {
    this.setState({ [key]: value });
  }



  // Function to update values entered by user
  myFunction(e) {
    const isValidAge = this.isNumeric(this.state.age);
    if (!isValidAge) {
      alert("Please enter numbers in age");
      return;
    }
    if (this.state.age > 100) {
      alert("Please enter correct age");
      return;
    }
    const payload = {
      personName: this.state.personName,
      age: this.state.age
    };
    fetch(
      `http://localhost:3000/insertDetails`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ response: res.result.personName })
        this.setState({ responseAge: res.result.age })
        console.log('!!!', res);
      })
      .catch((error) => {
        console.log('@@', error);
      });
    this.setState({ personName: '', age: '' })
  }

  // Function to update user list if got a responce from server side
  componentDidUpdate() {
    this.callApi()
      .then(res => {
        if (this.state.response.length !== res.userFromRepo.length) {
          this.setState({ response: res.userFromRepo })
        }
      }).catch(err => console.log(err));
  }

  componentWillMount() {
    this.callApi()
      .then(res => this.setState({ response: res.userFromRepo }))
      .catch(err => console.log(err));
  }

  getAllUsers() {
    const response = this.state.response;
    if (response && response.length > 0) {
      return response.map((user) => {
        if (user.name && user.age) {
          return (
            <tr>
              <td style={{ textAlign: "left", padding: "8px" }} >{user.name}</td>
              <td style={{ textAlign: "left", padding: "8px" }} >{user.age}</td>
            </tr>
          )
        }
      })
    }
    else {
      return null;
    }
  }

  render() {
    const allUsers = this.getAllUsers();
    let buttonName = "Show Table";
    if(this.state.showTable){
      buttonName = "Hide Table";
    }
    return (
      <div className="App">
          <div className="pt-5 pb-3" style={{ width: "100%", maxWidth: "400px", margin: "auto" }} >
          <div className="row">
            <div className="col  text-left"><label>Enter person's name</label></div>
            <div className="col text-right">   <input type="text"
              // inputRef={(ref) => { this.firstName = ref; }}
              placeholder="Type name here"
              onChange={(e) => this.onUpdate('personName', e.currentTarget.value)}
              name="personName"
              value={this.state.personName}
            />
            </div>
          </div>
          <div className="row">
            <div className="col text-left"><label>Enter person's age</label></div>
            <div className="col text-right">   <input type="text"
              min='0'
              placeholder="Type age here"
              onChange={(e) => this.onUpdate('age', e.currentTarget.value)}
              name="age"
              value={this.state.age}
            />
            </div>
          </div>
        </div>


        <button className="btn btn-primary my-3" onClick={(e) => this.myFunction(e)} >
          Save
            </button>
            <button className="btn btn-secondary ml-3" onClick={(e) => this.showTableFunc(e)} >
          {buttonName}
            </button>
         <table width='600' cellspacing='0' cellpadding='0' border-spacing='0'> 
        {
          this.state.showTable && 
          <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }} >
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Person Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {allUsers}
            </tbody>
          </table>
        </div>
        }
        </table>
      </div>
    );
  }
}

export default AddTodoItem;