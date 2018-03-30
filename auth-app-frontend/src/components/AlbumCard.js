import React from 'react'

const AlbumCard =(album)=> {
  return (
    <div className='album-card'>
    <p>{album.album.name}</p>
    <img src={album.album.image_link}/>
    
    </div>
  )
}

export default AlbumCard