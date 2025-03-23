import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import EventGrid from '../components/EventGrid';



// Using fetch in a browser
async function getFilteredEvents() {
    const response = await fetch('/api/events/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keyword: 'concert',
        category: 'music',
        eventType: 'live',
        date: { start: '2025-04-01', end: '2025-04-30' }
      })
    }};




function BrowseEvents() {
    // Move the state declaration outside of useEffect
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        console.log("BrowseEvents component mounted!");
        
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
        
        setEvents(mockData);
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