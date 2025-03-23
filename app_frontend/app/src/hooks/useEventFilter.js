import { useState } from "react";

// hooks/useEventFilter.js
export default function useEventFilter() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchFilteredEvents = async (filters) => {
        setError(null);
      
      try {
        const response = await fetch('/api/events/filter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(filters)
        });
        
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.error || 'Failed to fetch events');
        
        setEvents(data.data);
        return data.data;
      } catch (err) {
        setError(err.message);
        return [];
      }
    };
  
    return { events,  error, fetchFilteredEvents };
  }
  
  