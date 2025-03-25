import React from 'react'

export default function Header() {
  return (
    <div>      {/* Header */}
    <header className="bg-[var(--color-navy)] text-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">SEES</h1>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-[var(--color-orange)]">Home</a>
          <a href="/browse-events" className="hover:text-[var(--color-orange)]">Events</a>
          <a href="/about" className="hover:text-[var(--color-orange)]">About Us</a>
          <a href="/login" className="bg-[var(--color-orange)] text-[var(--color-navy)] px-4 py-2 rounded hover:bg-[var(--color-blue)]">Login</a>
          <a href="/register" className="hover:text-[var(--color-orange)]">Register</a>
        </nav>
      </div>
    </header></div>
  )
}
