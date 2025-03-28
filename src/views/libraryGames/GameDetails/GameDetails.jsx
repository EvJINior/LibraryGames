import { Typography, Box, Stack } from '@mui/material'
import React, { useMemo, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Alert from '@mui/material/Alert';
import { getByID } from '../../../service/db'
import Description from './description'
import Images from './Images'
import Comments from './Comments'
import Loading from '../loading'

const TABS = {
	DESCRIPTION: 'description',
	IMAGES: 'images',
	COMMENTS: 'comments',
}

const GameDetails = ({ id = 0 }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [tab, setTab] = useState(TABS.DESCRIPTION)
	const [agreementGameID, setAgreementGameID] = React.useState()

	useEffect(() => {
		setIsLoading(true)
		// setInterval(() => {

		getByID(id).then(data =>
			data?.forEach(item => {
				setAgreementGameID(item)
			}))
			.finally(() => setIsLoading(false))
		// }, 2000);
	}, [id])

	const handleChange = (event, nextTab) => {
		setTab(nextTab)
	}

	const currentTab = useMemo(() => {
		switch (tab) {
			case TABS.DESCRIPTION:
				return <Description agreementGameID={agreementGameID} />
			case TABS.IMAGES:
				return <Images id={id} />
			case TABS.COMMENTS:
				return <Comments id={id} />
			default:
				return agreementGameID?.descriptions
		}
	}, [tab, agreementGameID, id])

	const content = useMemo(() => {

		if (isLoading) {
			return (
				<Box sx={{ width: '70%' }}>
					<Loading />
				</Box>
			)
		}

		if (id === 0) {
			return (
				<Box sx={{ width: '68%', padding: '10px 10px' }}>
					<Alert severity="info">Select a Game from the List</Alert>
				</Box>
			)
		}

		return (
			<>
				<Stack
					sx={{
						color: '#b5b5b5',
						background: 'radial-gradient(circle, rgba(78,91,117,1) 0%, rgba(66,73,89,1) 0%, rgba(63,71,87,1) 9%, rgba(58,67,83,1) 25%, rgba(34,48,63,1) 55%, rgba(22,39,54,1) 68%, rgba(10,30,44,1) 79%, rgba(10,30,44,1) 100%)',
						width: '70%',
						// height:'100%'
					}}>
					<Typography gutterBottom component="div" sx={{ padding: ' 10px 20px' }}>
						{agreementGameID?.name}
					</Typography>
					<Typography variant="body2" sx={{ color: '#b5b5b5', padding: ' 0 20px' }}>
						{agreementGameID?.title}
					</Typography>
					<Box padding={1} sx={{ width: '100%', typography: 'body1' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={tab} onChange={handleChange} aria-label="basic tabs example" >
								<Tab label="Descriptions" value={TABS.DESCRIPTION} sx={{ color: '#1a3e85' }} />
								<Tab label="Images" value={TABS.IMAGES} sx={{ color: '#1a3e85' }} />
								<Tab label="Comments" value={TABS.COMMENTS} sx={{ color: '#1a3e85' }} />
							</Tabs>
						</Box>
					</Box>
					{currentTab}
				</Stack >
			</>
		)
	}, [agreementGameID?.name, agreementGameID?.title, currentTab, id, tab, isLoading])


	return content
}

export default GameDetails
