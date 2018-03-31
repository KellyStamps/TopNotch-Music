import React from 'react'

class ArtistCard extends React.Component {
  
  clickHelper = (event) => this.props.handleClick(event)
  
  render () {
    return (
      <div onClick={this.clickHelper}>
        <h3>{this.props.artist.name.toUpperCase()}</h3>
      </div>
    )
  } 
}


export default ArtistCard