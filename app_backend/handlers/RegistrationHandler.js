import Handler from "./handler";
import pool from "../db";

class RegistrationHandler extends Handler {
    async handle(user, eid) {
        const query = 'INSERT INTO event_attendee (uid, eid) VALUES ($1, $2) RETURNING *';
        try {
            const res = await pool.query(query, [user.uid, eid]);
            console.log("Registering user in db", res.rows[0]);
            console.log(`User ${user} registered successfully`);
            super.handle(user, eid);
            return res.rows[0];
        } catch (err) {
            console.error('Error registering user to event:', err);
            throw err;
        }  
    }
  }

export default RegistrationHandler;