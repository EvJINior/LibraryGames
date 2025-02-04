import React, { useMemo } from 'react'
import { Box, List } from '@mui/material'
import { getByList } from '../../service/db'
import GameListItem from './GameListItem'
import Alert from '@mui/material/Alert';
import Loading from './loading'

const GamesList = ({ onChange }) => {
	const [isLoading, setIsLoading] = React.useState(false)
	const [games, setGames] = React.useState([])

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

	React.useEffect(() => {
		findGamesRequest()
	}, [])

	const content = useMemo(() => {

		if (isLoading) {
			// TODO prettify with css
			return <Loading />
		}

		if (!games.length) {
			// TODO prettify with css
			return <Alert severity="info">No games found</Alert>

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
	}, [games, isLoading, onChange])

	return (
		<>
			<Box>
				{content}
			</Box>
		</>
	)
}

export default GamesList
