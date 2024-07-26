// Update this page (the content is just a fallback if you fail to update the page)

import { Card } from "@/components/ui/card";
import DynamicGauge from "@/components/DynamicGauge";
import { useState, useMemo } from "react";

const stepIcons = [
  "https://ik.imagekit.io/libralab/Sandbox/001_Dashboard/step1.png",
  "https://ik.imagekit.io/libralab/Sandbox/001_Dashboard/step2.png",
  "https://ik.imagekit.io/libralab/Sandbox/001_Dashboard/step3.png",
  "https://ik.imagekit.io/libralab/Sandbox/001_Dashboard/step4.png"
];
import step1Icon from "/placeholder.svg";
import step2Icon from "/placeholder.svg";
import step3Icon from "/placeholder.svg";
import step4Icon from "/placeholder.svg";

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(75); // Initial value for the gauge

  // Calculate dynamic values for Data 1 and Data 3
  const data1Values = useMemo(() => {
    return [
      Math.min(25, Math.max(0, Math.round((gaugeValue - 0) / 4))),
      Math.min(25, Math.max(0, Math.round((gaugeValue - 25) / 4))),
      Math.min(25, Math.max(0, Math.round((gaugeValue - 50) / 4))),
      Math.min(25, Math.max(0, Math.round((gaugeValue - 75) / 4)))
    ];
  }, [gaugeValue]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <Card className="w-full max-w-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 relative overflow-hidden">
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
        
        <div className="flex flex-wrap justify-between items-center relative">
          {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((step, index) => (
            <div key={step} className={`flex flex-col items-center w-1/2 sm:w-1/4 mb-4 sm:mb-0 ${index * 25 <= gaugeValue ? 'opacity-100' : 'opacity-30'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="auto" viewBox="0 0 144.9 117.6" className="max-w-[145px]">
                <defs>
                  <clipPath id={`clip-arrow-${index}`}>
                    <rect x="0.4" y="46.1" width="144" height="71"/>
                  </clipPath>
                  <clipPath id={`clip-circle-${index}`}>
                    <circle cx="70.8" cy="46.1" r="35"/>
                  </clipPath>
                </defs>
                <g clipPath={`url(#clip-arrow-${index})`}>
                  <path fill={['#ffa945', '#ff5732', '#a97aff', '#563aef'][index]} d="M116.9,46.1H10.6c-7.4,0-11.8,8.4-7.5,14.5l11.1,16c2.2,3.1,2.2,7.2,0,10.4l-11,16c-4.2,6.1,0.2,14.5,7.6,14.5h106.1c3,0,5.9-1.5,7.6-4l18.2-26.5c2.1-3.1,2.1-7.2,0-10.3l-18.2-26.5C122.7,47.6,119.9,46.1,116.9,46.1z"/>
                </g>
                <circle cx="70.8" cy="46.1" r="40" fill="#FEFBFF" stroke={['#ffa945', '#ff5732', '#a97aff', '#563aef'][index]} strokeWidth="4"/>
                <image href={stepIcons[index]} x="42.8" y="18.1" width="57.5" height="57.5" clipPath={`url(#clip-circle-${index})`} />
              </svg>
              <div className="mt-2 text-sm font-medium">{step}</div>
            </div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -z-10 hidden sm:block"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Data 1</h3>
            <div className="space-y-2">
              {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
                <div key={item} className={`flex items-center ${index * 25 <= gaugeValue ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="w-12 text-xs sm:text-sm text-right mr-2">{item}</span>
                  <div className="w-full bg-gray-200 h-4 sm:h-6 flex rounded-r-full overflow-hidden">
                    <div
                      className={`${['bg-yellow-400', 'bg-orange-400', 'bg-purple-400', 'bg-blue-600'][index]} h-full transition-all duration-500 ease-in-out ${index === 3 ? 'rounded-r-full' : ''}`}
                      style={{
                        width: `${data1Values[index] * 4}%`,
                      }}
                    ></div>
                  </div>
                  <span className="w-8 text-xs sm:text-sm text-right ml-2">
                    {data1Values[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Data 2</h3>
            <div className="grid grid-cols-8 sm:grid-cols-6 gap-1">
              {Array(24).fill().map((_, i) => (
                <svg key={i} className="w-5 sm:w-7 h-7 sm:h-9" viewBox="0 0 22.76 53.39">
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
          <div className="flex flex-wrap justify-center sm:justify-between -mx-2">
            {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((title, index) => (
              <div key={title} className="text-center w-1/2 sm:w-1/4 lg:w-auto px-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 120 120" className="mx-auto max-w-[100px]">
                  <circle cx="60" cy="60" r="60" fill="#e5d5eb" />
                  <path
                    d={`M 60 60 L 60 0 A 60 60 0 ${data1Values[index] > 12.5 ? 1 : 0} 1 ${
                      60 + 60 * Math.sin((data1Values[index] / 25) * 2 * Math.PI)
                    } ${
                      60 - 60 * Math.cos((data1Values[index] / 25) * 2 * Math.PI)
                    } Z`}
                    fill={["#ffa945", "#ff5732", "#a97aff", "#563aef"][index]}
                  />
                  <circle cx="60" cy="60" r="40" fill="white" />
                  <text x="60" y="67" textAnchor="middle" fill="#1e125d" fontSize="20" fontWeight="bold">
                    {data1Values[index]}
                  </text>
                </svg>
                <div className="mt-2 text-sm font-medium">{title}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Data 4</h3>
          <div className="flex justify-center items-center mb-4">
            <DynamicGauge percentage={gaugeValue} />
          </div>
          <div className="relative w-full h-12">
            <div className="absolute w-full h-6 bg-gray-200 rounded-full top-3"></div>
            <div className="absolute h-6 bg-blue-600 rounded-full top-3" style={{width: `${gaugeValue}%`}}></div>
            <input
              type="range"
              min="0"
              max="100"
              value={gaugeValue}
              onChange={(e) => setGaugeValue(Number(e.target.value))}
              className="absolute w-full top-0 h-12 opacity-0 cursor-pointer"
            />
            <div className="absolute w-8 h-8 bg-white border-4 border-blue-600 rounded-full top-2 -ml-4 shadow-md" style={{left: `${gaugeValue}%`}}></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
