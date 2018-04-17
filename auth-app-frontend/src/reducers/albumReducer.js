export default function albumReducer(state = {albums: null, selectedAlbum: null}, action) {
  switch(action.type) {
    case 'ADD_ALBUMS':
      let allAlbums = action.albums.filter(al => al.name !== "(null)" && al.image[3]["#text"].length > 0)
      state = {...state, albums: allAlbums}
      return state;

    case 'SELECTED_ALBUM':
      state = {...state, selectedAlbum: action.album}
      return state;

    default:
      return state;
  }
}
