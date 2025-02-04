import { getByIDServ } from '../../src/api/images'

const getById = id => {
    return getByIDServ(id)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

export { getById }