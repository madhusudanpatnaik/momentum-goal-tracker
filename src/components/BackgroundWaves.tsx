
import React from 'react';

const BackgroundWaves = () => {
  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main flowing wave */}
        <path
          d="M0 400C200 300, 400 500, 600 400C800 300, 1000 500, 1200 400C1400 300, 1600 500, 1800 400V800H0V400Z"
          fill="url(#waveGradient1)"
          opacity="0.8"
        />
        <path
          d="M0 450C250 350, 500 550, 750 450C1000 350, 1250 550, 1500 450C1750 350, 2000 550, 2250 450V800H0V450Z"
          fill="url(#waveGradient2)"
          opacity="0.6"
        />
        <path
          d="M0 500C300 400, 600 600, 900 500C1200 400, 1500 600, 1800 500C2100 400, 2400 600, 2700 500V800H0V500Z"
          fill="url(#waveGradient3)"
          opacity="0.4"
        />
        
        {/* Floating particles */}
        <circle cx="200" cy="200" r="3" fill="url(#particleGradient)" opacity="0.6">
          <animate attributeName="cy" values="200;180;200" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="150" r="2" fill="url(#particleGradient)" opacity="0.5">
          <animate attributeName="cy" values="150;130;150" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="300" r="4" fill="url(#particleGradient)" opacity="0.7">
          <animate attributeName="cy" values="300;280;300" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="250" r="2.5" fill="url(#particleGradient)" opacity="0.6">
          <animate attributeName="cy" values="250;230;250" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* Gradients - Back to original emerald green theme */}
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#156548" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="particleGradient">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundWaves;
