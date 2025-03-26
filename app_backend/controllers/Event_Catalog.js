import FilteringController from "./FilteringController.js";
import Event from "../components/Event.js";

class Event_Catalog{
 static sees_events = [];

      // Lazy initialization for the singleton pattern
      static instance = null;
   
      static getInstance() {
          if (!Event_Catalog.instance) {
           Event_Catalog.instance = new Event_Catalog();
          }
          return Event_Catalog.instance;
        }

        async filterEvents(filterDetails) {
            const filteringController = FilteringController.getInstance();
            const events = await filteringController.getEvents(filterDetails);
        
            let filtered_eventsArray = [];
       
            // Iterate through all events
            for (const e of events) {
                // Destructure the necessary properties from the event
                let title = e.title;
                console.log(title)
                let description = e.description;
                console.log(description)
                let location = e.location;
                console.log(location)
                let date = new Date(e.event_date);
                console.log(date)
                if (isNaN(date.getTime())) {
                    console.error("Invalid date:", e.date); // Log the invalid date value
                    return; 
                }
                let category = e.event_category;
                console.log(category);
                let type = e.type;
                console.log(type);
                let uid = e.organizer_id;
                console.log(uid);
        
                // Call createEvent method to instantiate an event object
                let instanciatedEvent = this.createEvent(title, description, date, location, category, type, uid );
        
                // Check if instanciatedEvent is valid before adding to the array
                if (instanciatedEvent) {
                    console.log(instanciatedEvent); // Log the instantiated event
                    console.log(e); // Log the original event data
                    filtered_eventsArray.push(instanciatedEvent); // Push valid event to array
                } else {
                    console.error("Error: createEvent returned an invalid event for:", e);
                }
            }
        
            // Return the array of filtered events
            return filtered_eventsArray;
        }

createEvent(title, description, date, location, category, type, uid, eid = null) {
    const newEvent = new Event(title, description, date, location, category, type,   uid, eid = null);
    console.log(newEvent)
    Event_Catalog.sees_events.push(newEvent);
    return newEvent;
  }


}

export default Event_Catalog;