import React from 'react';

const DynamicGauge = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the angle for the gauge needle
  const angle = (clampedPercentage / 100) * 180 - 90;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="140" viewBox="0 0 280 140">
      <defs>
        <clipPath id="gaugeMask">
          <path d="M0,140C0,62.68,62.68,0,140,0s140,62.68,140,140h-50.4c0-49.48-40.11-89.6-89.6-89.6s-89.6,40.11-89.6,89.6H0Z"/>
        </clipPath>
      </defs>
      <rect x="-28" y="-14" width="336" height="168" fill="#fff"/>
      <g clipPath="url(#gaugeMask)">
        <rect x="-28" y="-14" width="336" height="168" fill="#ff5732"/>
      </g>
      <g transform={`rotate(${angle}, 140, 140)`}>
        <svg x="125.25" y="13" width="29.5" height="127" viewBox="0 0 29.5 127">
          <defs>
            <clipPath id="needleClip">
              <rect width="29.5" height="127"/>
            </clipPath>
          </defs>
          <g clipPath="url(#needleClip)">
            <path d="M28.3,113.2c0,7.7-6.3,13.9-14,13.8c-7.7,0-13.9-6.3-13.8-14L12.1,3.2c0-1,0.5-1.9,1.4-2.4c0.9-0.5,1.9-0.5,2.8,0c0.9,0.5,1.4,1.4,1.4,2.4L28.3,113.2z" fill="#563AEF"/>
          </g>
        </svg>
      </g>
    </svg>
  );
};

export default DynamicGauge;
