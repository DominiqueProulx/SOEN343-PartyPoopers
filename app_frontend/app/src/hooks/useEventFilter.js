import { useState } from "react";
// hooks/useEventFilter.js
export default function useEventFilter() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchFilteredEvents = async (filters) => {
    setError(null);

    try {
      const apiUrl = "http://localhost:5001/api/event/filter";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filters),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to fetch events");

      setEvents(data.data || []);
      return data.data || [];
    } catch (err) {
      console.error("Error in fetchFilteredEvents:", err);
      setError(err.message || "An unknown error occurred");
      return [];
    }
  };

  return { events, error, fetchFilteredEvents, setEvents };
}
