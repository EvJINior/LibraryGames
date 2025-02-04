import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, ImageList, Stack, ImageListItem, Button, Modal } from '@mui/material';
// import { getByID } from '../../../../../src/service/db';

import ImagesItem from './imagesItem'
import { getById } from '../../../../../src/service/images'
import Alert from '@mui/material/Alert';
import Loading from '../../../../views/libraryGames/loading'

const Images = ({ id }) => {
	const [imagesGame, setImagesGame] = React.useState();
	const [isLoading, setIsLoading] = useState(true)

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

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
			<Stack sx={{ height: 600 }}>
				<ImageList variant="masonry" cols={3} gap={4}>
					{imagesGame?.map((image) => (
						< ImagesItem key={image.key} images={image} />
					))}
				</ImageList >
			</Stack>
		)
	}, [imagesGame])

	return (
		<>
			{content}
		</>
	);
};

export default Images;




/*

const Images = ({ id }) => {
	const [imagesGame, setImagesGame] = React.useState();
	const [images, setImages] = React.useState([]);

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	useEffect(() => {
		getByID(`?id=${id}`).then((data) =>
			data?.map((elem) => {
				setImagesGame(elem);
			})
		);
	}, [id]);

	useMemo(() => {
		const allImages = [];
		imagesGame?.images.map((elem) => allImages.push(elem));
		setImages(allImages);
	}, [id, imagesGame]);

	function OpenScreenModal(elem) {
		return (
			<div>
				<Modal keepMounted open={open} onClose={handleClose}>
					<Box sx={style}>
						
						// <Typography id="keep-mounted-modal-title" variant="h6" component="h2"> 
						// <img src={elem} width="700" height="500" /> 
						// </Typography> 

						</Box>
						</Modal>
					</div>
				);
			}
		
			const grapElem = () => {
				if (imagesGame !== undefined) {
					return (
						<Box sx={{ overflowY: 'scroll' }}>
							<ImageList variant="masonry" cols={3} gap={4}>
								{images.map((elem) => (
									<Button onClick={handleOpen}>
										<ImageListItem key={elem}>
											<img src={`${elem}?w=248&fit=crop&auto=format`} />
										</ImageListItem>
									</Button>
								))}
							</ImageList>
						</Box>
					);
				}
			};
		
			return (
				<>
					{grapElem()}
					{OpenScreenModal()}
				</>
			);
		};
		

*/