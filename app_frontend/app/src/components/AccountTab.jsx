import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import EventGrid from './EventGrid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import UserDetailForm from './UserDetailForm';



export default function AccountTab() {
  const [value, setValue] = React.useState('one');
   const [user, setUser] = useState();

  useEffect(() => {
 /*   fetch('http://localhost:5001/api/user/getCurrentUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error('Error fetching session:', err));*/
      //Hardcoded for now 
      setUser({
        uid: 1,
        user_name: 'John Doe',
        email: 'john.doe@example.com',
        user_password: 'password123',
        favorites: '{Mathematics,"Computer Science"}',
        email_subscribed: true
      })
      
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ margin: '30px' }}>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
       // indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant="fullWidth"
        sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: (theme) => theme.palette.buttons.main, 
            },
            // Override tab text colors
      '& .MuiTab-root': {
        color: (theme) => theme.palette.secondary.main, // Normal tab text color
        '&.Mui-selected': {
          color: (theme) => theme.palette.accent.main, // Selected tab text color
        },
        '&:hover': {
          color: (theme) => '#ffffff', // Hover text color
          transition: 'color 0.2s, background-color 0.2s', // Smooth transition
        }
      }
          }}
      >
        <Tab value="one" label="My information" />
        <Tab value="two" label="Organizer" />
        <Tab value="three" label="Reports" />
      </Tabs>
            {/* Tab content panels */}
            <TabPanel value={value} index="one">
      
        {/* Content for tab one */}
        <UserDetailForm user={user} />
       
      </TabPanel>
      
      <TabPanel value={value} index="two">
        <h2>Organiser</h2>
        {/* Content for tab two */}
       
      </TabPanel>
      
      <TabPanel value={value} index="three">
        <h2>Reports</h2>
        {/* Content for tab three */}
        
        <Stack spacing={2}>
      
      
    </Stack>
      </TabPanel>
    </Box> </div>
  );
}