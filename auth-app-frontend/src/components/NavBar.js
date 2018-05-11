import React from 'react'

const NavBar = ({handleLogOut}) => {
  return (
    <ul id='navbar'>
      <li><a href='/favorites'>My Favorites</a></li>
      <li><a href='/search'>Search Albums</a></li>
      <li onClick={handleLogOut}><a href='#'>Log Out</a></li>
    </ul>
  )
}

export default NavBar;
