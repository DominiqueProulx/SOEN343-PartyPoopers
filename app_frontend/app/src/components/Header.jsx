import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Logo from './Logo';

export default function Header() {
  const theme = useTheme();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/user/getCurrentUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
        console.log(data.user);
      })
      .catch((err) => console.error('Error fetching session:', err));
      console.log('yes');
  }, []);

  return (
    <header className="w-full shadow-md bg-[#235784]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
        {/* Logo container */}
        <div className="w-16 h-16 flex items-center justify-center" style={{ width: '500px' }}>
          <Logo className="w-full h-full object-contain" />
        </div>

        {/* Create Event Button */}
        <div className="flex justify-end p-4">
          <Button
            variant="contained"
            onClick={() => navigate('/create-event')}
            style={{
              backgroundColor: '#F7AA00',
              color: '#235784',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
              whiteSpace: 'nowrap',
              marginTop: '-30px',
              marginBottom: '10px',
              padding: '20px 30px',
              float: 'right',
            }}
          >
            Become an Organizer! Create an Event now!
          </Button>
        </div>

        {/* Navigation */}
        <div
          style={{ flexGrow: 1, backgroundColor: '#235784', padding: 25, fontSize: 20 }}
          className="flex justify-center"
        >
          <nav className="flex flex-wrap items-center gap-4 md:gap-6 mt-3 md:mt-0 text-white font-medium text-base">
            <a href="/home" className="hover:text-sky-200 transition-colors">
              Home
            </a>
            <span className="text-white text-xl">|</span>
            <a href="/browse-events" className="hover:text-sky-200 transition-colors">
              Events
            </a>
            <span className="text-white text-xl">|</span>
            <a href="/about" className="hover:text-sky-200 transition-colors">
              About Us
            </a>
            <span className="text-white text-xl">|</span>
          
            <a href="/myaccount" className="hover:text-sky-200 transition-colors"> {/* TODO: Remove this when login works*/}
              My Account
            </a>
            {user ? (
              <>
                <a href="/myaccount" className="hover:text-sky-200 transition-colors">
              My Account
            </a>
                <span className="text-white text-xl">|</span>
                <a
                  href="http://localhost:5000/dashboard"
                  className="hover:text-sky-200 transition-colors"
                >
                  Dashboard
                </a>
                <span className="text-white text-xl">|</span>
                <button
                  onClick={() => {
                    fetch('http://localhost:5000/api/user/logout', {
                      method: 'POST',
                      credentials: 'include',
                    })
                      .then(() => setUser(null))
                      .catch((err) => console.error('Logout failed:', err));
                  }}
                  className="hover:text-sky-200 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}