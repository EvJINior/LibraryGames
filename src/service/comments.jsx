import { getByIDServ, addOnServ, defaultOnServ } from '../../src/api/comments'

const getById = id => {
    return getByIDServ(id)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

const add = obj => {
    return addOnServ(obj)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

const defaultGetID = id => {
    return defaultOnServ(id)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

export { getById, add, defaultGetID }
// TODO move comments from GameApi to separate Api file