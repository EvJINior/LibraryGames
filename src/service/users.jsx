import { addPostDate, getDateUsers, getIDUser, correctDate } from '../../src/api/users'

const add = obj => {
    return addPostDate(obj)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

const get = () => {
    return getDateUsers()
        .then(data => {
            return Promise.resolve(data)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

const getByIDUser = id => {
    return getIDUser(id)
        .then(data => {

            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

const correctDateUser = (id, date) => {
    return correctDate(id, date)
        .then(data => {

            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

export { add, get, getByIDUser, correctDateUser }