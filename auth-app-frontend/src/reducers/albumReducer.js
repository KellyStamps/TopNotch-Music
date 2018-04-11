export default function albumReducer(state = {albums: null}, action) {
  switch(action.type) {
    case 'ADD_ALBUMS':
      state = {...state, albums: action.albums}
      return state;

    default:
      return state;
  }
}
