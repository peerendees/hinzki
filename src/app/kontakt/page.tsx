'use client'

import { useState, useEffect } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    interest: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    document.title = 'Kontakt - Hinzki KI-Institut Köln'
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        interest: ''
      })
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Zum Hauptinhalt springen"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Hero Section */}
      <section id="main-content" className="pt-16 pb-12" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bereit für die digitale Transformation? Lass uns gemeinsam deine Ziele erreichen. 
              Vereinbare jetzt ein kostenloses Erstgespräch.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <section aria-labelledby="form-heading">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 id="form-heading" className="text-2xl font-bold text-gray-900 mb-6">
                Nachricht senden
              </h2>
              
              {submitStatus === 'success' && (
                <div 
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800 font-medium">
                      Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="name-error"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Dein vollständiger Name"
                    />
                    <div id="name-error" className="sr-only" aria-live="polite"></div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="email-error"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="deine@email.de"
                    />
                    <div id="email-error" className="sr-only" aria-live="polite"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Dein Unternehmen (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Interessensbereich
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="institut">KI-Institut</option>
                      <option value="agentur">Agentur</option>
                      <option value="akademie">Akademie</option>
                      <option value="markenberatung">Digitale Markenberatung</option>
                      <option value="allgemein">Allgemeine Anfrage</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="subject-error"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Worum geht es?"
                  />
                  <div id="subject-error" className="sr-only" aria-live="polite"></div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht <span className="text-red-500" aria-label="Pflichtfeld">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="message-error message-help"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Beschreibe dein Anliegen..."
                  />
                  <div id="message-error" className="sr-only" aria-live="polite"></div>
                  <p id="message-help" className="mt-2 text-sm text-gray-500">
                    Je detaillierter deine Beschreibung, desto besser können wir dir helfen.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                  aria-describedby="submit-help"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    'Nachricht senden'
                  )}
                </button>
                <p id="submit-help" className="mt-2 text-sm text-gray-500 text-center">
                  Wir melden uns innerhalb von 24 Stunden bei dir zurück.
                </p>
              </form>
            </div>
          </section>

          {/* Contact Information */}
          <section aria-labelledby="contact-info-heading">
            <div className="space-y-8">
              <div>
                <h2 id="contact-info-heading" className="text-2xl font-bold text-gray-900 mb-6">
                  Kontaktinformationen
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">E-Mail</h3>
                                             <a 
                         href="mailto:info@haushinzki.de" 
                         className="text-blue-600 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:underline transition-colors"
                         aria-label="E-Mail an info@haushinzki.de senden"
                       >
                         info@haushinzki.de
                       </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Standort</h3>
                      <p className="text-gray-600">
                        KI-Institut Köln<br />
                        Köln, Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Antwortzeit</h3>
                      <p className="text-gray-600">
                        Wir antworten innerhalb von<br />
                        24 Stunden auf deine Anfrage
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kostenloses Erstgespräch
                </h3>
                <p className="text-gray-600 mb-4">
                  Lass uns in einem unverbindlichen Gespräch über deine Ziele sprechen und 
                  herausfinden, wie wir dir helfen können.
                </p>
                                 <a 
                   href="mailto:info@haushinzki.de?subject=Terminanfrage%20Erstgespräch"
                   className="inline-block bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                   aria-label="Termin für kostenloses Erstgespräch vereinbaren"
                 >
                   Termin vereinbaren
                 </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 