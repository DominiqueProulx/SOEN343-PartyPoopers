import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import dotenv from "dotenv";
dotenv.config();

class mailgunService{
    constructor() {
        if (mailgunService.instance) {
          return mailgunService.instance;
        }
        this.mailgun = new Mailgun(FormData);
        this.client = this.mailgun.client({
          username: 'api',
          key: "d", 
        }); 

        mailgunService.instance = this;
    }
    async sendTicketEmail(user_name, email, message) {
      try {
        const data = await this.client.messages.create("sandboxb35e96234b634069a2452247883c8e20.mailgun.org", {
          from: "Mailgun Sandbox <postmaster@sandboxb35e96234b634069a2452247883c8e20.mailgun.org>",
          to: [`${user_name} <${email}>`],
          subject: `Ticket to ${user_name}`,
          text: `Ticket sent to ${user_name} for event ${message}`,
        });
    
    
      } catch (error) {
        console.log(error); //logs any error
      }
    }
}

export default new mailgunService();
