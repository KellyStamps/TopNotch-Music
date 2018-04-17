import React from 'react'
import {connect} from 'react-redux'

class SingleAlbumContainer extends React.Component {

  render () {
    return (
      <div>
        <h3>{this.props.album.name}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: {...state.users.user}, album: {...state.albums.selectedAlbum}}
}


export default connect(mapStateToProps)(SingleAlbumContainer)
