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
    async getAllEvent(uid) {
        const query = "SELECT * FROM app_event WHERE eid IN (SELECT eid FROM attendee_event WHERE uid = $1)";
        try {
            const res = await pool.query(query, [uid]);
            return res.rows;
        }
        catch(err){
            throw err;
        }
    }
}



export default new Event_Attendee_TDG();