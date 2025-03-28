import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Icon, Button, Stack, Container, Avatar, DialogTitle } from "@mui/material";
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

import EditProfile from './Profile/EditProfile.jsx'
import Security from './Profile/Security.jsx'

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

import AttributionIcon from '@mui/icons-material/Attribution';

import { getByIDUser } from '../../service/users.jsx'

const Profile = ({ setSwitchingElements }) => {

    // const [agreementUserID, setAgreementUserID] = useState()
    const idUser = JSON.parse(localStorage.getItem('user'))
    const [dateUser, setDateUser] = useState()



    // console.log("Profile idUser")
    // console.log(setSwitchingElements)



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

    // console.log('pro')
    // console.log(dateUser)

    return (
        < Container maxWidth='md' >
            < Card elevation={4} sx={{
                display: 'flex', justifyContent: 'space-evenly',
                // sx={{
                //     maxWidth: {
                //         xs: "95%",  // для мобильных
                //         sm: "85%",  // для планшетов
                //         md: "100%"   // для десктопов
                //     },
            }}>

                <CardContent >
                    {/* <Box > */}
                    <Stack sx={{ display: 'flex', justifyContent: 'center', }}>
                        <DialogTitle sx={{ display: 'flex', justifyContent: 'center', }}>Profile</DialogTitle>

                        <Stack direction={"row"} spacing={3} sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Avatar
                                sx={{ width: 200, height: 200, borderRadius: 2 }}
                            >
                                <AttributionIcon sx={{ fontSize: '150px' }} />
                            </Avatar>
                            <Stack spacing={3} sx={{ maxWidth: 200 }}>
                                <Typography
                                    variant={'h6'}
                                    component='h2'
                                    sx={{
                                        wordWrap: "break-word"
                                    }}
                                >
                                    {dateUser?.nickName}
                                </Typography>
                                <Typography
                                    variant={'h5'}
                                >
                                    {dateUser?.countre || 'not specified'}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ margin: '20px 0', width: '450px' }}>
                            <Typography
                                variant="body1"
                                // component="div"
                                // sx={{ color: 'text.secondary', width: '200px' }}
                                sx={{
                                    wordWrap: "break-word"
                                }}

                            >
                                {dateUser?.info || "No information given "}
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

                <Stack gap={4} sx={{ display: 'flex', flexDirection: 'row', maxHeight: '284px' }} >
                    <Button onClick={() => setSwitchingElements('EDITPROFILE')}>
                        Edit Profile
                        {/* <Icon></Icon> */}
                    </Button>
                    <Button onClick={() => setSwitchingElements('SECURITY')}>
                        Security
                        {/* <Icon></Icon> */}
                    </Button>
                </Stack>
                {/* </Box> */}

            </Card >
        </Container >
    )
}

export default Profile





//  <Container maxWidth='md' >
//             <Card sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

//               {switching}

//                 <Box sx={{ display: 'flex', flexDirection: 'row' }}>
//                     <Avatar
//                         // alt={comment.nickUser}
//                         // src={comment.iconUser}
//                         sx={{ width: 200, height: 200, borderRadius: 2 }}
//                     >
//                         <AttributionIcon />
//                     </Avatar>
//                     {/* <Icon
//                         component="img"
//                         sx={{ width: 151 }}
//                         // image="/static/images/cards/live-from-space.jpg"
//                         alt="icon"
//                     >
//                     </Icon>
//                     <Stack rowGap={2}>
//                         <Typography component="div" variant="h5">
//                             {dateUsers.nickName}
//                         </Typography>
//                         <Typography
//                             variant="subtitle1"
//                             component="div"
//                             sx={{ color: 'text.secondary' }}
//                         >
//                             Countres
//                         </Typography>
//                         <Typography
//                             variant="subtitle1"
//                             component="div"
//                             sx={{ color: 'text.secondary' }}
//                         >
//                             {dateUsers.infoUser || "No information given"}
//                         </Typography>
//                     </Stack>
//                 </Box>
//                 // {timeString}  или quntity games

//             //   <Box sx={{ display: 'flex', flexDirection: 'row' }}>


//                 < Stack sx={{ display: 'flex', flexDirection: 'row' }}>
//                     <Button onClick={() => setSwitchingElements(3)}>
//                         Edit Profile
//                         <Icon></Icon>
//                     </Button>
//                     <Button onClick={() => setSwitchingElements(4)}>
//                         Security
//                         <Icon></Icon>
//                     </Button>
//                 </Stack>
//                 // </Box>


//             </Card >
//         </Container> 