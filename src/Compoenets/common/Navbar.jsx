import React, { useState } from 'react'
import logo from "../../assets/assets_frontend/logo.svg";
import profile_pic from "../../assets/assets_frontend/profile_pic.png";
import dropdown from "../../assets/assets_frontend/dropdown_icon.svg";
  import { NavLink, useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate();
    const [token , settoken]=useState(true)
    return (
        <>
        
            <div className='flex flex-row justify-between items-center p-4 m-4 border-b-2 border-gray-500 shadow-lg bg-gray-100'>

                <img src={logo} alt="logo" />

                <div>
                    <ul className='flex flex-row items-center justify-between p-3 m-2 gap-14 
                    '>

                        <NavLink to='/'>
                            <li className='text-xl font-semibold text-gray-700 select-none '>HOME</li>
                            <hr  className='border-none outline-non h-0.5 w-3/5e bg-primary hidden'/>
                        </NavLink>

                          <NavLink to='/Doctor'>
                            <li className='text-xl font-semibold text-gray-700 select-none'>All DOCTORS</li>
                            <hr className='border-none outline-none h-0.5 w-3/5e bg-primary hidden'/>
                        </NavLink>

                          <NavLink to='/about'>
                            <li className='text-xl font-semibold text-gray-700 select-none'>ABOUT</li>
                            <hr className='border-none outline-none h-0.5 w-3/5e bg-primary hidden'/>
                        </NavLink>

                          <NavLink to='/contact'>
                            <li className='text-xl font-semibold text-gray-700 select-none '>CONTACT</li>
                            <hr className='border-none outline-none h-0.5 w-3/5e bg-primary hidden'/>
                        </NavLink>
                    
                    </ul>
                    
                </div>

                {
                    token ? 
                    <div className='cursor-pointer group relative'>
  <div className='flex flex-row gap-2'>
    <img src={profile_pic} className='rounded-full w-14' alt="profile" />
    <img src={dropdown} className='w-7' alt="icon" />
  </div> 
  <div className='absolute hidden z-20 group-hover:block gap-3' 
       style={{ right: 0, minWidth: '12rem', maxWidth: '16rem' }}>
    <div className='flex flex-col bg-gray-300 w-full gap-4 p-4'>
      <p onClick={() => navigate('/Myprofile')} className='hover:text-black cursor-pointer  text-xl text-gray-500 select-none '>
        My Profile
      </p>
      <p onClick={() => navigate('/My_Appoiment')} className='hover:text-black cursor-pointer text-xl text-gray-500 select-none'>
        My Appointments
      </p>
      <p onClick={() => settoken(false)} className='hover:text-black cursor-pointer text-xl text-gray-500 select-none'>
        Logout
      </p>
    </div>
  </div>
</div>
:
<button className='bg-primary text-xl p-3 m-2 text-white rounded-full select-none' onClick={() => navigate('/login')}>
  Create account
</button>

           }   
     
                
            </div>
        
        </> 
    )
}

export default Navbar
