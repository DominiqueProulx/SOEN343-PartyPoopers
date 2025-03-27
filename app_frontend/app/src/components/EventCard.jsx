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
const EventCard = ({ event, onViewDetails }) => {
  // Convert the date string to a Date object and format it
  // Use event_date field from API response, with a fallback to date for flexibility
  const eventDate = event.event_date || event.date;
  
  // Add error handling for date formatting
  let formattedDate = "Date unavailable";
  try {
    if (eventDate) {
      formattedDate = format(new Date(eventDate), 'MMMM dd, yyyy');
    }
  } catch (error) {
    console.error("Error formatting date:", eventDate, error);
  }

  //truncate the text description 
    // Truncate description to 50 characters
    const truncateText = (text, maxLength) => {
      if (text && text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
 
  return (
    
    <Card
  sx={{
    height: '100%',
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      transform: 'translateY(-4px)',
      backgroundColor: 'rgba(64,168,196,0.8)',
    }
  }}
>
  {/* Banner Image */}
  {event.banner_file && (
    <img
      src={`http://localhost:5000/uploads/${event.banner_file}`}
      alt="Event Banner"
      style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      }}
    />
  )}

  <CardContent sx={{ flexGrow: 1 }}>
    <Typography gutterBottom variant="h5" component="h2">
      {event.title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
      {formattedDate}
    </Typography>
    <Typography variant="body1" sx={{ color: 'grey' }}>
      {event.event_category}
    </Typography>
    <Typography variant="body1" sx={{ color: 'grey' }}>
      {event.type}
    </Typography>
    <Typography variant="body1">
      {truncateText(event.description, 50)}
    </Typography>
  </CardContent>

  <CardActions sx={{
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #e0e0e0',
    justifyContent: 'space-between',
    padding: '16px'
  }}>
    <Button size="small" sx={{ color: '#235784' }} onClick={() => onViewDetails(event)}>
  View Details
  </Button> 
    <Button size="small" sx={{ backgroundColor: '#F7AA00', color: '#235784', padding: 1.5 }}>
      Register
    </Button>
  </CardActions>
</Card>

  );
};

export default EventCard;