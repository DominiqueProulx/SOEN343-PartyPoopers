import { useState } from "react";

// hooks/useEventFilter.js
export default function useEventFilter() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchFilteredEvents = async (filters) => {
        console.log('inside eventFilter hook ')
        setError(null);
      
      try {
         // Debug the URL and request body
         console.log('Sending request to: /api/event/filter');
         console.log('Request body:', JSON.stringify(filters));

         const apiUrl = 'http://localhost:5000/api/event/filter';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(filters)
        });
        
        const data = await response.json();
        console.log('Response:' , data)
        
        if (!response.ok) throw new Error(data.error || 'Failed to fetch events');
        
        setEvents(data.data || []);
        return data.data || [];
      } catch (err) {
        console.error('Error in fetchFilteredEvents:', err);
        setError(err.message || 'An unknown error occurred');
        return [];
      }
    };
  
    return { events,  error, fetchFilteredEvents, setEvents };
  }
  
  