import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ImageList, Box } from '@mui/material';
import ImagesItem from './ImagesItem'
import { getById } from '../../../../service/images'
import Alert from '@mui/material/Alert';
import Loading from '../../loading'

const Images = ({ id }) => {
	const [imagesGame, setImagesGame] = React.useState();
	const [isLoading, setIsLoading] = useState(true)

	const getImagesRequest = useCallback(async () => {
		setIsLoading(true)

		getById(id)
			.then((data) => setImagesGame(data))
			.catch((error) => {
				console.error(error)
			})
			.finally(() => setIsLoading(false))

	}, [id]);

	useEffect(() => {
		getImagesRequest()
	}, [getImagesRequest, id])

	const content = useMemo(() => {
		if (isLoading) {
			return <Loading />
		}

		if (!imagesGame.length) {
			return <Alert severity="info">No images found</Alert>
		}
		return (
			<Box sx={{
				overflow: 'auto',

				'&::-webkit-scrollbar': {
					width: '10px'
				},
				'&::-webkit-scrollbar-track': {
					'-webkit-box-shadow': '5px 5px 5px - 5px rgba(34, 60, 80, 0.2) inset',
					backgroundColor: ' #f9f9fd',
					borderRadius: '10px'
				},
				'&::-webkit-scrollbar-thumb': {
					borderRadius: '10px',
					background: 'linear-gradient(180deg, #00c6fb, #005bea)'
				}
			}}>
				<ImageList variant="masonry" cols={3} gap={4} >
					{imagesGame?.map((image) => (
						< ImagesItem key={image.id} images={image} />
					))}
				</ImageList >
			</Box >
		)
	}, [imagesGame, id])

	return (<>
		{content}
	</>);
};

export default Images;
