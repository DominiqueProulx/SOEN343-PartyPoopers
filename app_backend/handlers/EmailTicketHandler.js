import Handler from "./handler.js";
import mailgunService from "../services/mailgunService.js";

class EmailTicketHandler extends Handler {

    handle(user, eid) {
      mailgunService.sendTicketEmail(user.user_name, user.email, eid)
      console.log("Sending email to user ", user, " for ticket", eid)
      super.handle(user, eid);
    }
  }

export default EmailTicketHandler;