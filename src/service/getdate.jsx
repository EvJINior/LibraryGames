import GamesApi from '../api/gamesapi'

class GetDate {
    static getByList = () => {
        return GamesApi.getList() 
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

    static getByID = id => {
        return GamesApi.get(id)
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



///

    static addPost = obj => {
        return GamesApi.addPostDate(obj)
        .then(data => {                     
            return Promise.resolve(data)
        })
        
        .catch(error => {
            return Promise.reject(error)
        })
    }


////
    
  
}

export default GetDate



// return (GamesApi.get(id)
//         .then(data => Promise.resolve(data)

// const getByID = id => {
//     return (GamesApi.get(id)
//         .then(data =>{
//             return Promise.resolve( Object.entries(data))}
            
//         //     JSON.stringify(data).forEach((item) => {
//         //     console.log(item.type)}
//         // )
//     ))
// //             if (data.code !== 200) {
// //               throw Error(data)
// //             }

// //             return Promise.resolve(data)
// // })

// //         .catch(error => {
// //             return Promise.reject(error)
// //         })

// }





// const getByID = id => dispatch => {
//     return GamesApi.get(id)
//       .then(data => {
//         if (data.code !== 200) {
//           throw Error(data.errMsg)
//         }
  
//         return Promise.resolve(data)
//       })
  
//       .catch(error => {
//         return Promise.reject(error)
//       })
//   }





// const getByID = id => {
//     return (GamesApi.get(id)
//         .then(data => Promise.resolve(JSON.stringify(data))))
// //             if (data.code !== 200) {
// //               throw Error(data)
// //             }

// //             return Promise.resolve(data)
// // })

// //         .catch(error => {
// //             return Promise.reject(error)
// //         })

// }