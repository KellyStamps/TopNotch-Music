import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Modal from 'react-responsive-modal'
import FavoritesAdapter from '../api/FavoritesAdapter'
import {addFave} from '../actions/users'
import './App.css'

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};

class SingleAlbumContainer extends React.Component {

  state = {
    open: false
  }

  addFave = () => {
    FavoritesAdapter.saveFavorite(this.props.album, this.props.user)
    .then(res => res.json())
    .then(json => this.props.addFave(json.new_fave))

    this.onOpenModal()
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
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

          <Modal open={this.state.open} onClose={this.onCloseModal} little>
            <h2>Favorite added</h2>
          </Modal>

        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {user: {...state.users.user}, album: {...state.albums.selectedAlbum}}
}


export default connect(mapStateToProps, {addFave})(SingleAlbumContainer)
