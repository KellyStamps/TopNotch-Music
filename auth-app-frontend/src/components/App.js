import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';
import AuthAdapter from '../api/AuthAdapter'

class App extends Component {
  
  state = {
    user: false
  }
  
  handleLogin = (event) => {
    event.preventDefault();
    let userName = event.target.username.value
    let passWord = event.target.password.value
    AuthAdapter.login({"username": userName, "password": passWord})
    .then(user => {
        if (!user.error) {
          localStorage.setItem('jwt', user.jwt),
          this.setState({user: true})
        } else {
          console.log({ error: user.error})
        }
      })
  }
  
  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <h1>Welcome to the Music App</h1>
        {this.state.user ? <div><h1>Welcome!</h1><AlbumsContainer /></div> : <LoginForm handleLogin={this.handleLogin}/>}
      </div>
    );
  }
}

export default App;
