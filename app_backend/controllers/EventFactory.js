// EventFactory.js

import Event from './Event.js'

class EventFactory {
  static createEvent({ title, description, date, location, category, type, organizer_id }) {
    return new Event(
      title,
      description,
      date,
      location,
      category,
      type,
      organizer_id
    )
  }
}

export default EventFactory

