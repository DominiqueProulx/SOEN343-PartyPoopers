import React from "react";
import Header from "../components/Header";
import HomePageTab from "../components/HomePageTab";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
    <Header/>

      {/* Hero Section */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4 text-[var(--color-navy)]">Empowering Education Through Smart Events</h2>
          <p className="text-lg mb-6 text-[var(--color-navy)]">
            Discover, connect, and grow with the Smart Education Events System. Personalized recommendations, real-time chatrooms, and dynamic agendas — all in one place.
          </p>
          
         
        </div>
      </section>
      <section id="event grid">
      <HomePageTab/>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-[var(--color-blue)] text-white">
        <div className="container text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose SEES?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-xl font-semibold mb-2">Event Customization</h4>
              <p>Create and personalize event pages to reflect your brand and message.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Real-Time Engagement</h4>
              <p>Join event-specific chatrooms and connect with attendees instantly.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Smart Recommendations</h4>
              <p>Get matched with events that fit your interests and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-6">
        <div className="container text-center">
        <a href="#register" className="inline-block bg-[var(--color-orange)] text-[var(--color-navy)] px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[var(--color-blue)] transition">Get Started</a>
          <p>&copy; {new Date().getFullYear()} Smart Education Events System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}