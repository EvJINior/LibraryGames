import React, { useEffect, useMemo } from 'react';
import { Box, ImageList, ImageListItem, Button, Modal, Typography } from '@mui/material';
import { getByID } from '../../../service/db'

const Images = ({ id }) => {

    const [imagesGame, setImagesGame] = React.useState()
    const [images, setImages] = React.useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {

        getByID(`${"?id="}${id}`).then(
            data => data?.map(elem => {
                setImagesGame(elem)
            })
        )

    }, [id])

    useMemo(() => {
        const allImages = []
        imagesGame?.images.map(elem => (
            allImages.push(elem)
        ))
        setImages(allImages)
    }, [id, imagesGame])

    function OpenScreenModal(elem) {
        return (
            <div>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>

                        {/* <Typography id="keep-mounted-modal-title" variant="h6" component="h2"> */}
                        {/* <img src={elem} width="700" height="500" /> */}
                        {/* </Typography> */}
                    </Box>
                </Modal>
            </div>
        );
    }

    const grapElem = () => {
        if (imagesGame !== undefined) {
            return (
                <Box sx={{ overflowY: 'scroll' }} >
                    <ImageList variant="masonry" cols={3} gap={4}>
                        {images.map(elem => (
                            <Button onClick={handleOpen}>
                                <ImageListItem key={elem}>
                                    <img
                                        src={`${elem}?w=248&fit=crop&auto=format`}
                                    // loading="lazy"
                                    />

                                </ImageListItem>
                            </Button>
                        ))}
                    </ImageList>
                </Box >
            )
        }
    }

    return (<>
        {grapElem()}
        {OpenScreenModal()}
    </>)
}

export default Images



{/* <div sx={{ flexGrow: 1 }}> */ }
{/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {grapElem()}
        </Grid> */}
{/* </div> */ }

// <div key={elem} >
// <Grid item xs={2} sm={2} md={2} key={elem}>
//     <button
//         variant='contained'
//         type='button'
//         onClick={() => increaseSize(elem)}
//     >
//         < img src={elem} width="140" height="140" />
//     </button>
// </Grid>
// </div>