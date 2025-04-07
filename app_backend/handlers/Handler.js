class Handler {
    constructor(nextHandler) {
      this.nextHandler = nextHandler;
    }
  
    handle(user, eid) {
      if (this.nextHandler) {
        this.nextHandler.handle(user, eid);
      }
    }
  }

  export default Handler;