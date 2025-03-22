import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { format } from 'date-fns';

// The EventCard component displays information for a single event
const EventCard = ({ event }) => {
  // Convert the date string to a Date object and format it
  const formattedDate = format(new Date(event.date), 'MMMM dd, yyyy');
 
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: '0.3s',
        '&:hover': {
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          transform: 'translateY(-4px)',
          backgroundColor :'rgba(64,168,196,0.8)',
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {formattedDate}
        </Typography>
        <Typography variant="body1">
          {event.description}
        </Typography>
        <Typography variant="body1">
          {event.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
        <Button size="small" color="secondary">
          Register
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;