import { TextField, Box, Stack, Button } from '@mui/material';
import React, { useState } from 'react';
import GetDate from "../../../service/getdate"
import { getById, add } from '../../service/comment'

const Comments = ({ id }) => {

    const [value, setValue] = React.useState()
    const [takeComments, setTakeComments] = React.useState([])

    React.useEffect(() => {
        getById(id)
            .then(
                data => setTakeComments(data)
            )
            .catch(error => {
            })
    }, [id, takeComments])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    const grapElements = () => {

        return takeComments.map(elem => (
            <div key={elem}>
                <img src={elem.iconUser} /> <span>{elem.nickUser}</span>
                <div>{elem.commentUser}</div>
            </div>
        ))
        // let elem = []

        // for (let k = 0; k < array.length; k++) {
        //     elem.push(
        //         <div key={k}>
        //             <img src={array[k].iconUser} /> <span>{array[k].nickUser}</span>
        //             <div>{array[k].commentUser}</div>
        //         </div>
        //     )
        //     console.log(array[k])
        // }


    }





    const sendDateOnServ = (id) => {

        // console.log("id")
        // console.log(id)
        // console.log(idGame !== undefined)
        // console.log(valueUser !== null)

        // if (valueUser !== null && id !== undefined) {
        //     const postComment = {
        //         "gameID": id,
        //         "iconUser": "",
        //         "nickUser": "",
        //         "commentUser": valueUser,
        //     }

        //     GetDate.addComment(postComment)
        //         .then(
        //             data => console.log(data)
        //         )

        //     console.log("valsss")
        //     valueUser = null
        // }
    }

    const handleChangeUser = (event) => {

        setValue(event.target.value)

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
                // onClick={() => sendDateOnServ(id)}
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