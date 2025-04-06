import Event_Catalog from './Event_Catalog.js';


class Main_Controller{

      // Lazy initialization for the singleton pattern
   static instance = null;
   
   static getInstance() {
       if (!Main_Controller.instance) {
        Main_Controller.instance = new Main_Controller();
       }
       return Main_Controller.instance;
     }

async createEvent(eventData) {
    const catalog = Event_Catalog.getInstance()
    const result = await catalog.createEvent(eventData)
    return result
  }

async browseEvents(filterDetails){
        const eventCatalog = Event_Catalog.getInstance();
        const events = await eventCatalog.filterEvents(filterDetails);
        
        return events;
    }
}

export default Main_Controller;