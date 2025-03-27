import { useState, useEffect } from "react";

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
      {events.length > 0 ? (
        events.map((event, index) => <h6 key={index} style={{ padding: "10px 0" }}>{JSON.stringify(event)}</h6>)
      ) : (
        <h6>No events found</h6>
      )}
    </div>
  );
}
