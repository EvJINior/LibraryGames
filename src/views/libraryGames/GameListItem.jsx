import React, { useCallback } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const GameListItem = ({ game, onChange }) => {

	const handleOnChange = useCallback(() => {
		onChange(game.id)
	}, [game.id, onChange])

	return (
		<ListItem sx={{ textTransform: 'uppercase' }} value={game.id} disablePadding>
			<ListItemButton onClick={handleOnChange}>
				<ListItemIcon>
					<img
						src={game.icon}
						width={40}
						height={40}
						alt={`${game.name} icon`}
					/>
				</ListItemIcon>
				<ListItemText primary={game.name} />
			</ListItemButton>
		</ListItem>
	);
};

export default GameListItem