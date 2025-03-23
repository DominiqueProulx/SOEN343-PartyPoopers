import * as Event_Catalog from  './Event_Catalog.js'
class Main_Controller{


main =  new Main_Controller;

constructor() {
    //TODO:  Same as filtering_Controller, how to make private
    throw console.error("The constructor should not be used as this is a singleton");
}

browseEvent(filterDetails){

Event_Catalog.getEvents(filterDetails);
}


}