import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';
import SearchBar from './SearchBar'
import SingleAlbumContainer from './SingleAlbumContainer'
import AuthAdapter from '../api/AuthAdapter'
import {connect} from 'react-redux'
import {addUser} from '../actions/users'
import {addAlbums} from '../actions/albums'

class App extends Component {

  state = {
    user: false
  }

  /* Check to see if there is a token in local storage, meaning someone is still logged in
  If there is, grab their information and then add them to the store */
  componentDidMount(){
    if (localStorage.getItem('jwt') !== null) {
      this.setState({user: true})
      AuthAdapter.current_user().then(res => this.props.addUser(res))
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    let body = {username: event.target.username.value, password: event.target.password.value}

    /* If the user us authenticated, add them to the store and put the returned JWT in localStorage
    If not, console.log the error */
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

  /* Remove token from localStore to log out */
  handleLogOut = (event) => {
    localStorage.removeItem('jwt')
    this.setState({user: false})
  }

  render() {
    return (
      <div className="App">
        <NavBar handleLogOut={this.handleLogOut}/>
        <h1>Welcome to TopNotch Music</h1>
        <Switch>
          <Route exact path='/'
            render={props => {
              return <LoginForm handleLogin={this.handleLogin} user={this.state.user}/>
            }} />
          <Route exact path='/search' render={props => {
              return <div><SearchBar user={this.state.user}/> <AlbumsContainer/></div>
            }}/>
          <Route exact path='/albums/:name' component={SingleAlbumContainer}/>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: {...state.user}, ...state.albums}
}

export default withRouter(connect(mapStateToProps, {addUser, addAlbums})(App));
