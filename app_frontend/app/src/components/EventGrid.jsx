import React from 'react';
import Grid from '@mui/material/Grid2'; // This is Grid V2
import EventCard from './eventCard';
import {   Box  } from '@mui/material';


// The EventGrid component displays multiple events in a responsive grid
const  EventGrid = ({ events }) => {
    return (
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid 
          container 
          spacing={3} // Space between grid items
          columns={{ xs: 4, sm: 8, md: 12 }} // Responsive columns setup
        >
          {events.map((event) => (
            <Grid xs={4} sm={4} md={4} key={event.eid}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  export default EventGrid;
  