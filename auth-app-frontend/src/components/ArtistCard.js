import React from 'react'

class ArtistCard extends React.Component {
  
  clickHelper = (event) => this.props.handleClick(event)
  
  render () {
    return (
      <div onClick={this.clickHelper}>
        <h4 >{this.props.artist.name}</h4>
      </div>
    )
  } 
}


export default ArtistCard