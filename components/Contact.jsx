'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-gray-800 flex items-center justify-center gap-2">
          <span className="text-amber-400"><img src="/Vector.png" alt="" className='h-7' /></span>
          Contact Us
          <span className="text-teal-400">△</span>
        </h2>
        <p className="text-gray-600 mt-2">We'd love to hear from you! Use the form below or reach out directly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-medium text-teal-500 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 text-white px-6 py-2 rounded-md hover:bg-amber-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-medium text-teal-500 mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="text-gray-800">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="text-gray-800">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="text-gray-800">11:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-medium text-teal-500 mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-500" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-500" />
                <span className="text-gray-600">support@paws&tails.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-teal-500" />
                <span className="text-gray-600">123 Pet Avenue, Pawsville, CA 90210</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-medium text-teal-500 mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-4">
              Follow us on social media for pet care tips, new product announcements, and adorable pet photos!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-200 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-200 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
