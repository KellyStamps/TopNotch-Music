export default function albumReducer(state = {albums: null}, action) {
  switch(action.type) {
    case 'ADD_ALBUMS':
      let allAlbums = action.albums.filter(al => al.name !== "(null)" && al.image[3]["#text"].length > 0)
      debugger
      state = {...state, albums: allAlbums}
      return state;

    default:
      return state;
  }
}
