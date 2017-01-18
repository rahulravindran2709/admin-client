import ApiService from 'ApiService'

export default class LoginService {
  fetch (email, password) {
    let apiService = new ApiService()
    let jsonResponse = apiService.fetch('authenticate?email=' + email + '&password=' + password)
    jsonResponse.then(response => console.log(response))
  }
}
