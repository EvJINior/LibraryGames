import React, { useEffect } from "react";
import { Button } from "@mui/material"
import { Card, CardActions, CardContent, CardHeader, Container, Box, Stack, Typography, Link } from '@mui/material';
import TextField from '@mui/material/TextField';
import { add, get } from '../../service/users.jsx'

const Registration = ({ setPoint, navigate }) => {

    const [isLoaing, setIsLoaing] = React.useState(false)
    const [nickName, setNickName] = React.useState()
    const [login, setLogin] = React.useState()

    const [dateUsers, setDateUsers] = React.useState([])

    const [loginUsers, setLoginUsers] = React.useState()
    const [errorLogin, setErrorLogin] = React.useState(false)

    const [passwordUser, setPasswordUser] = React.useState()

    const [passwordUserAgain, setPasswordUserAgain] = React.useState()
    const [errorPasswordAgain, setErrorPasswordAgain] = React.useState(false)

    const [dateIdUser, setDateIdUser] = React.useState()

    useEffect(() => {

        // setIsLoading(true)
        // setErrorLogin(false)
        // setTimeout(function () {
        get()
            .then(
                date => setDateUsers(date)
            )

        // .finally(() => setIsLoading(false))
        // }, 2000);
    }, [])

    // const handleClick = useEffect(() => {

    //     // setIsLoading(true)
    //     setErrorLogin(false)

    // }, [])

    const handleOnSubmit = (event) => {
        event.preventDefault()

        for (let counter = 0; counter < dateUsers.length; counter++) {
            // console.log(dateUsers.login)
            if (loginUsers === dateUsers[counter].login) {
                setErrorLogin(true)
                console.log(loginUsers)
                console.log(errorLogin)
                return
            }
        }

        if (passwordUser !== passwordUserAgain) {
            setErrorPasswordAgain(true)
            console.log(passwordUser)
            console.log(passwordUserAgain)
            return
        }

        setErrorLogin(false)
        setErrorPasswordAgain(false)

        setLogin(event.target['login'].value)

        let newUser = {
            id: (~~(Math.random() * 1e8)).toString(16),
            nickName: event.target['nickName'].value,
            login: event.target['login'].value,
            password: event.target['password'].value,
            passwordAgain: event.target['passwordAgain'].value
        }
        localStorage.setItem('user', JSON.stringify(newUser.id))

        // setIsLoaing(true)

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

    const handleTurn = (event) => {
        setPoint(0)
    }

    const handlerInputLogin = (event) => {
        setErrorLogin(false)
        setLoginUsers(event.target.value)

    }

    const handlerInputPassword = (event) => {
        setErrorPasswordAgain(false)
        setPasswordUser(event.target.value)
    }

    const handlerInputPasswordAgain = (event) => {
        setErrorPasswordAgain(false)
        setPasswordUserAgain(event.target.value)
    }



    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleOnSubmit}>
                <Card elevation={4} sx={{}}>
                    <CardHeader title="Registration" sx={{ textAlign: "center" }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', }}>
                        <Button onClick={handleTurn} variant="outlined" sx={{
                            alignContent: 'center',
                            typography: 'body1', '& > :not(style) ~ :not(style)': {
                                ml: 2,
                            },
                        }}>
                            Authorization
                        </Button>
                        <Button variant="outlined" disabled>
                            Registration
                        </Button>
                    </Box>
                    <CardContent>
                        <Stack rowGap={2}>
                            <TextField
                                name="nickName"
                                label="NickName"
                                required
                                autoComplete="on"
                            />
                            <TextField
                                name="login"
                                label="Login"
                                required
                                autoComplete="on"
                                onChange={handlerInputLogin}
                                error={errorLogin}
                            />
                            {(errorLogin) ?
                                <Typography sx={{ fontSize: '12px', color: 'red' }}>
                                    "Login already exists"
                                </Typography > :
                                null}
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                required
                                autoComplete="off"
                                error={errorPasswordAgain}
                                onChange={handlerInputPassword}
                            />
                            <TextField
                                label="PasswordAgain"
                                name="passwordAgain"
                                type="password"
                                required
                                autoComplete="off"
                                error={errorPasswordAgain}
                                onChange={handlerInputPasswordAgain}
                            />
                            {(errorPasswordAgain) ?
                                <Typography sx={{ fontSize: '12px', color: 'red' }}>
                                    "Passwords aren't the same"
                                </Typography > :
                                null}
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant='contained'
                            fullWidth
                            type='submit'
                        // disabled={isLoaing}
                        >
                            Register and Login</Button>

                    </CardActions>
                </Card>
            </form>
        </Container>
    )
}

export default Registration








// const handleOnsdaw = useEffect(() => {

//     // setIsLoading(true)
//     setErrorLogin(false)
//     setTimeout(function () {
//         get()
//             .then(
//                 date => (date?.map(item => {
//                     if (item.login === loginUsers) {
//                         console.log(item.login)
//                         setErrorLogin(true)
//                         return
//                     }
//                 })

//                 )
//             )

//         // .finally(() => setIsLoading(false))
//     }, 2000);
// }, [loginUsers])