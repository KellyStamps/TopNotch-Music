import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';
import SearchBar from './SearchBar'
import AuthAdapter from '../api/AuthAdapter'
import {connect} from 'react-redux'
import {addUser} from '../actions/users'
import {addAlbums} from '../actions/albums'

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

  //this.props.history.push('/url')

  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Welcome to the Music App</h1>
        {this.state.user ? <div><SearchBar/><AlbumsContainer/></div> : <LoginForm handleLogin={this.handleLogin}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: {...state.user}, ...state.albums}
}

export default connect(mapStateToProps, {addUser, addAlbums})(App);
