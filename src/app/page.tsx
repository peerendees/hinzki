import Link from 'next/link'
import References from '../components/References'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Zum Hauptinhalt springen"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Hero Section */}
      <section id="main-content" className="relative pt-16 pb-20 overflow-hidden" aria-labelledby="hero-heading">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="KI und Technologie Hintergrund"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="text-white lg:text-left text-center">
            <h1 
              id="hero-heading" 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Entdecke die Zukunft der{' '}
              <span className="text-blue-300" aria-label="Künstlichen Intelligenz">KI</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Wir machen generative KI greifbar, nutzbar und gewinnbringend für dein Unternehmen. 
              Von der Forschung bis zur Implementierung – alles aus einer Hand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center">
              <Link 
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 min-w-[200px] text-center text-lg shadow-lg"
                aria-describedby="ki-journey-desc"
              >
                Starte deine KI-Journey
              </Link>
              <span id="ki-journey-desc" className="sr-only">
                Beginne deine Reise in die Welt der künstlichen Intelligenz
              </span>
              
              <Link 
                href="/kontakt"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 focus:bg-white focus:text-blue-900 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 min-w-[200px] text-center text-lg"
                aria-describedby="kontakt-desc"
              >
                Kostenloses Erstgespräch
              </Link>
              <span id="kontakt-desc" className="sr-only">
                Vereinbare ein kostenloses Beratungsgespräch mit unseren Experten
              </span>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-4">Vertrauen von Unternehmen weltweit</p>
              <div className="flex justify-center lg:justify-start items-center space-x-8 opacity-60">
                <div className="text-white/80 font-semibold">Fortune 500</div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="text-white/80 font-semibold">Mittelstand</div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="text-white/80 font-semibold">Start-ups</div>
              </div>
            </div>
            </div>
            
            {/* Oliver Hinz Photo */}
            <div className="lg:order-first order-last">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* SUPER VISIBLE Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  {/* MASSIVE Glowing Orbs */}
                  <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-80 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-r from-purple-300 to-pink-400 opacity-70 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-emerald-300 to-cyan-300 opacity-60 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                  
                  {/* BRIGHT Geometric Shapes */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 border-4 border-white rounded-lg rotate-12 animate-spin opacity-80" style={{animationDuration: '10s'}}></div>
                  <div className="absolute -bottom-8 -left-12 w-20 h-20 border-4 border-cyan-300 rounded-full animate-bounce opacity-90" style={{animationDelay: '0.5s', animationDuration: '2s'}}></div>
                  <div className="absolute top-8 -right-16 w-16 h-16 bg-white rounded-full animate-ping opacity-60" style={{animationDelay: '1.5s', animationDuration: '2s'}}></div>
                  
                  {/* VISIBLE Tech Pattern */}
                  <div className="absolute -top-20 -left-20 opacity-70">
                    <svg width="160" height="160" viewBox="0 0 160 160" className="text-white animate-pulse" style={{animationDuration: '3s'}}>
                      <defs>
                        <pattern id="megaTechGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <circle cx="20" cy="20" r="3" fill="currentColor"/>
                          <circle cx="0" cy="0" r="2" fill="currentColor"/>
                          <circle cx="40" cy="40" r="2" fill="currentColor"/>
                        </pattern>
                      </defs>
                      <rect width="160" height="160" fill="url(#megaTechGrid)"/>
                    </svg>
                  </div>
                </div>
                
                {/* Enhanced Photo Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm">
                  <img 
                    src="/images/team/Olli_2024.jpg"
                    alt="Oliver Hinz, Gründer von HAUS HINZKI"
                    className="w-full h-auto object-cover relative z-10"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 z-20"></div>
                  
                  {/* Tech Status Indicators */}
                  <div className="absolute top-6 right-6 z-30 bg-black/20 rounded-full p-2 backdrop-blur-sm">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-purple-400 rounded-br-lg animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Premium Name Card */}
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-white via-white to-gray-50 rounded-xl p-5 shadow-2xl border border-gray-200 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <div className="text-gray-900 text-sm font-bold">Oliver Hinz</div>
                      <div className="text-gray-600 text-xs font-medium">Gründer & KI-Experte</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l-3 border-t-3 border-cyan-400 rounded-tl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-3 border-b-3 border-purple-400 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Bereiche
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drei spezialisierte Bereiche für deine KI-Transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Institut */}
            <article className="bg-gray-50 hover:bg-gray-100 focus-within:bg-gray-100 p-8 rounded-xl transition-colors duration-200 group">
              <div className="text-center">
                <div 
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors"
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Institut</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Forschung und Entwicklung im Bereich generative KI. Wir erforschen die neuesten Technologien.
                </p>
                <Link 
                  href="/institut"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:underline font-medium transition-colors"
                  aria-label="Mehr über das Institut erfahren"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Agentur */}
            <article className="bg-gray-50 hover:bg-gray-100 focus-within:bg-gray-100 p-8 rounded-xl transition-colors duration-200 group">
              <div className="text-center">
                <div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors"
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Agentur</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategische Beratung und Implementierung von KI-Lösungen für dein Unternehmen.
                </p>
                <Link 
                  href="/agentur"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:underline font-medium transition-colors"
                  aria-label="Mehr über die Agentur erfahren"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Akademie */}
            <article className="bg-gray-50 hover:bg-gray-100 focus-within:bg-gray-100 p-8 rounded-xl transition-colors duration-200 group">
              <div className="text-center">
                <div 
                  className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors"
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Akademie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Schulungen und Weiterbildungen für Teams und Einzelpersonen im Bereich KI.
                </p>
                <Link 
                  href="/akademie"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:underline font-medium transition-colors"
                  aria-label="Mehr über die Akademie erfahren"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* References Section */}
      <References />
    </main>
  )
} 