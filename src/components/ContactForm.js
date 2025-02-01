"use client";
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    // Send data to the API route
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setStatus('Email sent successfully!');
    } else {
      setStatus('Failed to send email.');
    }
  };


  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500  mb-6">
            We're here to help! Whether you have inquiries, need more information,
            or want to discuss potential opportunities, feel free to reach out to us.
          </h2>

          <div className="space-y-6 py-10">
            <div className="flex items-center">
              <div className="bg-black rounded-full p-3 mr-4">
                <Mail className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold">Our email</p>
                <p>contact@cleanovatetechnology.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-black rounded-full p-3 mr-4">
                <Phone className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold">Call us</p>
                <p>+91-6002324365</p>
                <p>+91-9395924024</p>
                <p>+91-9395901112</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-black rounded-full p-3 mr-4">
                <MapPin className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p>Cleanovate Technology LLP, Plot 3B, Village Hudumpur, Palasbari, Kamrup, Assam, India - 781128</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-gray-600 hover:text-black">
              <Facebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Instagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Linkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Twitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg flex items-center">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block font-medium text-gray-700 mb-1 font-crimson text-xl">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                  value={formData.firstName} onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-crimson text-xl font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last name"
                  value={formData.lastName} onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block font-crimson text-xl font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                  value={formData.email} onChange={handleChange}

                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-crimson text-xl font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone"
                  value={formData.phone} onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-crimson text-xl font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                value={formData.message} onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md"
            >
              Submit Now
            </button>
          </form>
          {status && <p className="mt-4 text-red-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
