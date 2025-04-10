class EventObservable {
    constructor() {
      this.observers = [];
      this.attendanceData = [];
    }
  
    subscribe(fn) {
      this.observers.push(fn);
      fn(this.attendanceData); // Send current data
    }
  
    notify() {
      this.observers.forEach((fn) => fn(this.attendanceData));
    }
  
    registerAttendee(eid, datetime = new Date().toISOString()) {
      // Get the latest count for that specific event
      const latestForEvent = this.attendanceData.filter(d => d.eid === eid);
      const latestCount = latestForEvent.length > 0
        ? latestForEvent[latestForEvent.length - 1].count
        : 0;
  
      this.attendanceData.push({
        eid,
        time: datetime,
        count: latestCount + 1,
      });
  
      this.notify();
    }
  
    seedFakeData() {
      const events = [];
      for(let i = 0; i < 1000; i++) {
        events.push(i.toString())
      }


      const baseTime = new Date();
  
      for (let eid of events) {
        for (let i = 0; i < 5; i++) {
          const fakeTime = new Date(baseTime.getTime() + i * 600000 + Math.random() * 300000); // slightly randomized
          this.registerAttendee(eid, fakeTime.toISOString());
        }
      }
    }
  }
  
  export const eventObservable = new EventObservable();
  