import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';

import AuthAdapter from '../api/AuthAdapter'

class App extends Component {
  
  
  handleLogin = (event) => {
    event.preventDefault();
    let userName = event.target.username.value
    let passWord = event.target.password.value
    AuthAdapter.login({"username": userName, "password": passWord})
    .then(user => {
        if (!user.error) {
          localStorage.setItem('jwt', user.jwt)

        } else {
          console.log({ error: user.error})
        }
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Music App</h1>
        <LoginForm handleLogin={this.handleLogin}/>
        <AlbumsContainer />
      </div>
    );
  }
}

export default App;
