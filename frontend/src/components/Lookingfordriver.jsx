import React from 'react'

const Lookingfordriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={()=>{
            props.setVehiclePanelOpen(false);
          }}><i onClick={()=>{
            props.setVehicleFound(false);
          }} className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Looking for Driver</h3>
          <div className='flex flex-col justify-between items-center gap-5'>
          <img className='h-20 'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'></img>
          </div>
        <div className='flex flex-col  gap-5 '>
            
          <div className='flex gap-5 items-center border-b-2 border-gray-100'>
            <div><i className=" text-lg ri-map-pin-2-fill"></i></div>
            <div> <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600 '>Kankariya Talab, Ahemdabad</p></div>
           
          </div>
          
          <div className='flex gap-5 items-center border-b-2 border-gray-100 '>
            <div><i class="ri-map-pin-4-line"></i></div>
            <div><h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600 '>Kankariya Talab, Ahemdabad</p></div>
          </div>

          
          <div className='flex gap-5 items-center border-b-2 border-gray-100'>
            <div><i class="ri-currency-line"></i></div>
            <div><h3 className='text-lg font-medium'>$193.20</h3>
            <p className='text-sm text-gray-600 '>Cash</p></div>
          </div>
        </div>
          
    </div>
  )
}

export default Lookingfordriver
