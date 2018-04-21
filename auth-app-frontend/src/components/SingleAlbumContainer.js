import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import FavoritesAdapter from '../api/FavoritesAdapter'
import {addFave} from '../actions/users'

class SingleAlbumContainer extends React.Component {

  addFave = () => {
    FavoritesAdapter.saveFavorite(this.props.album, this.props.user)
    .then(res => res.json())
    .then(json => this.props.addFave(json.new_fave))
  }

  render () {
    if (!this.props.album.artist) {
      return <Redirect to='/search'/>
    } else {
      return (
        <div id='album-show-container'>
          <div id='album-show-header'>
            {this.props.album.name}| <a href={this.props.album.artist.url} target="_blank">{this.props.album.artist.name}</a>
          </div>
          <img src={this.props.album.image[3]['#text']}/>
          <button onClick={this.addFave} className='button fave-button'>Add to Favorites</button>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {user: {...state.users.user}, album: {...state.albums.selectedAlbum}}
}


export default connect(mapStateToProps, {addFave})(SingleAlbumContainer)
