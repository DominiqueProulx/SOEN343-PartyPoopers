import Event_Catalog from './Event_Catalog.js';
import User_Catalog_Proxy from './User_Catalog_Proxy.js';


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
    const result = await catalog.createEventInDatabase(eventData)
    return result
  }

async browseEvents(filterDetails){
        const eventCatalog = Event_Catalog.getInstance();
        const events = await eventCatalog.filterEvents(filterDetails);
        
        return events;
    }

    async updatePreferences(uid, loggedUserId = null, favorites = []) {
      const userCatalog = User_Catalog_Proxy.getInstance();
      const result = await userCatalog.updatePreferences(uid, loggedUserId, favorites);
      return result;
    }
}

export default Main_Controller;