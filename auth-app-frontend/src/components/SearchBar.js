import React from 'react'
import SearchAdapter from '../api/SearchAdapter'

class SearchBar extends React.Component{

  state = {
    searchTerm: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let returned = SearchAdapter.fetchAlbums(this.state.searchTerm)
    console.log(returned)
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Artist Name"/>
      </form>
    )
  }

}

export default SearchBar
