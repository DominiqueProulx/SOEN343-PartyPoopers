import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import EventGrid from '../components/EventGrid';
import useEventFilter  from '../hooks/useEventFilter'
import Searchbar from '../components/searchbar';


function BrowseEvents() {
    // custom hook to fetch and update set of events
    const { events, error, setEvents, fetchFilteredEvents } = useEventFilter();
      
    const [filterDetails, setFilterDetails] = useState({
      keyword: '',
      category: '',
      eventType: '',
      date: ''
    });
    
    useEffect(() => {
        console.log("BrowseEvents component mounted!");
        console.log('Browse event sending filterDetails to fetFilteredEvents in hook. the details: ', filterDetails )
      fetchFilteredEvents(filterDetails)
    }, [filterDetails]);
    
    return (
        <div >
          {/* filter criteria*/}
            <Searchbar 
             filterDetails={filterDetails} 
             setFilterDetails={setFilterDetails}
             fetchFilteredEvents={fetchFilteredEvents} />

            <Typography variant="h3" component="h1" sx={{ p: 3 , color : '#235784'}}>
                Upcoming Events
            </Typography>
            {/* Change eventsData to events */}
            <EventGrid events={events} />
        </div>
    );
}

export default BrowseEvents;