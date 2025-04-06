// Event.js
import pool from '../db.js'

class Event {
  constructor(eid, title, description, date, location, category, type, organizer_id, max_attendees = 100) {
    this.eid = eid
    this.title = title
    this.description = description
    this.date = date
    this.location = location
    this.category = category
    this.type = type
    this.organizer_id = organizer_id
    this.max_attendees = max_attendees
  }

  async saveToDatabase() {
    const query = `
      INSERT INTO app_event (organizer_id, event_category, title, description, event_date, location, max_attendees, type)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING eid;
    `
    const values = [
      this.organizer_id,
      this.category,
      this.title,
      this.description,
      this.date,
      this.location,
      this.max_attendees,
      this.type
    ]

    const result = await pool.query(query, values)
    this.eid = result.rows[0].eid
    return this.eid
  }
}

export default Event
