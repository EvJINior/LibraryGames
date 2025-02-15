import React, { useCallback } from 'react'
import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'
import ViewModuleIcon from '@mui/icons-material/ViewModule'

const CollectionGamesNavigate = ({ setCollectionChange }) => {

    const handleChange = useCallback(() => {
        setCollectionChange(-1)
    }, [setCollectionChange])

    return (
        <Stack spacing={2} width='60px'  >
            <ToggleButtonGroup
                size="large"
                orientation='vertical'
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value={''}  >
                    <ViewModuleIcon color="primary" />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}

export default CollectionGamesNavigate