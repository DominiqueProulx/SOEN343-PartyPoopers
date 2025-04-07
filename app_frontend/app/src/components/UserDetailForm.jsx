import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  OutlinedInput,
  Button,
  Typography,
  Paper,
  Stack,
  Snackbar,
  Alert
} from '@mui/material';

export default function UserDetailForm({ user }) {
  const categories = [
    "Mathematics",
    "Computer Science",
    "Physics",
    "Biology",
    "Chemistry",
    "Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Data Science",
    "Economics",
    "Philosophy",
    "Linguistics",
    "Psychology",
    "History",
    "Literature",
    "Political Science",
    "Sociology",
    "Environmental Science",
    "Education",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Parse favorites string to array when component mounts or user changes
  useEffect(() => {
    if (user && user.favorites) {
      setSelectedCategories(parseFavorites(user.favorites));
    }
  }, [user]);

  //Parse the favorites string from PostgreSQL array format to JavaScript array
  // This function assumes the input is a string in the format: "{item1,item2,...}"
  const parseFavorites = (favoritesString) => {
    // Remove the curly braces
    const withoutBraces = favoritesString.replace('{', '').replace('}', '');
   
    // Split by comma, but keep quoted strings intact
    return withoutBraces.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
      .map(item => item.trim().replace(/^"(.*)"$/, '$1')); // Remove quotes if present
  };

  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    
    // On autofill we get a stringified value.
    const newCategories = typeof value === 'string' ? value.split(',') : value;
    
    // Limit to maximum 4 categories
    if (newCategories.length <= 4) {
      setSelectedCategories(newCategories);
    } else {
      setSnackbarMessage("You can select a maximum of 4 categories");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
    }
  };

  const handleSaveCategories = async () => {
    try {
      // Format categories for PostgreSQL array format
      const formattedCategories = `{${selectedCategories.map(cat => 
        cat.includes(',') ? `"${cat}"` : cat).join(',')}}`;
      
      // API call to update user categories
      const port =  5001;
      const response = await fetch(`http://localhost:${port}/api/user/updatePref/${user.uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          favorites: formattedCategories
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update preferences');
      }
      
      setSnackbarMessage("Categories updated successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error updating categories:', error);
      setSnackbarMessage("Failed to update categories");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (!user) {
    return <Typography>No user logged in</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '800px', margin: '20px auto' }}>
      <Typography variant="h5" gutterBottom color="secondary">
        User Profile
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">User ID: {user.uid}</Typography>
        <Typography variant="subtitle1">Email: {user.email}</Typography>
        <Typography variant="subtitle1">Name: {user.user_name}</Typography>
      </Box>
      
      <Typography variant="h6" gutterBottom color="secondary" sx={{ mt: 3 }}>
        Preferred Categories
      </Typography>
      
      <FormControl sx={{ width: '100%', mb: 3 }}>
        <InputLabel id="category-select-label">Categories</InputLabel>
        <Select
          labelId="category-select-label"
          multiple
          value={selectedCategories}
          onChange={handleCategoryChange}
          input={<OutlinedInput label="Categories" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="caption" sx={{ mt: 1 }}>
          Select up to 5 categories that interest you
        </Typography>
      </FormControl>
      
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button 
         color="secondary"
          variant="outlined" 
          onClick={() => setSelectedCategories(parseFavorites(user.favorites))}
        >
          Reset
        </Button>
        <Button 
          variant="contained"
          sx={{ backgroundColor: '#F7AA00', color: '#235784' }}
          onClick={handleSaveCategories}
          disabled={selectedCategories.length === 0}
        >
          Save Categories
        </Button>
      </Stack>
      
      {/* Current selected categories */}
      {selectedCategories.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your Selected Categories:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {selectedCategories.map((category, index) => (
              <Chip 
                key={index} 
                label={category} 
                color="secondary" 
                variant="outlined" 
                onDelete={() => {
                  const newCategories = selectedCategories.filter((_, i) => i !== index);
                  setSelectedCategories(newCategories);
                }}
              />
            ))}
          </Box>
        </Box>
      )}
      
      {/* Notification Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity} 
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
}