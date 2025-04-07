import React from 'react';

const Logo = ({ width = 400, height = 200 }) => {
  return (
    <div className="w-full flex justify-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 200" 
        className="w-full max-w-lg"
      >
        {/* Background rectangle with gradient */}
       {/* <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#F7AA00", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#F79500", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#backgroundGradient)" rx="20" ry="20" />*/}
        
        {/* Reduced futuristic elements */}
        <path d="M 50 50 L 380 50" stroke="#40A8C4" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M 50 160 L 380 160" stroke="#40A8C4" strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Calendar icon */}
        <rect x="40" y="70" width="70" height="70" rx="5" ry="5" fill="#FFFFFF" stroke="#235784" strokeWidth="2" />
        <rect x="40" y="70" width="70" height="12" rx="0" ry="0" fill="#235784" />
        
      
        <rect x="50" y="90" width="10" height="10" rx="1" ry="1" fill="#235784" opacity="0.8" />
        <rect x="70" y="90" width="10" height="10" rx="1" ry="1" fill="#235784" opacity="0.8" />
        <rect x="90" y="90" width="10" height="10" rx="1" ry="1" fill="#235784" opacity="0.8" />
        
        <rect x="50" y="105" width="10" height="10" rx="1" ry="1" fill="#40A8C4" opacity="0.8" />
        <rect x="70" y="105" width="10" height="10" rx="1" ry="1" fill="#40A8C4" opacity="0.8" />
        <rect x="90" y="105" width="10" height="10" rx="1" ry="1" fill="#40A8C4" opacity="0.8" />
        
        <rect x="50" y="120" width="10" height="10" rx="1" ry="1" fill="#235784" opacity="0.8" />
        <rect x="70" y="120" width="10" height="10" rx="1" ry="1" fill="#235784" opacity="0.8" />
        <rect x="90" y="120" width="10" height="10" rx="1" ry="1" fill="#235784" opacity="0.8" />
        
        {/* Main text SEES with futuristic style */}
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#235784", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#40A8C4", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* S */}
        <path d="M 140 85 
                C 130 85, 125 90, 125 95 
                C 125 100, 130 105, 145 105 
                C 160 105, 165 110, 165 115 
                C 165 120, 160 125, 140 125 
                L 140 130 
                C 165 130, 170 120, 170 115 
                C 170 108, 165 100, 145 100 
                C 130 100, 130 95, 130 94 
                C 130 90, 135 80, 145 80 
                L 140 85 Z" 
                fill="url(#textGradient)" />
        
        {/* E */}
        <path d="M 180 80 L 180 130 L 220 130 L 220 125 L 185 125 L 185 108 L 215 108 L 215 103 L 185 103 L 185 85 L 220 85 L 220 80 Z" 
              fill="url(#textGradient)" />
        
        {/* E */}
        <path d="M 230 80 L 230 130 L 270 130 L 270 125 L 235 125 L 235 108 L 265 108 L 265 103 L 235 103 L 235 85 L 270 85 L 270 80 Z" 
              fill="url(#textGradient)" />
        
        {/* S */}
        <path d="M 290 85 
                C 280 85, 275 90, 275 95 
                C 275 100, 280 105, 295 105 
                C 310 105, 315 110, 315 115 
                C 315 120, 310 125, 290 125 
                L 290 130 
                C 315 130, 320 120, 320 115 
                C 320 108, 315 100, 295 100 
                C 280 100, 280 95, 280 94 
                C 280 90, 285 80, 295 80 
                L 290 85 Z" 
                fill="url(#textGradient)" />
        
        {/* Subtitle - */}
        <text x="120" y="145" fontFamily="Arial, sans-serif" fontSize="12" fill="#235784" letterSpacing="0.3">SMART EDUCATION EVENTS SYSTEM</text>
        
        {/* Simplified tech circuit lines */}
        <path d="M 40 170 L 60 170 L 65 165 L 380 165" stroke="#F7AA00" strokeWidth="1.5" />
        <circle cx="60" cy="170" r="2" fill="#40A8C4" />
        
        {/* digital dot */}
        <circle cx="360" cy="75" r="1" fill="#235784" />
        <circle cx="350" cy="65" r="2" fill="#235784" />
        <circle cx="335" cy="52" r="2" fill="#235784" />
        <circle cx="315" cy="40" r="3" fill="#235784" />
        <circle cx="290" cy="30" r="4" fill="#235784" />
      </svg>
    </div>
  );
};

export default Logo;