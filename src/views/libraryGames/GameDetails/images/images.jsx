import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ImageList, Stack } from '@mui/material';
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
			<Stack sx={{ overflow: 'auto' }}>
				<ImageList variant="masonry" cols={3} gap={4} >
					{imagesGame?.map((image) => (
						< ImagesItem key={image.id} images={image} />
					))}
				</ImageList >
			</Stack>
		)
	}, [imagesGame, id])

	return (<>
		{content}
	</>);
};

export default Images;
