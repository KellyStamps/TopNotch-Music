import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';
import AuthAdapter from '../api/AuthAdapter'

class App extends Component {
  
  state = {
    user: false
  }
  
  //Check to see if there is a token in local storage, meaning someone is still logged in 
  componentDidMount(){
    if (localStorage.getItem('jwt') !== null) {
      this.setState({user: true})
    }
  }
  
  handleLogin = (event) => {
    event.preventDefault();
    let userName = event.target.username.value
    let passWord = event.target.password.value

    fetch(`http://localhost:3000/api/v1/auth`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
      body: JSON.stringify({
        username: userName,
        password: passWord
      })
    })
    .then(res => res.json())
    .then(user => {
        if (!user.error) {
          localStorage.setItem('jwt', user.jwt)
          this.setState({user: true})
        } else {
          console.log({ error: user.error})
        }
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Music App</h1>
        {this.state.user ? <div><AlbumsContainer /></div> : <LoginForm handleLogin={this.handleLogin}/>}
      </div>
    );
  }
}

export default App;
