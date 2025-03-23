import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import EventGrid from '../components/EventGrid';
import useEventFilter  from '../hooks/useEventFilter'
import Searchbar from '../components/searchbar';





function BrowseEvents() {
    // custom hook to fetch and update set of events
    const { events, error, setEvents, fetchFilteredEvents } = useEventFilter();
    
    //create a constants to hold and update the filter details 
    const [filterDetails, setFilterDetails] = useState({
        keyword: '',
        category: '',
        eventType: '',
        date: ''
      });



   //Handle change to any of the filters

   //change keyword
  const updateKeyword = (newKeyword) => {
    setFilterDetails(prevDetails => ({
      ...prevDetails,//keep all the other ones 
      keyword: newKeyword //change only keyword
    }));
  }; 
  

   const resetKeyword = () => {
    setFilterDetails(prevDetails => ({
      ...prevDetails,
      keyword: ''
    }));
  }; 
  
   //change Date
   const updateDate = (newDate) => {
    setFilterDetails(prevDetails => ({
      ...prevDetails,
      date: newDate 
    }));
  }; 
  
     const resetDate = () => {
        setFilterDetails(prevDetails => ({
          ...prevDetails,
          date: '' 
        }));
      }; 

  //change category
    const updateCategory = (newCategory) => {
        setFilterDetails(prevDetails => ({
          ...prevDetails,//keep all the other ones 
          category: newCategory //change only Category
        }));
      }; 
    
    const resetCategory = () => {
        setFilterDetails(prevDetails => ({
          ...prevDetails,//keep all the other ones 
          category: ''
        }));
      }; 

    //change type
    const updateType = (newType) => {
        setFilterDetails(prevDetails => ({
          ...prevDetails, 
          eventType: newType 
        }));
      }; 
      
    const resetType = () => {
        setFilterDetails(prevDetails => ({
          ...prevDetails,
          eventType: '' 
        }));
      }; 

       //reset all the filters
    const resetAllFilters = () => {
        setFilterDetails({
            keyword: '',
            category: '',
            eventType: '',
            date: ''
                    });
      }; 



       
    useEffect(() => {
        console.log("BrowseEvents component mounted!");
        console.log('Browse event sending filterDetails to fetFilteredEvents in hook. the details: ', filterDetails )
      fetchFilteredEvents(filterDetails)
    }, [filterDetails]);
    
    return (
        <div >
          {/* filter criteria*/}
            <Searchbar />

            <Typography variant="h3" component="h1" sx={{ p: 3 , color : '#235784'}}>
                Upcoming Events
            </Typography>
            {/* Change eventsData to events */}
            <EventGrid events={events} />
        </div>
    );
}

export default BrowseEvents;