import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventCard from './eventCard';

const EventCarousel = () => {
  // State for events data
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);
  
  // Simulated fetch function - replace with your actual API call
  const fetchRecommendedEvents = async () => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));

      

      // Mock data - replace with your actual API call
      // Using the fields that match your EventCard component
      // const mockEvents = [
      //   { 
      //     eid: 1, 
      //     title: 'Tech Conference 2025', 
      //     event_category: 'Technology',
      //     type: 'Conference',
      //     description: 'Join us for the latest in tech innovation and networking opportunities.',
      //     event_date: '2025-04-15',
      //   },
      //   { 
      //     eid: 2, 
      //     title: 'Music Festival', 
      //     event_category: 'Entertainment',
      //     type: 'Festival',
      //     description: 'Three days of amazing performances from top artists across all genres.',
      //     event_date: '2025-04-22',
      //   },
      //   { 
      //     eid: 3, 
      //     title: 'Career Fair', 
      //     event_category: 'Career',
      //     type: 'Networking',
      //     description: 'Connect with top employers and discover new career opportunities.',
      //     event_date: '2025-05-05',
      //   },
      //   { 
      //     eid: 4, 
      //     title: 'Coding Workshop', 
      //     event_category: 'Technology',
      //     type: 'Workshop',
      //     description: 'Learn the latest programming techniques from industry experts.',
      //     event_date: '2025-05-12',
      //   },
      //   { 
      //     eid: 5, 
      //     title: 'Art Exhibition', 
      //     event_category: 'Culture',
      //     type: 'Exhibition',
      //     description: 'Discover exceptional works from emerging and established artists.',
      //     event_date: '2025-05-18',
      //   },
      //   { 
      //     eid: 6, 
      //     title: 'Food Festival', 
      //     event_category: 'Lifestyle',
      //     type: 'Festival',
      //     description: 'Sample delicious cuisines from around the world in one location.',
      //     event_date: '2025-05-25',
      //   },
      //   { 
      //     eid: 7, 
      //     title: 'Startup Meetup', 
      //     event_category: 'Business',
      //     type: 'Networking',
      //     description: 'Connect with founders, investors, and innovators in the startup ecosystem.',
      //     event_date: '2025-06-03',
      //   },
      //   { 
      //     eid: 8, 
      //     title: 'Book Reading', 
      //     event_category: 'Education',
      //     type: 'Seminar',
      //     description: 'Join bestselling authors for readings and discussions of their latest works.',
      //     event_date: '2025-06-10',
      //   }
      // ];

      
      setEvents(mockEvents);
      setLoading(false);
    } catch (err) {
      setError('Failed to load recommended events');
      setLoading(false);
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchRecommendedEvents();
  }, []);

  // Carousel navigation functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'medium' }}>
          Recommended Events
        </Typography>
      </Box>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : events.length === 0 ? (
        <Alert severity="info">No recommended events found.</Alert>
      ) : (
        <Box sx={{ position: 'relative', my: 2 }}>
          {/* Left navigation arrow */}
          <IconButton 
            onClick={scrollLeft}
            sx={{ 
              position: 'absolute', 
              left: -20, 
              top: '50%', 
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' }
            }}
            aria-label="scroll left"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          
          {/* Carousel container */}
          <Box 
            ref={carouselRef}
            sx={{ 
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none',  // Firefox
              '&::-webkit-scrollbar': { display: 'none' },  // Chrome
              py: 2,
              px: 4,
              gap: 2  // Add spacing between cards
            }}
          >
            {events.map(event => (
              <Box key={event.eid} sx={{ minWidth: 250, maxWidth: 250 }}>
                <EventCard event={event} />
              </Box>
            ))}
          </Box>
          
          {/* Right navigation arrow */}
          <IconButton 
            onClick={scrollRight}
            sx={{ 
              position: 'absolute', 
              right: -20, 
              top: '50%', 
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' }
            }}
            aria-label="scroll right"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default EventCarousel;