import Event_Catalog from './Event_Catalog.js';

class Main_Controller {
  static instance = null

  static getInstance() {
    if (!Main_Controller.instance) {
      Main_Controller.instance = new Main_Controller()
    }
    return Main_Controller.instance
  }

  async createEvent(eventData) {
    const catalog = Event_Catalog.getInstance()
    return await catalog.createEvent(eventData)
  }

  async browseEvents(filterDetails) {
    const catalog = Event_Catalog.getInstance()
    return await catalog.filterEvents(filterDetails)
  }

  async findSingleEvent(eid) {
    const catalog = Event_Catalog.getInstance()
    const all = catalog.getAllEvents()
    return all.find(e => e.getEID() == eid)
  }
}

export default Main_Controller;