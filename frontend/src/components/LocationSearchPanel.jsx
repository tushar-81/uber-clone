import React from 'react'

const LocationPanel = (props) => {
  console.log(props);
  const locations= [
    "Govind Bhawan, IIT Roorkee, Roorkee",
    "RKB Bhawan, IIT Roorkee, Roorkee",
    "Jawahar Bhawan, IIT Roorkee, Roorkee",
    "Rajendra Bhawan, IIT Roorkee, Roorkee",
    "Rajiv Bhawan, IIT Roorkee, Roorkee"
  ]
  return (
    <div>
      {/* this is just a sample data */}
      {
        locations.map(function(elem,idx){
          return  <div key={idx} onClick= {()=>{
            props.setVehiclePanelOpen(true);
            props.setPanelopen(false);
          }}className="flex gap-4 h-12 border-2 px-3 rounded-xl border-gray-50 active:border-black w-full my-2 items-center justify-start ">
          <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-range-line text-lg"></i></h2>
          <h4 className='font-semibold'>{elem}</h4>
        </div>
        })
      }
      

    </div>
  )
}

export default LocationPanel
