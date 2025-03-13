import React, { useState, useMemo } from 'react'
import GamesList from './libraryGames'
import GameDetails from './libraryGames/GameDetails'
import CollectionGamesContent from './libraryGames/CollectionGames/CollectionGamesContent'
import { Box, Card, Container, Divider, Stack, TextField, Typography, Grid, CardContent } from '@mui/material'
import AppBar from './AppBar/AppBar'

import Profile from './AppBar/Profile'

const Library = () => {
	const [gameID, setGameID] = useState(0)
	const [switchingElements, setSwitchingElements] = useState(0)
	console.log(switchingElements)

	const currentTab = useMemo(() => {
		switch (switchingElements) {
			case 'lIBRARY':
				return (<Card elevation={3}
					sx={{ backgroundColor: '#0a1e2c' }}>
					<Box sx={{
						display: 'flex',
						flexDirection: 'row',
						height: '90vh',
					}}>
						<GamesList gameID={gameID} onChange={setGameID} />

						{(gameID === -1) ? <CollectionGamesContent setGameID={setGameID} /> : <GameDetails id={gameID} />}
					</Box>
				</Card >)
			case 'PROFILE':
				return (<Profile />)
			default:
				return (

					<Card elevation={3}
						sx={{ backgroundColor: '#0a1e2c', }}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								height: '90vh'
							}}
						>
							<GamesList gameID={gameID} onChange={setGameID} />

							{(gameID === -1) ? <CollectionGamesContent setGameID={setGameID} /> : <GameDetails id={gameID} />}
						</Box>
					</Card >
				)
		}
	}, [switchingElements, gameID])

	return (
		<>
			<Container
				maxWidth="xl"
				sx={{
					// maxHeight: '100vh',
					backgroundColor: '#0a1e2c',
					color: '#b5b5b5',
					height: '100vh'
				}}
			>

				<Box sx={{ height: '10vh' }}>
					<AppBar setSwitchingElements={setSwitchingElements} />

					{currentTab}
				</Box>

			</Container >

		</>
	)
}

export default Library















// <Container
// maxWidth="xl"
// sx={{
// 	// maxHeight: '100vh',

// 	// height: '100vh',
// 	// display: 'block',
// 	// flexDirection: 'column',
// 	backgroundColor: '#0a1e2c',
// 	color: '#b5b5b5',
// 	// backgroundColor: '#000080'
// }}
// >

// {/* <Box sx={{ height: '100vh' }}> */}


// {/* <Card > */}
// {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}> */}

// {/* </Box> */}

// {/* <Card elevation={3} sx={{ borderRadius: 0, width: '100%', bgcolor: 'text.disabled', color: 'background.paper' }}> */}
// {/* <Card elevation={5} sx={{ height: '100vh', position: 'relative', borderRadius: 0, width: '100vw', color: '#b5b5b5', backgroundColor: '#0a1e2c', }}> */}
// {/* <Card elevation={2} sx={{
// // height: '100vh',
// borderRadius: 0, width: '100%', color: '#b5b5b5', backgroundColor: '#0a1e2c',
// // display: 'flex', flexDirection: 'row'
// }}> */}
// {/* <Card sx={{ height: '100vh' }}> */}

// {/* <Stack sx={{}}> */}

// {/* <Box sx={{ height: '10vh' }}> */}

// < Box sx={{}}>
// 	<AppBar />
// </Box>

// {/* <Stack spacing={2} direction="row" divider={<Divider orientation='vertical' />}
// 	sx={{ height: '90vh' }}
// > */}
// {/* <CardContent sx={{ height: '100vh' }}> */}
// <Box sx={{ display: 'flex', flexDirection: 'row' }} >

// < Box sx={{ width: '30%', backgroundColor: '#081016' }}>
// <GamesList gameID={gameID} onChange={setGameID} />
// </Box>
// <Box sx={{
// 	// height: '90vh',
// 	flexGrow: 1,
// 	background: 'radial-gradient(circle, rgba(78,91,117,1) 0%, rgba(66,73,89,1) 0%, rgba(63,71,87,1) 9%, rgba(58,67,83,1) 25%, rgba(34,48,63,1) 55%, rgba(22,39,54,1) 68%, rgba(10,30,44,1) 79%, rgba(10,30,44,1) 100%)',
// 	paddingLeft: '10px',
// 	width: '70%',
// }}>
// {(gameID === -1) ? <CollectionGamesContent setGameID={setGameID} /> : <GameDetails id={gameID} />}
// </Box>

// </Box>
// {/* </Card> */}
// {/* </CardContent> */}
// {/* </Stack > */}
// {/* </Stack> */}
// {/* </Card> */}
// {/* </Card> */}

// {/* </Box> */}




// </Container >


/* {(switchingElements === 0) ? <Card elevation={3}
					sx={{ backgroundColor: '#0a1e2c' }}>
					<Box sx={{
						display: 'flex',
						flexDirection: 'row',
						height: '90vh',
					}}>
						<GamesList gameID={gameID} onChange={setGameID} />

						{(gameID === -1) ? <CollectionGamesContent setGameID={setGameID} /> : <GameDetails id={gameID} />}
					</Box>
				</Card > : <Profile />} */