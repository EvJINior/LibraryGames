const addPostDate = obj => {
    const path = `${"http://localhost:3003"}/users`
    return fetch(path, { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json())
}

const getDateUsers = () => {
    const path = `${"http://localhost:3003"}/users`
    return fetch(path, { method: 'GET' }).then(response => response.json())
}

const getIDUser = id => {
    const path = `${"http://localhost:3003"}/users?id=${id}`
    return fetch(path, { method: 'GET' }).then(response => response.json())
}

const correctDate = (id, date) => {
    const path = `${"http://localhost:3003"}/users/${id}`
    return fetch(path, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: 'PATCH',
        body: JSON.stringify(date)
    }).then(response => response.json())
}

export { addPostDate, getDateUsers, getIDUser, correctDate }

