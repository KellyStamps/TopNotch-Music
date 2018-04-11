import React from 'react'
import SearchAdapter from '../api/SearchAdapter'
import {connect} from 'react-redux'
import {addAlbums} from '../actions/albums'

class SearchBar extends React.Component{

  state = {
    searchTerm: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    SearchAdapter.fetchAlbums(this.state.searchTerm)
    .then(json => this.props.addAlbums(json.topalbums.album))
  }


  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render(){
    return(
      <form id='searchbar' onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Enter Artist Name"/>
      </form>
    )
  }

}

export default connect(null, {addAlbums})(SearchBar)
