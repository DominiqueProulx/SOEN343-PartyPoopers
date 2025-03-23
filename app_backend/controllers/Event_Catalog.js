import FilteringController from "./FilteringController.js";
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


}

export default Event_Catalog;