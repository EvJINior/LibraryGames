import GamesApi from '../api/gamesapi'

const getById = id => {
    return GamesApi.getComments(id)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

const add = obj => {
    return GamesApi.addCommentUser(obj)
        .then(data => {
            return Promise.resolve(data)
        })

        .catch(error => {
            return Promise.reject(error)
        })
}

export { getById, add }
// TODO move comments from GameApi to separate Api file