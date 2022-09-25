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

  getUser(token) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
      }).then((res) => {
        return this._handleResponse(res)
    })
  }

  getUserMovies(token) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
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
    id,
  }, token) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      credentials: "include",
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: thumbnail || `https://api.nomoreparties.co${image.url}`,
        movieId: id,
      }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  };

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    }).then((res) => {
      return this._handleResponse(res);
    });
  };

  updateUser(name, email, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      })
    }).then((res) => {
      return this._handleResponse(res);
    });
  };
}

const MainApi = new Api({
  url: "https://api.dmitry.diplom.nomoredomains.sbs",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export default MainApi;
