import React from 'react'

const FavoriteCard = ({fave}) => {
  return (
    <div className='favorite-card'>
      <p>{fave.album_name}</p>
      <p><a href={fave.artist_url}>{fave.artist_name}</a></p>
      <img src={fave.album_img} alt="album cover"/>
    </div>
  )
}

export default FavoriteCard
