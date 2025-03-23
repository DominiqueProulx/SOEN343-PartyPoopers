import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <header className="bg-[var(--color-navy)] text-white shadow-md">
        <div className="container flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Login Page</h1>
          <nav className="flex gap-6 items-center">
            <a href="/" className="hover:text-[var(--color-orange)]">Home</a>
            <a href="/events" className="hover:text-[var(--color-orange)]">Events</a>
            <a href="/about" className="hover:text-[var(--color-orange)]">About Us</a>
            <a href="/login" className="bg-[var(--color-orange)] text-[var(--color-navy)] px-4 py-2 rounded hover:bg-[var(--color-blue)]">Login</a>
          </nav>
        </div>
      </header>

        {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-6">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Smart Education Events System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}