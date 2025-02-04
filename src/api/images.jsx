const getByIDServ = id => {
    const path = `${"http://localhost:3001"}/imagesGames?gameID=${id}`
    return fetch(path, { method: 'GET' }).then(response => response.json())
}

export { getByIDServ }