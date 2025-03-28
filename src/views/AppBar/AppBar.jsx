import React, { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import Profile from './Profile'
import { Routes, Route, } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import Auth from '../Authorization/Auth';

const pages = ['Library', 'Profile'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({ setSwitchingElements }) => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    const [ElUser, setElUser] = React.useState(null)
    const [profilUser, setProfilUser] = React.useState(null)

    const handleEL = (event) => {
        setSwitchingElements(event.target.innerText);
        // console.log(event.target.innerText)
        // if (event.target.innerText === "PROFILE") {
        //     console.log(event.target.innerText)
    };
    // const handleBack = (event) => {
    //     return (<Routes>
    //         <Route path='/' element={<Profile />} />
    //     </Routes>
    //     )
    // };

    const handleProfil = useCallback((event) => {
        setSwitchingElements('PROFILE')
    }, [setSwitchingElements])

    return (
        <AppBar position='static' sx={{ backgroundColor: '#081016', }}>
            {/* <AppBar sx={{ backgroundColor: '#081016', }}> */}
            <Container maxWidth='x2' sx={{}}>
                <Toolbar disableGutters>
                    <Box >
                        <IconButton onClick={handleProfil} sx={{ color: 'white' }}>
                            <ArrowBackIcon />

                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >

                            {pages.map((page) => (
                                <MenuItem key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}

                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleEL}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {/* <Profile /> */}
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open profile">
                            <IconButton onClick={handleProfil} sx={{ p: 0 }}>

                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const ResponsiveAppBar = () => {

//     return (
//         // <AppBar sx={{ minWidth: 400, backgroundColor: '#081016' }}>
//         <AppBar sx={{ height: '6vh' }}>
//             <Container >
//                 <Toolbar disableGutters>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default ResponsiveAppBar;