import React from 'react'
import SearchAdapter from '../api/SearchAdapter'
import {connect} from 'react-redux'
import {addAlbums} from '../actions/albums'

class SearchBar extends React.Component{

  state = {
    searchTerm: '',
    noResult: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    SearchAdapter.fetchAlbums(this.state.searchTerm)
    .then(json => {
      if (json.error) {
        this.setState({noResult: true})
      } else {
        this.setState({noResult: false})
        this.props.addAlbums(json.topalbums.album)
      }
    })
  }


  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render(){
    return(
      <div>
        <form id='searchbar' onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Enter Artist Name"/>
        </form>
        {this.state.noResult ? <h3>Sorry, no albums found.</h3> : null}
      </div>
    )
  }

}

export default connect(null, {addAlbums})(SearchBar)
