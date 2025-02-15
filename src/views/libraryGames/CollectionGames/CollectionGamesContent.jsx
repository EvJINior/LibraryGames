import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { Grid, Button } from '@mui/material'
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
            console.log("load")
            return <Loading />
        }

        if (!games.length) {
            return <Alert severity="info">No games found</Alert>
        }

        return (
            <Grid container spacing={2}>
                {games.map(item => (
                    < Grid
                        item
                        lg={2}
                        key={item.id}
                        onClick={handleOnChange}
                    >
                        <Button color="secondary" >
                            <img src={`${item.imageTitle}`} width={110} height={150} id={item.id} />
                        </Button>
                    </Grid>
                ))}
            </Grid >
        )
    }, [games, isLoading, setGameID])

    return (<>
        {content}
    </>)
}

export default CollectionGamesContent