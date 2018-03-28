import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';

class App extends Component {
  
  state = {
    anything: []
  }
  
  handleLogin = (event) => {
    event.preventDefault();
    let userName = event.target.username.value
    let passWord = event.target.password.value
    // debugger
    // fetch(`http://localhost:3000/api/v1/users`)
    // .then(res => res.json())
    // .then(console.log)
    fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password_digest: passWord
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(console.log)
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi Im the app!</h1>
        <LoginForm handleLogin={this.handleLogin}/>
        <p>{this.state.anything}</p>
      </div>
    );
  }
}

export default App;
