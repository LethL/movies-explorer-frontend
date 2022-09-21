export const BASE_URL = 'https://api.dmitry.diplom.nomoredomains.sbs';

function handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, name })
    }).then((res) => {
        return handleResponse(res)
    })
};