import React, { Component } from 'react';

export default class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(key, value) {
        this.setState({ [key]: value });
    }

    onFormSubmit() {
        debugger;
        const payload = {
            id: this.state.id,
        };
        fetch(
            `http://localhost:3000/user/search`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then((res) => res.json())
            .then((res) => {
                console.log('!!!1111', res);
                if(res && res.message === 'User Exists'){
                    console.log('!!!1111', res);
                }
              if(res === 'User does not exist'){
                console.log('!!!', res);
                alert(res.message);
              } else {
                console.log('!!!', res);
                alert(res.message);
              }
              
            })
            .catch((error) => {
              console.log('@@', error);
            });
    }

    render() {
        return (
            <div className = "searchUser">
                <h1> Search Users</h1>
                <form className="form-inline">
                    <div>
                        <input type="text"
                            placeholder="Type id here"
                            onChange={(e) => this.onUpdate('id', e.currentTarget.value)}
                            name="id"
                            value={this.state.id}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="search"
                    onClick = {(e) => this.onFormSubmit()}></input>
                </form>
            </div>
        );
    }
}
