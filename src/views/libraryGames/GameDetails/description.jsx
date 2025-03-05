import React, { useMemo } from 'react';
import { Stack, Typography } from '@mui/material'

const Description = ({ agreementGameID }) => {

    return (
        <Stack sx={{ color: '#b5b5b5' }}>
            <Typography>
                {agreementGameID?.descriptions}
            </Typography>
        </Stack>
    )
}

export default Description