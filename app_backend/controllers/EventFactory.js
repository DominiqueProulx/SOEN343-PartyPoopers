// EventFactory.js

import Event from './Event.js'

class EventFactory {
  static createEvent({
    title,
    description,
    date,
    location,
    category,
    type,
    organizer_id,
    max_attendees = 100
  }) {
    return new Event(
      null,
      title,
      description,
      date,
      location,
      category,
      type,
      organizer_id,
      max_attendees
    )
  }
}

export default EventFactory
