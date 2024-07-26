import React from 'react';

const DynamicGauge = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the angle for the gauge needle
  const angle = (clampedPercentage / 100) * 180 - 90;

  // Calculate the pivot point (7/8 from the top of the needle)
  const needleHeight = 127;
  const pivotOffset = needleHeight * 7/8;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="140" viewBox="0 0 210 105" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="gaugeMask">
          <path d="M 0 105 C 0 47.011719 47.011719 0 105 0 C 162.988281 0 210 47.011719 210 105 L 172.199219 105 C 172.199219 67.886719 142.113281 37.800781 105 37.800781 C 67.886719 37.800781 37.800781 67.886719 37.800781 105 Z M 0 105 " />
        </clipPath>
      </defs>
      <g clipPath="url(#gaugeMask)">
        <rect x="-21" width="252" fill="#ff5732" y="-10.5" height="125.999995" />
      </g>
      <g transform={`rotate(${angle}, 105, 105)`}>
        <svg x="90" y="-22" width="29.5" height="127" viewBox="0 0 29.5 127">
          <defs>
            <clipPath id="needleClip">
              <rect width="29.5" height="127"/>
            </clipPath>
          </defs>
          <g clipPath="url(#needleClip)" transform={`translate(0 ${pivotOffset})`}>
            <path d="M28.3,113.2c0,7.7-6.3,13.9-14,13.8c-7.7,0-13.9-6.3-13.8-14L12.1,3.2c0-1,0.5-1.9,1.4-2.4c0.9-0.5,1.9-0.5,2.8,0c0.9,0.5,1.4,1.4,1.4,2.4L28.3,113.2z" fill="#563AEF"/>
          </g>
        </svg>
      </g>
      <circle cx="105" cy="105" r="5" fill="#333" />
      <text x="105" y="120" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">
        {clampedPercentage}%
      </text>
    </svg>
  );
};

export default DynamicGauge;
