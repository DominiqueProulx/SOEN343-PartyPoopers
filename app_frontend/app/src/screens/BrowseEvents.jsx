import React, { useState, useEffect } from 'react'
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions  } from '@mui/material'
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

  const [selectedEvent, setSelectedEvent] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const handleViewDetails = async (event) => {
    try {
      // Fetch agenda
      const agendaRes = await fetch(`http://localhost:5000/api/event/agenda/${event.eid}`);
      const agendaData = await agendaRes.json();
      const agenda = agendaData?.agenda || [];
  
      // Fetch sponsor & speaker info
      const detailRes = await fetch(`http://localhost:5000/api/event/details/${event.eid}`);
      const detailData = await detailRes.json();
      const details = detailData?.details || {};
  
      // Combine all into selectedEvent
      setSelectedEvent({
        ...event,
        agenda,
        sponsor_infos: details.sponsor_infos,
        speaker_infos: details.speaker_infos
      });
  
      setOpenModal(true);
    } catch (err) {
      console.error('Error loading event details:', err);
      setSelectedEvent({ ...event, agenda: [], sponsor_infos: '', speaker_infos: '' });
      setOpenModal(true);
    }
  };

  const handleClose = () => {
    setSelectedEvent(null)
    setOpenModal(false)
  }
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

      <EventGrid events={events} onViewDetails={handleViewDetails} />

      <Dialog open={openModal} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ color: '#235784' }}>
        {selectedEvent?.title}
      </DialogTitle>
      <DialogContent dividers>
        {selectedEvent?.banner_file && (
          <img
            src={`http://localhost:5000/uploads/${selectedEvent.banner_file}`}
            alt="Event Banner"
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
          />
        )}
        <Typography variant="subtitle1"><strong>Date:</strong> {selectedEvent?.event_date}</Typography>
        <Typography variant="subtitle1"><strong>Location:</strong> {selectedEvent?.location}</Typography>
        <Typography variant="subtitle1"><strong>Category:</strong> {selectedEvent?.event_category}</Typography>
        <Typography variant="subtitle1"><strong>Type:</strong> {selectedEvent?.type}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>{selectedEvent?.description}</Typography>

        {/* Additional Details */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Sponsor Info:</strong> {selectedEvent?.sponsor_infos || 'N/A'}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Speaker Info:</strong> {selectedEvent?.speaker_infos || 'N/A'}
        </Typography>

        {/* Agenda */}
        {selectedEvent?.agenda && selectedEvent.agenda.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mt: 3, color: '#235784' }}>Agenda</Typography>
            {selectedEvent.agenda.map((item, idx) => (
              <Typography key={idx} variant="body2">🕒 {item.time_slot} — {item.topic}</Typography>
            ))}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: '#235784' }}>Close</Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default BrowseEvents
