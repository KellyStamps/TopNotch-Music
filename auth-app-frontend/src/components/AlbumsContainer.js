import React from 'react'
import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'
import {connect} from 'react-redux'

class AlbumsContainer extends React.Component {

  render(){
    return (
      <div id='albums-container'>
        {this.props.albums === null ? null : this.props.albums.map(alb => <AlbumCard album={alb}/>)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {...state.albums}
}

export default connect(mapStateToProps)(AlbumsContainer);
