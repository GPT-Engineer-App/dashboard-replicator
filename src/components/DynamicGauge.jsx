import React from 'react';

const DynamicGauge = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the angle for the gauge needle
  const angle = (clampedPercentage / 100) * 180 - 90;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280">
      <defs>
        <clipPath id="gaugeMask">
          <path d="M0,280C0,125.36,125.36,0,140,0s140,125.36,140,280h-50.4c0-69.27-56.15-125.44-125.44-125.44S78.72,210.73,78.72,280H0Z"/>
        </clipPath>
      </defs>
      <rect x="-28" y="-14" width="336" height="308" fill="#fff"/>
      <g clipPath="url(#gaugeMask)">
        <rect x="-28" y="-14" width="336" height="308" fill="#ff5732"/>
      </g>
      <g transform={`rotate(${angle}, 140, 280)`}>
        <svg x="125.25" y="13" width="29.5" height="267" viewBox="0 0 29.5 267">
          <defs>
            <clipPath id="needleClip">
              <rect width="29.5" height="187"/>
            </clipPath>
          </defs>
          <g clipPath="url(#needleClip)">
            <path d="M28.3,253.2c0,7.7-6.3,13.9-14,13.8c-7.7,0-13.9-6.3-13.8-14L12.1,3.2c0-1,0.5-1.9,1.4-2.4c0.9-0.5,1.9-0.5,2.8,0c0.9,0.5,1.4,1.4,1.4,2.4L28.3,253.2z" fill="#563AEF"/>
          </g>
        </svg>
      </g>
    </svg>
  );
};

export default DynamicGauge;
