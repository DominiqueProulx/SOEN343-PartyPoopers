
import React, { useState } from 'react' 
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'// npm install react-router-dom
import HomePage from './screens/Homepage'
import LoginPage from './screens/LoginPage'
import EventsPage from './screens/EventsPage'
import AboutPage from './screens/AboutPage'
import BrowseEvents from './screens/BrowseEvents'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path="/browse-events" element={<BrowseEvents />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

