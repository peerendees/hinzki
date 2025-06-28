import React from 'react';

export const metadata = {
  title: 'Datenschutzerklärung - HAUS HINZKI',
  description: 'Datenschutzerklärung von HAUS HINZKI - Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="prose max-w-none">
        {/* Hier kommt der Datenschutztext rein */}
      </div>
    </div>
  );
} 