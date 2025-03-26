import FilteringController from "./FilteringController.js"
import EventFactory from "./EventFactory.js"

class Event_Catalog{

      // Lazy initialization for the singleton pattern
      static instance = null;
   
      static getInstance() {
          if (!Event_Catalog.instance) {
           Event_Catalog.instance = new Event_Catalog();
          }
          return Event_Catalog.instance;
        }

async filterEvents(filterDetails){
    const filteringController = FilteringController.getInstance();
    const events = await filteringController.getEvents(filterDetails);
    
    return events;
}

async createEvent(eventData) {
    const event = EventFactory.createEvent(eventData)
    const eid = await event.saveToDatabase()
    return { eid, message: 'Event created successfully.' }
  }

}

export default Event_Catalog;
