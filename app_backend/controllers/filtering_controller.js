import * as eventfilter from '../components/eventfilter.js';


class Filtering_Controller{
    static singleton_filteringController;



getInstance(){
    if (!Filtering_Controller.singleton_filteringController){
      filtering_controller.controller.singleton_filteringController =  new Filtering_Controller
    }
   return Filtering_Controller.singleton_filteringController
}

async getEvents(filterDetails){
   const  {
    keyword, 
    category, 
    eventType,
    date
} = filterDetails;

//start building the query 
let filter = new eventfilter.BaseFilter();

//appply each filters on top of the base one
if (category){
 filter = new eventfilter.Category_EventFilterDecorator(filter, category); 
}

if(keyword){
    eventfilter = new eventfilter.Keyword_EventFilterDecorator(filter, keyword); 
}


if(eventType){
    eventfilter = new eventfilter.EventType_EventFilterDecorator(filter, eventType); 
}
if(date){
    eventfilter = new eventfilter.Date_EventFilterDecorator(filter, date); 
}

// Get the query completed
const finalQuery = eventFilter.buildFilter();


//get the set of events
const pool = require('../db');
const result = await pool.query(finalQuery.query, finalQuery.params);


  // Return the events
  return result.rows;

} } 
export default Filtering_Controller;