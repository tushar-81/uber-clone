import React, { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import Lookingfordriver from '../components/Lookingfordriver'
import Waitingfordriver from '../components/Waitingfordriver'



  const Home = () => {
    

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelopen, setPanelopen] = useState(false)
    const panelref= React.useRef(null)
    const VehiclePanelref= React.useRef(null);
    const panelcloseref= React.useRef(null);
    const vehiclefoundref= React.useRef(null);
    const ConfirmedRidePanelref= React.useRef(null);
    const Waitingfordriverref= React.useRef(null);
    const [vehiclePanelOpen, setVehiclePanelOpen]= useState(false);
    const [confirmedRidePanel, setConfirmedRidePanel]= useState(false);
    const [VehicleFound, setVehicleFound]= useState(false);
    const [WaitingForDriver, setWaitingForDriver] =useState(false);

    const submitHandler = (e) => {
      e.preventDefault();
      console.log('Pickup:', pickup);
      console.log('Destination:', destination);

      
    }
    useGSAP(function(){
      if(panelopen){
        gsap.to(panelref.current, {
          duration: 0.5,
          height: '70%',
          opacity: 1,
          ease: 'power2.inOut',
          padding:24,
          display: panelopen ? 'block' : 'none',
        })
        gsap.to(panelcloseref.current, {
          duration: 0.5,
          opacity: 1,
          ease: 'power2.inOut',
        })
        
      }
      else{
        gsap.to(panelref.current, {
          duration: 0.5,
          height: '0%',
          ease: 'power2.inOut',
          display: panelopen ? 'block' : 'none',
        })
        gsap.to(panelcloseref.current, {
          duration: 0.5,
          opacity: 0,
          ease: 'power2.inOut',
        })
        
      }},[panelopen]) 
      

      useGSAP(function(){
        if(vehiclePanelOpen){
          gsap.to(VehiclePanelref.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(VehiclePanelref.current,{
            transform:'translateY(100%)'
          })
        }
      }, [vehiclePanelOpen])

      useGSAP(function(){
        if(confirmedRidePanel){
          gsap.to(ConfirmedRidePanelref.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(ConfirmedRidePanelref.current,{
            transform:'translateY(100%)'
          })
        }
      }, [confirmedRidePanel])

      useGSAP(function(){
        if(VehicleFound){
          gsap.to(vehiclefoundref.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(vehiclefoundref.current,{
            transform:'translateY(100%)'
          })
        }
      }, [VehicleFound])

      useGSAP(function(){
        if(WaitingForDriver){
          gsap.to(Waitingfordriverref.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(Waitingfordriverref.current,{
            transform:'translateY(100%)'
          })
        }
      }, [VehicleFound])
      
    

    return (
      <div className='relative h-screen overflow-hidden'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          className='w-16 absolute left-5 top-5'
          alt='Uber logo'
        ></img>
          <div onClick={()=>{
          setPanelopen(false);
          setVehiclePanelOpen(false);
        }}>
          <img
            src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
            alt='Uber background'
            className='w-full h-full object-cover'
          ></img>
        </div>
        
        <div
          className='absolute w-full h-screen flex flex-col justify-end top-0 '
        >
          <div className='h-[30%] p-5 bg-white relative '>
          <h5 onClick={()=>{setPanelopen(false)}} ref={panelcloseref} className='absolute  opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-3xl font-semibold'>Find a trip</h4>
            
            <form onSubmit={(e) => submitHandler(e)}>
              <div className='line absolute h-20 w-1 top-[43%] left-10 bg-gray-900 rounded-2xl'></div>
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                onClick={() => setPanelopen(true)}
                type='text'
                placeholder='Add a pick up location'
                className='px-10 py-5 h-10 mt-5 mb-5 bg-[#eee] text-base rounded w-full'
                required
              ></input>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => setPanelopen(true)}
                type='text'
                placeholder='Add a drop off location'
                className='px-10 py-5 h-10 bg-[#eee] text-base rounded w-full'
                required
              ></input>
            </form>
          </div>
          <div ref={panelref} className='h-0 bg-white'>
             <LocationSearchPanel setVehiclePanelOpen={setVehiclePanelOpen} setPanelopen={setPanelopen}/>
          </div>
        </div>
        <div ref={VehiclePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  px-3 py-6 pt-12'>
          <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
        <div ref={ConfirmedRidePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  px-3 py-6 pt-12'>
          <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} setVehicleFound={setVehicleFound}/>
        </div>
        <div  ref={vehiclefoundref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  px-3 py-6 pt-12'>
         <Lookingfordriver setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={Waitingfordriverref}  className='fixed w-full z-10 bottom-0  bg-white  px-3 py-6 pt-12'>
         <Waitingfordriver />
        </div>
      </div>
    )
  }

  export default Home



