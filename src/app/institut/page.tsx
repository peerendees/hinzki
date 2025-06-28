import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'KI-Institut - HAUS HINZKI',
  description: 'Institut für angewandte generative KI. Forschung, Experimente und Erkenntnisse für die Zukunft der künstlichen Intelligenz.',
};

export default function InstitutPage() {
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
      <section id="main-content" className="pt-16 pb-12 bg-blue-600" aria-labelledby="institut-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 id="institut-heading" className="text-4xl md:text-5xl font-bold mb-6">
              KI-Institut Köln
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Institut für angewandte generative KI
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Willkommen im HINZKI KI-Institut Köln – wo Leidenschaft auf Innovation trifft! 
              Angewandte generative KI revolutioniert unsere Welt, indem sie kreative Prozesse 
              automatisiert, komplexe Probleme löst und neue Möglichkeiten in Text, Bild und Audio erschließt.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" aria-labelledby="content-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Mission */}
          <div className="mb-16">
            <h2 id="content-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Unsere Mission
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unsere Experten sind unermüdlich bestrebt, das Potenzial der KI zu maximieren, 
                um transformative Lösungen zu schaffen. Wir forschen, experimentieren und teilen 
                unser Wissen, um die Zukunft aktiv zu gestalten.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tauchen Sie mit uns in die Welt der KI ein und entdecken Sie, wie sie unsere 
                Gesellschaft nachhaltig verändern kann.
              </p>
            </div>
          </div>

          {/* Was wir tun */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Was wir tun
            </h2>
            <div className="bg-blue-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Im Institut steht angewandte generative KI im Mittelpunkt. Unsere Forscher und 
                Experten arbeiten leidenschaftlich daran, die Grenzen des Möglichen zu verschieben. 
                Wir führen bahnbrechende Experimente durch, teilen unsere Erkenntnisse und bieten 
                tiefgehende Einblicke in die Welt der KI.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unser Institut ist eine Quelle des Wissens und der Innovation, die neue Wege für 
                technologische Fortschritte und gesellschaftliche Veränderungen eröffnet.
              </p>
            </div>
          </div>

          {/* Forschungsbereiche */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Forschungsbereiche
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Textverarbeitung</h3>
                <p className="text-gray-700">
                  Entwicklung fortschrittlicher NLP-Modelle für automatisierte Textgenerierung, 
                  Übersetzung und Analyse.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bildgenerierung</h3>
                <p className="text-gray-700">
                  Forschung an generativen Modellen für kreative Bildproduktion und 
                  visuelle Inhalte.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Audioanalyse</h3>
                <p className="text-gray-700">
                  Entwicklung von KI-Systemen für Spracherkennung, Musikgenerierung 
                  und Audiobearbeitung.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automatisierung</h3>
                <p className="text-gray-700">
                  Intelligente Automatisierungslösungen für Geschäftsprozesse und 
                  Workflow-Optimierung.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Interessiert an unserer Forschung?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Erfahren Sie mehr über unsere aktuellen Projekte und Erkenntnisse.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Kontakt zum Institut aufnehmen"
            >
              Jetzt Kontakt aufnehmen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 