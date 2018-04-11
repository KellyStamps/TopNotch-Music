import React from 'react'

const AlbumCard =(album)=> {
  console.log(album)
  return (
    <div className='album-card'>
      <h2>{album.album.name}</h2>
      <img src={album.album.image[3]['#text']}/>
    </div>
  )
}

export default AlbumCard
