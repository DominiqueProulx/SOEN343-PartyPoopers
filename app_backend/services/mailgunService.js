import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import dotenv from "dotenv";
dotenv.config();

class mailgunService{
    constructor() {
        this.mailgun = new Mailgun(FormData);
        this.client = this.mailgun.client({
          username: 'api',
          key: process.env.MAILGUN_API_KEY, 
        }); 
    }
    static async sendTicketEmail(user_name, email, message) {
      try {
        const data = await client.messages.create("sandboxb35e96234b634069a2452247883c8e20.mailgun.org", {
          from: "Mailgun Sandbox <postmaster@sandboxb35e96234b634069a2452247883c8e20.mailgun.org>",
          to: [`${user_name} <${email}>`],
          subject: `Ticket to ${user_name}`,
          text: message,
        });
    
        console.log(data); // logs response data
    
      } catch (error) {
        console.log(error); //logs any error
      }
    }
}

export default mailgunService;