import { getList, getID, getObjCountries } from '../api/db'

const getByList = () => {
    return getList()
        .then(data => {
            // if (data.code !== 200) {
            //     throw Error(data.errMsg)
            // }

            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })

}

const getByID = id => {
    return getID(id)
        .then(data => {

            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

const getCountries = id => {
    return getObjCountries(id)
        .then(data => {

            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

export { getByList, getByID, getCountries }


