import React, { useState } from 'react' // Capitalize "React"
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BrowseEvents from './pages/BrowseEvents'
import './App.css'


function App() {
  return (
    <Router>
      <div className="app">
        <h1>Event App</h1>
        <img src={reactLogo} alt="React Logo" />
       
        {/* Navigation Menu */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/browse-events">Browse Events</Link>
            </li>
            <li>
              <Link to="/">Homepage</Link>
            </li>
          </ul>
        </nav>
       
        {/* Route Definitions */}
        <div className="content">
          <Routes>
            <Route path="/browse-events" element={<BrowseEvents />} />
            <Route path="/" element={<div>Home Page Content</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App