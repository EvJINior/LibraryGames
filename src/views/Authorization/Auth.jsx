import { Button, Card, CardActions, CardContent, CardHeader, Container, Box, Stack, Typography, Link } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useEffect, useCallback, useRef } from 'react';
// import { add } from '../../service/users.jsx'
import { useNavigate } from 'react-router-dom';

import { get } from '../../service/users.jsx'
import Registration from '../Authorization/Registration.jsx'
import Loading from '../libraryGames/loading.jsx'

const Authorization = () => {
    // const [welcomDialogOpen, setWelcomDialogOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()
    const [point, setPoint] = React.useState(0)

    const [dateUsers, setDateUsers] = React.useState([])

    const [errorAuthorization, setErrorAuthorization] = React.useState(false)
    // const [errorPassword, setErrorPassword] = React.useState(false)

    const [loginUsers, setLoginUsers] = React.useState()
    const [passwordUsers, setPasswordUsers] = React.useState()

    // const [idUser, setIdUser] = React.useState()

    // const [click, setClick] = React.useState(false)
    // const [accDetails, setAccDetails] = React.useState('admin')

    // const handleOnDialogOpen = useCallback(() => setWelcomDialogOpen(true), [])
    // const handleOnDialogClose = useCallback(() => setWelcomDialogOpen(false), [])

    // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();



    // get

    // const handleOnSubmit = (event) => {
    // event.preventDefault()

    //     // setLogin(event.target['login'].value)

    //     let newUser = {
    //         login: event.target['login'].value,
    //         password: event.target['password'].value
    //     }

    //     localStorage.setItem('user', JSON.stringify(newUser))

    //     setIsLoaing(true)

    //     add(newUser)
    //         .then(
    //             data => {
    //                 setLogin(data)
    //                 setIsLoaing(false)
    //             }
    //         )
    //         .catch(error => {
    //             setIsLoaing(false)
    //         })

    //     navigate('library')
    // }

    // const checkDate = () => {

    const handleTurn = (event) => {
        setPoint(1)
    }

    const handleOnSubmit = useEffect(() => {

        setIsLoading(true)
        get()
            .then(
                date => setDateUsers(date)
            )

            .finally(() => setIsLoading(false))
    }, [])


    const handleClick = (event) => {
        event.preventDefault()
        // setTimeout(function () {
        for (let k = 0; k < dateUsers.length; k++) {
            if (loginUsers === dateUsers[k].login) {
                if (passwordUsers === dateUsers[k].password) {
                    localStorage.setItem('user', JSON.stringify(dateUsers[k].id))
                    return navigate('library')
                }
            }
        }
        // }, 2000);
        setErrorAuthorization(true)
    }

    const handlerInputPassword = (event) => {
        setErrorAuthorization(false)
        setPasswordUsers(event.target.value)
    }

    const handlerInputLogin = (event) => {
        setErrorAuthorization(false)
        setLoginUsers(event.target.value)
    }

    return (
        (point === 0) ?
            <Container maxWidth='sm'>
                <form
                    onSubmit={handleClick}
                >
                    <Card elevation={4} sx={{}}>
                        <CardHeader title="Authorization" sx={{ textAlign: "center" }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', }}>
                            {/* <CardHeader
                                subheader="Authorization"
                            // onClick={handleOnDialogClose}
                            /> */}
                            <Button variant="outlined" disabled>
                                Authorization
                            </Button>

                            <Button onClick={handleTurn} variant="outlined" sx={{
                                alignContent: 'center',
                                typography: 'body1', '& > :not(style) ~ :not(style)': {
                                    ml: 2,
                                },
                            }}>
                                Registration
                            </Button>
                        </Box>
                        <CardContent>
                            <Stack >
                                <Stack gap={2}>
                                    <TextField
                                        // name="login"
                                        label="Login"
                                        required
                                        autoComplete="on"
                                        onChange={handlerInputLogin}
                                        error={errorAuthorization}
                                        defaultValue={loginUsers}
                                    />
                                    {/* <Stack> */}
                                    <TextField
                                        label="Password"
                                        // name="password"
                                        type="password"
                                        required
                                        autoComplete="off"
                                        onChange={handlerInputPassword}
                                        error={errorAuthorization}
                                        defaultValue={passwordUsers}
                                    // helperText="Incorrect Password"
                                    />
                                </Stack>
                                {(errorAuthorization) ?
                                    <Typography sx={{ fontSize: '12px', color: 'red' }}>
                                        "Incorrect Login or Password"
                                    </Typography > :
                                    null}
                            </Stack>
                        </CardContent>
                        <CardActions>
                            {(!isLoading) ?
                                <Button
                                    variant='contained'
                                    fullWidth
                                    type='submit'
                                    disabled={isLoading}
                                // onClick={handleClick}
                                >
                                    Sing in</Button>
                                :
                                <Box sx={{ width: '100%', top: '20px' }}>
                                    <Loading />
                                </Box>
                            }
                        </CardActions>
                    </Card>
                </form>
            </Container >
            :
            < Registration setPoint={setPoint} navigate={navigate} />

    )
}

export default Authorization





// const [isLoading, setIsLoading] = React.useState(false)
// const navigate = useNavigate()
// const [point, setPoint] = React.useState(0)

// const [errorLogin, setErrorLogin] = React.useState(false)
// const [errorPassword, setErrorPassword] = React.useState(false)

// const [loginUsers, setLoginUsers] = React.useState()
// const [passwordUsers, setPasswordUsers] = React.useState()
// const [click, setClick] = React.useState(false)



// const handleTurn = (event) => {
//     setPoint(1)
// }
// const handleOnSubmit = useEffect(() => {

// // console.log("click")
// // console.log(click)

// setClick(false)
// setErrorLogin(false)
// setErrorPassword(false)

// setIsLoading(false)
// get()
//     .then(date =>
//         date?.map((user) => {

//             if (user.login === loginUsers) {
//                 console.log("loginUsers")
//                 console.log(loginUsers)
//                 if (user.password === passwordUsers) {
//                     console.log("passwordUsers")
//                     console.log(passwordUsers)
//                     return setClick(true)
//                 }
//             }
//         }))
//     .catch(error => {
//         setIsLoading(false)
//     })
// // .finally(() => setIsLoading(false))
// }, [loginUsers, passwordUsers, isLoading])


// const handleClick = () => {
// if (click) {
//     navigate('library')
//     setClick(false)
// }
// else {
//     setErrorLogin(true)
//     setErrorPassword(true)
// }
// }


// console.log("loginUsers")
// console.log(loginUsers)


// return (
// (point === 0) ?
//     <Container maxWidth='sm'>
//         <form
//         // onSubmit={handleClick}

//         // onClick={setClick(true)}
//         // error={true}
//         >
//             <Card elevation={4} sx={{}}>
//                 <CardHeader title="Authorization" sx={{ textAlign: "center" }} />
//                 <Box sx={{ display: 'flex', justifyContent: 'space-evenly', }}>
//                     {/* <CardHeader
//                         subheader="Authorization"
//                     // onClick={handleOnDialogClose}
//                     /> */}
//                     <Button variant="outlined" disabled>
//                         Authorization
//                     </Button>

//                     <Button onClick={handleTurn} variant="outlined" sx={{
//                         alignContent: 'center',
//                         typography: 'body1', '& > :not(style) ~ :not(style)': {
//                             ml: 2,
//                         },
//                     }}>
//                         Registration
//                     </Button>

//                     {/* <Link onClick={handleTurn} href="#" underline="always" sx={{
//                         alignContent: 'center',
//                         typography: 'body1', '& > :not(style) ~ :not(style)': {
//                             ml: 2,
//                         },
//                     }}>
//                         {'Registration'}
//                     </Link> */}

//                 </Box>
//                 <CardContent>
//                     <Stack >
//                         <Stack gap={2}>
//                             <TextField
//                                 // name="login"
//                                 label="Login"
//                                 required
//                                 autoComplete="on"
//                                 onChange={(event) => setLoginUsers(event.target.value)}
//                                 error={errorLogin}
//                                 defaultValue={loginUsers}
//                             />
//                             {/* <Stack> */}
//                             <TextField
//                                 label="Password"
//                                 // name="password"
//                                 type="password"
//                                 required
//                                 autoComplete="off"
//                                 onChange={(event) => setPasswordUsers(event.target.value)}
//                                 error={errorPassword}
//                                 defaultValue={passwordUsers}
//                             // helperText="Incorrect Password"
//                             />
//                         </Stack>
//                         {(errorLogin || errorPassword) ?
//                             <Typography sx={{ display: 'flex', fontSize: '12px', justifyContent: 'center', color: 'red' }}>
//                                 "Incorrect Login or Password"
//                             </Typography > :
//                             null}

//                         {/* </Stack> */}
//                         {/*
//                         // helperText="Incorrect Password" */}

//                         {/* {(error == true) : <Typography> "Incorrect Password"</Typography>} */}
//                     </Stack>
//                 </CardContent>
//                 <CardActions>
//                     {(!isLoading) ?
//                         <Button
//                             variant='contained'
//                             fullWidth
//                             type='submit'
//                             disabled={isLoading}
//                             onClick={handleClick}
//                         >
//                             Login</Button>
//                         :
//                         <Loading />
//                     }
//                 </CardActions>
//             </Card>
//         </form>
//     </Container >
//     :
//     < Registration setPoint={setPoint} navigate={navigate} />

// )





























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