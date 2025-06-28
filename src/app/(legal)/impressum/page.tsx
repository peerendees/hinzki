import React from 'react';

export const metadata = {
  title: 'Impressum - HAUS HINZKI',
  description: 'Impressum und rechtliche Informationen von HAUS HINZKI.',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-900 font-medium">
              <strong>HAUS HINZKI</strong><br />
              Institut für angewandte generative KI & Digitale Markenberatung<br />
              Oliver Hinz<br />
              Blumenthalstr. 97<br />
              50668 Köln<br />
              Deutschland
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
          <p>
            <strong>E-Mail:</strong> <a href="mailto:info@haushinzki.de" className="text-blue-600 hover:underline">info@haushinzki.de</a><br />
            <strong>Telefon:</strong> <a href="tel:+4922129495323" className="text-blue-600 hover:underline">0221 / 29495323</a><br />
            <strong>Website:</strong> <a href="https://haushinzki.de" className="text-blue-600 hover:underline">haushinzki.de</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Oliver Hinz<br />
            Blumenthalstr. 97<br />
            50668 Köln
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>

          <p className="text-sm text-gray-500 mt-8 pt-8 border-t">
            Stand: {new Date().toLocaleDateString('de-DE', { 
              day: '2-digit', 
              month: '2-digit', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </main>
  );
} 