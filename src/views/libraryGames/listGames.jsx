import React from 'react';
import { Card, CardActionArea, Typography, CardContent, Box, TextField, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import GamesComponents from './gamesComponents';
import JsonServer from '../../server/db.json'
import GamesApi from '../../api/gamesapi'
import GetDate from '../../service/getdate'

const ListOfGames = ({ onChange }) => {

    const [selectedGameID, setSelectedGameID] = React.useState([])
    // const [usersLoading, setUsersLoading] = React.useState(false)
    // const [info, setInfo] = React.useState()

    // React.useEffect(() => (
    //     console.log(info)
    // ), [info])   

    // console.log(GetDate())

    React.useEffect(() => {
        const loadData = () => {
            // setUsersLoading(true)
            GetDate.getByList().then(
                data => setSelectedGameID(data)
            )
            // setUsersLoading(false)
        };
        loadData()
    }, [])

    // console.log('selec')
    // console.log(selectedGameID)

    const handleChange = (event) => {
        // console.log(event.selectedGameID)

        onChange(event.target.value)

    }

    const handleIDChange = (event) => {

    }


    // console.log(info?.images)

    return (<>
        <Box >
            <Card elevation={3} sx={{ width: '200px' }}>
                <List>
                    {
                        selectedGameID?.map((obj) => (
                            <ListItem
                                key={obj.id}
                                value={obj.id}
                                onClick={handleChange}

                            // onChange={handleChange}
                            >
                                <img src={obj.icon} width="40" height="40" />
                                {obj.name}
                            </ListItem>
                        ))

                    }
                    {/* <ListItem
                    >
                        My Games
                    </ListItem>
                    <ListItem
                        onClick={handleChange}
                    >
                        <img src="https://cdn-icons-png.flaticon.com/512/871/871499.png" width="40" height="40" alt="dota 2" title="dota 2" />
                        DOTA 2
                    </ListItem>
                    <ListItem
                        button
                    >
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2073850/header.jpg?t=1727450301
                        " width="40" height="40" alt="dota 2" title="dota 2" />
                        THE FINALS
                    </ListItem> */}
                </List>
            </Card >
        </Box >
    </>)
}

export default ListOfGames








{/* <Box >
<Card elevation={3} >
    <CardContent sx={{ width: '100%', typography: 'body1' }}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Typography gutterBottom variant="h6" component="div">
            ListOfGames
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            ListOfGames
        </Typography>
    </CardContent>
</Card >
</Box> */}