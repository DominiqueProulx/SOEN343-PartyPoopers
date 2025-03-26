import FilteringController from "./FilteringController.js";
import Event from "../components/Event.js";

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


createEvent(title, description, date, location, category, type, organizer, eid = null){
newEvent = new Event(title, description, date, location, category, type, organizer, eid = null);
}


}

export default Event_Catalog;