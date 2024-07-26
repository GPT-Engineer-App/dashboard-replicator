import React from 'react';

const DynamicGauge = ({ percentage, onChange }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the angle for the gauge needle
  const angle = (clampedPercentage / 100) * 180;

  return (
    <div className="flex flex-col items-center">
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
          <rect x="138" y="90" width="4" height="40" fill="#0000ff" />
        </g>
        {/* Center point */}
        <circle cx="140" cy="130" r="5" fill="#333" />
      </svg>
      
      {/* Slider */}
      <div className="w-full max-w-[280px] mt-4">
        <input
          type="range"
          min="0"
          max="100"
          value={clampedPercentage}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #0000ff ${clampedPercentage}%, #e0e0e0 ${clampedPercentage}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default DynamicGauge;
