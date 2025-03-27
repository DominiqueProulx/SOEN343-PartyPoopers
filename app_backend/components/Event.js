// Event.js
import pool from '../db.js'
import Event_TDG from './TDG/Event_TDG.js'

class Event {
  static event_TDG = new Event_TDG()

  static possibleCategories = [
    'Mathematics', 'Computer Science', 'Physics', 'Biology', 'Chemistry',
    'Engineering', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity',
    'Data Science', 'Economics', 'Philosophy', 'Linguistics', 'Psychology',
    'History', 'Literature', 'Political Science', 'Sociology',
    'Environmental Science', 'Education'
  ]

  static possibleTypes = [
    'Conference', 'Workshop', 'Seminar', 'Hackaton',
    'NetworkingEvent', 'CareerFair', 'Lectures'
  ]

  constructor(title, description, date, location, category, type, uid, eid = null) {
    this.eid = eid
    this.title = title
    this.description = description
    this.date = date
    this.location = location
    this.category = category
    this.type = type
    this.uid = uid

    // Auto-persist to DB if eid is not yet set
    this.addEvent()
  }

  // 🟡 Insert into DB if not already inserted
  async addEvent() {
    if (!this.eid) {
      const newID = await Event.event_TDG.addEvent(this)
      this.eid = newID
      return newID
    }
  }

  // Getters
  getEID() {
    return this.eid
  }

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description
  }

  getdate() {
    return this.date
  }

  getLocation() {
    return this.location
  }

  getCategory() {
    return this.category
  }

  getType() {
    return this.type
  }

  getOrganizerID() {
    return this.uid
  }

  // To string method for logging
  toString() {
    return `Event [ID: ${this.eid || 'N/A'}, Title: "${this.title}", Type: ${this.type}, Category: ${this.category}, Date: ${this.date}, Location: ${this.location}]`
  }
}

export default Event
