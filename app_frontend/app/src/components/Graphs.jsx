import React, { useEffect, useState } from "react";
import GraphComponent from "./Graph";
import { eventObservable } from "../hooks/observable";

const MultipleGraphsPage = () => {
  const [allData, setAllData] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    eventObservable.subscribe(setAllData);
    eventObservable.seedFakeData();
    fetchOrganizedEvents(); // For demo purposes
  }, []);

  // Example: Event info
  const fetchOrganizedEvents = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('http://localhost:5001/api/user/organized', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include' // Include cookies for session authentication
      });

      if (!response.ok) {
        throw new Error('Failed to fetch organized events');
      }

      const data = await response.json();
      
      if (data.success) {
        const formattedEvents = data.events.map(event => ({
          eid: event.eid.toString(),
          name: event.title || event.name 
        }));
        
        setEvents(formattedEvents);
      } else {
        throw new Error(data.message || 'Failed to load events');
      }
    } catch (err) {
      console.error('Error fetching organized events:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;
  if (events.length === 0) return <div>You haven't organized any events yet.</div>;


  return (
    <>
      {events.map((event) => {
        const filteredData = allData.filter((d) => d.eid === event.eid);
        return (
          <GraphComponent
            key={event.eid}
            eventData={filteredData}
            eventName={event.name}
          />
        );
      })}
    </>
  );
};

export default MultipleGraphsPage;
