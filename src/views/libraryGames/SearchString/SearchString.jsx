import { TextField, Stack } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';

const SearchString = ({ games, setSearchString, sString }) => {

    return (
        <Stack spacing={2} width='340px' >
            <Autocomplete
                id="filter"
                options={games}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Search by name" variant="outlined" />}
                value={sString}
                onChange={(event, sString) => setSearchString(sString)}
            />
        </Stack>
    )
}

export default SearchString