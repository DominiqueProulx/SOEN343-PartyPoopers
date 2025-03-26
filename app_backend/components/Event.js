import Event_TDG from "./TDG/Event_TDG.js";
import User from "../components/User.js"

class Event {

static event_TDG = new Event_TDG();


 static possibleCategories = [
    'Mathematics', 'Computer Science', 'Physics', 'Biology', 'Chemistry',
    'Engineering', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity',
    'Data Science', 'Economics', 'Philosophy', 'Linguistics', 'Psychology',
    'History', 'Literature', 'Political Science', 'Sociology',
    'Environmental Science', 'Education'
  ];
static possibleTypes = [  
    'Conference',
    'Workshop',
    'Seminar',
    'Hackaton',
    'NetworkingEvent',
    'CareerFair',
    'Lectures'
  ];


constructor(title, description, date, location, category, type, organizer, eid = null) {
    // Type checking
    if (!Event.possibleCategories.includes(category)) {
      throw new TypeError('category is not accepted');
    }
    
    if (!Event.possibleTypes.includes(type)) {
      throw new TypeError('type is not accepted');
    }
    
    if (!(organizer instanceof User)) {
      throw new TypeError('organizer must be an instance of User');
    }
    
    this.eid = eid;
    this.title = title;
    this.description = description;
    this.date = date;
    this.location = location;
    this.category = category;
    this.type = type;
    this.organizer = organizer;

    this.addEvent();
  }

async addEvent(){
    if (!this.eid){//make sure you create an event that is not already in the database
        const newID = await Event.event_TDG.addEvent(this);
        this.eid =newID;
        return newID;
    }
   
}

getCategory(){
    return this.category;
}
getEID(){
    return this.eid;
}
getType(){
    return this.type;
}
getdate(){
    return this.date;
}
getLocation(){
    return this.location;
}
getOrganizer(){
    return this.organizer;
}
getTitle(){
    return this.title;
}
getDescription(){
    return this.description;
}

toString() {
    return `Event [ID: ${this.eid || "N/A"}, Title: "${this.title}", Type: ${this.type}, 
    Category: ${this.category}, Date: ${this.date}, Location: ${this.location}, 
    Organizer: ${this.organizer.name}]`;
  }
}
export default Event;