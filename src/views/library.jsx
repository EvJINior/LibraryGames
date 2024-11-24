import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import ListOfGames from './libraryGames/listGames';
import GamesComponents from './libraryGames/gamesComponents';
import { Container, Card, Typography, CardActionArea, CardContent, CardActions, Button, Box } from '@mui/material';

const Library = () => {
    const [id, setID] = useState()

    const handleChange = (id) => {
        setID(id)
    }

    return (<>
        {/* <AppBar position="static">
            <Toolbar>
                <Typography gutterBottom component="div" sx={{ flexGrow: 1 }}>
                    Photos
                </Typography>
                <IconButton
                    // onClick={handleMenu}
                    color="inherit"
                >
                </IconButton>
            </Toolbar>
        </AppBar> */}
        <Container sx={{ display: 'flex' }}>

            <ListOfGames onChange={handleChange} />
            <GamesComponents id={id} />
        </Container>
    </>
    )
}

export default Library