import React from 'react'
import { specialityData } from '../../assets/assets_frontend/assets.js'
import { Link } from 'react-router-dom'

function Specelist() {
    return (
        <>
            <div id='specification' className='flex flex-col mt-[100px] items-center h-screen'>
                <h1 className='text-[50px] font-bold mb-1'>Find by Speciality</h1>
                <span className='mb-8 text-center mt-7 text-xl font-semibold'>Simply browse through our extensive list of trusted doctors,<br/>schedule your appointment hassle-free.</span>

                <div className='flex flex-row items-center space-x-6 mt-16'>
                    {specialityData.map((element, index) => (
                      <Link key={index} onClick={scrollTo(0,0)} to={`/Doctor/${element.speciality}`} className='text-center hover:-translate-y-2 transition-all duration-500'>
                            <img  src={element.image} alt={element.speciality} className='w-[170px]  mb-2' />
                            <p className='text-center text-xl font-medium'>{element.speciality}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Specelist;
