import React, { useEffect, useState } from "react";
import GraphComponent from "./Graph";
import { eventObservable } from "../hooks/observable";

const MultipleGraphsPage = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    eventObservable.subscribe(setAllData);
    eventObservable.seedFakeData(); // For demo purposes
  }, []);

  // Example: Event info
  const events = [
    { eid: "E1", name: "Tech Conference" },
    { eid: "E2", name: "AI Workshop" },
    { eid: "E3", name: "Design Meetup" },
  ];

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
