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

		getByID(id).then((data) =>
			data?.forEach((item) => {
				setAgreementGameID(item)
			}))
			.finally(() => setIsLoading(false))
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
			return <Loading />
		}

		if (id === 0) {
			return <Alert severity="info">Select a Game from the List</Alert>
		}

		return (
			<Stack direction="column" sx={{ height: '100%', color: '#b5b5b5' }}>
				{/* <Typography gutterBottom component="div" sx={{ flexGrow: 1 }}> */}
				<Typography gutterBottom component="div" sx={{
					// height: '1px' 
				}} >
					{agreementGameID?.name || 'Select a Game from the List'}
				</Typography>
				<Typography variant="body2" sx={{
					// height: '1px',
					color: '#b5b5b5'
				}}>
					{agreementGameID?.title}
				</Typography>
				<Box sx={{
					// height: '1px', 
					width: '100%', typography: 'body1'
				}}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={tab} onChange={handleChange} aria-label="basic tabs example" >
							<Tab label="Descriptions" value={TABS.DESCRIPTION} sx={{ color: '#1a3e85' }} />
							<Tab label="Images" value={TABS.IMAGES} sx={{ color: '#1a3e85' }} />
							<Tab label="Comments" value={TABS.COMMENTS} sx={{ color: '#1a3e85' }} />
						</Tabs>
					</Box>
					{currentTab}
				</Box>
				{/* <Box sx={{ height: '100vh', color: '#b5b5b5' }}> */}
				{/* <Stack sx={{ height: '100vh' }}> */}

				{/* </Stack> */}
				{/* </Box> */}
			</Stack >

		)
	}, [agreementGameID?.name, agreementGameID?.title, currentTab, id, tab, isLoading])


	return content
}

export default GameDetails
