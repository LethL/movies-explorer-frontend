const BEATFILM_URL = "https://api.nomoreparties.co/beatfilm-movies";

class Api {
  constructor(option) {
    this._url = option.url;
    this._headers = option.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(this._url, {
      headers: this._headers
    }).then((res) => {
      return this._handleResponse(res)
    })
  }
}


const api = new Api({
  url: BEATFILM_URL,
  // credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
