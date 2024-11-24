import { Card, Typography, CardContent, Box } from '@mui/material';
import React, { useMemo, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { getByID } from '../../service/db'

import Description from './gameInfo/description'
import Images from './gameInfo/images'
import Comments from './gameInfo/comments'

const GameInfo = ({ id }) => {

    const [value, setValue] = React.useState('1')
    const [agreementGameID, setAgreementGameID] = React.useState()

    useEffect(() => {

        getByID(`${"?id="}${id}`).then(
            data => data?.forEach(item => {
                setAgreementGameID(item)
            })
        )

    }, [id])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const currentTab = useMemo(() => {
        switch (value) {
            case '1':
                return <Description agreementGameID={agreementGameID} />
            case '2':
                return <Images id={id} />
            case '3':
                return <Comments id={id} />
            default:
                return agreementGameID?.descriptions
        }
    }, [value, agreementGameID])

    const addOptions = useMemo(() => {
        if (id !== undefined) {
            return (
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
            )
        }
    }, [value, agreementGameID])

    return (
        <Card elevation={2} sx={{ width: '600px' }}>

            <CardContent >
                <Typography gutterBottom component="div" sx={{ flexGrow: 1 }}>
                    {agreementGameID?.name || "Select a Game from the List"}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {agreementGameID?.title}
                </Typography>
            </CardContent>
            {addOptions}
        </Card>
    )
}

export default GameInfo