import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, Facebook, Mail, Menu, X, Send } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import PortfolioPage from './pages/PortfolioPage';

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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'WHY US', href: isHome ? '#why' : '/#why' },
    { name: 'OUR WORK', href: isHome ? '#gallery' : '/#gallery' },
    { name: 'T&C', href: isHome ? '#terms' : '/#terms' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'ios-shadow' : ''}`}>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl tracking-tight">UStay</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-ios-secondary-label hover:text-black transition-colors">
                {item.name}
              </a>
            ))}
            <a 
              href="#paths"
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              GET A QUOTE
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            <a key={item.name} href={item.href} className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <a 
            href="#paths"
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-subtitle tracking-[0.4em] uppercase font-bold font-greybrown mb-8"
      >
        Singapore's Furniture Concierge · Condo & BTO Specialists
      </motion.div>

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
        <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-800 border border-zinc-700 rounded-full z-20" />
        </div>
        
        <div className="flex justify-between w-full px-0 md:px-12">
          {/* Left Pan */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-zinc-800" />
            <div className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <span className="font-llabel font-serif italic font-darkbrown">beautifully</span>
            </div>
          </div>

          {/* Right Pan */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-zinc-800" />
            <div className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <span className="font-llabel font-serif italic font-darkbrown">affordably</span>
            </div>
          </div>
        </div>

        {/* Scale Post */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-black -z-10" />
        
        {/* Scale And */}
        <div className="mt-8 font-slabel tracking-[0.3em] uppercase font-bold font-darkbrown">
          equally important
        </div>
      </motion.div>

      {/* hero-sub */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-ios-secondary-label max-w-2xl mb-12 font-note leading-relaxed"
      >
        Factory-direct furniture from trusted manufacturers — with full design guidance, ordering, and delivery handled for you.
      </motion.p>

      {/* hero-btns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-row gap-24 mb-20 justify-center"
      >
        <a href="#paths" className="white-button px-8 md:px-10 py-4 rounded-full font-bold transition-all font-slabel">
          Start Your Journey
        </a>
        <a href="#gallery" className="black-button px-8 md:px-10 py-4 rounded-full font-bold transition-all font-slabel">
          See Our Work
        </a>
      </motion.div>

      {/* hero-stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-8-96 border-t border-white/5 pt-12 w-full"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="font-llabel font-serif font-bold font-warmgrey">↓50%</div>
          <div className="font-slabel uppercase tracking-widest text-zinc-500">vs Local Showroom</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-llabel font-serif font-bold font-warmgrey">100%</div>
          <div className="font-slabel uppercase tracking-widest text-zinc-500">Managed for You</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-llabel font-serif font-bold font-warmgrey">0</div>
          <div className="font-slabel uppercase tracking-widest text-zinc-500">Overseas Hassle</div>
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
      description: "We cut out the middlemen. Premium quality at prices local showrooms can't match.\nSee our past projects →.",
      link: "#gallery",
      color: "bg-[#FDF8F3]",
      borderColor: "border-[#E5D5C0]"
    },
    {
      id: "02",
      title: "Curated Quality",
      description: "Every piece sourced from manufacturers we personally trust. No guesswork, no quality lottery.\nStart a quote →.",
      link: "#paths",
      color: "bg-[#F5F5F0]",
      borderColor: "border-[#D1D1CB]"
    },
    {
      id: "03",
      title: "Singapore-Side Support",
      description: "We manage shipping, customs, delivery, and installation end to end.\nChat with us on Telegram →.",
      link: "https://t.me/ustaysg",
      color: "bg-[#F0F4F8]",
      borderColor: "border-[#D1D9E6]"
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
              className={`p-10 rounded-[2.5rem] border ${reason.borderColor} ${reason.color} flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group`}
            >
              <div className="font-llabel font-serif font-bold text-zinc-300 mb-10 transition-colors">
                {reason.id}
              </div>
              <h3 className="font-llabel font-bold mb-5 text-zinc-800">{reason.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-content whitespace-pre-line">{reason.description}</p>
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
            <h3 className="font-llabel font-serif font-bold mb-12 leading-tight text-zinc-800">I know<br />what I want</h3>
            <ul className="space-y-8 mb-14 text-zinc-500 font-medium font-note">
              <li>Send photos or floor plan</li>
              <li>We source & quote</li>
              <li>Approve — we deliver</li>
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
            <h3 className="font-llabel md:text-6xl font-serif font-bold mb-12 leading-tight">I need a<br />design first</h3>
            <ul className="space-y-8 mb-14 text-zinc-400 font-note">
              <li>Get a full soft-furnishing plan</li>
              <li>Style direction + item list</li>
              <li>Buy through us — fee offset</li>
            </ul>
            <div className="flex flex-col items-center gap-5">
              <a 
                href="https://wa.me/6589904529"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-14 py-6 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-xl font-note"
              >
                Explore Design
              </a>
              <span className="font-slabel font-cream font-bold tracking-[0.2em] uppercase">From S$300</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
      img: "/src/portfolio/serenity.jfif",
      style: "serenity",
      id: "serenity-collection"
    },
    { 
      title: "Urban Signature", 
      expression: "Structured lines, refined contrast, and metropolitan confidence. Bold yet balanced.",
      img: "/src/portfolio/urban.jfif",
      style: "urban",
      id: "urban-signature"
    },
    { 
      title: "Elevated Luxury", 
      expression: "Premium materials, layered details, and timeless sophistication. Spaces that reflect status and taste.",
      img: "/src/portfolio/luxury.jpg",
      style: "luxury",
      id: "elevated-luxury"
    },
    { 
      title: "Character & Revival", 
      expression: "Expressive palettes, nostalgic elements, and curated personality. Design with emotion and individuality.",
      img: "/src/portfolio/character.jpg",
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
                  {/* <motion.div 
                    variants={{
                      initial: { y: "65%" },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-black-40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
                  >
                    <h3 className="font-llabel font-serif font-bold font-cream mb-4 tracking-tight">{cat.title}</h3>
                    <div className="h-px w-12 bg-white/20 mb-6" />
                    <div className="space-y-3">
                      <span className="block font-subtitle uppercase tracking-[0.4em] font-cream font-bold">Brand Expression</span>
                      <p className="font-cream font-content leading-relaxed font-medium">
                        {cat.expression}
                      </p>
                    </div>
                  </motion.div> */}
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
              // href="https://t.me/ustaysg"
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

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data We Collect",
      items: [
        "Contact details (name, phone, email, messaging handles).",
        "Service details (quotes, orders, delivery address, communications).",
        "Media you share (photos, floor plans, measurements, design references).",
        "Website technical data (IP, device/browser, pages viewed, cookies if enabled)."
      ],
      color: "bg-[#FDF8F3]"
    },
    {
      title: "How We Use Data",
      items: [
        "Respond to enquiries and provide quotations.",
        "Coordinate sourcing, shipping, delivery, and installation.",
        "Process payments, issue invoices, and manage accounts.",
        "Provide after-sales support and improve our services."
      ],
      color: "bg-[#F5F5F0]"
    },
    {
      title: "Sharing & Transfers",
      items: [
        "We share data only as needed with logistics partners, suppliers, and IT vendors.",
        "Some suppliers may be overseas; we take reasonable steps to protect transferred data.",
        "We may disclose data to authorities where required by law."
      ],
      color: "bg-[#F0F4F8]"
    },
    {
      title: "Retention & Your Rights",
      items: [
        "We keep data only as long as needed for service and legal/record purposes.",
        "You may request access or correction of your personal data.",
        "You can withdraw consent, but services may be affected."
      ],
      color: "bg-[#FAF9F6]"
    }
  ];

  return (
    <section id="privacy" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="font-subtitle tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">
            Privacy Policy
          </div>
          <h2 className="font-title font-serif font-bold text-zinc-900">
            How we <i className="font-normal italic">protect</i> your data
          </h2>
        </div>

        <div className="grid-1-2">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`min-w-0 p-8 md:p-14 rounded-[3rem] border border-zinc-100 ${section.color} shadow-sm`}
            >
              <h3 className="font-note font-bold mb-8 tracking-[0.2em] uppercase text-zinc-400 border-b border-zinc-200/50 pb-4">
                {section.title}
              </h3>

              <ul className="space-y-5">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-zinc-600 leading-relaxed font-content">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 md:p-16 bg-darkcyan rounded-[4rem] font-cream text-sm leading-relaxed shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32 blur-2xl" />
          <div className="relative z-10">
            <p className="mb-6 font-note font-serif leading-relaxed">
              By contacting UStay via WhatsApp, Telegram, this website, or any other channel, you consent to us collecting and using your data to provide our services. We only share data where needed for fulfilment.
            </p>
            <p className="mb-0 font-note font-serif leading-relaxed">
              For privacy requests (access/correction/withdrawal), contact us via{" "}
              <a
                href="mailto:clientservice@ustaysingapore.com" className="font-bold underline text-zinc-300 transition-colors"
              >
                email
              </a>{" "}
              or{" "}
              <a
                href="https://wa.me/6589904529"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline text-zinc-300 transition-colors"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Orders & Payment",
      items: [
        "A deposit is required before production begins. Final balance is due prior to shipment.",
        "All prices are quoted in SGD and inclusive of our service fee unless stated otherwise.",
        "Lead times vary by item (typically 4–10 weeks). We confirm your timeline before you commit.",
        "Orders may not be cancelled once production has commenced."
      ],
      color: "bg-[#FDF8F3]"
    },
    {
      title: "Delivery & Installation",
      items: [
        "Delivery is to your Singapore address. Additional charges may apply for high-floor or no-lift access.",
        "All items are inspected before handover. Notify us of any damage within 48 hours of delivery.",
        "Installation is included for standard furniture. Electrical or carpentry work is not included.",
        "We are not responsible for delays caused by port congestion, customs, or force majeure."
      ],
      color: "bg-[#F5F5F0]"
    },
    {
      title: "Design Service",
      items: [
        "The S$300 design fee covers one full soft-furnishing plan. Additional revisions are chargeable.",
        "The fee is offset against your order total when you purchase through UStay within 90 days.",
        "Design plans are for personal use only and may not be shared with other vendors.",
        "UStay retains the right to use project photos for portfolio purposes unless you opt out."
      ],
      color: "bg-[#F0F4F8]"
    },
    {
      title: "Quality & Disputes",
      items: [
        "We cannot guarantee exact colour matches to screen references due to monitor variance.",
        "Minor variations in grain, texture, or shade are inherent to natural and handcrafted materials.",
        "Any dispute should be raised in writing within 7 days of delivery for prompt investigation.",
        "Our liability is limited to the value of the affected item(s) only."
      ],
      color: "bg-[#FAF9F6]"
    }
  ];

  return (
    <section id="terms" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="font-subtitle tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">Terms & Conditions</div>
          <h2 className="font-title font-serif font-bold text-zinc-900">
            Our <i className="font-normal italic">commitment</i> to you
          </h2>
        </div>

        <div className="grid-1-2">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`min-w-0 p-8 md:p-14 rounded-[3rem] border border-zinc-100 ${section.color} shadow-sm`}
            >
              <h3 className="font-note mb-8 tracking-[0.2em] uppercase text-zinc-400 border-b border-zinc-200/50 pb-4">
                {section.title}
              </h3>

              <ul className="space-y-5">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-zinc-600 leading-relaxed font-content">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 md:p-16 bg-darkcyan rounded-[4rem] text-zinc-100 text-sm leading-relaxed shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32 blur-2xl" />
          <div className="relative z-10">
            <p className="mb-4 font-content font-serif leading-relaxed">
              By engaging UStay's services — through Telegram, this website, or any other channel — you agree to these terms. Terms are subject to change; the most current version is always reflected on this page.
            </p>
            <p className="mb-4 font-note font-serif leading-relaxed">
              For any questions, please reach out via <a href="https://wa.me/6589904529" className="text-zinc-300 font-bold underline transition-colors">WhatsApp</a> before placing an order. We are always happy to clarify.
            </p>
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
    CHAT WITH US
  </a>
);

const Footer = () => (
  <footer className="bg-black pt-4 pb-12 border-t border-zinc-100">
    {/* <div className="max-w-7xl mx-auto px-6"> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-serif font-bold text-2xl tracking-tight text-zinc-900">UStay</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            Singapore's Furniture Concierge. Condo & BTO Specialists. Transforming houses into homes with bespoke soft furnishing solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://t.me/ustaysg" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:hello@ustay.sg" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-zinc-900 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-4 text-zinc-500">
            <li><a href="#why" className="hover:text-black transition-colors">Why Us</a></li>
            <li><a href="#gallery" className="hover:text-black transition-colors">Our Work</a></li>
            <li><a href="#terms" className="hover:text-black transition-colors">T&C</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-zinc-900 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-zinc-500">
            <li>Singapore</li>
            <li><a href="https://t.me/ustaysg" className="hover:text-black transition-colors">Telegram: @ustaysg</a></li>
            <li><a href="mailto:hello@ustay.sg" className="hover:text-black transition-colors">hello@ustay.sg</a></li>
          </ul>
        </div>
      </div> */}
      
      <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
        <ul id="media" className="flex gap-8">
          <li><a href="https://t.me/ustaysg" target="_blank" rel="noopener noreferrer"><Send size={24}/></a></li>
          <li><a href="mailto:clientservice@ustaysingapore.com"><Mail size={24}/></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61552263188169" target="_blank" rel="noopener noreferrer"><Facebook size={24}/></a></li>
          <li><a href="https://www.instagram.com/ustaysg/" target="_blank" rel="noopener noreferrer"><Instagram size={24}/></a></li>
          <li><a href="https://x.com/UstaySG" target="_blank" rel="noopener noreferrer"><X size={24}/></a></li>
          <li><a href="https://www.linkedin.com/in/ustay-singapore-0a42a53b4/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></li>
        </ul> 
        <p className="font-cream font-slabel">© 2026 UStay. All rights reserved.</p>
        <div className="flex gap-12 font-cream font-slabel">
          {/* <a href="#terms" className="text-white hover:text-black">Privacy Policy</a> */}
          {/* <a href="#terms" className="text-white hover:text-black">Terms of Service</a> */}
          <PrivacyModalTrigger/>
          <TermsModalTrigger/>
        </div>
      </div>
    {/* </div> */}
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
      <ChatButton />
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

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

  
}


export function PrivacyModalTrigger() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Footer item */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-zinc-300 transition-colors"
      >
        Privacy Policy
      </button>

      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="relative w-full max-w-6xl rounded-[2.5rem] bg-white shadow-2xl border border-zinc-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-zinc-100">
              <div className="text-sm tracking-[0.3em] uppercase font-bold text-zinc-400">
                Privacy Policy
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center
                           text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scroll area */}
            <div className="max-h-[80vh] overflow-y-auto">
              <PrivacyPolicy />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export function TermsModalTrigger() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Footer link */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-zinc-300 transition-colors"
      >
        Terms of Service
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="relative w-full max-w-6xl rounded-[2.5rem] bg-white shadow-2xl border border-zinc-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-zinc-100">
              <div className="font-subtitle tracking-[0.3em] uppercase font-bold text-zinc-400">
                Terms & Conditions
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center
                           text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="max-h-[80vh] overflow-y-auto">
              <TermsAndConditions />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

