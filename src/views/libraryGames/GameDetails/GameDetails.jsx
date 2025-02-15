import { Typography, Box, Stack } from '@mui/material'
import React, { useMemo, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Alert from '@mui/material/Alert';
import { getByID } from '../../../service/db'
import Description from './description'
import Images from './Images'
import Comments from './Comments'

const TABS = {
	DESCRIPTION: 'description',
	IMAGES: 'images',
	COMMENTS: 'comments',
}

const GameDetails = ({ id = 0 }) => {

	const [tab, setTab] = useState(TABS.DESCRIPTION)
	const [agreementGameID, setAgreementGameID] = React.useState()

	useEffect(() => {
		getByID(id).then((data) =>
			data?.forEach((item) => {
				setAgreementGameID(item)
			})
		)
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

		if (id === 0) {
			return <Alert severity="info">Select a Game from the List</Alert>
		}

		return (
			<Stack direction="column" spacing={2}>
				<Typography gutterBottom component="div" sx={{ flexGrow: 1 }}>
					{agreementGameID?.name || 'Select a Game from the List'}
				</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					{agreementGameID?.title}
				</Typography>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
							<Tab label="Descriptions" value={TABS.DESCRIPTION} />
							<Tab label="Images" value={TABS.IMAGES} />
							<Tab label="Comments" value={TABS.COMMENTS} />
						</Tabs>
					</Box>
					{currentTab}
				</Box>
			</Stack>
		)
	}, [agreementGameID?.name, agreementGameID?.title, currentTab, id, tab])


	return content
}

export default GameDetails
