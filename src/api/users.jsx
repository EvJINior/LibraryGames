const addPostDate = obj => {
    const path = `${"http://localhost:3003"}/users`
    return fetch(path, { method: 'POST', body: JSON.stringify(obj) }).then(response => response.json())
}

export { addPostDate }  