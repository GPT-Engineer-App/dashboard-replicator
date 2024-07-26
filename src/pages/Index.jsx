// Update this page (the content is just a fallback if you fail to update the page)

import { Card } from "@/components/ui/card";
import DynamicGauge from "@/components/DynamicGauge";
import { useState } from "react";
import step1Icon from "/placeholder.svg";
import step2Icon from "/placeholder.svg";
import step3Icon from "/placeholder.svg";
import step4Icon from "/placeholder.svg";

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
        
        <div className="flex justify-between items-center relative">
          {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="145" height="112" viewBox="0 0 144.9 112">
                <defs>
                  <clipPath id={`clip-arrow-${index}`}>
                    <rect x="0.4" y="40.5" width="144" height="71"/>
                  </clipPath>
                  <clipPath id={`clip-circle-${index}`}>
                    <circle cx="70.8" cy="40.5" r="35"/>
                  </clipPath>
                </defs>
                <g clipPath={`url(#clip-arrow-${index})`}>
                  <path fill={['#ffa945', '#ff5732', '#a97aff', '#563aef'][index]} d="M116.9,40.5H10.6c-7.4,0-11.8,8.4-7.5,14.5l11.1,16c2.2,3.1,2.2,7.2,0,10.4l-11,16c-4.2,6.1,0.2,14.5,7.6,14.5h106.1c3,0,5.9-1.5,7.6-4l18.2-26.5c2.1-3.1,2.1-7.2,0-10.3l-18.2-26.5C122.7,42,119.9,40.5,116.9,40.5z"/>
                </g>
                <circle cx="70.8" cy="40.5" r="35" fill="#FEFBFF" stroke={['#ffa945', '#ff5732', '#a97aff', '#563aef'][index]} strokeWidth="4"/>
                <image href={[step1Icon, step2Icon, step3Icon, step4Icon][index]} x="45.8" y="15.5" width="50" height="50" clipPath={`url(#clip-circle-${index})`} />
              </svg>
              <div className="mt-2 text-sm font-medium">{step}</div>
            </div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -z-10"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Data 1</h3>
            <div className="space-y-2">
              {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
                <div key={item} className="flex items-center">
                  <span className="w-12 text-sm text-right mr-2">{item}</span>
                  <div className="w-full bg-gray-200 h-6 flex rounded-r-full overflow-hidden">
                    {['bg-yellow-400', 'bg-orange-400', 'bg-purple-400', 'bg-blue-600'].map((color, i) => (
                      <div
                        key={i}
                        className={`${color} h-full transition-all duration-500 ease-in-out ${i === 3 ? 'rounded-r-full' : ''}`}
                        style={{
                          width: `${Math.min(100, Math.max(0, (gaugeValue - i * 25) * 4))}%`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <span className="w-8 text-sm text-right ml-2">
                    {Math.min(50, Math.round(gaugeValue / 2))}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Data 2</h3>
            <div className="grid grid-cols-6 gap-1">
              {Array(24).fill().map((_, i) => (
                <svg key={i} className="w-6 h-8" viewBox="0 0 22.76 53.39">
                  <path
                    className={`${i < Math.floor(gaugeValue / 100 * 24) ? 'fill-orange-500' : 'fill-gray-300'}`}
                    d="M11.38,0C8.72,0,6.34,2.11,6.34,5.14V6.65c0,2.72,2.42,5.14,5.14,5.14s5.14-2.42,5.14-5.14V5.14C16.62,2.11,14.2,0,11.38,0 M6.24,22.98s-.3-.3-.3,0L2.31,31.44C1.7,32.65.49,33.56-1.02,33.56h-1.51c-.3,0-.6,0-.6-.3-.3-.3-.3-.61,0-.91l4.53-10.58,1.52-4.23c1.21-2.42,3.63-4.23,6.35-4.23h4.23c2.72,0,5.14,1.81,6.35,4.23l1.51,4.23,4.54,10.58c.3.3.3.61,0,.91,0,.3-.3.3-.6.3h-1.52c-1.51,0-2.72-.91-3.32-2.12l-3.63-8.46c0-.3-.3,0-.3,0l1.51,10.58,1.82,19.35c0,.3-.3.3-.3.6-.3,0-.3.3-.61.3h-1.21c-1.81,0-3.32-1.21-3.32-3.02l-2.72-16.33h-.6l-2.72,16.33c0,1.81-1.52,3.02-3.33,3.02H5.85c-.3,0-.3-.3-.6-.3,0-.3-.3-.3-.3-.6l1.81-19.35,1.51-10.58Z"
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
