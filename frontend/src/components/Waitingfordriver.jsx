import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={()=>{
          props.WaitingForDriver(false);
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        
        <div className='flex items-center justify-between'>
          <img className='h-12' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg'></img>
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak</h2>
            <h4 className='text-xl font-semibold mt-1 mb-1'>UK07AT 6065</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
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

export default WaitingForDriver