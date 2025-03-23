import * as eventfilter from '../components/eventfilter.js';
import pool from '../db.js';

class FilteringController {
    // Lazy initialization for the singleton pattern
   static instance = null;
   
    static getInstance() {
        if (!FilteringController.instance) {
          FilteringController.instance = new FilteringController();
        }
        return FilteringController.instance;
      }

    async findSingleEvent(eid) {
          // Get the event
          const query = 'SELECT * FROM app_event WHERE id = $1';
          const result = await pool.query(query, [eid]);
          return result.rows[0];
    }

    async getEvents(filterDetails) {
        const {
            keyword,
            category,
            eventType,
            date
        } = filterDetails;

        // Start building the query
        let filter = new eventfilter.BaseFilter();
        
        // Apply each filter on top of the base one
        if (category) {
            filter = new eventfilter.Category_EventFilterDecorator(filter, category);
        }
        if (keyword) {
            filter = new eventfilter.Keyword_EventFilterDecorator(filter, keyword);
        }
        if (eventType) {
            filter = new eventfilter.EventType_EventFilterDecorator(filter, eventType);
        }
        if (date) {
            filter = new eventfilter.Date_EventFilterDecorator(filter, date);
        }
        
        // Get the completed query
        const finalQuery = filter.buildFilter();
        
   // console.log('Final SQL query:', finalQuery.sql);
    //console.log('Query parameters:', finalQuery.values);
        
        // Execute the query
        const result = await pool.query(finalQuery.sql, finalQuery.values);
        
        // Return the events
        return result.rows;
    }
}

export default FilteringController;