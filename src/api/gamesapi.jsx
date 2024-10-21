class GamesApi {
  static getDateUsers = filter => {
    const path = `${"http://localhost:3001"}/users${filter}`
    return fetch(path, { method: 'GET' }).then(response => response.json())
  }

  static getList = () => {
    const path = `${"http://localhost:3001"}/games`
    return fetch(path, { method: 'GET' }).then(response => response.json())
  }

  static get = id => {
    const path = `${"http://localhost:3001"}/games${id}`
    return fetch(path, { method: 'GET' }).then(response => response.json())
  }

  static addPostDate = obj => {
    const path = `${"http://localhost:3001"}/users`
    return fetch(path, { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json())
  }
}

export default GamesApi


// `${"http://localhost:3001"}/games/${filter}`

// static find = (filter) => {
//   const path = `${"http://localhost:3001"}/games/${filter}`
//   return fetch(path, { method: 'POST' }).then(response => response.json())
// }