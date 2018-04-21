class FavoritesAdapter {

  static saveFavorite(album, user){
    return fetch(`http://localhost:3000/api/v1/favorites`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: user.id,
        album_name: album.name,
        artist_name: album.artist.name,
        artist_url: album.artist.url,
        album_img: album.image[3]['#text']
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

}

export default FavoritesAdapter;
