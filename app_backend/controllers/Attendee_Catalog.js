import User from '../components/User.js';
import pool from '../db.js'
import EmailTicketHandler from '../handlers/EmailTicketHandler.js';
import RegistrationHandler from '../handlers/RegistrationHandler.js';

class Attendee_Catalog{
    async addAttendee(req, res) {
        try {
            const user = req.session.user;
            const eid = req.body.eid;
            const handlerChain = new RegistrationHandler(new EmailTicketHandler());
            console.log(user)
            if(eid) {
                handlerChain.handle(user, eid);
                res.status(200).json({message: "Successful event added"})
            }
            else{
                res.status(400).json({message: "No uid"})
            }
        }
        catch (err) {
            res.status(400).json({message: "Error", error: err});
        }
    }

    async getAttendees(req, res) {
        try {
            const user = req.body.eid;
            const query = "SELECT * FROM app_user WHERE uid IN (SELECT uid FROM attendee_event WHERE eid = $1)"
            const result = await pool.query(query, [eid]);

        }
        catch(err) {
        }

    }
}

export default new Attendee_Catalog;

