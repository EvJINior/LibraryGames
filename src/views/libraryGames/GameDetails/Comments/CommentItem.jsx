import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward'
import { ThumbDown, ThumbUp } from '@mui/icons-material'

const CommentItem = ({ comment }) => {
	const reaction = useMemo(() => {
		const liked = Math.random() > 0.5

		if (liked) {
			return (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						columnGap: 1,
						background: '#95ffa6',
						maxWidth: 'fit-content',
						padding: 1,
						borderRadius: 1,
					}}
				>
					<ThumbUp />
					<Typography>
						Recommended
					</Typography>
				</Box>
			)
		}

		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					columnGap: 1,
					background: '#ff9595',
					maxWidth: 'fit-content',
					padding: 1,
					borderRadius: 1,
				}}
			>
				<ThumbDown />
				<Typography>
					Not recommended
				</Typography>
			</Box>
		)
	}, [])

	return (
		<Stack direction={'row'} gap={1} px={2}>
			<Stack direction={'row'} gap={1} sx={{ minWidth: 200 }}>
				<Avatar
					alt={comment.nickUser}
					src={comment.iconUser}
					sx={{ width: 46, height: 46, borderRadius: 2 }}
				>
					<AccessibleForwardIcon />
				</Avatar>
				<Typography>{comment.nickUser}</Typography>
			</Stack>
			<Stack sx={{ flexGrow: 1 }}>
				{reaction}
				<Typography>
					{comment.commentUser}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default CommentItem