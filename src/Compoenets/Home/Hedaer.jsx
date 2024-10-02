import React from 'react'
import arrow from '../../assets/assets_frontend/arrow_icon.svg'
import header from '../../assets/assets_frontend/header_img.png'
import group_img from '../../assets/assets_frontend/group_profiles.png'
function Hedaer() {
    return (
        <>
        
            <div className='bg-primary mx-10 flex flex-row justify-between items-center'>
                <div className='mx-8 gap-10 py-10'>
                <p className='text-[3rem] font-bold items-start text-white'>Book Appointment <br/>
                 With Trusted Doctors</p>
                <div className='flex flex-row gap-3 mt-10 '>
                    <img src={group_img} alt="" />
                    <span className='text-xl font-semibold text-gray-100 items-start'>Simply browse through our extensive list of trusted doctors, <br/>
                    schedule your appointment hassle-free.</span>
                </div>
                    <a href="#specification" className='rounded-full bg-white flex flex-row mt-10 p-6 w-[250px] gap-1 text-lg font-medium text-center hover:-translate-y-2 transition-all duration-500'>
             
  <p>Book appointment</p>
  <img src={arrow} alt="" />
</a>

        </div>
            
            

            <div>

                <img className='w-[600px]' src={header} alt="" />
                </div>
                </div>
        </>
    )
}

export default Hedaer