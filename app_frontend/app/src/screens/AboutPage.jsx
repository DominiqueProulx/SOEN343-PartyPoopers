import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <header className="bg-[var(--color-navy)] text-white shadow-md">
        <div className="container flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">SEES</h1>
          <nav className="flex gap-6 items-center">
            <a href="/" className="hover:text-[var(--color-orange)]">Home</a>
            <a href="/events" className="hover:text-[var(--color-orange)]">Events</a>
            <a href="/about" className="hover:text-[var(--color-orange)]">About Us</a>
            <a href="/login" className="bg-[var(--color-orange)] text-[var(--color-navy)] px-4 py-2 rounded hover:bg-[var(--color-blue)]">Login</a>
          </nav>
        </div>
      </header>


    <section class="container section-container mb-5">
    <br />    

    <h1>About our Team - Party Poopers</h1>
    <p>Welcome! 
        We are the creative minds behind this web application developed as part of our SOEN 343 course. 
        
        We are a team of four students, dedicated to bringing innovation to the world of event management. 
        
        Let us introduce ourselves and provide some insight into our project.

    </p>  

    <p class="mt-3">
        Our Team:
        <br />
        <strong>Marchelino Habchi - 40259668</strong>: Role1
        <br />
        <strong>Dominique Proulx - 40177566</strong>: Role2
        <br />
        <strong>Tanim Chowdhury - 40245607</strong>: Role3
        <br />
        <strong>Mathieu Phan - 40176824</strong>: Role4
    </p>

    </section>

    <section class="container section-container mb-5">
    <h1>About this Web App</h1>
    <p>This webapp aims to...</p>

    <p class="mt-3">
        We can also mention our tech stack here, or anything else.
    </p>    
    </section>


    <div class="container" id="faq-section">

    <h1 id="faq-section-header">Frequently Asked Questions</h1>

    <div class="faq-container">
        <div class="faq">
            
            <h3 class="faq-title">How can I...?</h3>

            <p class="faq-text">
                Answer to Question1
            </p>

            <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>


    <div class="faq-container">
        <div class="faq">
            <h3 class="faq-title">Question2</h3>
            <p class="faq-text">
                Answer to Question2
            </p>
            <button class="faq-toggle">
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>

    <div class="faq-container">
        <div class="faq">
            <h3 class="faq-title">Question3</h3>
            <p class="faq-text">
                Answer to Question3
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