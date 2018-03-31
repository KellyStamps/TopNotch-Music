import React from 'react'
import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'

class AlbumsContainer extends React.Component {
  
  state = {
    albums: [], 
    artists: [],
    showing: "artists"
  }
  
  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/albums`)
    .then(res => res.json())
    .then(json => {
      this.setState({albums: json.albums, artists: json.artists})
    })
  }
  
  handleArtistClick = (event) => {
    this.setState({showing: "albums"})
  }
  
  render(){
    return (
      <div>
        <div id="smaller-container">
        {this.state.showing === "albums"? this.state.albums.map(al => <AlbumCard album={al} key={al.id}/>) : this.state.artists.map(ar => <ArtistCard artist={ar} key={ar.id} handleClick={this.handleArtistClick}/>)}
        </div>
      </div>
    )
  }
}

export default AlbumsContainer