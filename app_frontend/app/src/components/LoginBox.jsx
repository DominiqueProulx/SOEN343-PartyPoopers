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
import useLogin from '../hooks/useLogin';
import { useNavigate } from "react-router-dom";

function LoginBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { login } = useLogin();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setHelperText('Invalid email');
    } else {
      try {
        const loginBody = {
          email: email,
          user_password: password
        };
        setHelperText('');
        await login(loginBody).then(
          setOpenSnackbar(true)
        );
        setEmail('');
        setPassword('');
        
        setTimeout(() => {
          navigate('/');
        }, 1000);
        if(openSnackbar){
        }
      } catch (err) {
        console.error('Login failed:', err);
      }
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '400px', margin: '0 auto', marginTop: '100px' }}>
      <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Login
        </Typography>
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
          Login
        </Button>
        <Typography variant="body2" align="center">
          Don’t have an account?{' '}
          <span style={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/register')}>
            Register
          </span>
        </Typography>
      </Box>
      
      {/* Snackbar for success message */}
      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => {setOpenSnackbar(false);navigate("/home");}}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Login successful!
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default LoginBox;
