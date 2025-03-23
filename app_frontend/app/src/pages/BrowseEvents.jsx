import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import EventGrid from '../components/EventGrid';
import useEventFilter  from '../hooks/useEventFilter'



// Using fetch in a browser
const { events, error, fetchFilteredEvents } = useEventFilter();



function BrowseEvents() {
    // Move the state declaration outside of useEffect
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        console.log("BrowseEvents component mounted!");
       const events =  fetchFilteredEvents()
        // For demonstration, we'll use mock data
        const mockData = [
            {
                title: "Event1",
                eid: 12,
                description: "blabla1",
                date: "2025-12-25",
                category : "Mathematics"
            },
            {
                title: "Event2",
                eid: 1,
                description: "blabla6",
                date: "2025-12-31",
                category : "Mathematics"
            },
            {
                title: "Event3",
                eid: 12,
                description: "blabla1",
                date: "2025-12-25",
                 category : "AI"
            },
            {
                title: "Event4",
                eid: 12,
                description: "blabla1",
                date: "2025-12-25",
                category : "Arts"
            },
            {
                title: "Event5",
                eid: 12,
                description: "blabla1",
                date: "2025-12-25",
                 category : "Biology"
            },
            {
                title: "Event6",
                eid: 12,
                description: "blabla1",
                date: "2025-12-25",
                category : "Physics"
            },
        ];
        
        setEvents(events);
    }, []);
    
    return (
        <div >
            <Typography variant="h3" component="h1" sx={{ p: 3 , color : '#235784'}}>
                Upcoming Events
            </Typography>
            {/* Change eventsData to events */}
            <EventGrid events={events} />
        </div>
    );
}

export default BrowseEvents;