import { TextField, Box, Stack, Button } from '@mui/material';
import React, { useState, useMemo, useEffect } from 'react';
import { getById, add, defaultGetID } from '../../../../src/service/comments'

const Comments = ({ id }) => {

    const [value, setValue] = useState()
    const [takeComments, setTakeComments] = useState([])
    const [post, setPost] = useState()
    const [def, setdefault] = useState()

    const userDate = JSON.parse(localStorage.getItem('user'))

    const handleChangeUser = (event) => {
        setValue(event.target.value)
    }

    useMemo(() => {
        defaultGetID(1)
            .then(
                data => data.forEach(element => {
                    setdefault(element)
                })
            )
            .catch(error => {
            })

    }, [])

    useEffect(() => {
        getById(id)
            .then(
                data => setTakeComments(data)
            )
            .catch(error => {
            })
    }, [id, post])

    const checkIcon = () => {
        if (userDate.iconUser == undefined) {
            return def.iconUser
        }
        return userDate.iconUser
    }

    const sendDateOnServ = () => {

        if (value !== null && value !== '' && id !== undefined) {
            const postComment = {
                "gameID": id,
                "iconUser": checkIcon(),
                "nickUser": userDate.login,
                "commentUser": value,
            }

            add(postComment)
                .then(
                    data => setPost(data)
                )
            setValue('')
        }
    }

    const grapElements = () => {
        return takeComments?.map(elem => (
            <div key={`comment-item-${elem.id}`}>
                <br />
                {console.log(<img src={elem.iconUser} />)}
                {/* <img src={elem.iconUser}  width="30" height="30" /> <span>{elem.nickUser}</span> */}
                <img src={elem.iconUser} /> <span>{elem.nickUser}</span>
                <div>{elem.commentUser}</div>
            </div>
        ))
    }

    return (<>
        <Box sx={{ width: "100 %", maxWidth: '100%' }}>
            <Stack direction="row" >
                <TextField
                    fullWidth
                    label="Feedback"
                    id="outlined-textarea"
                    multiline
                    value={value}
                    onChange={handleChangeUser}
                />
                <Button
                    variant='contained'
                    type='button'
                    onClick={() => sendDateOnServ()}
                >
                    Send
                </Button>
            </Stack>
        </Box>
        <div>
            {grapElements()}
        </div>
    </>
    )
}

export default Comments

// const Images = (prop) => {
//     return (
//         <div>
//             {grapElements(prop?.images)}
//         </div>
//     )
// }





/*
 GetDate.getComments(newUser)
            .then(
                data => {
                    setLogin(data)
                  
                }

            )
            .catch(error => {
               
            })


function grapElements(array) {
    let elem = []
    if (array != undefined) {
        for (let k = 0; k < array.length; k++) {
            elem.push(
                <div key={k}>
                    <br />
                    <img src={array[k].iconUser} /> <span>{array[k].nickUser}</span>
                    <div>{array[k].commentUser}</div>
                    <br />
                </div>
                // < div key={k}> {console.log(array[k].iconUser)}</div >
            )
        }
    }

*/