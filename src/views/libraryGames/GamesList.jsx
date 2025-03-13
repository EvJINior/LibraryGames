import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { Box, List, TextField, Stack, Button } from '@mui/material'
import { getByList } from '../../service/db'
import GameListItem from './GameListItem'
import Alert from '@mui/material/Alert';
import Loading from './loading'

import SearchString from './SearchString'

import { ViewModule } from '@mui/icons-material';
import { common } from '@mui/material/colors';

const GamesList = ({ onChange, gameID }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [games, setGames] = useState([])
	const [sString, setSearchString] = useState(null)

	const findGamesRequest = async () => {
		setIsLoading(true)

		// setTimeout(function () {

		getByList()
			.then((data) => {
				setGames(data || [])
			})
			.finally(() => setIsLoading(false))

		// }, 2000);
	}

	useEffect(() => {
		findGamesRequest()
	}, [])

	const handleOnOpenCards = useCallback(() => {
		onChange(-1)
	}, [onChange])

	const content = useMemo(() => {

		if (isLoading) {
			return (
				<Loading />
			)
		}

		if (!games.length) {
			return (
				// <Box padding={1}>
				<Alert severity="info" sx={{ margin: '10px' }}>
					No games found
				</Alert>
				// </Box >
			)
		}

		if (sString != null) {
			return (
				<GameListItem
					key={sString.id}
					game={sString}
					onChange={onChange}
					gameID={gameID}
				/>
			)
		}

		return (
			<Stack sx={{ overflow: 'auto' }}>
				<List >
					{(games || []).map((game) => (
						<GameListItem
							key={game.id}
							game={game}
							onChange={onChange}
							gameID={gameID}
						/>
					))}
				</List>
			</Stack>
		)
	}, [games, isLoading, onChange, sString, gameID])

	return (
		<>
			<Box gap={0.5} sx={{
				width: '30%',
				backgroundColor: '#081016',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'auto'
			}}>
				<Stack sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>

					<SearchString
						games={games}
						setSearchString={setSearchString}
						sString={sString}
					/>

					<Button
						onClick={handleOnOpenCards}
						sx={{
							width: '10%',
							backgroundColor: gameID === -1 ? '#314660' : undefined,
							'&:hover': {
								backgroundColor: '#314660'
							},
						}}
						variant='outlined'
					>
						<ViewModule
							color="primary"
						/>

					</Button>
				</Stack>
				{content}
			</Box>
		</>
	)
}

export default GamesList

