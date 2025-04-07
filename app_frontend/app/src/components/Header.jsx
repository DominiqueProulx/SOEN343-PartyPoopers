import React from 'react'
import { useState, useEffect, useNavigate } from "react";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:5001/api/user/getCurrentUser", {
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
          console.log(data.user);
        }
        console.log(data.user);
      })
      .catch((err) => console.error("Error fetching session:", err));
  }, []);

  return (
    <div>      {/* Header */}
    <header className="bg-[var(--color-navy)] text-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">SEES</h1>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-[var(--color-orange)]">Home</a>
          <a href="/browse-events" className="hover:text-[var(--color-orange)]">Events</a>
          <a href="/about" className="hover:text-[var(--color-orange)]">About Us</a>
          {user ? (
            <>
              <a href="/dashboard" className="hover:text-[var(--color-orange)]">Dashboard</a>
              <button
                onClick={() => {
                  fetch("http://localhost:5001/api/user/logout", { method: "POST", credentials: "include" })
                    .then(() => setUser(null))
                    .catch((err) => console.error("Logout failed:", err));
                }}
                 className="hover:text-[var(--color-orange)]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="bg-[var(--color-orange)] text-[var(--color-navy)] px-4 py-2 rounded hover:bg-[var(--color-blue)]">Login</a>
              <a href="/register" className="hover:text-[var(--color-orange)]">Register</a>
            </>
          )}
        </nav>
      </div>
    </header></div>
  )
}
