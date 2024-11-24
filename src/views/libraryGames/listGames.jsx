import React from 'react';
import { Card, Button, Box, List, ListItem } from '@mui/material';
import { getByList } from '../../service/db'

const ListOfGames = ({ onChange }) => {

    const [selectedGameID, setSelectedGameID] = React.useState([])

    React.useEffect(() => {
        const loadData = () => {
            getByList().then(
                data => setSelectedGameID(data)
            )
        };
        loadData()
    }, [])

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (<>
        <Box >
            <Card elevation={3} sx={{ width: '220px' }}>
                <List>
                    {
                        selectedGameID?.map((obj) => (
                            <Button key={obj.id}>
                                <ListItem
                                    key={obj.id}
                                    sx={{ textTransform: "uppercase" }}
                                    value={obj.id}
                                    onClick={handleChange}
                                >
                                    <img src={obj.icon} width="40" height="40" />
                                    {obj.name}
                                </ListItem>
                            </Button>
                        ))
                    }
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