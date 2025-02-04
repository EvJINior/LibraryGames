import { Avatar, Box, Stack, Typography, Fade, Modal, Button, Backdrop } from '@mui/material'
import React, { useMemo, useCallback, useEffect } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { ImageList, ImageListItem } from '@mui/material';



const ImagesItem = ({ images }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = useCallback(() => setOpen(true), [])
    const handleClose = useCallback(() => setOpen(false), [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'black',
        border: '6px solid #000',
    };

    function nextImage() {

    }

    function OpenScreenModal() {
        return (
            <div>
                <Modal keepMounted open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <img src={images.images} width="800" height="600" />
                        <div sx={{ justifyContent: "space-between" }}>
                            <Button >
                                <KeyboardArrowLeftIcon />
                            </Button>
                            <Button onClick={nextImage}>
                                <KeyboardArrowRightIcon />
                            </Button>
                        </div>
                    </Box>

                </Modal>
            </div >
        );
    }

    return (<>

        <Button onClick={handleOpen}>
            <ImageListItem >
                <img src={`${images.images}?w=248&fit=crop&auto=format`} />
            </ImageListItem>
        </Button>
        {OpenScreenModal()}

    </>)
}

export default ImagesItem