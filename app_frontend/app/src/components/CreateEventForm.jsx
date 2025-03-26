import React, { useState } from 'react'
import {
  Paper, Box, TextField, FormControl, InputLabel,
  Select, MenuItem, Button, Stack, Typography
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
    type: '',
    organizer_id: 1,
    max_attendees: 100
  })

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)

    try {
      const res = await fetch('http://localhost:5000/api/event/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (res.ok) {
        setMessage('✅ Event created successfully!')
        setFormData({
          title: '', description: '', date: '', location: '',
          category: 'Artificial Intelligence', type: 'Conference',
          organizer_id: 1, max_attendees: 100
        })
      } else {
        setMessage(`❌ Error: ${result.error}`)
      }
    } catch (err) {
      setMessage('❌ Server error occurred.')
    }
  }

  const handleReset = () => {
    setFormData({
      title: '', description: '', date: '', location: '',
      category: '', type: '',
      organizer_id: 1, max_attendees: 100
    })
    setMessage(null)
  }

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '900px', margin: '30px auto' }}>
      <Typography variant="h6" gutterBottom color="#235784">
        Create New Event
      </Typography>
      {message && <Typography variant="body2" color="error" sx={{ mb: 2 }}>{message}</Typography>}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>

        <TextField
          name="title"
          label="Event Title"
          variant="outlined"
          fullWidth
          value={formData.title}
          onChange={handleChange}
          required
        />

        <TextField
          name="location"
          label="Location"
          variant="outlined"
          fullWidth
          value={formData.location}
          onChange={handleChange}
          required
        />

        <FormControl sx={{ minWidth: '200px' }}>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: '200px' }}>
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            label="Type"
            value={formData.type}
            onChange={handleChange}
          >
            {types.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
          </Select>
        </FormControl>

        <TextField
          name="date"
          label="Date"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange}
          sx={{ minWidth: '200px' }}
          required
        />

        <TextField
          name="max_attendees"
          label="Max Attendees"
          type="number"
          value={formData.max_attendees}
          onChange={handleChange}
          sx={{ minWidth: '200px' }}
        />

        <TextField
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          required
        />

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddCircleIcon />}
            sx={{ backgroundColor: '#F7AA00', color: '#235784' }}
          >
            Create Event
          </Button>

          <Button
            variant="outlined"
            onClick={handleReset}
            startIcon={<RestartAltIcon />}
          >
            Reset
          </Button>
        </Stack>
      </Box>
    </Paper>
  )
}
