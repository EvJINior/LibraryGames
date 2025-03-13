import { TextField, Divider, Card, Stack, Button, Container, Box } from '@mui/material'
import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { getById, add } from '../../../../service/comments'
import CommentItem from './CommentItem'
import Alert from '@mui/material/Alert';
import Loading from '../../../libraryGames/loading'

const Comments = ({ id }) => {
	const [value, setValue] = useState('')
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const userDate = JSON.parse(localStorage.getItem('user'))

	const handleChangeUser = (event) => {
		setValue(event.target.value)
	}

	const getItemsRequest = useCallback(async () => {
		setIsLoading(true)

		getById(id)
			.then((data) => setItems(data))
			.catch((error) => {
				console.error(error)
			})
			.finally(() => setIsLoading(false))
	}, [id])

	useEffect(() => {
		getItemsRequest()
	}, [getItemsRequest, id])

	const handleOnSave = () => {
		if (!value || !id) {
			return
		}

		setIsLoading(true)
		// setTimeout(function () {


		const postComment = {
			gameID: id,
			iconUser: userDate.iconUser || '',
			nickUser: userDate.login,
			commentUser: value,
		}

		add(postComment)
			.then(() => getItemsRequest())
			.catch((error) => console.error(error))
			.finally(() => {
				setValue('')
				setIsLoading(false)
			})
		// }, 2000);

	}

	const content = useMemo(() => {
		if (isLoading) {
			return <Loading />
		}

		if (!items.length) {
			return <Alert sx={{ margin: '10px' }}
				severity="info">No comments found</Alert>
		}

		return (
			items.map((item) => (
				<CommentItem key={item.id} comment={item} />
			))
		)
	}, [items, isLoading])

	return (
		// {/* <Stack > */}
		// <Box sx={{ backgroundColor: 'inherit', color: 'inherit' }}>

		<Box gap={0.5} sx={{ display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
			<Stack sx={{ display: 'flex', flexDirection: 'row' }}>
				<TextField
					fullWidth
					label="Feedback"
					id="outlined-textarea"
					multiline
					disabled={isLoading}
					value={value}
					onChange={handleChangeUser}
				/>
				<Button
					variant="contained"
					type="button"
					onClick={handleOnSave}
					disabled={isLoading}
				>
					Send
				</Button>
			</Stack>
			<Stack gap={2} sx={{
				overflow: 'auto',

				'&::-webkit-scrollbar': {
					width: '10px'
				},

				'&::-webkit-scrollbar-track': {
					'-webkit-box-shadow': '5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset',
					backgroundColor: ' #f9f9fd'
				},

				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '  #356184',
					backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, color-stop(.5, rgba(255, 255, 255, .25)), color-stop(.5, transparent), to(transparent))'
				},
			}}>
				{content}
			</Stack>
		</Box>

		// </Box>
		// {/* </Box> */}

		// {/* </Stack> */}
	)
}

export default Comments
