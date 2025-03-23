class EventFilter {
// The base method that all filters will implement
    buildFilter() {
      throw new Error('Method buildFilter() must be implemented by the concrete classes, this is modeled as an itnerface');
    }
    // Helper method to get query parameters
  getParameters() {
    return [];
  }
}

//Base Filter (shows all the events that are today and in the future)
class BaseFilter extends EventFilter {
    constructor() {
      super();
      this.tableName =  'events';
      this.today = new Date();
    }
    
    buildFilter() {
      // Return the base query as an object with SQL and params
      return {
        sqlText: `SELECT * FROM ${this.tableName} WHERE date >= ?`,
        values: [this.today]
      };
    }
    
    getParameters() {
      return [this.today];
    }
  }

  //Abstract decorator for the Filter
  class EventFilterDecorator extends EventFilter {
    constructor(filter) {
      super();
      // Store the wrapped filter component
      if (!(filter instanceof Filter)) {
        throw new Error('FilterDecorator must wrap a Filter instance');
      }
      this.filter = filter;
    }
    
    // Default implementation that delegates to the wrapped filter
    buildFilter() {
      return this.filter.buildFilter();
    }
    
    getParameters() {
      return this.filter.getParameters();
    }
  }

 //Keyword Filter Decorator
class Keyword_EventFilterDecorator extends EventFilterDecorator {
    constructor(filter, keyword) {
      super(filter);
      this.keyword = keyword;
    }
    
    buildFilter() {
      // Get the base query from the wrapped filter
      const baseQuery = this.filter.buildFilter();
      
      // Add keyword filtering
      return {
        sqlText: `${baseQuery.sql} AND description LIKE ?`,
        values: [...baseQuery.params, `%${this.keyword}%`]
      };
    }
    
    //returns the parameter of the wrapped object as well as the keyword
    getParameters() {
      return [...super.getParameters(), `%${this.keyword}%`];
    }
  } 

  // Category Filter decorator
class Category_EventFilterDecorator extends EventFilterDecorator {
    constructor(filter, category) {
      super(filter);
      this.category = category;
    }
    
    buildFilter() {
      const baseQuery = this.filter.buildFilter();
      
      return {
        sql: `${baseQuery.sql} AND category = ?`,
        params: [...baseQuery.params, this.category]
      };
    }
    
    getParameters() {
      return [...super.getParameters(), this.category];
    }
  }

  class Date_EventFilterDecorator extends EventFilter{
        constructor(filter,date){
            super(filter)
            this.eventDate = date;

        }
      buildFilter() {
            const baseQuery = this.filter.buildFilter();
            
            return {
              sql: `${baseQuery.sql} AND date = ?`,
              params: [...baseQuery.params, this.eventDate]
            };
          }
          getParameters() {
            return [...super.getParameters(), this.eventDate];
          }
  }

  class EventType_EventFilterDecorator extends EventFilter{
    constructor(filter,type){
        super(filter)
        this.type = type;

    }
  buildFilter() {
        const baseQuery = this.filter.buildFilter();
        
        return {
          sql: `${baseQuery.sql} AND type = ?`,
          params: [...baseQuery.params, this.type]
        };
      }
      getParameters() {
        return [...super.getParameters(), this.type];
      }
}

  module.export ={
    EventFilter,
    EventFilterDecorator,
    BaseFilter,
    Keyword_EventFilterDecorator,
    Category_EventFilterDecorator,
    EventType_EventFilterDecorator,

  }
