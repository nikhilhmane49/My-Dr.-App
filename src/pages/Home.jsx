import React from 'react'
import Hedaer from '../Compoenets/Home/Hedaer'
import Specelist from '../Compoenets/Home/Specelist'
import Topdoctor from '../Compoenets/Home/Topdoctor'
import Banner from '../Compoenets/Home/Banner'


function Home() {
    return (
        < >
            
            
            
            <div className='my-10'>
                <Hedaer />
                <Specelist />
                <Topdoctor />
                <Banner/>
            </div>
           
        </>
    )
}

export default Home
