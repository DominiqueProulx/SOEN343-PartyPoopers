import User from '../components/User.js';
import pool from '../db.js'
import TicketEmailHandler from '../handlers/EmailTicketHandler.js';
import RegistrationHandler from '../handlers/RegistrationHandler.js';

class Attendee_Catalog{
    async addAttendees(req, res) {
        try {
            const user = req.session.user;
            const eid = req.body.eid;
            const handlerChain = new RegistrationHandler(new TicketEmailHandler());
            handlerChain.handle(user, eid);
            res.status(200).json({message: "Successful event added"})
        }
        catch (err) {
            res.status(400).json({message: "Error", error: err});
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

