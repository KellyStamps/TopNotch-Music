import {API_KEY, LAST_FM_ROOT} from '../constants'

class SearchAdapter {

  static fetchAlbums(searchTerm){
    let artist = searchTerm.toLowerCase()
    const ALBUMS=`?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`
    debugger
    return fetch(`${LAST_FM_ROOT}${ALBUMS}`).then(res => res.json()).then(json => json)
  }

}

export default SearchAdapter
