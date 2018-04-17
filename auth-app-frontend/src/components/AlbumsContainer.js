import React from 'react'
import AlbumCard from './AlbumCard'
import {connect} from 'react-redux'
import ReactPaginate from 'react-paginate'

class AlbumsContainer extends React.Component {

  state = {
    limit: 10,
    offset: 0
  }

  renderHelper = () => {
    if (this.props.albums !== null) {

      let shownAlbums = this.props.albums.slice(this.state.offset, (this.state.offset + this.state.limit));

      return shownAlbums.map(alb => <AlbumCard key={alb.name} album={alb}/>)
    }
  }

  handlePageChange = (arg) => {
    this.setState({offset: arg.selected * this.state.limit})
  }

  render(){
    return (
      <div id='albums-container'>
        {this.renderHelper()}
        <div id='pages'>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            pageCount={this.props.pageCount}
            pageRangeDisplayed={2}
            pageMarginDisplayed={5}
            onPageChange={this.handlePageChange}
            />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {...state.albums}
}

export default connect(mapStateToProps)(AlbumsContainer);
