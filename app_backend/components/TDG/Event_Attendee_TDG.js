import pool from "../../db.js"
class Event_Attendee_TDG {
    async addAttendee(uid, eid) {
        const query = "INSERT INTO event_attendee (uid, eid) VALUES ($1, $2)"
        try {
            const res = await pool.query(query, [uid, eid]);
            return res.row[0]
        }
        catch(err){
            throw err;
        }
    }
}

export default Event_Attendee_TDG;