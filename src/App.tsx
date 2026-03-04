import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, Menu, X, Send } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import PortfolioPage from './pages/PortfolioPage';

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
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-black text-white">
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

    <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
      {/* hero-eyebrow */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-zinc-500 mb-8"
      >
        Singapore's Furniture Concierge · Condo & BTO Specialists
      </motion.div>

      {/* hero-line1 */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-7xl font-serif font-bold mb-12"
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
        
        <div className="flex justify-between w-full px-4 md:px-12">
          {/* Left Pan */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-zinc-800" />
            <div className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <span className="text-xl md:text-3xl font-serif italic text-stone-200">beautifully</span>
            </div>
          </div>

          {/* Right Pan */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-zinc-800" />
            <div className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <span className="text-xl md:text-3xl font-serif italic text-stone-200">cost-effectively</span>
            </div>
          </div>
        </div>

        {/* Scale Post */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-zinc-800 -z-10" />
        
        {/* Scale And */}
        <div className="mt-8 text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-600">
          equally important
        </div>
      </motion.div>

      {/* hero-sub */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-ios-secondary-label max-w-2xl mb-12 text-lg leading-relaxed"
      >
        Factory-direct furniture from trusted manufacturers — with full design guidance, ordering, and delivery handled for you.
      </motion.p>

      {/* hero-btns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-row gap-4 mb-20 justify-center"
      >
        <a href="#paths" className="bg-white text-black px-8 md:px-10 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all text-sm md:text-base">
          Start Your Journey
        </a>
        <a href="#gallery" className="border border-white/20 text-white px-8 md:px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all text-sm md:text-base">
          See Our Work
        </a>
      </motion.div>

      {/* hero-stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-12 w-full"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl md:text-4xl font-serif font-bold text-white">↓50%</div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500">vs Local Showroom</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl md:text-4xl font-serif font-bold text-white">100%</div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500">Managed for You</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl md:text-4xl font-serif font-bold text-white">0</div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500">Overseas Hassle</div>
        </div>
      </motion.div>
    </div>

    {/* scroll-down */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
      <div className="w-px h-12 bg-white" />
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
      description: "We cut out the middlemen. Premium quality at prices local showrooms can't match. See our past projects.",
      link: "#gallery",
      color: "bg-[#FDF8F3]",
      borderColor: "border-[#E5D5C0]"
    },
    {
      id: "02",
      title: "Curated Quality",
      description: "Every piece sourced from manufacturers we personally trust. No guesswork, no quality lottery. Start a quote.",
      link: "#paths",
      color: "bg-[#F5F5F0]",
      borderColor: "border-[#D1D1CB]"
    },
    {
      id: "03",
      title: "Singapore-Side Support",
      description: "We manage shipping, customs, delivery, and installation end to end. Chat with us on Telegram.",
      link: "https://t.me/ustaysg",
      color: "bg-[#F0F4F8]",
      borderColor: "border-[#D1D9E6]"
    }
  ];

  return (
    <section id="why" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">Why UStay</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900">
            The smarter way to <i className="font-normal italic">furnish</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <a 
              key={idx}
              href={reason.link}
              className={`p-10 rounded-[2.5rem] border ${reason.borderColor} ${reason.color} flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group`}
            >
              <div className="text-4xl font-serif font-bold text-zinc-300 mb-8 group-hover:text-zinc-400 transition-colors">
                {reason.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-800">{reason.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{reason.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  return (
    <section id="paths" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">How We Work</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900">
            Pick your <i className="font-normal italic">path</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Path One */}
          <div className="p-10 md:p-16 rounded-[3.5rem] bg-white border border-[#E5D5C0] flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E5D5C0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#C5A059] mb-8">Path One</div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight text-zinc-800">I know<br />what I want</h3>
            <ul className="space-y-6 mb-12 text-zinc-500 font-medium text-lg">
              <li>Send photos or floor plan</li>
              <li>We source & quote</li>
              <li>Approve — we deliver</li>
            </ul>
            <a 
              href="https://t.me/ustaysg" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg text-lg"
            >
              Start a Quote →
            </a>
          </div>

          {/* Path Two */}
          <div className="p-10 md:p-16 rounded-[3.5rem] bg-[#1A1A1A] text-white flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-zinc-500 mb-8">Path Two</div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">I need a<br />design first</h3>
            <ul className="space-y-6 mb-12 text-zinc-400 text-lg">
              <li>Get a full soft-furnishing plan</li>
              <li>Style direction + item list</li>
              <li>Buy through us — fee offset</li>
            </ul>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://t.me/ustaysg" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-12 py-5 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-xl text-lg"
              >
                Explore Design →
              </a>
              <span className="text-sm text-zinc-500 font-bold tracking-[0.2em] uppercase">From S$300</span>
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
    <section id="gallery" className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">Our Work</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900">
            Past designs we've <i className="font-normal italic">created</i>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === filter.id 
                ? 'bg-black text-white border-black shadow-lg' 
                : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300 hover:text-zinc-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
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
                    hover: { scale: 1.1 }
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
                      initial: { y: "65%" },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
                  >
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 tracking-tight">{cat.title}</h3>
                    <div className="h-px w-12 bg-white/20 mb-6" />
                    <div className="space-y-3">
                      <span className="block text-[18px] uppercase tracking-[0.4em] text-white font-bold">Brand Expression</span>
                      <p className="text-white text-[16px] md:text-base leading-relaxed font-medium">
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
        <div className="bg-[#1A1A1A] rounded-[2rem] px-12 py-16 
                flex flex-row items-center justify-between 
                shadow-xl gap-16">

          {/* Left */}
          <div className="w-2/3">
            <h3 className="text-4xl font-serif font-bold mb-6 text-white">
              Want a look like these?
            </h3>

            <p className="text-lg leading-relaxed max-w-xl text-white">
              Our soft-furnishing design service creates a complete style direction 
              and item list tailored to your space. Buy through us and the fee is fully offset.
            </p>
          </div>

          {/* Right */}
          <div className="w-1/3 flex flex-col items-start gap-6">
            <div className="text-5xl font-serif font-bold text-[#F5C400]">
              S$300
            </div>

            <div className="text-xs uppercase tracking-[0.2em] text-white">
              Offset when you order through us
            </div>

            <a
              href="https://t.me/ustaysg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5C400] text-[#0D1B35] px-10 py-4 rounded-md font-bold uppercase tracking-wide hover:bg-yellow-300 transition-all shadow-lg"
            >
              Get Your Design Plan →
            </a>
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
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-zinc-400 mb-4">Terms & Conditions</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900">
            Our <i className="font-normal italic">commitment</i> to you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`min-w-0 p-6 md:p-12 rounded-[3rem] border border-zinc-100 ${section.color} shadow-sm`}
            >
              <h3 className="text-sm font-bold mb-8 tracking-[0.2em] uppercase text-zinc-400 border-b border-zinc-200/50 pb-4">
                {section.title}
              </h3>

              <ul className="space-y-5">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-zinc-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 md:p-16 bg-[#1A1A1A] rounded-[4rem] text-zinc-400 text-sm leading-relaxed shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32 blur-2xl" />
          <div className="relative z-10">
            <p className="mb-8 text-xl md:text-2xl text-white font-serif leading-relaxed">
              By engaging UStay's services — through Telegram, this website, or any other channel — you agree to these terms. Terms are subject to change; the most current version is always reflected on this page.
            </p>
            <p className="mb-8 text-xl md:text-2xl text-white font-serif leading-relaxed">
              For any questions, please reach out via <a href="https://t.me/ustaysg" className="text-white font-bold underline hover:text-zinc-300 transition-colors">Telegram</a> before placing an order. We are always happy to clarify.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatButton = () => (
  <a 
    href="https://t.me/ustaysg"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[60] bg-[#2481cc] text-white px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform group"
  >
    <Send className="w-2 h-2 bg-white animate-pulse" />
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
        <p className="text-white">© 2026 UStay. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#terms" className="text-white hover:text-black">Privacy Policy</a>
          <a href="#terms" className="text-white hover:text-black">Terms of Service</a>
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
      <TermsAndConditions />
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

