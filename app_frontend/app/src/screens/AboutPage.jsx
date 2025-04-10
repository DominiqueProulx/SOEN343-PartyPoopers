import React from "react";
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <Header/>

    <section class="container section-container mb-5">
    <br />    

    <h1>About our Team - Party Poopers</h1>
    <p>Welcome! 
        We are the creative minds behind this web application developed as part of our SOEN 343 course. 
        
        We are a team of four students, dedicated to building strong solutions and discovering the world of design patterns and architecture. 
        
        Let us introduce ourselves and provide some insight into our project.

    </p>  

    <p class="mt-3">
        Our Team:
        <br />
        <strong>Marchelino Habchi - 40259668</strong>
        <br />
        <strong>Dominique Proulx - 40177566</strong>
        <br />
        <strong>Tanim Chowdhury - 40245607</strong>
        <br />
        <strong>Mathieu Phan - 40176824</strong>
    </p>

    </section>

    <section class="container section-container mb-5">
    <h1>SEES- Our mission</h1>
    <p>SEES is a comprehensive web-based platform designed to revolutionize educational event management. We empower organizers to create, manage, and promote impactful educational events, while enabling attendees to discover, register for, and actively participate in meaningful learning experiences.</p>

<h2>What Makes Us Different</h2>
    <p class="mt-3">
    Unlike traditional event platforms, SEES focuses on the complete event lifecycle - including pre-event engagement and post-event interaction. We believe that educational events shouldn't be isolated experiences but ongoing journeys of learning and connection.
    </p>    
    </section>
    <section class="container section-container mb-5">
  <h1>The Power of the SEES</h1>

<h3>For Organizers</h3>
     
    <ul>
          <li>Create and manage educational events with powerful tools</li>
          <li>Generate excitement with pre-event engagement features</li>
          <li>Collect valuable feedback after events</li>
          <li>Build ongoing communities around educational content</li>
          <li>Reach larger audiences through enhanced promotion features</li>
        </ul>

        
        <h3>For Attendees</h3>
        <ul>
          <li>Discover relevant educational events tailored to your interests</li>
          <li>Preview events accurately before registering</li>
          <li>Engage with content before, during, and after events</li>
          <li>Share feedback and experiences with organizers and other attendees</li>
          <li>Continue learning beyond the scheduled event time</li>
        </ul>

        <h3>Our Technology</h3>
        <p>SEES is built using modern web technologies focused on creating seamless, responsive, and accessible experiences for all users. Our platform integrates robust event management tools with community-building features to create a unique educational ecosystem.</p>
    </section>

    <div class="container" id="faq-section">

    <h1 id="faq-section-header">Frequently Asked Questions</h1>

    <div class="faq-container">
    <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        <div class="faq">
            
            <h3 class="faq-title">How can I create an event on SEES?</h3>

            <p class="faq-text">
                Clicking on the Button "Becvome an organizer" will bring you to the create event form . From the re you can add all the event information and the agenda as well! Try it out now and become an organizer or SEES events! 
            </p>

            <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>


    <div class="faq-container">

        <div class="faq">
            <h3 class="faq-title">What types of events can be hosted on SEES?</h3>
            <p class="faq-text">
            SEES is designed for all types of educational events - from webinars, workshops, and conferences to seminars, training sessions, and educational meetups. If your event has a learning component, SEES can help you manage and enhance it.
            </p>
            <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>

    <div class="faq-container">
        <div class="faq">
            <h3 class="faq-title">How do I register for events as an attendee?</h3>
            <p class="faq-text">
            Once you create a user account, you can browse events by category, date, or topic, preview event details, and register with just a few clicks. Your dashboard will track all your registered and past events.
            </p>
            <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>

    <div class="faq-container">
        <div class="faq">
            <h3 class="faq-title">Can I help work on this Website?</h3>
            <p class="faq-text">
                We encourage you to register an account on our platform and provide us with valuable feedback. 
                Your insights will help us enhance the platform and make it even more user-friendly. If you have any questions, suggestions, or inquiries, 
                please feel free to reach out to us!
            </p>
            <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>

    </div>

        {/* Footer */}
        <footer className="bg-[var(--color-navy)] text-white py-6">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Smart Education Events System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}