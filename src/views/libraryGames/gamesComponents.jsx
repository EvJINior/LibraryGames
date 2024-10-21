import { Container, Card, Typography, CardActionArea, CardContent, CardActions, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useMemo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { type } from '@testing-library/user-event/dist/type';
import GamesApi from '../../api/gamesapi'
import GetDate from '../../service/getdate'

const GameInfo = ({ id }) => {

    const [value, setValue] = React.useState('1')
    const [agreementGameID, setAgreementGameID] = React.useState()
    let gettinID = id
    // const [getDateServer, setGetDateServer] = React.useState()
    // const [val, setVal] = React.useState(id)

    // исправить
    if (gettinID === undefined) {

        gettinID = 1

    }



    // console.log("начальный ID: ", id)
    console.log("начальный agreementGameID: ", agreementGameID)

    React.useEffect(() => {
        // if (agreementGameID == )
        // console.log("начальный ID: ", gettinID)

        const loading = () => {
            GetDate.getByID(`${"?id="}${gettinID}`).then(
                data => data?.forEach(item => {
                    setAgreementGameID(item)
                })
            )
        }
        loading()

    }, [gettinID])

    // if ( agreementGameID)




    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function grapElements(array) {
        let elem = []
        if (array != undefined) {
            for (let k = 0; k < array.length; k++) {
                elem.push(<img src={array[k]} key={k} width="140" height="140" />)
            }
        }
        return (<div>
            {elem}
        </div>)
    }

    // console.log("grapElements()")
    // console.log(grapElements(agreementGameID?.images))


    const currentTab = useMemo(() => {
        switch (value) {
            case '1':
                return agreementGameID?.descriptions
            case '2':
                return (<div> {grapElements(agreementGameID?.images)} </div>)
            case '3':
                return agreementGameID?.comments
            default:
                return agreementGameID?.descriptions
        }
    }, [value, agreementGameID])

    return (
        <Card elevation={2} sx={{ width: '600px' }}>
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Descriptions" value="1" />
                        <Tab label="Images" value='2' />
                        <Tab label="Comments" value='3' />
                    </Tabs>
                </Box>
                {currentTab}
            </Box>
        </Card>
    )
}

export default GameInfo
