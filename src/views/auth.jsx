import { Button, Card, CardActions, CardContent, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useEffect, useCallback, useRef } from 'react';
import { add } from '../service/users.jsx'
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
    // const [welcomDialogOpen, setWelcomDialogOpen] = React.useState(false)
    const [isLoaing, setIsLoaing] = React.useState(false)
    const [login, setLogin] = React.useState()
    const navigate = useNavigate()
    // const [accDetails, setAccDetails] = React.useState('admin')

    // const handleOnDialogOpen = useCallback(() => setWelcomDialogOpen(true), [])
    // const handleOnDialogClose = useCallback(() => setWelcomDialogOpen(false), [])



    const handleOnSubmit = (event) => {
        event.preventDefault()

        // setLogin(event.target['login'].value)

        let newUser = {
            login: event.target['login'].value,
            password: event.target['password'].value
        }

        localStorage.setItem('user', JSON.stringify(newUser))

        setIsLoaing(true)

        add(newUser)
            .then(
                data => {
                    setLogin(data)
                    setIsLoaing(false)
                }
            )
            .catch(error => {
                setIsLoaing(false)
            })

        navigate('library')
    }

    return (
        <>
            <Container maxWidth='sm'>
                <form onSubmit={handleOnSubmit}>
                    <Card elevation={4}>
                        <CardHeader title="Authorization" />
                        <CardHeader
                            subheader="Authorization"
                        // onClick={handleOnDialogClose}
                        />
                        <CardContent>
                            <Stack rowGap={2}>
                                <TextField
                                    name="login"
                                    label="Login"
                                    required
                                />
                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    required
                                />
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                disabled={isLoaing}
                            >
                                Login</Button>
                        </CardActions>
                    </Card>
                </form>
            </Container>

        </>
    )
}

export default Authorization










/*
  const [welcomDialogOpen, setWelcomDialogOpen] = React.useState(false)
    // const [ErrorAuthorization, setErrorAuthorization] = React.useState(false)
    const [login, setLogin] = React.useState()
    const log = React.useRef(null)
    const [accDetails, setAccDetails] = React.useState('admin')

    const handleOnDialogOpen = useCallback(() => setWelcomDialogOpen(true), [])
    const handleOnDialogClose = useCallback(() => setWelcomDialogOpen(false), [])
    // const handleErrorDialogOpen = useCallback(() => setErrorAuthorization(true), [])
    // const handleErrorDialogClose = useCallback(() => setErrorAuthorization(false), [])

const handleOnSubmit = (event) => {
    event.preventDefault()

    setLogin(event.target['login'].value)
    log.current = event.target['login'].value
    // if (accDetails[0]?.login === event.target['login'].value && accDetails[0]?.password === event.target['password'].value) {
    //     console.log("if")
    //     // console.log(ErrorAuthorization)
    //     return handleOnDialogOpen()
    // }

    // console.log(ErrorAuthorization)
    // return handleErrorDialogOpen()
    const loading = () => {
        GetDate.getUsers(`${"?login="}${log.current}`).then(
            data => setAccDetails(data)
        )
    }

    loading()

    // if (accDetails[0]?.login === login) {
    //     console.log("if")
    //     // console.log(ErrorAuthorization)
    //     return handleOnDialogOpen()
    // }
}

useEffect(() => {
    // if (agreementGameID == )
    // console.log("начальный ID: ", gettinID)

    const loading = () => {

        GetDate.getUsers(`${"?login="}${log.current}`).then(
            data => setAccDetails(data)
        )
    }

    loading()



}, [log.current])


*/