import React, { useState } from 'react';
import ListOfGames from './libraryGames/listGames';
import GamesComponents from './libraryGames/gamesComponents';
import { Container, Card, Typography, CardActionArea, CardContent, CardActions, Button, Box } from '@mui/material';

const Library = () => {
    const [id, setID] = useState()

    const handleChange = (id) => {
        setID(id)
    }

    return (<>
        <Container sx={{ display: 'flex' }}>
            <ListOfGames onChange={handleChange} />
            <GamesComponents id={id} />
        </Container>
    </>
    )
}

export default Library

// < Card sx = {{ transform: 'rotate(-90deg)' }}>
//     <CardActionArea >
//         <CardContent>
//         </CardContent>
//     </CardActionArea>
//     </Card >
