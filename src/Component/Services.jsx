import React from 'react'
import Seo from '../assets/Seo.png';
import Google from '../assets/Google.png';
import Social from '../assets/Social.png';
import Website from '../assets/Website.png';

const Services = () => {
  return (
    <div>
    <div className='items-center gap-20 mt-10 right-40 '>
                       <h1 className='ml-70 text-5xl font-bold items-center text-black-900'>
                              OUR<span className='absolute right-95 items-center text-blue-600'>DIGITAL MARKETING</span>
                          <span className='absolute right-38 items-center text-black-600'>SERVICES</span>
                          </h1>
                          <h2 className='ml-90 mt-3 items-center font-normal text-2xl text-black-600'>
                               Complete Digital Solutions To Grow Your Business Online
                              </h2>
                              
                            </div>
    
                            <div className='flex flex-row p-5 gap-15'>
                    <div className=' h-50 w-55 ml-10 bg-white-400 mt-3 text-black border border-black rounded-4xl p-4'>
                     <div className='flex flex-row'>
                    <img src={Seo} alt="seo" className='h-10 w-15  rounded-full'/>
                    <h2 className="text-bold  ml-6">Search Engine Optimization (SEO)</h2>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">Improve your website ranking on search engines and drive organic traffic.</p>
                    </div>
                    
                 <div className=' h-50 w-55 ml-4 bg-white-400 mt-3 text-black border border-black rounded-3xl p-4'>
                     <div className='flex flex-row'>
                    <img src={Google} alt="google ads" className='h-15 w-12  rounded-full'/>
                    <h2 className="text-bold  ml-6">Google Ads (PPC) </h2>
                    </div>
                    <p className="text-sm text-gray-600 mt-7">Get instant visibility and leads with highly targeted Google Ads campaigns.</p>
                    </div>
        
                    <div className=' h-50 w-55 ml-5 bg-white-400 mt-3 text-black border border-black rounded-3xl p-3'>
                     <div className='flex flex-row'>
                    <img src={Social} alt="social" className='h-18 w-18 rounded-full'/>
                    <h2 className="text-bold  ml-2">Social Media Marketing </h2>
                    </div>
                    <p className="text-sm text-gray-600 ml-2 mt-4">Build your brand,engage your audience and grow your business on social media.</p>
                    </div>
        
                    <div className=' h-50 w-55 ml-5 bg-white-400 mt-3 text-black border border-black rounded-3xl p-3'>
                     <div className='flex flex-row'>
                    <img src={Website} alt="website design" className='h-18 w-15 rounded-full'/>
                    <h2 className="text-bold text-1xl ml-4">Website Design & Development </h2>
                    </div>
                    <p className="text-sm text-gray-600 ml-1 mt-4">We build fast,responsive and user-friendly websites that convert.</p>
                   
                   </div>

                  

                    </div>

                    

                    <section className="p-2 h-50">
                  <div className=" bg-blue-800 text-white rounded-2xl md:grid-col-5 p-5">

               <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-6">

          
                 <div className="flex items-center h-35 gap-1 lg:border-r border-blue-400 ">
                    <div className="text-4xl">🎯</div>
                 <div>
            <h3 className="text-1xl font-bold uppercase">
            Result Focused
          </h3>
          <p className="text-normal text-blue-100 mt-1">
            We focus on real results
            <br />
            and business growth.
          </p>
           </div>
         </div>

         
         <div className="flex items-center gap-1 lg:border-r border-blue-400 ">
         <div className="text-4xl">📊</div>
        <div>
          <h3 className="text-1xl font-bold uppercase">
            Data Driven
          </h3>
          <p className="text-normal text-blue-100 mt-1">
            We use data and analytics
            <br />
            to drive better results.
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-1 lg:border-r border-blue-400 ">
        <div className="text-4xl">💡</div>
        <div>
          <h3 className="text-1xl font-bold uppercase">
            Creative Strategies
          </h3>
          <p className="text-normal text-blue-100 mt-1">
            Creative ideas combined with
            <br />
            smart marketing strategies.
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-1 lg:border-r border-blue-400 ">
        <div className="text-4xl">🛡️</div>
        <div>
          <h3 className="text-1xl font-bold uppercase">
            Transparent Work
          </h3>
          <p className="text-normal text-blue-100 mt-1">
            We believe in transparency,
            <br />
            honesty and clear reporting.
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-1">
        <div className="text-4xl">🎧</div>
        <div>
          <h3 className="text-1xl font-bold uppercase">
            Dedicated Support
          </h3>
          <p className="text-normal text-blue-100 mt-1">
            Our team is always here to
            <br />
            support your business.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
            
 </div>
  )
}

export default Services;



