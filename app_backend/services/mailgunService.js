import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import dotenv from "dotenv";
dotenv.config();

class mailgunService{
    constructor() {
        if (mailgunService.instance) {
          return mailgunService.instance;
        }
        console.log(process.env.MAILGUN_API_KEY)
        this.mailgun = new Mailgun(FormData);
        this.client = this.mailgun.client({
          username: 'api',
          key: "3d21ba47d697823a7cdb8ee914154c76-f6202374-c9bc205c", 
        }); 

        mailgunService.instance = this;
    }
    async sendTicketEmail(user_name, email, message) {
      console.log(message, " FROM mgsv")
      console.log(email, " FROM mgsv")
      console.log(user_name, " FROM mgsv")
      try {
        console.log(this.client)
        const data = await this.client.messages.create("sandboxb35e96234b634069a2452247883c8e20.mailgun.org", {
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

export default new mailgunService();
