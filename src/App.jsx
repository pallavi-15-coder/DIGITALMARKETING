import React from 'react'
import Logo from './assets/Logo.jpg';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import Seo from './assets/Seo.png';
import Google from './assets/Google.png';
import Social from './assets/Social.png';
import Website from './assets/Website.png';
import Services from './Component/Services';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';
import { Routes, Route, Link } from "react-router-dom";
const App= () => {
  return (
    <div className='h-50 gap-2'>
       <nav className=' flex flex justify-between text-2xl items-center h-22 font-semiobold bg-white-300 shadow-lg '>

       <img src={Logo} alt="logo" className='h-22 w-60'/>

        <Link to="/"  className="hover:text-blue-600 ">Home</Link>

        <Link to="/about"  className="hover:text-blue-600">AboutUs</Link>

        <Link to="/services"  className="hover:text-blue-600">Services</Link>

        <Link to="/contact"  className="hover:text-blue-600">ContactUs</Link>

           <div className='flex flex-row left-200 gap-4'>
              <button className='bg-blue-600 h-5 p-5 flex items-center text-sm  rounded-4xl text-white tracking-tighter hover:scale-105'>
                Get A Free Quote →
              </button>
            </div>
            </nav>


      
        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/services" element={<Services />} />


        <Route path="/contact" element={<ContactUs />} />

      </Routes>

        
      <Footer/>


    </div>

    
  )
}

export default App;



