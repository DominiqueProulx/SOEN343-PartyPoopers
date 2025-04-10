import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import useRegister from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';

function RegistrationBox() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { register } = useRegister();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setHelperText('Invalid email');
    } else {
      try {
        const registerBody = {
          user_name: username,
          email: email,
          user_password: password
        };
        setHelperText('');
        await register(registerBody);
        setUsername('');
        setEmail('');
        setPassword('');
        setOpenSnackbar(true); // Show success popup
      } catch (err) {
        console.error('Registration failed:', err);
      }
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '400px', margin: '0 auto', marginTop: '100px' }}>
      <Box component="form" onSubmit={handleRegister} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          helperText={helperText}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <span style={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/login')}>
            Login
          </span>
        </Typography>
      </Box>
      
      {/* Snackbar for success message */}
      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => {setOpenSnackbar(false);navigate("/login");}}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Registration successful!
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default RegistrationBox;
