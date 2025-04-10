import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import EventGrid from './EventGrid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EventCarousel from './EventCarousel';

import { useEffect, useState } from 'react';


export default function HomePageTab() {
  const [value, setValue] = React.useState('one');
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 'two') {
      fetchRegisteredEvents();
    }
  };

  const fetchRegisteredEvents = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('http://localhost:5001/api/user/registered', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include' 
      });

      if (!response.ok) {
        throw new Error('Failed to fetch registered events');
      }

      const data = await response.json();
      
      if (data.success) {
        setMyEvents(data.events);
      } else {
        throw new Error(data.message || 'Failed to load events');
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching registered events:', err);
      setError(err.message || 'Failed to load registered events');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value === 'two') {
      fetchRegisteredEvents();
    }
  }, []);


  return (
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
        <Tab value="one" label="Recommended for me" />
        <Tab value="two" label="My registered Events" />
      </Tabs>
            {/* Tab content panels */}
            <TabPanel value={value} index="one">
      
        {/* Content for tab one */}
        <EventCarousel />
      </TabPanel>
      
      <TabPanel value={value} index="two">
        <h2>My Registered Events</h2>
        {loading ? (
          <p>Loading your registered events...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <EventGrid events={myEvents} />
        )}
      </TabPanel>
    </Box>
  );
}