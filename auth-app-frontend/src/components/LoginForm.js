import React from 'react';
import {Redirect} from 'react-router-dom';

const LoginForm = ({handleLogin, user}) => {
  if (user) {
    return (
      <Redirect to='/search'/>
    )
  } else {
    return (
      <div id='Login-Form'>
        <form className='form' onSubmit={handleLogin}>
          <p><input type="text" placeholder="Username" id="username"/></p>
          <p><input type="password" placeholder="Password" id="password"/></p>
          <p><input type="submit" value="Log In"/></p>
        </form>
      </div>
    )
  }

}

export default LoginForm;
