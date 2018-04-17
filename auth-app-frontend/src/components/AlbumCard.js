import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectedAlbum} from '../actions/albums'

class AlbumCard extends React.Component {

  cleanedName = () => {
    return this.props.album.name.replace(/\s/g, "")
  }

  handleClick = () => {
    this.props.selectedAlbum(this.props.album)
  }

  render(){
    return (
      <div className='album-card'>
        <Link to={`/albums/${this.cleanedName()}`}>
          <h2 onClick={this.handleClick}>{this.props.album.name}</h2>
        </Link>
        <img alt="album cover" src={this.props.album.image[3]['#text']}/>
      </div>
    )
  }

}

export default connect(null,{selectedAlbum})(AlbumCard)
