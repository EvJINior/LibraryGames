import React from "react";
import { Box, Card, Container, Button, Divider, Stack, TextField, Typography, Grid, CardContent, DialogTitle } from '@mui/material'

const Security = ({ setSwitchingElements }) => {

    return (
        <Container maxWidth='sm'>
            {/* <form onSubmit={handleOnSubmit}> */}
            <Card elevation={4} sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px' }}>


                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Stack rowGap={2}>
                        {/* <TextField
                            label="Change password"
                            name="Change"
                            type="text"
                        /> */}
                        <DialogTitle>Change password</DialogTitle>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            required
                            autoComplete="off"
                        // error={errorPasswordAgain}
                        // onChange={handlerInputPassword}
                        />
                        <TextField
                            label="PasswordAgain"
                            name="passwordAgain"
                            type="password"
                            required
                            autoComplete="off"
                        // error={errorPasswordAgain}
                        // onChange={handlerInputPasswordAgain}
                        />
                        {/* {(errorPasswordAgain) ?
                                <Typography sx={{ fontSize: '12px', color: 'red' }}>
                                    "Passwords aren't the same"
                                </Typography > :
                                null} */}
                        <Button
                        //  onClick={() => setSwitchingElements(3)}
                        >
                            Save
                            {/* <Icon></Icon> */}
                        </Button>
                    </Stack>
                </CardContent>
                < Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Button onClick={() => setSwitchingElements('PROFILE')}>
                        Profile
                        {/* <Icon></Icon> */}
                    </Button>
                </Stack>
                < Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Button onClick={() => setSwitchingElements('EDITPROFILE')}>
                        Edit Profile
                        {/* <Icon></Icon> */}
                    </Button>
                </Stack>
                {/* <Button
                    variant='contained'
                    fullWidth
                    type='submit'
                // disabled={isLoaing}
                >
                    Register and Login
                </Button> */}

            </Card>
            {/* </form> */}
        </Container >
    )
}

export default Security