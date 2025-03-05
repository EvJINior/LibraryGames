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
			return <Loading />
		}

		if (!games.length) {
			return <Alert severity="info">No games found</Alert>
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
			<List sx={{
				height: '10%',
			}}>
				{(games || []).map((game) => (
					<GameListItem
						key={game.id}
						game={game}
						onChange={onChange}
						gameID={gameID}
					/>
				))}
			</List>
		)
	}, [games, isLoading, onChange, sString, gameID])

	return (
		<>
			<Box sx={{
				width: '100%',
				// height: '100%',
				// overflow: 'auto'
			}}>
				<Stack sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					height: '100%'
				}}>

					<SearchString
						games={games}
						setSearchString={setSearchString}
						sString={sString}
						// sx={{ width: '100vw' }}
						sx={{ width: '100vw', height: '10%' }}
					/>

					<Button
						onClick={handleOnOpenCards}
						sx={{
							// height: '6%',
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
				<Stack sx={{
					height: '100%',
					overflow: 'auto'
				}}>
					{content}
				</Stack>
			</Box>
		</>
	)
}

export default GamesList

