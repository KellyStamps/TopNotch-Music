export const addAlbums = (albums) => {
  return {
    type: 'ADD_ALBUMS',
    albums: albums
  }
}

export const selectedAlbum = (album) => {
  return {
    type: 'SELECTED_ALBUM',
    album
  }
}
