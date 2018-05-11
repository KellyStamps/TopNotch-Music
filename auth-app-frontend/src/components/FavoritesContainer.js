import React from 'react'
import {connect} from 'react-redux'
import FavoriteCard from './FavoriteCard'

class FavoritesContainer extends React.Component {
  render(){
    if(this.props.user) {
      return (
        <div id="favorites-container">
        <h1>My Favorites</h1>
        {this.props.user.favorites.map(fave => <FavoriteCard fave={fave}/>)}
       </div>
      )
    }
    return <div>Loading favorites...</div>
  }
}

const mapStateToProps = state => {
  return {...state.users}
}

export default connect(mapStateToProps)(FavoritesContainer)
