import React, { Component } from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
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

  handleLogOut = (event) => {
    localStorage.removeItem('jwt')
    this.setState({user: false})
  }

  //this.props.history.push('/url')

  render() {
    return (
      <div className="App">
        <NavBar handleLogOut={this.handleLogOut}/>
        <h1>Welcome to TopNotch Music</h1>
        <Switch>
          <Route exact path='/login'
            render={props => {
              return <LoginForm handleLogin={this.handleLogin} user={this.state.user}/>
            }} />
          <Route exact path='/search' render={props => {
              return <div><SearchBar user={this.state.user}/> <AlbumsContainer/></div>
            }}/>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: {...state.user}, ...state.albums}
}

export default withRouter(connect(mapStateToProps, {addUser, addAlbums})(App));
