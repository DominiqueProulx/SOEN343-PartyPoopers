import Handler from "./Handler.js";
import pool from "../db.js";

class RegistrationHandler extends Handler {
    async handle(user, eid) {
        const query = 'INSERT INTO attendee_event (uid, eid) VALUES ($1, $2) RETURNING *';
        try {
            const res = await pool.query(query, [user.uid, eid]);
            console.log("Registering user in db", res.rows[0]);
            console.log(`User ${user} registered successfully`);
            super.handle(user, eid);
            return res.rows[0];
        } catch (err) {
            console.log('Error registering user to event:', err);
            throw err;
        }
    }
}


console.log("hello")
export default RegistrationHandler;