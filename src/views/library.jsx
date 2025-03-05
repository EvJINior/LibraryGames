import React, { useState } from 'react'
import GamesList from './libraryGames'
import GameDetails from './libraryGames/GameDetails'
import CollectionGamesContent from './libraryGames/CollectionGames/CollectionGamesContent'
import { Box, Card, Container, Divider, Stack, Typography } from '@mui/material'
import AppBar from './AppBar/AppBar'

const Library = () => {
	const [gameID, setGameID] = useState(0)

	return (
		// <>
		<Container
			maxWidth="xl"
			sx={{
				maxHeight: '100vh',
				// height:'100vh',
				display: 'flex',
				backgroundColor: '#0a1e2c',
				color: '#b5b5b5'
				// backgroundColor: '#000080'
			}}
		>
			{/* <Card elevation={3} sx={{ borderRadius: 0, width: '100%', bgcolor: 'text.disabled', color: 'background.paper' }}> */}
			{/* <Card elevation={5} sx={{ height: '100vh', position: 'relative', borderRadius: 0, width: '100vw', color: '#b5b5b5', backgroundColor: '#0a1e2c', }}> */}
			<Card elevation={5} sx={{ height: '100vh', borderRadius: 0, width: '100%', color: '#b5b5b5', backgroundColor: '#0a1e2c', }}>
				{/* <Box sx={{ height: '' }}> */}
				<Stack sx={{ height: '10vh' }}>
					<Box sx={{}}>
						<AppBar />
					</Box>
				</Stack>

				{/* <Stack spacing={2}  direction="row" divider={<Divider orientation='vertical', sx={{ height: '100%' }} />}> */}
				<Stack spacing={2} direction="row" divider={<Divider orientation='vertical' />} sx={{ height: '100vh' }}>
					<Box sx={{
						// height: '100%',
						width: '25%', backgroundColor: '#081016',
					}}>
						<GamesList gameID={gameID} onChange={setGameID} />
					</Box>
					<Box sx={{
						flexGrow: 1,
						height: '90vh',
						background: 'radial-gradient(circle, rgba(78,91,117,1) 0%, rgba(66,73,89,1) 0%, rgba(63,71,87,1) 9%, rgba(58,67,83,1) 25%, rgba(34,48,63,1) 55%, rgba(22,39,54,1) 68%, rgba(10,30,44,1) 79%, rgba(10,30,44,1) 100%)',
						paddingLeft: '10px',
						margin: '20px',
						width: '70%',
					}}>
						{(gameID === -1) ? <CollectionGamesContent setGameID={setGameID} /> : <GameDetails id={gameID} />}
					</Box>
				</Stack>
				{/* </Box> */}
			</Card>
		</Container >
		// </>
	)
}

export default Library
