import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import EventGrid from './EventGrid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EventCarousel from './EventCarousel';


export default function HomePageTab() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tab value="three" label="Past Events" />
      </Tabs>
            {/* Tab content panels */}
            <TabPanel value={value} index="one">
      
        {/* Content for tab one */}
        <EventCarousel />
      </TabPanel>
      
      <TabPanel value={value} index="two">
        <h2>My Registered Events</h2>
        {/* Content for tab two */}
        <EventGrid events={[{eid: 1}, {eid: 2}, {eid: 3}, {eid: 4}, {eid: 5}]} />
      </TabPanel>
      
      <TabPanel value={value} index="three">
        <h2>Past Events</h2>
        {/* Content for tab three */}
        <EventGrid events={[{eid: 1}, {eid: 2}]} />
        <Stack spacing={2}>
      <Pagination count={5} shape="rounded" />
      
    </Stack>
      </TabPanel>
    </Box>
  );
}