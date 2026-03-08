import React from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ClipboardList, Heart, Home, Sparkles, Palette, Ruler, Factory, PackageCheck, SearchCheck, ShipWheel, Sofa, MessageCircle, Instagram, Facebook, Mail, Menu, X, Send  } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.tsx';
import FactoryPage from './pages/FactoryPage.tsx'
import BrochurePage from './pages/BrochurePage.tsx'
import PortfolioPage from './pages/PortfolioPage.tsx';
import ProcessPage from './pages/ProcessPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import FooterPolicyBlock from './pages/PolicyPage.tsx'
// import hero from "./portfolio/hero.png";
import serenity from "./portfolio/serenity.jfif";
import urban from "./portfolio/urban.jfif";
import luxury from "./portfolio/luxury.jpg";
import character from "./portfolio/character.jpg";
import factory1 from "./factory/factory1.jpg";
import sofa from "./factory/sofa.jpg";
import ship from "./factory/ship.jpg";


const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.5 23.5H4.5V7.98H0.5V23.5ZM8.5 7.98H12.3V10.1H12.35C12.88 9.1 14.18 8.04 16.12 8.04C20.2 8.04 21 10.68 21 14.12V23.5H17V15.22C17 13.24 16.96 10.7 14.25 10.7C11.5 10.7 11.08 12.84 11.08 15.08V23.5H7.1V7.98H8.5Z"
      fill="currentColor"
    />
  </svg>
);

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   React.useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'WHY US', href: isHome ? '#why' : '/#why' },
//     { name: 'HOW WE WORK', href: isHome ? '#paths' : '/process' },
//     { name: 'OUR WORK', href: isHome ? '#gallery' : '/portfolio' },
//     { name: 'ABOUT US', href: '/about' },
//     { name: 'CONTACT US', href: isHome ? '#footer' : '/#footer' },
//   ];

//   // const quoteHref = isHome ? '#paths' : '/#paths';

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'ios-shadow' : ''}`}>
//           <Link to="/" className="flex items-center gap-2">
//             <span className="font-serif font-bold text-xl tracking-tight">UStay</span>
//           </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-medium text-ios-secondary-label hover:text-black transition-colors"
//               >
//                 {item.name}
//               </a>
//             ))}

//             <a
//               href="https://wa.me/6589904529"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
//             >
//               GET A QUOTE
//             </a>
//           </div>

//           <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//             {isMobileMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-full left-6 right-6 mt-2 glass rounded-3xl p-6 flex flex-col gap-4 md:hidden"
//         >
//           {navItems.map((item) => (
//             <a key={item.name} href={item.href} className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
//               {item.name}
//             </a>
//           ))}

//           <a 
//             href="https://wa.me/6589904529"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-black text-white w-full py-4 rounded-2xl font-medium mt-2 text-center"
//           >
//             GET A QUOTE
//           </a>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isWhyOpen, setIsWhyOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "WHY US",
      href: isHome ? "#why" : "/#why",
      children: [
        { name: "FACTORY WORK", href: "/factory" },
        { name: "OUR BROCHURES", href: "/brochure" },
      ],
    },
    { name: "HOW WE WORK", href: isHome ? "#paths" : "/process" },
    { name: "OUR WORK", href: isHome ? "#gallery" : "/portfolio" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: isHome ? "#footer" : "/#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "ios-shadow" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl tracking-tight">
              UStay
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsWhyOpen(true)}
                  onMouseLeave={() => setIsWhyOpen(false)}
                >
                  <a
                    href={item.href}
                    className="text-sm font-medium text-ios-secondary-label hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>

                  {isWhyOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 rounded-3xl border border-[#eadfce] bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3">
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-[#f8f3ec] hover:text-black transition-all"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-ios-secondary-label hover:text-black transition-colors"
                >
                  {item.name}
                </a>
              )
            )}

            <a
              href="https://wa.me/6589904529"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              GET A QUOTE
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-6 right-6 mt-2 glass rounded-3xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <a
                href={item.href}
                className="text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>

              {item.children && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-zinc-200 pl-4">
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.href}
                      className="text-sm text-zinc-600 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="https://wa.me/6589904529"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white w-full py-4 rounded-2xl font-medium mt-2 text-center"
          >
            GET A QUOTE
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 hero">
    {/* Background Image */}
    <div className="absolute inset-0 z-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
        // src={hero}
        alt="Luxury Interior" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* hero-geo */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-20 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full shadow-[0_0_20px_white]" />
      </div>
    </div>

    <div className="relative z-10 text-center px-6 max-w-6xl flex flex-col items-center">
      {/* hero-eyebrow */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-subtitle tracking-[0.4em] uppercase font-bold font-greybrown mb-8"
      >
        Singapore's Furniture Concierge · Condo & BTO Specialists
      </motion.div> */}

      {/* hero-line1 */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-title font-serif font-bold mb-12 font-warmblack"
      >
        Furnish your home
      </motion.h1>

      {/* BIG BALANCE SCALE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative w-full max-w-2xl mb-16 flex flex-col items-center animate-seesaw origin-center"
      >
        {/* Beam */}
        <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-darkblue to-transparent mb-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-800 rounded-full z-20" />
        </div>
        
        <div className="flex justify-between w-full px-0 md:px-12">
          {/* Left Pan */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-zinc-800" />
            <div className="px-6 py-3 rounded-full bg-darkblue-50">
              <span className="font-xllabel font-serif italic">beautifully</span>
            </div>
          </div>

          {/* Right Pan */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-zinc-800" />
            <div className="px-6 py-3 rounded-full bg-yellow-50">
              <span className="font-xllabel font-serif italic">affordably</span>
            </div>
          </div>
        </div>

        {/* Scale Post */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-black -z-10" />
        
        {/* Scale And */}
        <div className="mt-8 font-note tracking-[0.3em] uppercase font-bold font-darkbrown">
          equally important
        </div>
      </motion.div>

      {/* hero-sub */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-ios-secondary-label max-w-2xl mb-12 font-note leading-relaxed text-zinc-600"
      >
        {/* Factory-direct furniture from trusted manufacturers — with full design guidance, ordering, and delivery handled for you. */}
        Carefully sourced from trusted factories in Guangdong, China. <br/>
        Delivered and professionally installed in Singapore.
      </motion.p>

      {/* hero-btns */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-row gap-24 mb-20 justify-center"
      >
        <a href="#paths" className="white-button px-8 md:px-10 py-4 rounded-full font-bold transition-all font-content">
          Start Your Journey
        </a>
        <a href="#gallery" className="black-button px-8 md:px-10 py-4 rounded-full font-bold transition-all font-content">
          See Our Work
        </a>
      </motion.div> */}

      {/* hero-stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-8-96 border-t border-white/5 pt-12 w-full"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="font-lnote font-serif font-bold font-warmgrey">↓50%</div>
          <div className="font-note uppercase tracking-widest text-zinc-500">vs Local Showroom</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-lnote font-serif font-bold font-warmgrey">100%</div>
          <div className="font-note uppercase tracking-widest text-zinc-500">Managed for You</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-lnote font-serif font-bold font-warmgrey">0</div>
          <div className="font-note uppercase tracking-widest text-zinc-500">Overseas Hassle</div>
        </div>
      </motion.div>
    </div>

    {/* scroll-down */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
      <div className="w-px h-12 bg-black" />
      <div className="text-[10px] uppercase tracking-[0.4em]">Scroll</div>
    </div>
  </section>
);

const Marquee = () => {
  const items = [
    "Sofa", "Bed Frame", "Dining Set", "TV Console", "Rugs", "Storage", "Custom Orders", "Made to Order", "Factory Direct"
  ];

  return (
    <div className="bg-[#F5C400] py-4 overflow-hidden">
      <div className="animate-marquee flex gap-12 items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center shrink-0">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[#0D1B35]/80 text-sm font-semibold tracking-widest uppercase">
                  {item}
                </span>
                <span className="text-[#0D1B35]/30">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      id: "01",
      title: "Factory-Direct Pricing",
      description: "We cut out the middlemen. Premium quality at prices local showrooms can't match.\nSee our factory work →.",
      link: "/factory",
      color: "bg-[#FDF8F3]",
      overlay: "bg-[rgba(253,248,243,0.75)]",
      borderColor: "border-[#E5D5C0]",
      image: factory1,
      external: false
    },
    {
      id: "02",
      title: "Curated Quality",
      description: "Every piece sourced from manufacturers we personally trust. No guesswork, no quality lottery.\nSee our brochures →.",
      link: "/brochure",
      color: "bg-[#F5F5F0]",
      overlay: "bg-[rgba(245,245,240,0.75)]",
      borderColor: "border-[#D1D1CB]",
      image: sofa,
      external: false
    },
    {
      id: "03",
      title: "Singapore-Side Support",
      description: "We manage shipping, customs, delivery, and installation end to end.\nChat with us on WhatsApp →.",
      link: "https://wa.me/6589904529",
      color: "bg-[#F0F4F8]",
      overlay: "bg-[rgba(240,244,248,0.75)]",
      borderColor: "border-[#D1D9E6]",
      image: ship,
      external: true
    }
  ];

  return (
    <section id="why" className="why">
    {/* <section id="why" className="py-24 bg-white border-y border-zinc-100"> */}
      <div className="max-w-8xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="font-subtitle tracking-[0.4em] uppercase font-bold text-zinc-400 mb-8">Why UStay</div>
          <h2 className="font-title font-serif font-bold text-zinc-900">
            The smarter way to <i className="font-normal italic">furnish</i>
          </h2>
        </div>

        <div className="grid-1-3">
          {reasons.map((reason, idx) => (
            <a
              key={idx}
              href={reason.link}
              target={reason.external ? "_blank" : undefined}
              rel={reason.external ? "noopener noreferrer" : undefined}
              className={`relative overflow-hidden rounded-[2.5rem] border ${reason.borderColor} flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${reason.image})` }}
              />
              <div
                className={`absolute inset-0 ${reason.overlay}`}
              />
              <div className="relative z-10 p-10 flex flex-col h-full">
                <div className="font-llabel font-serif font-bold text-zinc-400 mb-10 transition-colors">
                  {reason.id}
                </div>
                <h3 className="font-llabel font-bold mb-5 text-zinc-800">
                  {reason.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-content whitespace-pre-line">
                  {reason.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  return (
    <section id="paths" className="path">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="font-subtitle tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">How We Work</div>
          <h2 className="font-title font-serif font-bold text-zinc-900">
            Pick your <i className="font-normal italic">path</i>
          </h2>
        </div>

        <div className="grid-1-2">
          {/* Path One */}
          <div className="p-12 md:p-20 rounded-[3.5rem] bg-white border border-[#E5D5C0] flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E5D5C0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <div className="font-slabel tracking-[0.4em] uppercase font-bold text-[#C5A059] mb-10">Path One</div>
            <h3 className="font-llabel font-serif font-bold mb-12 leading-tight text-zinc-800">You design it yourself</h3>
            <ul className="space-y-8 mb-14 text-zinc-500 font-medium font-note text-left">
              <li>You already know the style and pieces you want.</li>
              <li>We help you confirm the details, source from trusted factories, and handle the rest</li>
              <li>— from checking and shipment to import, delivery, and installation.</li>
            </ul>
            <a 
              href="https://wa.me/6589904529"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1f3a34] text-white px-14 py-6 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg font-note"
            >
              Start a Quote
            </a>
          </div>

          {/* Path Two */}
          <div className="p-12 md:p-20 rounded-[3.5rem] bg-[#1f3a34] text-white flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <div className="font-slabel tracking-[0.4em] uppercase font-bold text-zinc-500 mb-10">Path Two</div>
            <h3 className="font-llabel md:text-6xl font-serif font-bold mb-12 leading-tight">We design it for you</h3>
            <ul className="space-y-8 mb-14 text-zinc-400 font-note text-left">
              <li>You share your space, needs, and budget.</li>
              <li>We help you build the right furniture and styling direction, then handle the same full process</li>
              <li>— from sourcing and checking to shipment, import, delivery, and installation.</li>
            </ul>
            <div className="flex flex-col items-center gap-5">
              <a 
                href="/process"
                className="bg-white text-black px-14 py-6 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-xl font-note"
              >
                Explore Process
              </a>
              {/* <span className="font-slabel font-cream font-bold tracking-[0.2em] uppercase">From S$300</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const processSteps = [
  {
    number: '01',
    title: 'Share your space',
    description: 'Send us your floor plan, measurements, inspiration, and budget.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Choose your route',
    description: 'Either you decide the furniture direction yourself, or we help design it for you.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Confirm selections and specifications',
    description: 'We confirm sizes, materials, colours, finishes, quantities, and custom details before ordering.',
    icon: Ruler,
  },
  {
    number: '04',
    title: 'Source from trusted factories',
    description: 'We place orders with trusted suppliers and manufacturers in China.',
    icon: Factory,
  },
  {
    number: '05',
    title: 'Coordinate production',
    description: 'For custom or made-to-order items, we follow up on production and key details.',
    icon: PackageCheck,
  },
  {
    number: '06',
    title: 'Check before shipment',
    description: 'We review details and item condition before the goods leave China.',
    icon: SearchCheck,
  },
  {
    number: '07',
    title: 'Handle shipping and import',
    description: 'We coordinate shipment to Singapore, including customs and tax handling where applicable.',
    icon: ShipWheel,
  },
  {
    number: '08',
    title: 'Deliver and install',
    description: 'We arrange delivery to your home and installation in Singapore.',
    icon: Sofa,
  },
];

const OurWork = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  
  const filters = [
    { id: 'all', label: 'All Styles' },
    { id: 'serenity', label: 'Serenity Collection' },
    { id: 'urban', label: 'Urban Signature' },
    { id: 'luxury', label: 'Elevated Luxury' },
    { id: 'revival', label: 'Character & Revival' }
  ];

  const categories = [
    { 
      title: "Serenity Collection", 
      expression: "Soft tones, natural textures, and restrained elegance. Designed for calm, breathable living.",
      img: serenity,
      style: "serenity",
      id: "serenity-collection"
    },
    { 
      title: "Urban Signature", 
      expression: "Structured lines, refined contrast, and metropolitan confidence. Bold yet balanced.",
      img: urban,
      style: "urban",
      id: "urban-signature"
    },
    { 
      title: "Elevated Luxury", 
      expression: "Premium materials, layered details, and timeless sophistication. Spaces that reflect status and taste.",
      img: luxury,
      style: "luxury",
      id: "elevated-luxury"
    },
    { 
      title: "Character & Revival", 
      expression: "Expressive palettes, nostalgic elements, and curated personality. Design with emotion and individuality.",
      img: character,
      style: "revival",
      id: "character-&-revival"
    }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? categories 
    : categories.filter(c => c.style === activeFilter || activeFilter === 'all'); // Simple filter for demo

  return (
    <section id="gallery" className="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="font-subtitle tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">Our Work</div>
          <h2 className="font-title font-serif font-bold text-zinc-900">
            Past designs we've <i className="font-normal italic">created</i>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-slabel font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === filter.id 
                ? 'bg-brown font-cream border-black shadow-lg' 
                : 'bg-white font-warmblack border-[#f4f4f5] hover:border-zinc-300 hover:text-zinc-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={activeFilter === "all" ? "grid-1-2 font-cream" : "grid grid-cols-1 gap-10 mb-24 font-cream"}>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24"> */}
          {filteredCategories.map((cat, idx) => (
            <Link 
              key={idx}
              to={`/portfolio#${cat.id}`}
              className="block"
            >
              <motion.div 
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden cursor-pointer shadow-2xl border border-zinc-100"
              >
                <motion.img 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.2 }
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${cat.style}/800/600`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
                  <motion.div
                    variants={{
                      initial: { y: "70%", opacity: 0 },
                      hover: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-black-40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
                  >
                    <h3 className="font-llabel font-serif font-bold font-cream mb-4 tracking-tight">
                      {cat.title}
                    </h3>
                    <div className="h-px w-12 bg-white/20 mb-6" />
                    <div className="space-y-3">
                      <span className="block font-subtitle uppercase tracking-[0.4em] font-cream font-bold">
                        Brand Expression
                      </span>
                      <p className="font-cream font-content leading-relaxed font-medium">
                        {cat.expression}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>


        {/* Gallery Note / Advertising Banner */}
        <div className="mt-20 p-12 md:p-16 bg-darkcyan rounded-[2rem] px-8 py-16
                flex flex-row items-center justify-between 
                shadow-xl gap-6">

          {/* Left */}
          <div className="w-2/3">
            <h3 className="font-title font-serif font-bold mb-6 text-white">
              Want a look like these?
            </h3>

            <p className="font-note leading-relaxed max-w-xl text-white">
              Our soft-furnishing design service creates a complete style direction 
              and item list tailored to your space. Buy through us and the fee is fully offset.
            </p>
          </div>

          {/* Right */}
          <div className="w-1/3 flex flex-col items-start gap-8">
            <div className="font-title font-serif font-bold text-[#F5C400]">
              S$300
            </div>

            <div className="font-slabel uppercase tracking-[0.2em] text-white">
              Offset when you order through us
            </div>

            <a
              href="https://wa.me/6589904529"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5C400] text-[#0D1B35] px-6 py-4 rounded-md font-bold uppercase tracking-wide hover:bg-yellow-300 transition-all shadow-lg font-note"
            >
              Get Your Design Plan →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

const ChatButton = () => (
  <a 
    href="https://wa.me/6589904529"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[60] bg-[#25d366] text-white px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform group"
  >
    <MessageCircle size={20}/>
     {/* className="w-2 h-2 bg-white animate-pulse" /> */}
  </a>
);

const socialMedia = [
  {
    href: "https://t.me/ustaysg",
    icon: Send,
    label: "Telegram",
    external: true,
  },
  {
    href: "mailto:clientservice@ustaysingapore.com",
    icon: Mail,
    label: "Email",
    external: false,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61552263188169",
    icon: Facebook,
    label: "Facebook",
    external: true,
  },
  {
    href: "https://www.instagram.com/ustaysg/",
    icon: Instagram,
    label: "Instagram",
    external: true,
  },
  {
    href: "https://x.com/UstaySG",
    icon: X,
    label: "X",
    external: true,
  },
  // {
  //   href: "https://www.linkedin.com/in/ustay-singapore-0a42a53b4/",
  //   icon: LinkedInIcon,
  //   label: "LinkedIn",
  //   external: true,
  // },
];

const Footer = () => (
  <footer id="footer" className="bg-black pt-8 pb-6 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-1-3 gap-12 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif font-bold font-llabel tracking-tight font-cream">
              UStay
            </span>
          </div>
          <p className="font-slabel text-zinc-400 mb-4 leading-relaxed">
            Singapore’s furniture concierge for condo and BTO homes, offering
            sourcing, coordination, delivery, and installation with a refined,
            hassle-free experience.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 font-cream uppercase tracking-widest font-subtitle">
            Company
          </h4>
          <ul className="mb-4 font-content">
            <li>
              <a href="/about" className="text-zinc-400-300 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-zinc-400-300 transition-colors">
                FAQ
              </a>
            </li>
            <li className="text-zinc-400-300 transition-colors gap-2">
              Contact Us
              <div className="flex ml-4 gap-2">
                {socialMedia.map(({ href, icon: Icon, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-7 h-7 rounded-full border border-zinc-700 text-zinc-400-300 flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </li>
          </ul>
          
        </div>

        <div>
          <h4 className="font-bold mb-4 font-cream uppercase tracking-widest font-subtitle">
            Legal
          </h4>
          <FooterPolicyBlock />
          <div className="text-zinc-400 font-slabel">Singapore</div>
         
        </div>
      </div>

      <div className="pt-1 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 font-slabel">
        <p>© 2026 UStay. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Marquee />
      <WhyUs />
      <HowWeWork />
      <OurWork />
      {/* <TermsAndConditions /> */}
      {/* <ChatButton /> */}
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');

    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    setTimeout(scrollToElement, 100);
  }, [location]);

  return null;
};

export default function App() {
  const [showSplash, setShowSplash] = React.useState(() => {
    return sessionStorage.getItem('ustay-splash-shown') !== 'true';
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem('ustay-splash-shown', 'true');
    setShowSplash(false);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      <ScrollToTop />
      <ScrollToHashElement />

      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/factory" element={<FactoryPage />} />
          <Route path="/brochure" element={<BrochurePage />} />
        </Routes>
        <ChatButton />
        <Footer />
      </div>
    </Router>
  );

  
}