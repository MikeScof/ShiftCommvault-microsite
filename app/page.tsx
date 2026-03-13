'use client';

import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  const speakers = [
    { name: 'Daniel Tan', image: 'Speaker_Daniel-Tan.png', title: 'Head of Solution Engineering', company: 'Commvault' },
    // { name: 'Garreth Russel', image: 'Speaker_Gareth-Russell.png', title: 'Chief Technology Officer', company: 'Commvault' },
    { name: 'Martin Creighan', image: 'Speaker_Martin-Creighan.png', title: 'VP APAC', company: 'Commvault' },
    { name: 'Mevira Munindra', image: 'Speaker_Mevira Munindra.png', title: 'Country Manager', company: 'IDC Indonesia' },
  ];

  const platinumSponsors = [
    { name: 'AWS', logo: 'AWS.png' },
    { name: 'NetApp', logo: 'NetApp.png' },
  ];

  const goldSponsors = [
    { name: 'Pure Storage', logo: 'PureStorage.png' },
    { name: 'Exagrid', logo: 'Exagrid.png' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full mt-16 sm:mt-20 bg-white">
        <div className="relative w-full h-125 sm:h-150 md:h-105 lg:h-125">
          <Image
            src="/images/SHIFT_Desktop-LP-Header_Jakarta_5.7.26.png"
            alt="SHIFT Event Banner"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
          <Image
            src="/images/SHIFT_Mobile-LP-Header_Jakarta_5.7.26.png"
            alt="SHIFT Event Banner Mobile"
            fill
            className="object-cover object-center md:hidden"
            priority
          />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div>
              <div className="mb-4">
                <p className="text-lg sm:text-lg font-bold text-gray-800">
                  7 May 2026 | 08:30 – 14:00 WIB
                </p>
                <p className="text-lg sm:text-lg font-bold text-gray-800">
                  Ballroom 1 & 2 A, Fairmont Hotel Jakarta
                </p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Join us on May 7, 2026, as we usher in a new era of cyber resilience — cloud-native, cyber-ready, and ready for Agentic AI. Experience a transformational event that will redefine how businesses recover, secure, and scale across all clouds.
                </p>

                <p>
                  The event will feature a host of cyber resilience leaders, including Commvault APAC leaderships and industry experts from some of the biggest brands in technology and cyber security.
                </p>

                <div className="mt-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-8">Why Attend?</h2>
                  <p>
                    SHIFT is where resilience leaders gather to drive transformation. Whether you’re a CISO securing AI-driven systems, an IT leader streamlining multi-cloud recovery, or a partner— there’s something for everyone. You’ll leave prepared for advanced, AI-related threats across all clouds, plus a plan to deploy modern cyber resilience tools and strategies.
                  </p>
                </div>

                <div className="mt-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Featured Topics</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>AI Governance &amp; Security</li>
                    <li>Business Growth &amp; Resilience</li>
                    <li>Cyber Resilience &amp; Recovery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Registration */}
            <div className="flex flex-col items-center  self-start">
              <h3 className="text-3xl font-base text-gray-900 mb-6">Registration Open</h3>
              <a
                href="https://event.kimcommunication.com/SHIFTCommvault"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sign Up Now
              </a>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                Commvault respects your privacy and will not share your information with any third-parties. Read our{' '}
                <a
                  href="https://www.commvault.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-purple-600" />
      </div>

      {/* Speakers Section */}
      <section id="speakers" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Our Speakers
          </h2>
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-2/3 mx-auto aspect-3/4 mb-3 sm:mb-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={`/images/${speaker.image}`}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{speaker.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">{speaker.title}</p>
                {/* <p className="text-gray-600 text-xs md:text-sm mt-1">{speaker.company}</p> */}
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-8 md:mt-12">
            <a
              href="https://event.kimcommunication.com/SHIFTCommvault"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Sign Up For SHIFT Now
            </a>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      {/* <section id="agenda" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
              Event Agenda
            </h2>
            <div className="space-y-4 sm:space-y-6"> */}
      {/* Agenda Items */}
      {/* <AgendaItem
                time="08:30 AM – 09:30 AM"
                title="Registration"
              />
              <AgendaItem
                time="09:20 AM – 09:30 AM"
                title="Doors Open"
              />
              <AgendaItem
                time="09:30 AM – 09:45 AM"
                title="[WELCOME KEYNOTE] | The AI Imperative: Resilience Reimagined"
                speaker="Martin Creighan"
                description="The AI-driven, agentic enterprise is a different animal. It operates instantaneously, autonomously, and at massive scale. Yet, the data your organisation depends on has never been further from its origin or more complex and vulnerable. Consequently, CIOs and CISOs must rethink the availability, accuracy, integrity, and dependability of its data for this new AI era. In his keynote, Chief Commercial Officer Gary Merrill will delve into how Commvault helps enterprises confidently and safely scale resilience to power a continuous and competitive AI advantage."
              />
              <AgendaItem
                time="09:45 AM – 10:15 AM"
                title="Industry Speaker"
              />
              <AgendaItem
                time="10:15 AM – 10:35 AM"
                title="AI Resilience Fireside Chat"
                speaker="External Speaker: ...  Facilitator: Garreth Russel"
              />
              <AgendaItem
                time="10:35 AM – 11:25 AM"
                title="[INNOVATION KEYNOTE] | The Next Standard of Resilience"
                speaker="Garreth Russel"
                description="AI is transforming the very fabric of cyber resilience. In this mainstage innovation showcase, Commvault’s Chief Technology and AI Officer, Pranay Ahlawat, will unveil breakthrough innovations that redefine how organisations secure, manage, and recover their data in the AI era."
              />
              <AgendaItem
                time="11:25 AM – 12:15 PM"
                title="Panel Discussion"
              />
              <AgendaItem
                time="12:15 PM – 12:30 PM"
                title="Locknote"
              />
              <AgendaItem
                time="12:30 PM – 2:30 PM"
                title="Lunch"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Sponsors Section */}
      {/* <section id="sponsors" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
              Our Sponsors
            </h2> */}

      {/* Platinum Sponsors */}
      {/* <div className="mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6 md:mb-8">
                Platinum Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
                {platinumSponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <Image
                      src={`/images/${sponsor.logo}`}
                      alt={sponsor.name}
                      width={250}
                      height={100}
                      className="object-contain w-full h-auto max-w-[200px] sm:max-w-[250px]"
                    />
                  </div>
                ))}
              </div>
            </div> */}

      {/* Gold Sponsors */}
      {/* <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6 md:mb-8">
                Gold Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
                {goldSponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <Image
                      src={`/images/${sponsor.logo}`}
                      alt={sponsor.name}
                      width={200}
                      height={80}
                      className="object-contain w-full h-auto max-w-[150px] sm:max-w-[200px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Register Section with Map */}
      {/* <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"> */}
      {/* Left side - Registration Info */}
      {/* <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Sign up for SHIFT now</h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 text-gray-200">
                  Don&apos;t miss out on the opportunity to be part of SHIFT 2026. Register now to secure your spot and stay updated with the latest event details.
                </p>
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Location</h3>
                  <p className="mb-1 text-sm sm:text-base font-medium">Ballroom 1 & 2 A, Fairmont Hotel Jakarta</p>
                  <p className="text-gray-300 text-sm sm:text-base">Kota BNI JL. Jend. Sudirman Kav. 1, Jakarta 10220 Indonesia</p>
                  <p className="font-semibold mt-2 text-pink-400 text-sm sm:text-base">Date: May 7, 2026</p>
                </div>
                <a
                  href="https://event.kimcommunication.com/SHIFTCommvault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Register Here
                </a>
              </div> */}

      {/* Right side - Google Map */}
      {/* <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.1525238732704!2d106.79912319245545!3d-6.221781338386618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1495c27f11b%3A0x63e8f2ff2aa408d2!2sFairmont%20Jakarta!5e0!3m2!1sen!2sid!4v1771246081042!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Fairmont Hotel Jakarta Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className=" text-white px-4 sm:px-6 lg:px-8 bg-black shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="py-8 flex justify-start">
            <Image
              src="/images/Commvault Logo.png"
              alt="Commvault Logo"
              width={200}
              height={40}
              className="brightness-0 invert"
            />
          </div>
          {/* Divider */}
          <hr className="border-gray-700" />
          {/* Bottom row */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm">
              <span>© 2026 Commvault</span>
              <a href="https://www.commvault.com/legal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legal</a>
              <a href="https://www.commvault.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://www.commvault.com/legal/trust-center" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Trust Center</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Agenda Item Component
function AgendaItem({ time, title, speaker, description }: { time: string; title: string; speaker?: string; description?: string }) {
  return (
    <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-3 sm:py-4 hover:bg-gray-200 transition-colors rounded-r-lg">
      <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-1">{time}</p>
      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
      {speaker && <p className="text-xs sm:text-sm text-gray-700 font-medium mb-2">{speaker}</p>}
      {description && <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>}
    </div>
  );
}
