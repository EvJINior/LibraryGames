const getByIDServ = id => {
    const path = `${"http://localhost:3002"}/comments?gameID=${id}`
    return fetch(path, { method: 'GET' }).then(response => response.json())
}

const addOnServ = obj => {
    const path = `${"http://localhost:3002"}/comments`
    return fetch(path, { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json())
}

const defaultOnServ = id => {
    const path = `${"http://localhost:3002"}/default?id=${id}`
    return fetch(path, { method: 'GET' }).then(response => response.json())
}

export { getByIDServ, addOnServ, defaultOnServ }