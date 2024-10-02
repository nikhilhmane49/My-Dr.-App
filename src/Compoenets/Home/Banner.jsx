import React from 'react'
import appointment_img from '../../assets/assets_frontend/appointment_img.png'
 import { useNavigate } from 'react-router-dom';
function Banner() {

        const navigate = useNavigate();
    return (
        <>
        
            <div className=' mt-16 mx-16 bg-primary justify-between items-center p-4 flex flex-row'>
                <div className='gap-14 ml-12'>
                    <p className='text-[40px] text-white'>Book Appointment <br/> 
With 100+ Trusted Doctors</p>
                    <button onClick={() => { navigate('/login'); scrollTo(0,0)}} className='bg-white rounded-full p-5 mt-11 text-xl font-semibold '>Create account</button>
                </div>

                <div>
                    <img className='w-[300px] mr-14' src={appointment_img} alt="" />
                </div>
        </div>
        
        </>
    )
}

export default Banner
