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
  Stack
} from '@mui/material';
import useRegister from '../hooks/useRegister';


function RegistrationBox() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [helperText, setHelperText] = useState("");
    const [err, setErr] = useState(false);
    const {user, error, register} = useRegister();

    const validateEmail = (email) => {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };
  
  

    const handleRegister = async (e) => {
      e.preventDefault(); 
      if(!validateEmail(email)){
        setHelperText("Invalid email")
      }
      else{
          try {
            const registerBody = {
                user_name:username,
                email:email,
                user_password:password
            }
            setHelperText("")
            const f = await register(registerBody).then((data) => {
                console.log(data);
                console.log('hello')
            });
    
            setUsername('');
            setEmail('');
            setPassword('');
          } catch (err) {
            console.error('Registration failed:', err);
          }
      }
    };
    return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '400px', margin: '0 auto', marginTop: '100px'}}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }} component ="form" onSubmit={handleRegister}>
            <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    sx={{ flexGrow: 1, minWidth: '200px' }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
            />
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
            <Button onClick ={handleRegister}>
                Register
            </Button>
        </Box>
    </Paper>
  );
}

export default RegistrationBox;