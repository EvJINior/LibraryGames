import React, { useState, useMemo, useEffect } from 'react'
import { Box, List, TextField, Stack } from '@mui/material'
import { getByList } from '../../service/db'
import GameListItem from './GameListItem'
import Alert from '@mui/material/Alert';
import Loading from './loading'

import SearchString from './SearchString'
import CollectionGamesNavigate from './CollectionGames/CollectionGamesNavigate'

const GamesList = ({ onChange, setCollectionChange }) => {
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
				/>
			)
		}

		return (
			<List>
				{(games || []).map((game) => (
					<GameListItem
						key={game.id}
						game={game}
						onChange={onChange}
					/>
				))}
			</List>
		)
	}, [games, isLoading, onChange, sString])

	return (
		<>
			<Box>
				<Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

					<SearchString games={games} setSearchString={setSearchString} sString={sString} />
					<CollectionGamesNavigate setCollectionChange={setCollectionChange} />
				</Stack>

				{content}
			</Box>
		</>
	)
}

export default GamesList

