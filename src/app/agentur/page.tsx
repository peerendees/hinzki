import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agentur - HAUS HINZKI',
  description: 'Strategische KI-Beratung und Implementierung. Maßgeschneiderte KI-Lösungen für Ihr Unternehmen - von der Idee bis zur Umsetzung.',
};

export default function AgenturPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Zum Hauptinhalt springen"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Hero Section */}
      <section id="main-content" className="pt-16 pb-12 bg-green-600" aria-labelledby="agentur-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 id="agentur-heading" className="text-4xl md:text-5xl font-bold mb-6">
              HINZKI Agentur
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Maßgeschneiderte KI-Lösungen für dein Unternehmen
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Die Agentur entwickelt maßgeschneiderte KI-Lösungen, die Ihre spezifischen 
              Bedürfnisse erfüllen. Unser engagiertes Team verwandelt kleine Ideen und 
              große Visionen in innovative, praktische Anwendungen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" aria-labelledby="content-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Unser Versprechen */}
          <div className="mb-16 text-center">
            <h2 id="content-heading" className="text-3xl font-bold text-gray-900 mb-8">
              Unser Versprechen
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Wir setzen alles daran, Ihre Geschäftsprozesse zu optimieren und Ihnen einen 
                entscheidenden Wettbewerbsvorteil zu verschaffen. Vertrauen Sie auf unsere 
                Expertise und Leidenschaft, um Ihre Projekte zum Erfolg zu führen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Von der ersten Idee bis zur vollständigen Implementierung – wir begleiten 
                Sie auf dem gesamten Weg Ihrer KI-Transformation.
              </p>
            </div>
          </div>

          {/* Unsere Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Unsere Services
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Strategische Beratung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-100 p-6">
                                     <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                   </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Strategische Beratung</h3>
                  <p className="text-gray-700 mb-4">
                    Entwicklung einer maßgeschneiderten KI-Strategie für Ihr Unternehmen. 
                    Wir analysieren Ihre Prozesse und identifizieren die besten KI-Einsatzgebiete.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• KI-Potenzialanalyse</li>
                    <li>• Roadmap-Entwicklung</li>
                    <li>• ROI-Bewertung</li>
                    <li>• Change Management</li>
                  </ul>
                </div>
              </div>

              {/* Implementierung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-100 p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">KI-Implementierung</h3>
                  <p className="text-gray-700 mb-4">
                    Professionelle Umsetzung Ihrer KI-Projekte. Von Prototyping bis zur 
                    Produktionsreife – wir sorgen für eine reibungslose Integration.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Prototyp-Entwicklung</li>
                    <li>• System-Integration</li>
                    <li>• Testing & Validierung</li>
                    <li>• Deployment & Monitoring</li>
                  </ul>
                </div>
              </div>

              {/* Prozessoptimierung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-purple-100 p-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Prozessoptimierung</h3>
                  <p className="text-gray-700 mb-4">
                    Automatisierung und Optimierung bestehender Geschäftsprozesse durch 
                    intelligente KI-Lösungen für maximale Effizienz.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Workflow-Automatisierung</li>
                    <li>• Datenanalyse & Insights</li>
                    <li>• Predictive Analytics</li>
                    <li>• Performance-Optimierung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Branchen-Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Branchen-Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-green-500">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="font-bold text-gray-900 mb-2">Industrie 4.0</h3>
                <p className="text-sm text-gray-600">Smart Manufacturing & IoT</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-blue-500">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Medizinische KI & Diagnostik</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-purple-500">
                <div className="text-3xl mb-3">🏦</div>
                <h3 className="font-bold text-gray-900 mb-2">Fintech</h3>
                <p className="text-sm text-gray-600">Automatisierte Finanzprozesse</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 text-center border-t-4 border-orange-500">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="font-bold text-gray-900 mb-2">E-Commerce</h3>
                <p className="text-sm text-gray-600">Personalisierung & Empfehlungen</p>
              </div>
            </div>
          </div>

          {/* Projekt-Prozess */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Unser Projekt-Prozess
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Analyse</h3>
                  <p className="text-sm text-gray-600">Verstehen Ihrer Anforderungen und Ziele</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Konzept</h3>
                  <p className="text-sm text-gray-600">Entwicklung der optimalen KI-Lösung</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Umsetzung</h3>
                  <p className="text-sm text-gray-600">Agile Entwicklung und Testing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Support</h3>
                  <p className="text-sm text-gray-600">Langfristige Betreuung und Optimierung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Erfolgsgeschichten
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                Über 50 erfolgreich umgesetzte KI-Projekte. Von Start-ups bis zu Fortune 500 
                Unternehmen – wir haben bereits vielen Kunden zu messbaren Erfolgen verholfen.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-80">Erfolgreiche Projekte</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">25%</div>
                  <div className="text-sm opacity-80">Ø Effizienzsteigerung</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm opacity-80">Kundenzufriedenheit</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für Ihre KI-Transformation?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Kostenloses Beratungsgespräch vereinbaren"
              >
                Kostenloses Beratungsgespräch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.456-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </Link>
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Projekt-Anfrage stellen"
              >
                Projekt-Anfrage stellen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 