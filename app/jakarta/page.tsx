'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Header from '../components/Header';

const BASE_REG_URL = 'https://event.kimcommunication.com/SHIFTCommvault';
// https://event.kimcommunication.com/3cb4450b

function handleRegClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const source = params.get('source') || '';
  const url = source ? `${BASE_REG_URL}?o=${encodeURIComponent(source)}` : BASE_REG_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Home() {
  const speakers = [
    { name: 'Daniel Tan', image: 'Speaker_Daniel-Tan_Cropped.png', title: 'Head of Solutions Engineering, Asia', company: 'Commvault' },
    // { name: 'Garreth Russel', image: 'Speaker_Gareth-Russell.png', title: 'Chief Technology Officer', company: 'Commvault' },
    { name: 'Martin Creighan', image: 'Speaker_Martin-Creighan_Cropped2.png', title: 'Vice President, Asia Pacific', company: 'Commvault' },
    { name: 'Aristides Indarto', image: 'Aristides_Indarto_Cropped.png', title: 'Solutions Engineer, Singapore and Indonesia', company: 'Commvault' },
    { name: 'Kavin Mahtani', image: 'Kavin_Mahtani_cropped.jpeg', title: 'Strategic Partnerships Lead, South East Asia', company: 'Commvault' },
    { name: 'Mevira Munindra', image: 'Speaker_Mevira Munindra_Cropped.png', title: 'Country Manager', company: 'IDC Indonesia' },
    { name: 'Muhammad Nimeiry', image: 'Speaker_Muhammad-Nimeiry-Lucky_Cropped.png', title: 'Country Manager, Indonesia', company: 'Commvault' },
    { name: 'Alvin Wahyudi', image: 'Alvin_Wahyudi_HPE.jpeg', title: 'Hybrid IT Storage Business Development Manager', company: 'Hewlett Packard Enterprise' },
    { name: 'Edi Hamlet', image: 'Edi_Hamlet.jpg', title: 'Head of Hybrid AI Infrastructure', company: 'Mitra Integrasi Informatika' },
  ];

  const platinumSponsors = [
    { name: 'HPE', logo: 'HPE_logo_full.png' },
    { name: 'SMI', logo: 'smi.png' },
  ];

  const goldSponsors = [
    { name: 'AWS', logo: 'AWS_logo.png' },
    { name: 'MII', logo: 'MII_Logo.png' },
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
                href={BASE_REG_URL}
                onClick={handleRegClick}
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
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
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
                <p className="text-gray-600 text-xs md:text-sm mt-1">{speaker.company}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-8 md:mt-12">
            <a
              href={BASE_REG_URL}
              onClick={handleRegClick}
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Sign Up For SHIFT Now
            </a>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            Agenda
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {/* Agenda Items */}
            <AgendaItem
              time="8:15AM - 9:00AM"
              info="Registration"
            />
            <AgendaItem
              time="9:00AM - 9:05AM"
              title="[WELCOME ADDRESS]"
              speaker="Muhammad Nimeiry, Indonesia Commvault"
            />
            <AgendaItem
              time="9:05AM - 9:20AM"
              title="[KEYNOTE] The AI Imperative: Resilience Reimagined "
              speaker="Martin Creighan, Commvault"
              description="The AI-driven, agentic enterprise is a different animal. It operates instantaneously, autonomously, and at massive scale. Yet, the data your organisation depends on has never been further from its origin or more complex and vulnerable. Consequently, CIOs and CISOs must rethink the availability, accuracy, integrity, and dependability of its data for this new AI era. In his keynote, Martin Creighan will delve into how Commvault helps enterprises confidently and safely scale resilience to power a continuous and competitive AI advantage."
            />
            <AgendaItem
              time="9:20AM - 10:10AM"
              title="[INNOVATION KEYNOTE] The Next Standard of Resilience"
              speaker="Daniel Tan (DT), Commvault"
              description="AI is transforming the very fabric of cyber resilience. In this mainstage innovation showcase, Commvault’s Chief Technology and AI Officer, Pranay Ahlawat, will unveil breakthrough innovations that redefine how organisations secure, manage, and recover their data in the AI era."
            />
            <AgendaItem
              time="10:10AM - 10:40AM"
              title="[INDUSTRY SPEAKER] Cyber Resilience in the Age of AI – An Indonesian Playbook"
              speaker="Mevira Munindra, IDC Indonesia"
              description="IDC projects 1 billion AI agents worldwide by 2029, and Indonesian organizations are already feeling the impact on both sides of the ledger. Cyber resiliency has emerged as their top priority for 2026, with building custom AI agents close behind. Yet the same AI wave is fueling a new generation of threats, from LLM-enabled phishing to automated malware, that traditional ransomware defenses cannot stop. Meanwhile, the IT estate has fragmented: on-premises workloads are giving way to a diversified mix of public cloud, SaaS, multi-cloud, and sovereign cloud, expanding the attack surface and complicating recovery."
            />
            <AgendaItem
              time="10:40AM - 10:45AM"
              title="[DECISION TIME] Identifying the Breach "
              speaker="Aristides Indarto, Commvault"
              description="You spot unusual activity—what’s your first move?"
            />
            <AgendaItem
              time="10:45AM - 11:15AM"
              title="TEA / COFFEE BREAK"
              info="| Booth Visit"
            />
            <AgendaItem
              time="11:15AM - 11:20AM"
              title="LUCKY DRAW PART 1"
            />
            <AgendaItem
              time="11:20AM - 11:25AM"
              title="[DECISION TIME] Analyzing the Impact"
              speaker="Aristides Indarto, Commvault"
              description="The breach is real. How do you prioritize next steps?"
            />
            <AgendaItem
              time="11:25AM - 11:40AM"
              title="[SPONSOR SPOTLIGHT]"
              speaker="Alvin Wahyudi, Hewlett Packard Enterprise"
            />
            <AgendaItem
              time="11:40AM - 11:45AM"
              title="[DECISION TIME] Planning & Response"
              speaker="Aristides Indarto, Commvault"
              description="Time is critical. Choose how you contain the breach and drive the response."
            />
            <AgendaItem
              time="11:45AM - 12:45PM"
              title="[PANEL DISCUSSION] Beyond the Hype, Making Cyber Resilience Real"
              speaker="Moderator: Kavin Mahtani, Commvault, Panelist: Mevira Munindra, IDC Indonesia + Edi Hamlet, Mitra Integrasi Informatika + Daniel Tan, Commvault"
              description="This panel brings together practitioners to explore how they are building resilience into everyday operations, embedding ResOps, and designing recovery strategies that actually work when tested. It is a practical conversation about what it takes to operate through disruption, not just plan for it, and how resilience becomes a competitive advantage when it is built to perform under pressure."
            />
            <AgendaItem
              time="12:45PM - 13:00PM"
              title="[LOCKNOTE] Closing"
              speaker="Martin Creighan, Commvault"
            />
            <AgendaItem
              time="13:00PM - 13:05PM"
              title="[LUCKY DRAW & GROUP PHOTO]"
            />
            <AgendaItem
              time="13:05PM - 2:05PM"
              title="[LUNCH]"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      < section id="sponsors" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            Sponsors
          </h2>

          {/* Platinum Sponsors */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 md:mb-6">
              Platinum
            </h3>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {platinumSponsors.map((sponsor, index) => (
                <Fragment key={sponsor.name}>
                  {index > 0 && (
                    <div className="w-0.5 h-16 md:h-20 bg-gray-400 rounded-full" />
                  )}
                  <div className="flex items-center">
                    <Image
                      src={`/images/${sponsor.logo}`}
                      alt={sponsor.name}
                      width={200}
                      height={80}
                      className={`object-contain w-auto ${sponsor.name === 'HPE' ? 'h-10 md:h-14' : 'h-16 md:h-22'}`}
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <hr className="border-t-2 border-purple-600" />

          {/* Gold Sponsors */}
          <div className="mt-6 md:mt-8 mb-6 md:mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 md:mb-6">
              Gold
            </h3>
            <div className="flex flex-wrap items-center gap-4 md:gap-26">
              {goldSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex items-center">
                  <Image
                    src={`/images/${sponsor.logo}`}
                    alt={sponsor.name}
                    width={200}
                    height={150}
                    className="object-contain h-16 md:h-22 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t-2 border-purple-600" />

          <div className="flex justify-start mt-8 md:mt-12">
            <a
              href={BASE_REG_URL}
              onClick={handleRegClick}
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Sign Up For SHIFT Now
            </a>
          </div>
        </div>
      </section >

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
                  href={BASE_REG_URL}
                  onClick={handleRegClick}
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
    </div >
  );
}

// Agenda Item Component
// function AgendaItem({ time, title, speaker, description }: { time: string; title: string; speaker?: string; description?: string }) {
//   return (
//     <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-3 sm:py-4 hover:bg-gray-200 transition-colors rounded-r-lg">
//       <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-1">{time}</p>
//       <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
//       {speaker && <p className="text-xs sm:text-sm text-gray-700 font-medium mb-2">{speaker}</p>}
//       {description && <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>}
//     </div>
//   );
// }


function AgendaItem({ time, title, speaker, info, description }: { time: string; title?: string; speaker?: string; info?: string, description?: string }) {
  return (
    <div >
      <p className="text-sm sm:text-lg font-semibold mb-1">{time}: &nbsp;
        {title && <span className="text-sm sm:text-lg font-bold text-purple-900 mb-2 leading-snug">{title}&nbsp;</span>}
        {speaker && <span className="text-sm sm:text-lg text-black-900 font-bold mb-2">{speaker}&nbsp;</span>}
        {info && <span className="text-sm sm:text-lg text-black-900 font-medium mb-2">{info}</span>}
      </p>
      {description && <p className="text-sm sm:text-lg text-black-600 leading-relaxed">{description}</p>}
    </div>
  );
}