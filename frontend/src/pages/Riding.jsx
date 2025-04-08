import React from 'react';

const Riding = () => {
  return (
    <div className='h-screen relative'>
      {/* Home button */}
      <div className="absolute top-4 right-4 z-10">
        <a href="/home" className="flex items-center bg-white px-4 py-2 rounded-full shadow-md text-lg font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3m-6 0a1 1 0 01-1-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 01-1 1H3" />
          </svg>
          Home
        </a>
      </div>
      
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='Uber background'/>
      </div>
      <div className='h-1/2'>
        <button>Make a payment</button>
      </div>
      <div className="absolute bottom-0 w-full bg-white rounded-t-3xl -mt-6 shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Your Ride</h2>
        
        {/* Driver information */}
        <div className="flex items-center mb-4 border-b pb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Driver" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600 ml-1">4.9</span>
            </div>
            <p className="text-gray-500">Toyota Camry • ABC 123</p>
          </div>
        </div>
        
        {/* Trip details */}
        <div className="mb-4 border-b pb-4">
          <div className="flex items-start mb-3">
            <div className="flex flex-col items-center mr-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-0.5 h-12 bg-gray-300 my-1"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">Current location</p>
              <p className="text-gray-500 text-sm mb-3">123 Current St</p>
              <p className="text-gray-800 font-medium">Destination</p>
              <p className="text-gray-500 text-sm">456 Destination Ave</p>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Estimated arrival</span>
            <span className="font-semibold">12:45 PM</span>
          </div>
        </div>
        
        {/* Payment information */}
        <div className="mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated fare</span>
            <span className="font-bold text-xl">$24.50</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between">
          <button className="flex-1 bg-black text-white font-semibold py-3 rounded-full">
            Make a payment
          </button>
          <button className="flex items-center justify-center bg-gray-100 rounded-full p-3 w-12 h-12 ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;