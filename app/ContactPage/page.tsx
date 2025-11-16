'use client'
import React, { useState } from 'react'
import Navbar from '../components/navbar' // Adjust the path based on your project structure
import Footer from  '../components/Footer' // Adjust the path based on your project structure

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#9AC2FF] px-4 sm:px-6 lg:px-8 py-24 md:py-32 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Big Title - Landing Page Style */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-7xl sm:text-8xl md:text-8xl xl:text-[9rem] font-antonio font-bold text-[#0A0D24] leading-none mb-8">
              LETS MAKE
              <br />
              IT HAPPEN
            </h1>
            <p className="text-[#0A0D24] text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              The way we work has changed, but <br /> learning software hasn't. until now.
            </p>
          </div>

          {/* Contact Form - Smaller and Centered */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 mb-16">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-1 border-[#0A0D24] text-white placeholder-white/50 py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-2xl"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-transparent border-1 border-[#0A0D24] text-white placeholder-white/50 py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-2xl"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-1 border-[#0A0D24] text-white placeholder-white/50 py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-2xl"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-transparent border-1 border-[#0A0D24] text-white placeholder-white/50 py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-2xl"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  className="w-full bg-transparent border-1 border-[#0A0D24] text-white placeholder-white/50 py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-2xl"
                />
              </div>

              {/* Service Selection */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#051E01] border-1 border-[#0A0D24] text-white py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-md appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B4FFA8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '3rem'
                  }}
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="branding">Branding</option>
                  <option value="seo">SEO</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  required
                  rows={5}
                  className="w-full bg-transparent border-1 border-[#0A0D24] text-white placeholder-white/50 py-3 px-4 focus:outline-none focus:border-[#B4FFA8] focus:ring-2 focus:ring-[#B4FFA8]/30 transition-all rounded-2xl resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0A0D24] text-[#051E01] font-semibold text-lg rounded-md hover:bg-[#a3ef97] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Contact Information */}
     
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact