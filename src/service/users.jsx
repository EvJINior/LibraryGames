import { addPostDate } from '../../src/api/users'

const add = obj => {
    return addPostDate(obj)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

export { add }