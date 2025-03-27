import User from '../components/User.js';
import pool from '../db.js'


class Attendee_Catalog{
    async addAttendees(req, res) {
        try {
            const uid = req.session.user.uid;
            const eid = req.body.eid;
            
        }
        catch (err) {

        }
    }

    async getAttendees(req, res) {
        try {
            const user = req.body.eid;
            const query = "SELECT * FROM app_user WHERE uid IN (SELECT uid FROM event_attendee WHERE eid = $1)"
            const result = await pool.query(query, [eid]);

        }
        catch(err) {
        }

    }
}

export default Attendee_Catalog;

