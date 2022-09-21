class Api {
  constructor(option) {
    this._url = option.url;
    this._headers = option.headers;
} 

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
      }).then((res) => {
        return this._handleResponse(res)
    })
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  }) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink: trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId: movieId,
      }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }
}

const MainApi = new Api({
  url: "https://api.dmitry.diplom.nomoredomains.sbs",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export default MainApi;
