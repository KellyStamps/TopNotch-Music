export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user: user
  }
}

export const addFave = (fave) => {
  return {
    type: 'ADD_FAVE',
    fave: fave
  }
}
