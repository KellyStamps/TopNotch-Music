import React from 'react'
import AlbumCard from './AlbumCard'
import {connect} from 'react-redux'

class AlbumsContainer extends React.Component {

  handleClick = (album) => {
    debugger
  }

  render(){
    return (
      <div id='albums-container'>
        {this.props.albums === null ? null : this.props.albums.map(alb => <AlbumCard key={alb.name} album={alb} handleClick={this.handleClick}/>)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {...state.albums}
}

export default connect(mapStateToProps)(AlbumsContainer);
