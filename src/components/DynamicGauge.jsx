import React from 'react';

const DynamicGauge = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the angle for the gauge needle
  const angle = (clampedPercentage / 100) * 180 - 90;

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
        <path d="M 105,105 L 100,30 Q 105,20 110,30 Z" fill="#563aef" />
      </g>
      <circle cx="105" cy="105" r="5" fill="#333" />
      <text x="105" y="120" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">
        {clampedPercentage}%
      </text>
    </svg>
  );
};

export default DynamicGauge;
