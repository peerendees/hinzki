import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns - Hinzki KI-Institut Köln',
  description: 'Lerne das Team von Hinzki kennen. KI-Experten, Entwickler und Digitalstrategen, die deine Ideen zukunftsfähig machen.',
  keywords: 'Über uns, KI-Experten, Team Hinzki, KI-Institut Köln, Digitalstrategen, KI-Entwicklung',
}

export default function UeberUns() {
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
      <section id="main-content" className="pt-16 pb-20" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Leidenschaft trifft{' '}
              <span className="text-blue-600">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              HAUS HINZKI vereint kreatives Storytelling mit technologischer Innovation. 
              Unser Team aus KI-Experten, Entwicklern und Digitalstrategen macht deine Ideen zukunftsfähig.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Wir machen KI zugänglich, verständlich und gewinnbringend für Unternehmen jeder Größe.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir erforschen die neuesten KI-Technologien und entwickeln praxistaugliche Lösungen, 
                  die echten Mehrwert schaffen.
                </p>
              </article>

              <article className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zusammenarbeit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir arbeiten eng mit unseren Kunden zusammen und verstehen ihre individuellen 
                  Herausforderungen und Ziele.
                </p>
              </article>

              <article className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Wirkung</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unsere Lösungen sind darauf ausgelegt, messbare Ergebnisse zu liefern und 
                  nachhaltigen Erfolg zu schaffen.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unser Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experten aus verschiedenen Bereichen, vereint durch die Leidenschaft für KI und Innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <article className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  OH
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Oliver Hinz</h3>
                <p className="text-blue-600 font-medium mb-4">Gründer & KI-Stratege</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experte für generative KI und strategische Implementierung. 
                  Verbindet technische Innovation mit praktischer Anwendung.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded transition-colors p-1"
                    aria-label="Oliver Hinz auf LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Team Member 2 */}
              <article className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  KI
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">KI-Entwicklungsteam</h3>
                <p className="text-green-600 font-medium mb-4">Technische Umsetzung</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Spezialisiert auf die Entwicklung und Implementierung von KI-Lösungen. 
                  Von Prototyp bis zur produktiven Anwendung.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-600 focus:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded transition-colors p-1"
                    aria-label="KI-Team kontaktieren"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Team Member 3 */}
              <article className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  DS
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital-Strategen</h3>
                <p className="text-purple-600 font-medium mb-4">Beratung & Strategie</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experten für digitale Transformation und Markenberatung. 
                  Entwickeln maßgeschneiderte Strategien für nachhaltigen Erfolg.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 rounded transition-colors p-1"
                    aria-label="Strategie-Team kontaktieren"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Unsere Werte
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" aria-hidden="true"></span>
                    Transparenz
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wir erklären komplexe KI-Technologien verständlich und arbeiten offen 
                    mit unseren Kunden zusammen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3" aria-hidden="true"></span>
                    Qualität
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Höchste Standards in Entwicklung, Beratung und Schulung sind unser Anspruch 
                    an jedes Projekt.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" aria-hidden="true"></span>
                    Nachhaltigkeit
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unsere Lösungen sind darauf ausgelegt, langfristig Wert zu schaffen und 
                    mit dem Unternehmen zu wachsen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" aria-hidden="true"></span>
                    Ethik
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Verantwortungsvoller Umgang mit KI-Technologien und Daten steht im 
                    Mittelpunkt unserer Arbeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für die Zusammenarbeit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Lass uns gemeinsam deine Vision in die Realität umsetzen. 
              Vereinbare jetzt ein kostenloses Erstgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt"
                className="bg-white text-blue-600 hover:bg-gray-100 focus:bg-gray-100 px-8 py-3 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
              >
                Kontakt aufnehmen
              </Link>
              <Link 
                href="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600 px-8 py-3 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
              >
                Unsere Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 