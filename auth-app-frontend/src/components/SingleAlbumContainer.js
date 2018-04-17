import React from 'react'
import {connect} from 'react-redux'
import FavoritesAdapter from '../api/FavoritesAdapter'

class SingleAlbumContainer extends React.Component {

  addFave = () => {
    FavoritesAdapter.saveFavorite(this.props.album, this.props.user)
  }

  render () {
    return (
      <div id='album-show-container'>
        <div id='album-show-header'>
          {this.props.album.name}| <a href={this.props.album.artist.url} target="_blank">{this.props.album.artist.name}</a>
        </div>
        <img src={this.props.album.image[3]['#text']}/>
        <button onClick={this.addFave} className='fave-button'>Add to Favorites</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: {...state.users.user}, album: {...state.albums.selectedAlbum}}
}


export default connect(mapStateToProps)(SingleAlbumContainer)
