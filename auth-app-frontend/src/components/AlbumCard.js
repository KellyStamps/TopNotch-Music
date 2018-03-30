import React from 'react'

const AlbumCard =(album)=> {
  return (
    <div>
    {console.log(album)}
    <p>{album.album.name}</p>
    <img src={album.album.image_link}/>
    
    </div>
  )
}

export default AlbumCard