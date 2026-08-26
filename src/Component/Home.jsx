import React from 'react'

const Home = () => {
  return (
    <div>
       <div className=" flex flex-col m-10 left-20  gap-6">
                <h1 className=" ml-2 text-1xl font-normal text-blue-600 ">
               GROW YOUR BUSINESS ONLINE
               </h1> 
             
                <h2 className=" ml-2 text-5xl font-bold text-black-900">
               Digital Marketing <span className='absolute left-12 mt-15 text-blue-600'>That Drives Results</span>
               </h2> 

               <h3 className=" ml-2 text-1xl  mt-15 font-normal text-blue-900  ">
               We Help Businesses grow online with result-driven digital
              <span className='absolute left-12 mt-7 text-black-400'>
                marketing strategies that increase traffic, generate leads </span> 
              <span className='absolute left-12 mt-13 text-black-400 '>and boot conversions.</span>
               </h3>
            </div>
            <div className="flex gap-10 mt-10 ml-5  left-8 absolute">

           <button className="bg-blue-600 text-white w-40 rounded-2xl p-2 font-normal  hover:bg-blue-700">
           Get Started →
           </button>

           <button className="border-2 border-blue-600 w-40 text-blue-600  rounded-2xl p-2 font-normal  hover:bg-blue-600 hover:text-white">
           Our Services →
          </button>

            </div>

            <div className="flex justify-end absolute left-140  -mt-70 ">
             <img
              src="/image.png" alt="Digital Marketing" className=" w-200 h-110 ml-auto"
             />
                
              </div>  
              
              <div className="flex items-center absolute left-10 mt-25 gap-8 ">

             <div className="flex items-center  gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
             <span className="text-gray-800 font-normal ">
              Result Driven
             </span>
              </div>

               <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
               <span className="text-gray-800 font-normal ">
                Affordable Pricing
                </span>
               </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className="text-gray-800 font-normal ">
            24/7 Support
          </span>
            </div>
              </div>

              <div className=" gap-2 mt-50  bg-gradient-to-r from-blue-500  grid grid-cols-2 md:grid-cols-4 text-white to-blue-500 rounded-2xl shadow-xl">

            <div className="flex items-center justify-center gap-4 p-5 border-r border-blue-400">
           <div>
           <h2 className="text-2xl font-bold">500+</h2>
           <p className="text-sm">Happy Clients</p>
           </div>
           </div>

             
          <div className="flex items-center justify-center gap-4 p-6 border-r border-blue-400">
          <div>
          <h2 className="text-2xl font-bold">500+</h2>
          <p className="text-sm">Projects Completed</p>
          </div>
          </div>

          <div className="flex items-center justify-center gap-4 p-6 border-r border-blue-400">
          <div>
          <h2 className="text-2xl font-bold">10+</h2>
          <p className="text-sm">Years Experience</p>
          </div>
          </div>

        
          <div className="flex items-center justify-center gap-4 p-6">
           <div>
          <h2 className="text-2xl font-bold">24/7</h2>
          <p className="text-sm">Customer Support</p>
          </div>
           </div>
            </div>
            
          
            

     



    </div>
  )
}

export default Home;