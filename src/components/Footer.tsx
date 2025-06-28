import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Hinzki</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              KI-Institut Köln – Dein Partner für künstliche Intelligenz, 
              Beratung und innovative Lösungen.
            </p>
            <div className="text-gray-300">
              <p className="mb-1">KI-Institut Köln</p>
              <p className="mb-1">Köln, Deutschland</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Unsere Bereiche</h4>
            <nav aria-label="Footer Services Navigation">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/institut" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                    aria-label="Mehr über das Institut erfahren"
                  >
                    Institut
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/agentur" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                    aria-label="Mehr über die Agentur erfahren"
                  >
                    Agentur
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/akademie" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                    aria-label="Mehr über die Akademie erfahren"
                  >
                    Akademie
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Unternehmen</h4>
            <nav aria-label="Footer Company Navigation">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/ueber-uns" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/team" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/karriere" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/kontakt" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 mb-1">E-Mail:</p>
                                 <a 
                   href="mailto:info@haushinzki.de" 
                   className="text-blue-400 hover:text-blue-300 focus:text-blue-300 focus:outline-none focus:underline transition-colors"
                   aria-label="E-Mail an info@haushinzki.de senden"
                 >
                   info@haushinzki.de
                 </a>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">Folge uns:</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded transition-colors p-1"
                    aria-label="Folge uns auf LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded transition-colors p-1"
                    aria-label="Folge uns auf Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Hinzki. Alle Rechte vorbehalten.
            </div>
            
            <nav aria-label="Footer Legal Navigation">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link 
                    href="/impressum" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/datenschutz" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/agb" 
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    AGB
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
} 