const getList = () => {
  const path = `${"http://localhost:3001"}/games`
  return fetch(path, { method: 'GET' }).then(response => response.json())
}

const getID = id => {
  const path = `${"http://localhost:3001"}/games${id}`
  return fetch(path, { method: 'GET' }).then(response => response.json())
}

export { getList, getID }