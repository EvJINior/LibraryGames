import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { Grid, Button, Box, Stack } from '@mui/material'
import Alert from '@mui/material/Alert';
import { getByList } from '../../../service/db'
import Loading from '../loading'

const CollectionGamesContent = ({ setGameID }) => {

    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        // setTimeout(function () {
        getByList()
            .then((data) => {
                setGames(data || [])
            })
            .finally(() => setIsLoading(false))
        // }, 2000);

    }, [])

    const handleOnChange = useCallback((event) => {
        setGameID(+event.target.id)
    }, [setGameID])

    const content = useMemo(() => {

        if (isLoading) {
            return <Loading />
        }

        if (!games.length) {
            return (
                <Box padding={1} sx={{ width: '70%' }}>
                    <Alert severity="info" >
                        No games found
                    </Alert>
                </Box>
            )

        }

        return (
            <Box sx={{
                width: '70%',
                overflow: 'auto',
                background: 'radial-gradient(circle, rgba(78,91,117,1) 0%, rgba(66,73,89,1) 0%, rgba(63,71,87,1) 9%, rgba(58,67,83,1) 25%, rgba(34,48,63,1) 55%, rgba(22,39,54,1) 68%, rgba(10,30,44,1) 79%, rgba(10,30,44,1) 100%)',
            }}>
                <Grid
                    container
                    spacing={4}
                    padding={2}
                >
                    {games.map(item => (
                        < Grid
                            item
                            lg={2}
                            key={item.id}
                            onClick={handleOnChange}

                        // sx={{ padding: '20' }}
                        >
                            <div >
                                <Button sx={{
                                    padding: '0',
                                    boxShadow: '0px 4px 37px -1px rgba(11, 12, 13, 0.71)',
                                    transition: '2s',
                                    '&:hover': {
                                        boxShadow: '0px 4px 37px -1px rgb(255, 255, 255)',
                                        transition: '1s',
                                        transform: 'scale(1.05)'
                                    },
                                    '&:active': {
                                        boxShadow: '0px 4px 37px -1px rgba(214, 221, 227, 0.5)',
                                        color: 'rgba(190, 193, 203, 0.78)',
                                    }
                                }}>
                                    <img src={`${item.imageTitle}`} width={120} height={170} id={item.id} />

                                </Button >
                            </div>
                        </Grid>
                    ))}
                </Grid >
            </Box>
        )
    }, [games, isLoading, setGameID])

    return (<>
        {content}
    </>)
}

export default CollectionGamesContent