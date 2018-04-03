import {LAST_FM_ROOT} from '../constants'
import {API_KEY} from '../keys'

class SearchAdapter {

  static fetchAlbums(searchTerm){
    let artist = searchTerm.toLowerCase()
    const ALBUMS=`?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`
    debugger
    return fetch(`${LAST_FM_ROOT}${ALBUMS}`).then(res => res.json()).then(json => json)
  }

}

export default SearchAdapter
