import Handler from "./handler.js";
import mailgunService from "../services/mailgunService";

class TicketEmailHandler extends Handler {
    handle(user, eid) {
      mailgunService.sendTicketEmail(user, eid)
      console.log("Sending email to user ", user, " for ticket")
      super.handle(user, eid);
    }
  }

export default TicketEmailHandler;