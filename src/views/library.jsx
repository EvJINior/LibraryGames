import React, { useState } from 'react'
import GamesList from './libraryGames'
import GameDetails from './libraryGames/GameDetails'
import CollectionGamesContent from './libraryGames/CollectionGames/CollectionGamesContent'
import { Box, Card, Container, Divider, Stack } from '@mui/material'

const Library = () => {
	const [gameID, setGameID] = useState(0)

	return (
		<>
			<Container
				maxWidth="xl"
				sx={{
					maxHeight: '100vh',
					display: 'flex',
				}}
			>
				{/* <Card elevation={3} sx={{ borderRadius: 0, width: '100%', bgcolor: 'text.disabled', color: 'background.paper' }}> */}
				<Card elevation={3} sx={{ borderRadius: 0, width: '100%' }}>
					<Stack direction="row" divider={<Divider orientation='vertical' sx={{ height: '100vh' }} />}>
						<Box sx={{ minWidth: 400 }}>
							<GamesList onChange={setGameID} setCollectionChange={setGameID} />
						</Box>
						<Box sx={{ flexGrow: 1 }}>
							{(gameID === -1) ? <CollectionGamesContent setGameID={setGameID} /> : <GameDetails id={gameID} />}
						</Box>
					</Stack>
				</Card>
			</Container>
		</>
	)
}

export default Library
