import { TextField, Divider, Box, Stack, Button } from '@mui/material'
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
			return <Alert severity="info">No comments found</Alert>
		}

		return items.map((item) => (
			<CommentItem key={item.id} comment={item} />
		))
	}, [items, isLoading])

	return (
		<Stack divider={<Divider />} gap={2} sx={{ maxHeight: '75vmin', overflow: 'auto' }}>
			<Box sx={{ width: '100%', maxWidth: '100%' }}>
				<Stack direction="row">
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
			</Box >
			{content}
		</Stack>
	)
}

export default Comments
