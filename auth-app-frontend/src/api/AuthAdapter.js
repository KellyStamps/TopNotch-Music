const baseUrl = 'http://localhost:3000/api/v1'

class AuthAdapter {

  static login(loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static current_user() {
    return fetch(`${baseUrl}/current_user`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    }).then(res => res.json())
  }

}


export default AuthAdapter