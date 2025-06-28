'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Reference {
  id: string
  name: string
  logo: string
  description?: string
}

// Referenzen basierend auf den hochgeladenen Logos
const references: Reference[] = [
  {
    id: 'wdr',
    name: 'WDR',
    logo: '/images/referenzen/logos/wdr.jpg',
    description: 'Digitale Medienproduktion'
  },
  {
    id: '1live',
    name: '1LIVE',
    logo: '/images/referenzen/logos/1live.jpg',
    description: 'Social Media Innovation'
  },
  {
    id: 'sportschau',
    name: 'ARD Sportschau',
    logo: '/images/referenzen/logos/logo-sportschau-100.jpg',
    description: 'Crossmediale Strategien'
  },
  {
    id: 'arte',
    name: 'ARTE',
    logo: '/images/referenzen/logos/arte.jpg',
    description: 'Content-Strategie'
  },
  {
    id: 'swr',
    name: 'SWR',
    logo: '/images/referenzen/logos/SWR_Logo_RGB.png',
    description: 'Digitale Transformation'
  },
  {
    id: 'cosmo',
    name: 'COSMO',
    logo: '/images/referenzen/logos/cosmo_.jpg',
    description: 'Multimediale Konzepte'
  },
  {
    id: 'thkoeln',
    name: 'TH Köln',
    logo: '/images/referenzen/logos/thkoeln.jpg',
    description: 'Hochschuldozent & Schulungen'
  },
  {
    id: 'grimme-institut',
    name: 'Grimme Institut',
    logo: '/images/referenzen/logos/logo_grimme-institut-1.png',
    description: 'Medienqualität & Innovation'
  },
  {
    id: 'livenation',
    name: 'Live Nation',
    logo: '/images/referenzen/logos/livenation.jpg',
    description: 'Event-Marketing'
  },
  {
    id: 'deutsche-bank',
    name: 'Deutsche Bank',
    logo: '/images/referenzen/logos/Deutsche-Bank-Finanzberatung.png',
    description: 'Finanzberatung Digital'
  },
  {
    id: 'brillux',
    name: 'Brillux',
    logo: '/images/referenzen/logos/Brillux-Radio-Logo-2022.png',
    description: 'Corporate Communication'
  },
  {
    id: 'klar',
    name: 'KLAR',
    logo: '/images/referenzen/logos/Klarlogo.png',
    description: 'Markenentwicklung'
  }
]

export default function References() {
  const [loadedLogos, setLoadedLogos] = useState<string[]>([])

  useEffect(() => {
    // Prüfe, welche Logos tatsächlich verfügbar sind
    const checkLogos = async () => {
      const available: string[] = []
      
      for (const ref of references) {
        try {
          const response = await fetch(ref.logo, { method: 'HEAD' })
          if (response.ok) {
            available.push(ref.id)
          }
        } catch (error) {
          // Logo nicht verfügbar, überspringen
        }
      }
      
      setLoadedLogos(available)
    }

    checkLogos()
  }, [])

  const availableReferences = references.filter(ref => loadedLogos.includes(ref.id))

  if (availableReferences.length === 0) {
    return (
      <section className="py-16 bg-gray-50" aria-labelledby="references-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="references-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unsere Referenzen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vertrauen Sie auf unsere Expertise - wie bereits viele zufriedene Kunden vor Ihnen.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-sm border-2 border-dashed border-gray-200">
              <p className="text-gray-500 italic">
                Referenz-Logos werden geladen...
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="references-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="references-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Unsere Referenzen
          </h2>
          <p className="text-lg text-gray-600">
            Vertrauen Sie auf unsere Expertise - wie bereits viele zufriedene Kunden vor Ihnen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {availableReferences.map((reference) => (
            <div
              key={reference.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-h-[120px]"
            >
              <div className="text-center">
                <div className="relative w-full h-16 mb-3">
                  <Image
                    src={reference.logo}
                    alt={`${reference.name} Logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                {reference.description && (
                  <p className="text-xs text-gray-500 mt-2">
                    {reference.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Möchten Sie auch zu unseren zufriedenen Kunden gehören?
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Kontakt aufnehmen für kostenlose Beratung"
          >
            Kostenloses Erstgespräch vereinbaren
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 