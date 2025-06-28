import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Akademie - HAUS HINZKI',
  description: 'KI-Schulungen und Weiterbildungen. Webinare, Workshops und Seminare für Teams und Einzelpersonen im Bereich künstliche Intelligenz.',
};

export default function AkademiePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Zum Hauptinhalt springen"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Hero Section */}
      <section id="main-content" className="pt-16 pb-12 bg-purple-600" aria-labelledby="akademie-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 id="akademie-heading" className="text-4xl md:text-5xl font-bold mb-6">
              HINZKI Akademie
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Deine Adresse für umfassende KI-Schulungen
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Die Akademie ist Ihre Adresse für umfassende Schulungen und Workshops rund um KI. 
              In unseren Webinaren und Vor-Ort-Seminaren vermitteln wir aktuelles Wissen und 
              praktische Anwendungen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" aria-labelledby="content-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Unser Ansatz */}
          <div className="mb-16 text-center">
            <h2 id="content-heading" className="text-3xl font-bold text-gray-900 mb-8">
              Unser Bildungsansatz
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unsere Leidenschaft für Bildung treibt uns an, Wissen auf inspirierende und 
                zugängliche Weise zu teilen. Wir bieten interaktive Kurse in Textverarbeitung, 
                Audioanalyse, Videoproduktion und Automatisierung.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Von Grundlagen bis zu fortgeschrittenen Techniken – unsere Seminare sind 
                praxisorientiert und auf die Bedürfnisse moderner Unternehmen zugeschnitten.
              </p>
            </div>
          </div>

          {/* Kursangebote */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Unsere Kursangebote
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Webinare */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-purple-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Online-Webinare</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Live-Schulungen von überall aus. Interaktive Sessions mit direktem 
                    Austausch und praktischen Übungen.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• KI-Grundlagen für Einsteiger</li>
                    <li>• ChatGPT & Co. effektiv nutzen</li>
                    <li>• Prompt Engineering Workshop</li>
                    <li>• KI-Tools für den Arbeitsalltag</li>
                  </ul>
                </div>
              </div>

              {/* Vor-Ort Seminare */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Vor-Ort Seminare</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Maßgeschneiderte Schulungen in Ihrem Unternehmen. Intensive Workshops 
                    mit direktem Praxisbezug zu Ihren Projekten.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Team-Workshops</li>
                    <li>• Führungskräfte-Seminare</li>
                    <li>• Branchen-spezifische Schulungen</li>
                    <li>• Change Management für KI</li>
                  </ul>
                </div>
              </div>

              {/* Textverarbeitung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Textverarbeitung</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Lernen Sie, wie KI Ihre Texterstellung revolutioniert. Von der 
                    Content-Erstellung bis zur automatisierten Übersetzung.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Content-Generierung</li>
                    <li>• SEO-optimierte Texte</li>
                    <li>• Mehrsprachige Inhalte</li>
                    <li>• Automatisierte Korrekturen</li>
                  </ul>
                </div>
              </div>

              {/* Audio & Video */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-orange-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Audio & Video</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Multimedia-Produktion mit KI-Unterstützung. Von der Audioanalyse 
                    bis zur automatisierten Videoproduktion.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Voice-to-Text Systeme</li>
                    <li>• Automatische Untertitel</li>
                    <li>• KI-gestützte Videobearbeitung</li>
                    <li>• Podcast-Automatisierung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dozenten-Erfahrung */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Expertise aus der Praxis
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                Mit jahrelanger Dozenten-Erfahrung helfen wir Ihnen, den eigenen Bedarf an 
                Fortbildung einschätzen zu können und die richtigen Workshops und Seminare 
                für Mitarbeiter und Führungskräfte auszuwählen.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm opacity-80">
                <div>🎓 Hochschuldozent</div>
                <div>📚 10+ Jahre Erfahrung</div>
                <div>👥 500+ geschulte Teilnehmer</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für deine KI-Weiterbildung?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Finden Sie das passende Schulungsformat für Ihr Team oder sich selbst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Beratungsgespräch für Schulungen vereinbaren"
              >
                Beratungsgespräch vereinbaren
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.456-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </Link>
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Kursangebot anfordern"
              >
                Kursangebot anfordern
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 