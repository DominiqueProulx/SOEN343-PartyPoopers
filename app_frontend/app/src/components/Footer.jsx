import React from 'react';

export default function Footer() {
    return(
    <footer className="bg-[var(--color-navy)] text-white py-6">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Smart Education Events System. All rights reserved.</p>
        </div>
      </footer>
    )
}