import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';
import SearchBar from './SearchBar'
import AuthAdapter from '../api/AuthAdapter'
import {connect} from 'react-redux'
import {addUser} from '../actions/users'

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
    let body = {username: event.target.username.value, password: event.target.password.value}

    AuthAdapter.login(body).then(user => {
        if (!user.error) {
          this.props.addUser({username: user.username, id: user.id})
          localStorage.setItem('jwt', user.jwt)
          this.setState({user: true})
        } else {
          console.log({ error: user.error})
        }
      })
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="App">
        <h1>Welcome to the Music App</h1>
        {this.state.user ? <div><SearchBar/></div> : <LoginForm handleLogin={this.handleLogin}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.user}
}

export default connect(mapStateToProps, {addUser})(App);
