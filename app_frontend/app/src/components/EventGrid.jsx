import React from 'react';
import Grid from '@mui/material/Grid2'; // This is Grid V2
import EventCard from './eventCard';
import {   Box  } from '@mui/material';


// The EventGrid displays all the eent cards
const EventGrid = ({ events, onViewDetails }) => {
    return (
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid 
          container 
          spacing={3} // Space between event cards
          columns={{ xs: 4, sm: 8, md: 12 }} 
        >
          {events.map((event) => (
            <Grid xs={4} sm={4} md={4} key={event.eid}>
              <EventCard event={event} onViewDetails={onViewDetails} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  export default EventGrid;
  