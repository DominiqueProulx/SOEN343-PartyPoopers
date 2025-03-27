import React, { useState } from 'react'
import {
  Paper, Box, TextField, FormControl, InputLabel,
  Select, MenuItem, Button, Stack, Typography, IconButton
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import DeleteIcon from '@mui/icons-material/Delete'

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
    type: '',
    sponsor_infos: '',
    speaker_infos: '',
    organizer_id: 1,
    max_attendees: 100
  })

  const [agendaItems, setAgendaItems] = useState([{ time: '', topic: '' }])
  const [bannerFile, setBannerFile] = useState(null)
  const [message, setMessage] = useState(null)

  const categories = [
    'Mathematics', 'Computer Science', 'Physics', 'Biology', 'Chemistry',
    'Engineering', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity',
    'Data Science', 'Economics', 'Philosophy', 'Linguistics', 'Psychology',
    'History', 'Literature', 'Political Science', 'Sociology',
    'Environmental Science', 'Education'
  ]

  const types = [
    'Conference', 'Workshop', 'Seminar', 'Hackaton', 'NetworkingEvent', 'CareerFair', 'Lectures'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAgendaChange = (index, field, value) => {
    const updatedAgenda = [...agendaItems]
    updatedAgenda[index][field] = value
    setAgendaItems(updatedAgenda)
  }

  const addAgendaItem = () => {
    setAgendaItems([...agendaItems, { time: '', topic: '' }])
  }

  const removeAgendaItem = (index) => {
    const updated = agendaItems.filter((_, i) => i !== index)
    setAgendaItems(updated)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)

    try {
      // 1. Create the event
      const res = await fetch('http://localhost:5000/api/event/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await res.json()

      if (!res.ok) throw new Error(result.error || 'Event creation failed')
      const eid = result.data.eid

      // 2. Upload banner if selected
      if (bannerFile) {
        const formDataObj = new FormData()
        formDataObj.append('banner', bannerFile)
        await fetch(`http://localhost:5000/api/event/upload/${eid}`, {
          method: 'POST',
          body: formDataObj
        })
      }

      // 3. Submit agenda
      for (const item of agendaItems) {
        if (item.time && item.topic) {
          await fetch(`http://localhost:5000/api/event/agenda/${eid}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
          })
        }
      }

      setMessage('Event created successfully!')
      setFormData({
        title: '', description: '', date: '', location: '',
        category: '', type: '', sponsor_infos: '', speaker_infos: '',
        organizer_id: 1, max_attendees: 100
      })
      setAgendaItems([{ time: '', topic: '' }])
      setBannerFile(null)
    } catch (err) {
      console.error(err)
      setMessage('FAILURE ' + err.message)
    }
  }

  const handleReset = () => {
    setFormData({
      title: '', description: '', date: '', location: '',
      category: '', type: '', sponsor_infos: '', speaker_infos: '',
      organizer_id: 1, max_attendees: 100
    })
    setAgendaItems([{ time: '', topic: '' }])
    setBannerFile(null)
    setMessage(null)
  }

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '900px', margin: '30px auto' }}>
      <Typography variant="h6" gutterBottom color="#235784">
        Create New Event
      </Typography>
      {message && <Typography variant="body2" color="error" sx={{ mb: 2 }}>{message}</Typography>}

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <TextField name="title" label="Event Title" fullWidth value={formData.title} onChange={handleChange} required />
        <TextField name="location" label="Location" fullWidth value={formData.location} onChange={handleChange} required />

        <FormControl sx={{ minWidth: '200px' }} required>
          <InputLabel>Category</InputLabel>
          <Select name="category" value={formData.category} onChange={handleChange}>
            <MenuItem value=""><em>Select Category</em></MenuItem>
            {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: '200px' }} required>
          <InputLabel>Type</InputLabel>
          <Select name="type" value={formData.type} onChange={handleChange}>
            <MenuItem value=""><em>Select Type</em></MenuItem>
            {types.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
          </Select>
        </FormControl>

        <TextField name="date" label="Date" type="datetime-local" InputLabelProps={{ shrink: true }} value={formData.date} onChange={handleChange} required />
        <TextField name="max_attendees" label="Max Attendees" type="number" value={formData.max_attendees} onChange={handleChange} />
        <TextField name="description" label="Description" fullWidth multiline rows={2} value={formData.description} onChange={handleChange} required />

        <TextField name="sponsor_infos" label="Sponsor Info" fullWidth multiline rows={2} value={formData.sponsor_infos} onChange={handleChange} />
        <TextField name="speaker_infos" label="Speaker Info" fullWidth multiline rows={2} value={formData.speaker_infos} onChange={handleChange} />

        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="bold" sx={{ mb: 1 }}>Event Agenda</Typography>
          {agendaItems.map((item, idx) => (
            <Stack key={idx} direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
              <TextField
                label="Time"
                type="time"
                value={item.time}
                onChange={(e) => handleAgendaChange(idx, 'time', e.target.value)}
              />
              <TextField
                label="Topic"
                value={item.topic}
                onChange={(e) => handleAgendaChange(idx, 'topic', e.target.value)}
              />
              {agendaItems.length > 1 && (
                <IconButton onClick={() => removeAgendaItem(idx)} color="error">
                  <DeleteIcon />
                </IconButton>
              )}
            </Stack>
          ))}
          <Button onClick={addAgendaItem} startIcon={<AddCircleIcon />}>Add Agenda Item</Button>
        </Box>

        {/* <Box>
          <Typography fontWeight="bold" sx={{ mb: 1 }}>Upload Banner</Typography>
          <input type="file" accept="image/*" onChange={(e) => setBannerFile(e.target.files[0])} />
        </Box> */}

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" startIcon={<AddCircleIcon />} sx={{ backgroundColor: '#F7AA00', color: '#235784' }}>Create Event</Button>
          <Button variant="outlined" onClick={handleReset} startIcon={<RestartAltIcon />}>Reset</Button>
        </Stack>
      </Box>
    </Paper>
  )
}
