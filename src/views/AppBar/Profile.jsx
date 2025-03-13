import React from "react";
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
import { Icon, Button } from "@mui/material";

const Profile = () => {
    console.log("Profile")
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Icon
                    component="img"
                    sx={{ width: 151 }}
                    // image="/static/images/cards/live-from-space.jpg"
                    alt="icon"
                >
                </Icon>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        NickName
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Countres
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        info about accaunt
                    </Typography>
                </CardContent>
                <Box>
                    <Button>
                        sd
                        <Icon></Icon>
                    </Button>
                    <Button>
                        as
                        <Icon></Icon>
                    </Button>
                </Box>

            </Box>

        </Card >
    )
}

export default Profile