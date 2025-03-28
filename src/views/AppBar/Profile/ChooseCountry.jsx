import React, { useEffect, useState } from "react"
import { TextField, Stack, Box } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';

const SearchString = ({ items, setChooseCountryUser, chooseCountryUser, errorCountries, setErrorCountries }) => {

    const handlerInputСhooseCountry = (event, chooseCountryUser) => {
        setErrorCountries(false)
        setChooseCountryUser(chooseCountryUser)
    }

    return (
        <Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Autocomplete
                    sx={{
                        width: '100%',
                        //  backgroundColor: '#3f4757',
                        backgroundColor: 'white',
                        '& input': { color: 'black' },
                    }}

                    id="chooseCountry"
                    options={items}
                    getOptionLabel={(option) => option.text || null}
                    renderInput={(params) =>
                        <TextField  {...params}
                            label="Search by name"
                            variant="outlined"
                            error={errorCountries}
                            onChange={() => setErrorCountries(false)}
                        />}
                    value={chooseCountryUser}
                    // noOptionsText={'No Country'}
                    freeSolo
                    onChange={handlerInputСhooseCountry}
                // onChange={(event, chooseCountryUser) => setChooseCountryUser(chooseCountryUser)}
                />
            </Box>
        </Stack>
    )
}

export default SearchString