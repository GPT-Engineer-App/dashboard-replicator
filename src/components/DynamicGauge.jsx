import React from 'react';

const DynamicGauge = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the angle for the gauge needle
  const angle = (clampedPercentage / 100) * 180;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="140" viewBox="0 0 280 140">
      {/* Gauge background */}
      <path
        d="M 10 130 A 130 130 0 0 1 270 130"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="20"
      />
      {/* Gauge fill */}
      <path
        d={`M 10 130 A 130 130 0 ${clampedPercentage > 50 ? 1 : 0} 1 ${10 + 260 * (clampedPercentage / 100)} 130`}
        fill="none"
        stroke="#ff5732"
        strokeWidth="20"
      />
      {/* Needle */}
      <g transform={`rotate(${angle}, 140, 130)`}>
        <svg x="125.25" y="66.5" width="29.5" height="127" viewBox="0 0 29.5 127">
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
      {/* Center point */}
      <circle cx="140" cy="130" r="5" fill="#333" />
    </svg>
  );
};

export default DynamicGauge;
