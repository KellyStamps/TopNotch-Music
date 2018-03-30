import React from 'react'
import AlbumCard from './AlbumCard'

class AlbumsContainer extends React.Component {
  
  state = {
    albums: []
  }
  
  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/albums`)
    .then(res => res.json())
    .then(json => this.setState({albums: json.albums}))
  }
  
  render(){
    return (
      <div>
      {this.state.albums.map(al => <AlbumCard album={al}/>)}
      </div>
    )
  }
}

export default AlbumsContainer