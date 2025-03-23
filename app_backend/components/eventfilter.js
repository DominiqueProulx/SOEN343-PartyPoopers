class EventFilter {
  buildFilter() {
    throw new Error('Method buildFilter() must be implemented by the concrete classes, this is modeled as an interface');
  }
  
  getParameters() {
    return [];
  }
}

class BaseFilter extends EventFilter {
  constructor() {
    super();
    this.tableName = 'app_event';
    this.today = new Date();
  }
 
  buildFilter() {
    const query = {
      sql: `SELECT * FROM ${this.tableName} WHERE event_date >= $1`,
      values: [this.today]
    };
    
    console.log('BaseFilter Query:', query);
    return query;
  }
 
  getParameters() {
    return [this.today];
  }
}

class EventFilterDecorator extends EventFilter {
  constructor(filter) {
    super();
    if (!(filter instanceof EventFilter)) {
      throw new Error('FilterDecorator must wrap a Filter instance');
    }
    this.filter = filter;
  }
 
  buildFilter() {
    return this.filter.buildFilter();
  }
 
  getParameters() {
    return this.filter.getParameters();
  }
}

class Keyword_EventFilterDecorator extends EventFilterDecorator {
  constructor(filter, keyword) {
    super(filter);
    this.keyword = keyword;
  }
 
  buildFilter() {
    const baseQuery = this.filter.buildFilter();
    const paramIndex = baseQuery.values.length + 1;
    
    const query = {
      sql: `${baseQuery.sql} AND description LIKE $${paramIndex}`,
      values: [...baseQuery.values, `%${this.keyword}%`]
    };
    
    console.log('After Keyword Filter:', query);
    return query;
  }
 
  getParameters() {
    return [...super.getParameters(), `%${this.keyword}%`];
  }
}

class Category_EventFilterDecorator extends EventFilterDecorator {
  constructor(filter, category) {
    super(filter);
    this.category = category;
  }
 
  buildFilter() {
    const baseQuery = this.filter.buildFilter();
    const paramIndex = baseQuery.values.length + 1;
    
    const query = {
      sql: `${baseQuery.sql} AND event_category = $${paramIndex}`,
      values: [...baseQuery.values, this.category]
    };
    
    console.log('After Category Filter:', query);
    return query;
  }
 
  getParameters() {
    return [...super.getParameters(), this.category];
  }
}

class Date_EventFilterDecorator extends EventFilterDecorator {
  constructor(filter, date) {
    super(filter);
    this.eventDate = date;
  }
 
  buildFilter() {
    const baseQuery = this.filter.buildFilter();
    const paramIndex = baseQuery.values.length + 1;
    
    const query = {
      sql: `${baseQuery.sql} AND event_date = $${paramIndex}`,
      values: [...baseQuery.values, this.eventDate]
    };
    
    console.log('After Date Filter:', query);
    return query;
  }
 
  getParameters() {
    return [...super.getParameters(), this.eventDate];
  }
}

class EventType_EventFilterDecorator extends EventFilterDecorator {
  constructor(filter, type) {
    super(filter);
    this.type = type;
  }
 
  buildFilter() {
    const baseQuery = this.filter.buildFilter();
    const paramIndex = baseQuery.values.length + 1;
    
    const query = {
      sql: `${baseQuery.sql} AND type = $${paramIndex}`,
      values: [...baseQuery.values, this.type]
    };
    
    console.log('After EventType Filter:', query);
    return query;
  }
 
  getParameters() {
    return [...super.getParameters(), this.type];
  }
}

export {
  EventFilter,
  BaseFilter,
  EventFilterDecorator,
  Keyword_EventFilterDecorator,
  Category_EventFilterDecorator,
  EventType_EventFilterDecorator,
  Date_EventFilterDecorator
};