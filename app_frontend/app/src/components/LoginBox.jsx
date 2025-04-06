import React, {useState} from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import useLogin from '../hooks/useLogin';


function RegistrationBox() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [helperText, setHelperText] = useState("");
    const [err, setErr] = useState(false);
    const {user, error, login} = useLogin();

    const validateEmail = (email) => {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };

    const handleLogin = async (e) => {
      e.preventDefault(); 
      if(!validateEmail(email)){
        setHelperText("Invalid email")
      }
      else{
          try {
            const loginBody = {
                email:email,
                user_password:password
            }
            setHelperText("")
            login(loginBody)
    
            setEmail('');
            setPassword('');
          } catch (err) {
            console.error('login failed:', err);
          }
      }
    };
    return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '400px', margin: '0 auto', marginTop: '100px'}}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }} component ="form" onSubmit={handleLogin}>
            <Typography variant="h6" align="center" gutterBottom>
                Login
            </Typography>
            <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ flexGrow: 1, minWidth: '200px' }}
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    helperText={helperText}
            />
            <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    sx={{ flexGrow: 1, minWidth: '200px' }}
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick ={handleLogin}>
                Login
            </Button>
        </Box>
    </Paper>
  );
}

export default RegistrationBox;