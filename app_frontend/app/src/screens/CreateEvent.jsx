import React from "react";
import Header from '../components/Header';
import CreateEventForm from '../components/CreateEventForm'

export default function CreateEvent() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
        {/* Header */}
        <Header/>

        {/* Create Event Form */}
        <CreateEventForm />

        {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-6">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Smart Education Events System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}