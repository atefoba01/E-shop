


import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null; // Return null if the popup should be hidden

  return (
    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
      {/* Modal container */}
      <div className='w-[90%] max-w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl'>
        {/* Header section */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Order Now</h2>
          <div>
            <IoCloseOutline 
            onClick={()=> setOrderPopup(!orderPopup)}
            className='text-2xl cursor-pointer' />
          </div>
        </div>
        
        {/* Form section */}
        <div className="mt-4">
         <input type="text" placeholder='Name'
         className='form-input' />
         <input type="Email" placeholder='Email'
         className='form-input' />
         <input type="Address" 
         placeholder='Address'
         className='form-input' />
         <div className='flex justify-center'>
          <Button text="Order Now" bgColor={"bg-primary"} textColor={"text-white"}/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
