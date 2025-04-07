
import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import DashboardCard from './DashboardCard';


export default function DashboardGrid() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/user/getUserEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);


  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div>
      {/* {events.length > 0 ? (
        events.map((event, index) => <h6 key={index} style={{ padding: "10px 0" }}>{JSON.stringify(event)}</h6>)
      ) : (
        <h6>No events found</h6>
      )} */}

    {events.length > 0 ? (
        <Grid container spacing={3} padding = {5}>
          {/* Map over the events and render a DashboardCard for each */}
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DashboardCard event={event} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6">No events found</Typography>
      )}
    </div>
  );
}
