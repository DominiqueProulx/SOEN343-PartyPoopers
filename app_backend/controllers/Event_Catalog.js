import Event from './Event.js'
import pool from '../db.js'
import EventFactory from './EventFactory.js'

class Event_Catalog {
  static instance = null
  static sees_event = []

  static getInstance() {
    if (!Event_Catalog.instance) {
      Event_Catalog.instance = new Event_Catalog()
    }
    return Event_Catalog.instance
  }

  async createEvent(eventData) {
    //Call factory method to create Event
    const event = EventFactory.createEvent(eventData)

    //Persist and assign ID
    await event.addEvent()

    //Add to catalog
    Event_Catalog.sees_event.push(event)

    return { eid: event.getEID(), message: 'Event created using factory method.' }
  }

  getAllEvents() {
    return Event_Catalog.sees_event
  }

  async loadEventsFromDatabase() {
    const result = await pool.query('SELECT * FROM app_event')
    const rows = result.rows

    Event_Catalog.sees_event = rows.map(row => new Event(
      row.title,
      row.description,
      row.event_date,
      row.location,
      row.event_category,
      row.type,
      row.organizer_id,
      row.eid // ← existing event, pass eid
    ))
  }

  filterEvents(filterDetails) {
    const { keyword, category, eventType, date } = filterDetails
  
    return Event_Catalog.sees_event.filter(event => {
      const matchCategory = !category || event.getCategory() === category
      const matchType = !eventType || event.getType() === eventType
      const matchKeyword = !keyword || (
        event.getTitle().toLowerCase().includes(keyword.toLowerCase()) ||
        event.getDescription().toLowerCase().includes(keyword.toLowerCase())
      )
      const matchDate = !date || new Date(event.getdate()).toDateString() === new Date(date).toDateString()
  
      return matchCategory && matchType && matchKeyword && matchDate
    })
  }
}

export default Event_Catalog
