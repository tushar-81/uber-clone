import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={()=>{
            props.setVehiclePanelOpen(false);
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            
            <div onClick={()=>{
              props.setConfirmedRidePanel(true);} }className='flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between'>
              <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png' ></img>
              <div className=' ml-2 w-1/2' >
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
              </div>
              <h2 className='text-2xl font-semibold '>$193.20</h2>
            </div>
            <div onClick={()=>{
              props.setConfirmedRidePanel(true);} }className='flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between'>
              <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' ></img>
              <div className='ml-2 w-1/2' >
                <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable motor cycle ride</p>
              </div>
              <h2 className='text-2xl font-semibold '>$105.60</h2>
            </div>
            <div onClick={()=>{
              props.setConfirmedRidePanel(true);} } className='flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between'>
              <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' ></img>
              <div className=' ml-2 w-1/2' >
                <h4 className='font-medium text-base'>Auto <span><i className="ri-user-fill"></i>3</span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
              </div>
              <h2 className='text-2xl font-semibold '>$118.86</h2>
            </div>
    </div>
  )
}

export default VehiclePanel
