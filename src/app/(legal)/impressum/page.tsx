import React from 'react';

export const metadata = {
  title: 'Impressum - HAUS HINZKI',
  description: 'Impressum und rechtliche Informationen von HAUS HINZKI.',
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          HAUS HINZKI<br />
          Oliver Hinz<br />
          Blumenthalstr. 97<br />
          50668 Köln
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Kontakt</h2>
        <p>
          E-Mail: mail@haushinzki.de<br />
          Telefon: 0221 / 29495323
        </p>
      </div>
    </div>
  );
} 