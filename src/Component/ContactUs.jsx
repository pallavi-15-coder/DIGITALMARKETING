import React from 'react'

const ContactUs = () => {
  return (
    <div className=" bg-white flex items-center justify-center p-10">

      <div className="w-100 ">

        <div className="text-center mb-10">
          <p className="text-blue-600 font-bold text-2xl uppercase ">
            Contact Us
          </p>

          <h1 className="text-4xl font-semibold text-gray-900 mt-3">
            Get In Touch With Us
          </h1>

          <p className="text-gray-600 mt-3">
            Tell us about your digital marketing requirements.
          </p>
        </div>

        <form className="bg-white border border-gray-200  rounded-2xl p-5 shadow-lg">

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3  focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded-lg p-3  focus:border-blue-600"
            />
          </div>

          <div className="mt-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Select Service
            </label>

            <select
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600">
              <option>Select Service</option>
              <option>SEO</option>
              <option>Google Ads</option>
              <option>Social Media Marketing</option>
              <option>Website Design & Development</option>
              <option>Meta Ads</option>
              <option>Local SEO</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-80 border border-gray-300 rounded-lg p-5 focus:border-blue-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 h-5 flex items-center text-white font-semibold p-5 rounded-xl transition"
          >
            Send Message →
          </button>

        </form>

      </div>

    </div>
  )
}

export default ContactUs;




