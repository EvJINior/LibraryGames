import React, { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { Card, CardActions, CardContent, CardHeader, Container, Icon, Box, Stack, Typography, Link, Avatar, DialogTitle } from '@mui/material'
import TextField from '@mui/material/TextField'
import AttributionIcon from '@mui/icons-material/Attribution'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ChooseCountry from './ChooseCountry'

import { getByIDUser, correctDateUser } from '../../../service/users'
import { getCountries } from '../../../service/db'

const EditProfile = ({ setSwitchingElements }) => {
    const [isLoading, setIsLoading] = useState(false)
    const idUser = JSON.parse(localStorage.getItem('user'))
    const [dateUser, setDateUser] = useState()
    const [login, setLogin] = useState()

    const [chooseCountryUser, setChooseCountryUser] = useState(null)
    const [countries, setCountries] = useState([])

    const [nickNameUser, setNickNameUser] = useState()
    const [helperTextNickName, setHelperTextNickName] = useState()

    const [infoUser, setInfoUser] = useState()
    const [helperTextInfoUser, setHelperTextInfoUser] = useState()

    const [errorNickName, setErrorNickName] = useState(false)
    const [errorCountries, setErrorCountries] = useState(false)
    const [errorInfoUser, setErrorInfoUser] = useState(false)







    const findCountriesRequest = async () => {
        setIsLoading(true)

        // setTimeout(function () {

        getCountries()
            .then((data) => {
                setCountries(data || [])
            })
            .finally(() => setIsLoading(false))

        // }, 2000);
    }

    useEffect(() => {
        findCountriesRequest()
    }, [])

    useEffect(() => {
        // setIsLoading(true)
        // setInterval(() => {

        getByIDUser(idUser).then(data =>
            data?.map(elem => {
                setDateUser(elem)
            }))


        // .finally(() => setIsLoading(false))
        // }, 2000);
    }, [idUser])

    // const correctFilling = (elem) => {

    //     if (elem === '') {
    //         return
    //     }
    //     if (elem == null) {
    //         return console.log(" return")
    //     }
    //     return elem
    // }

    // const correctFillingCountre = (elem) => {

    //     if (elem == null) {
    //         // return console.log(" return")
    //         console.log('countre')
    //         return
    //     }
    //     return elem.text
    // }

    const handlerInputNickName = (event) => {
        let eventInput = event.target.value
        console.log('NickName')
        console.log(event.target.value.length)
        // console.log(nickNameUser)
        setErrorNickName(false)
        // setErrorCountries(false)
        // setErrorInfoUser(false)
        setHelperTextNickName(((30 - eventInput.length < 0) ? 0 : 30 - eventInput.length) + ' symbols left')

        if (eventInput.length > 30) {
            setErrorNickName(true)
        }

        setNickNameUser(eventInput)
    }

    // const handlerInputCountry = (event) => {
    //     setErrorNickName(false)
    //     setErrorCountries(false)
    //     setErrorInfoUser(false)
    //     setCountries(countries)
    // }

    const handlerInputInfoUser = (event) => {
        let eventInput = event.target.value
        console.log('InfoUser')
        console.log(event.target.value.length)
        // setErrorNickName(false)
        // setErrorCountries(false)
        setErrorInfoUser(false)
        setHelperTextInfoUser(((300 - eventInput.length < 0) ? 0 : 300 - eventInput.length) + ' symbols left')

        if (event.target.value.length > 300) {
            setErrorInfoUser(true)
        }

        setInfoUser(event.target.value)
    }



    const handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log("form")
        // console.log(dateUser)

        if (errorNickName) {
            setErrorNickName(true)
            console.log('nickName false')
            return
        }
        // if (event.target['nickName'].value === '') {
        //     // setErrorNickName(true)
        //     console.log('nickName false')
        //     // return
        // }

        if (chooseCountryUser == null) {
            console.log('countre false')
            setErrorCountries(true)
            return
        }

        if (errorInfoUser) {
            // if (event.target['info'].value === '' || errorInfoUser) {
            setErrorInfoUser(true)
            console.log('info false')
            return
        }

        let editDateUser = {
            nickName: event.target['nickName'].value,
            countre: chooseCountryUser.text,
            info: event.target['info'].value
            // password: event.target['password'].value,
            // passwordAgain: event.target['passwordAgain'].value
        }
        console.log(editDateUser)

        correctDateUser(dateUser?.id, editDateUser)
            .then(
                data => {
                    setLogin(data)
                    setIsLoading(false)
                }
            )
            .catch(error => {
                setIsLoading(false)
            })

        // setSwitchingElements('PROFILE')

    }



    return (

        <Container maxWidth='md'>
            <form onSubmit={handleOnSubmit}>
                {/* <form onSubmit={handleOnSubmit}> */}
                <Card elevation={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <CardContent >
                        <DialogTitle sx={{ display: 'flex', justifyContent: 'center', }}>Edit Profile</DialogTitle>

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                            <Avatar
                                // alt={comment.nickUser}
                                // src={comment.iconUser}
                                sx={{ width: 200, height: 200, borderRadius: 2 }}
                            >
                                <AttributionIcon sx={{ fontSize: '150px' }} />
                            </Avatar>
                            <Stack rowGap={2}>
                                {/* <TextField
                                name="nickName"
                                label="NickName"
                                required
                                autoComplete="on"
                            /> */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField
                                        id="input-with-sx"
                                        name="nickName"
                                        label="NickName"
                                        variant="standard"
                                        onChange={handlerInputNickName}
                                        error={errorNickName}
                                        helperText={helperTextNickName}
                                    // value={dateUser?.nickName} 
                                    />
                                </Box>

                                {/* <TextField
                                    name="countre"
                                    label="Countres"
                                    required
                                    autoComplete="on"
                                    variant="standard"
                                //    value={}
                                /> */}
                                {/* <TextField
                                    fullWidth
                                    lname="countre"
                                    label="Countres"
                                    required
                                    autoComplete="on"
                                    variant="standard"
                                // disabled={isLoading}
                                // value={value}
                                // onChange={handleChangeUser}
                                /> */}
                                {/* <SearchString
                                    items={countries}
                                    nameElement={(option) => option.text}
                                    setSearchString={setSearchString}
                                    sString={sString}
                                /> */}
                                <ChooseCountry
                                    items={countries}
                                    setChooseCountryUser={setChooseCountryUser}
                                    chooseCountryUser={chooseCountryUser}
                                    errorCountries={errorCountries}
                                    setErrorCountries={setErrorCountries}
                                />
                            </Stack>
                        </Box>

                        <Stack sx={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
                            <TextField
                                fullWidth
                                name="info"
                                label="Info"
                                id="outlined-textarea"
                                multiline
                                variant="standard"
                                // disabled={isLoading}
                                // value={value}
                                error={errorInfoUser}
                                onChange={handlerInputInfoUser}
                                helperText={helperTextInfoUser}
                            />
                            <Button
                                width={100}
                                // onClick={handleOnSubmit}
                                type='submit'
                            >
                                Save
                                {/* <Icon></Icon> */}
                            </Button>
                        </Stack>
                    </CardContent>

                    < Stack gap={4} sx={{ display: 'flex', flexDirection: 'row', maxHeight: '284px' }}>
                        <Button onClick={() => setSwitchingElements('PROFILE')}>
                            Profile
                            {/* <Icon></Icon> */}
                        </Button>

                        <Button onClick={() => setSwitchingElements('SECURITY')}>
                            Security
                            {/* <Icon></Icon> */}
                        </Button>
                    </Stack>
                    {/* <CardActions>
                    <Button
                        variant='contained'
                        fullWidth
                        type='submit'
                    // disabled={isLoaing}
                    >
                        Register and Login</Button>
                </CardActions> */}
                </Card >
            </form>
        </Container >
    )
}

export default EditProfile

