export default class ApiService {
  constructor (token) {
    this.token = token
    this.baseUrl = 'http://localhost:3001'
  }

  fetch (path) {
    console.log('Calling ' + this.fullUrl(path))
    return window.fetch(this.fullUrl(path)).then(response => response.json())
  }

  fullUrl (path) {
    return [this.baseUrl, path].join('/')
  }
}
