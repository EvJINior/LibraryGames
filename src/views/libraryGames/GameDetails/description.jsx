import React, { useMemo } from 'react';
import { Stack, Typography } from '@mui/material'

const Description = ({ agreementGameID }) => {

    return (
        <Stack padding={2} sx={{ color: '#b5b5b5', overflow: 'auto' }}>
            <Typography  >
                {agreementGameID?.descriptions}
            </Typography>
        </Stack>
    )
}

export default Description