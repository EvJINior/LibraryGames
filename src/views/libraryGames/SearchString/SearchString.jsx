import { TextField, Stack, Box } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const SearchString = ({ games, setSearchString, sString }) => {

    return (
        <Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <SearchIcon sx={{ fontSize: '30px', margin: '14px' }} />
                <Autocomplete
                    sx={{ width: '100%', backgroundColor: '#3f4757', '& input': { color: 'white' }, }}
                    id="filter"
                    options={games}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField  {...params} label="Search by name" variant="outlined" />}
                    freeSolo
                    value={sString}
                    onChange={(event, sString) => setSearchString(sString)}
                />
            </Box>
        </Stack>
    )
}

export default SearchString