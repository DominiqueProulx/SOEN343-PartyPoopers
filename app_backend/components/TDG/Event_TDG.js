import pool from "../../db.js"
import Event from "../Event.js"

class Event_TDG {

    async getLatest() {
        try {
          const result = await pool.query('SELECT MAX(eid) AS max_eid FROM events');
          return (result.rows[0]?.max_eid +1) || 1; 
        } catch (error) {
          console.error("Error fetching latest event ID:", error);
          throw error;
        }
      }

async addEvent(event) {
    // Fixed condition: check if event is an instance of Event and if it exists
    if (!(event instanceof Event) || !event) {
      throw new TypeError('I can only add events.');
    }
    
    const eventExist = await pool.query(
        'SELECT * FROM app_event WHERE title = $1 AND description = $2 AND location = $3 AND event_date = $4',
        [event.title, event.description, event.location, event.date]
      );
   // Check if event already exists  before creating a new one
   if (eventExist.rowCount > 0) {
    // Event already exists, return the eid
      return eventExist.rows[0].eid;
}

    //If it doenst exist we create the event in the database to get a new eid
    const query = `
      INSERT INTO app_event (title, description, event_date, location, event_category, type, organizer_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING eid
    `;
   
    const params = [
      event.title,
      event.description,
      event.date,
      event.location,
      event.category,
      event.type,
      event.uid
    ];
   
    // Execute query and return the inserted ID
    try {
      const result = await pool.query(query, params);
      return result.rows[0].eid;
    } catch (error) {
      console.error('Error when creating event:', error);
      throw error;
    }
  }

}
export default Event_TDG;