import FilteringController from "./FilteringController.js"
import EventFactory from "./EventFactory.js"
import Event from "../components/Event.js";

class Event_Catalog {
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
            let title = e.title;
            let description = e.description;
            let location = e.location;
            let date = new Date(e.event_date);
            if (isNaN(date.getTime())) {
                console.error("Invalid date:", e.date); // Log the invalid date value
                return;
            }
            let category = e.event_category;
            let type = e.type;
            let uid = e.organizer_id;
           
            //create the event only if it doesnt exist already in the system
            const existingEvent = Event_Catalog.sees_events.find(event =>
                event.uid === uid &&
                event.title === title &&
                event.description === description &&
                event.location === location &&
                event.date.getTime() === date.getTime()
            );
            
            if(existingEvent) {
                filtered_eventsArray.push(existingEvent);
                console.log('Event already exist')
            } else {
                // Changed method name from createEvent to createEventObject
                let instanciatedEvent = this.createEventObject(title, description, date, location, category, type, uid);
   
                if (instanciatedEvent) {
                    filtered_eventsArray.push(instanciatedEvent);
                } else {
                    console.error("Error: createEventObject returned an invalid event for:", e);
                }
            }
        }
   
        // Return the array of filtered events
        return filtered_eventsArray;
    }

    // Renamed from createEvent to createEventObject
    createEventObject(title, description, date, location, category, type, uid, eid = null) {
        const newEvent = new Event(title, description, date, location, category, type, uid, eid);
        Event_Catalog.sees_events.push(newEvent);
        return newEvent;
    }

    // Renamed from createEvent to createEventInDatabase
    async createEventInDatabase(eventData) {
        // Make sure eventData includes required fields, especially event_category
        if (!eventData.category) {
            throw new Error("Event category is required");
        }
        
        const event = EventFactory.createEvent(eventData);
        const eid = await event.saveToDatabase();
        return { eid, message: 'Event created successfully.' };
    }
}

export default Event_Catalog;