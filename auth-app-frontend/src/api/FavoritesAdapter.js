class FavoritesAdapter {

  static saveFavorite(album, user){
    return fetch(`http://localhost:3000/api/v1/favorites`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: user.id,
        album_name: album.name
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(console.log)
  }

}

export default FavoritesAdapter;
