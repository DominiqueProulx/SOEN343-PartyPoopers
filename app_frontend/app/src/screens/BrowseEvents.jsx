import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import EventGrid from '../components/EventGrid'
import useEventFilter from '../hooks/useEventFilter'
import Searchbar from '../components/searchbar'
import Header from '../components/Header'

function BrowseEvents() {
  const { events, error, setEvents, fetchFilteredEvents } = useEventFilter()

  const [filterDetails, setFilterDetails] = useState({
    keyword: '',
    category: '',
    eventType: '',
    date: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    fetchFilteredEvents(filterDetails)
  }, [filterDetails])

  return (
    <div>
      <Header />

      {/* Create Event Button */}
      <div className="flex justify-end p-4">
        <Button
          variant="contained"
          onClick={() => navigate('/create-event')}
          style={{
            backgroundColor: '#F7AA00',
            color: '#235784',
            fontWeight: 'bold',
            borderRadius: '8px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          + Create Event
        </Button>
      </div>

      <Searchbar setFilterDetails={setFilterDetails} />

      <Typography variant="h3" component="h1" sx={{ p: 3, color: '#235784' }}>
        Upcoming Events
      </Typography>

      <EventGrid events={events} />
    </div>
  )
}

export default BrowseEvents
