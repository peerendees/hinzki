import React from 'react';

export const metadata = {
  title: 'Datenschutzerklärung - HAUS HINZKI',
  description: 'Datenschutzerklärung von HAUS HINZKI - Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie 
            dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, 
            die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der 
            Website durch unsere IT-Systeme erfasst.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. Die personenbezogenen Daten, die auf dieser 
            Website erfasst werden, werden auf den Servern des Hosters gespeichert.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
            Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="bg-gray-50 p-4 rounded-lg mt-4">
            <strong>HAUS HINZKI</strong><br />
            KI-Institut Köln<br />
            E-Mail: info@haushinzki.de
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre 
            personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive 
            der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen 
            bei uns gespeichert.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Anfrage per E-Mail oder Telefon</h3>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
            personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
            <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
            <li>Datenübertragbarkeit zu verlangen</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz wenden Sie sich bitte an: 
            <a href="mailto:info@haushinzki.de" className="text-blue-600 hover:underline ml-1">
              info@haushinzki.de
            </a>
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