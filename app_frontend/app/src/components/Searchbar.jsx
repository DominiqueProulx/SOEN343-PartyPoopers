import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Paper,
  Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Searchbar() {
  const categories = [
    'Mathematics',
    'Computer Science',
    'Physics',
    'Biology',
    'Chemistry',
    'Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Data Science',
    'Economics',
    'Philosophy',
    'Linguistics',
    'Psychology',
    'History',
    'Literature',
    'Political Science',
    'Sociology',
    'Environmental Science',
    'Education'
  ];
  
  const types = [  
    'Conference',
    'Workshop',
    'Seminar',
    'Hackaton',
    'NetworkingEvent',
    'CareerFair',
    'Lectures'
  ];
  
  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '800px', margin: '0 auto' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
        {/* Text input for keyword */}
        <TextField
          label="Keyword"
          variant="outlined"
          fullWidth
          sx={{ flexGrow: 1, minWidth: '200px' }}
        />

        {/* Dropdown for category */}
        <FormControl sx={{ minWidth: '150px' }}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Dropdown for type */}
        <FormControl sx={{ minWidth: '150px' }}>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
          >
            {types.map((t) => (
              <MenuItem key={t} value={t}>{t}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Basic date input */}
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          sx={{ minWidth: '150px' }}
        />

        {/* Button group with search and reset */}
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{ height: '56px', backgroundColor: '#F7AA00', color:'#235784' }}
          >
            Search
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<RestartAltIcon />}
            sx={{ height: '56px' }}
          >
            Reset
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}