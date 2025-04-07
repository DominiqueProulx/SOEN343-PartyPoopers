// DashboardCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const DashboardCard = ({ event }) => {
  return (
    <Card>
      {/* Display image if available */}
      
      <CardContent>
        <Typography variant="h6" component="div">
          {event.title} {/* Assuming event has a title */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description} {/* Assuming event has a description */}
        </Typography>
      </CardContent>
      <button style = {{margin:'12px 24px'}}> View details</button>
    </Card>
  );
};

export default DashboardCard;