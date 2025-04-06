import React from 'react';
import { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import theme from '../styles/theme';

export default function Header() {
  const theme = useTheme();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/user/getCurrentUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error("Error fetching session:", err));
  }, []);

  return (
    <header className="w-full shadow-md bg-[#235784]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-semibold text-white tracking-wider">SEES</h1>
        <nav className="flex flex-wrap items-center gap-4 md:gap-6 mt-3 md:mt-0 text-white font-medium text-base">
          <a href="/" className="hover:text-sky-200 transition-colors">Home</a>
          <a href="/browse-events" className="hover:text-sky-200 transition-colors">Events</a>
          <a href="/about" className="hover:text-sky-200 transition-colors">About Us</a>
          <a href="/myaccount" className="hover:text-sky-200 transition-colors">My Account</a>

          {user ? (
            <>
              <a href="http://localhost:5000/dashboard" className="hover:text-sky-200 transition-colors">Dashboard</a>
              <button
                onClick={() => {
                  fetch("http://localhost:5000/api/user/logout", { method: "POST", credentials: "include" })
                    .then(() => setUser(null))
                    .catch((err) => console.error("Logout failed:", err));
                }}
                className="hover:text-sky-200 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a 
                href="/login" 
                className="bg-white text-[#235784] px-4 py-1.5 rounded-md font-semibold hover:bg-gray-100 transition-all"
              >
                Login
              </a>
              <a 
                href="/register" 
                className="border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-[#235784] transition-all"
              >
                Register
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
