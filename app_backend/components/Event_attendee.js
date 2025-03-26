import Event_Attendee_TDG from "./TDG/Event_Attendee_TDG";
class event_attendee {
    constructor(uid, eid) {
        this.uid = uid;
        this.eid = eid;
    }
    static async addAttendee(uid, eid) {
        try{
            return await Event_Attendee_TDG.addAttendee(uid, eid); 
        }
        catch(err) {
            throw err;
        }
    }
}