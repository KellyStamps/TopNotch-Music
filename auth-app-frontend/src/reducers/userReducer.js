export default function userReducer(state = {user: null}, action){
  switch(action.type){
    case 'ADD_USER':
      state = {...state, user: action.user};
      return state;

    case 'ADD_FAVE':
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {favorites: state.user.favorites.concat(action.fave)})
      })
      return state

    default:
      return state;
  }

}
