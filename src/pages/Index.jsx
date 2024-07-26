// Update this page (the content is just a fallback if you fail to update the page)

import { Card } from "@/components/ui/card";
import DynamicGauge from "@/components/DynamicGauge";
import { useState } from "react";

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(75); // Initial value for the gauge

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <Card className="w-full max-w-3xl p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 transform translate-x-1/2 -translate-y-1/2 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500 transform -translate-x-1/2 translate-y-1/2 rounded-tr-full"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-500 transform translate-x-1/2 translate-y-1/2 rounded-tl-full"></div>
        
        <div className="text-center space-y-2">
          <div className="bg-indigo-600 text-white px-4 py-1 rounded-full inline-block">It's all about the</div>
          <h1 className="text-4xl font-bold text-indigo-900">Informational Data Infographic</h1>
        </div>
        
        <p className="text-center text-gray-600">
          Infographic makes it easier for readers to absorb chunks of information. Shortly explain here what will this infographic cover.
        </p>
        
        <div className="flex justify-between items-center">
          {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${['bg-yellow-400', 'bg-orange-400', 'bg-purple-400', 'bg-blue-400'][index]}`}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="mt-2 text-sm font-medium">{step}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Data 1</h3>
            <div className="space-y-2">
              {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${Math.random() * 100}%`}}></div>
                  </div>
                  <span className="ml-2 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Data 2</h3>
            <div className="grid grid-cols-6 gap-1">
              {Array(24).fill().map((_, i) => (
                <svg key={i} className="w-6 h-6" viewBox="0 0 204.41 229.33">
                  <path
                    className={`${i < Math.floor(gaugeValue / 100 * 24) ? 'fill-orange-500' : 'fill-gray-300'}`}
                    d="M17.62,7.83c-2.72,0-5.14,2.11-5.14,5.14v1.51c0,2.72,2.42,5.14,5.14,5.14s5.14-2.42,5.14-5.14v-1.51c0-3.03-2.42-5.14-5.14-5.14 M12.48,30.81s-.3-.3-.3,0l-3.63,8.46c-.61,1.21-1.82,2.12-3.33,2.12h-1.51c-.3,0-.6,0-.6-.3-.3-.3-.3-.61,0-.91l4.53-10.58,1.52-4.23c1.21-2.42,3.63-4.23,6.35-4.23h4.23c2.72,0,5.14,1.81,6.35,4.23l1.51,4.23,4.54,10.58c.3.3.3.61,0,.91,0,.3-.3.3-.6.3h-1.52c-1.51,0-2.72-.91-3.32-2.12l-3.63-8.46c0-.3-.3,0-.3,0l1.51,10.58,1.82,19.35c0,.3-.3.3-.3.6-.3,0-.3.3-.61.3h-1.21c-1.81,0-3.32-1.21-3.32-3.02l-2.72-16.33h-.6l-2.72,16.33c0,1.81-1.52,3.02-3.33,3.02h-1.21c-.3,0-.3-.3-.6-.3,0-.3-.3-.3-.3-.6l1.81-19.35,1.51-10.58Z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Data 3</h3>
          <div className="flex justify-between">
            {['Title 1', 'Title 2', 'Title 3'].map((title, index) => (
              <div key={title} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120.75 120.749998" className="mx-auto">
                  <defs>
                    <clipPath id={`clip-path-${index}`}>
                      <path d="M 59.941406 0 C 93.046875 0 119.882812 26.835938 119.882812 59.941406 C 119.882812 93.046875 93.046875 119.882812 59.941406 119.882812 C 26.835938 119.882812 0 93.046875 0 59.941406 C 0 26.835938 26.835938 0 59.941406 0 L 59.941406 23.976562 C 40.078125 23.976562 23.976562 40.078125 23.976562 59.941406 C 23.976562 79.804688 40.078125 95.90625 59.941406 95.90625 C 79.804688 95.90625 95.90625 79.804688 95.90625 59.941406 C 95.90625 40.078125 79.804688 23.976562 59.941406 23.976562 Z M 59.941406 0 " />
                    </clipPath>
                    <clipPath id={`clip-path-fill-${index}`}>
                      <path d="M 74.929688 1.902344 C 94.769531 7.027344 110.617188 21.929688 116.949219 41.417969 C 123.28125 60.90625 119.222656 82.28125 106.179688 98.089844 C 103.453125 101.390625 99.171875 102.992188 94.949219 102.28125 C 90.726562 101.574219 87.199219 98.664062 85.703125 94.652344 C 84.203125 90.640625 84.960938 86.132812 87.683594 82.828125 C 95.507812 73.347656 97.945312 60.523438 94.148438 48.828125 C 90.347656 37.136719 80.839844 28.191406 68.933594 25.117188 C 64.785156 24.046875 61.527344 20.847656 60.378906 16.71875 C 59.234375 12.59375 60.375 8.167969 63.375 5.113281 C 66.378906 2.054688 70.78125 0.832031 74.929688 1.902344 Z M 74.929688 1.902344 " />
                    </clipPath>
                  </defs>
                  <g clipPath={`url(#clip-path-${index})`}>
                    <path fill="#e5d5eb" d="M 0 0 L 119.882812 0 L 119.882812 119.882812 L 0 119.882812 Z M 0 0 " />
                  </g>
                  <g clipPath={`url(#clip-path-fill-${index})`}>
                    <path fill={["#ffa945", "#ff6347", "#4169e1"][index]} d="M 0 0 L 119.882812 0 L 119.882812 119.882812 L 0 119.882812 Z M 0 0 " />
                  </g>
                  <text x="60" y="70" textAnchor="middle" fill="#1e125d" fontSize="24" fontWeight="bold">
                    {[40, 64, 72][index]}%
                  </text>
                </svg>
                <div className="mt-2 text-sm font-medium">{title}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Data 4</h3>
          <div className="flex justify-center items-center">
            <DynamicGauge percentage={gaugeValue} />
          </div>
          <div className="relative w-full h-4 mt-4">
            <div className="absolute w-full h-2 bg-gray-200 rounded-full top-1"></div>
            <div className="absolute h-2 bg-blue-600 rounded-full top-1" style={{width: `${gaugeValue}%`}}></div>
            <input
              type="range"
              min="0"
              max="100"
              value={gaugeValue}
              onChange={(e) => setGaugeValue(Number(e.target.value))}
              className="absolute w-full top-0 h-4 opacity-0 cursor-pointer"
            />
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-0 -ml-2" style={{left: `${gaugeValue}%`}}></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
