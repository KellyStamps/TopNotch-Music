import React from 'react';

const LoginForm = ({handleLogin}) => {
  return (
    <div id='Login-Form'>
      <form onSubmit={handleLogin}>
        <p><input type="text" placeholder="Username" id="username"/></p>
        <p><input type="password" placeholder="password" id="password"/></p>
        <p><input type="submit" value="Log In"/></p>
      </form>
    </div>
  )
}

export default LoginForm;