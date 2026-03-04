import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, PenTool, Home, ArrowRight, CheckCircle2, Menu, X, Instagram, Mail, Phone } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import ShopPage from './pages/ShopPage';

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
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Portfolio', href: isHome ? '#portfolio' : '/portfolio' },
    { name: 'Shop', href: isHome ? '#shop' : '/shop' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'ios-shadow' : ''}`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">U</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">ustay</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a key={item.name} href={item.href} className="text-sm font-medium text-ios-secondary-label hover:text-black transition-colors">
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} to={item.href} className="text-sm font-medium text-ios-secondary-label hover:text-black transition-colors">
                  {item.name}
                </Link>
              )
            ))}
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
              Contact Us
            </button>
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
            item.href.startsWith('#') ? (
              <a key={item.name} href={item.href} className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            ) : (
              <Link key={item.name} to={item.href} className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            )
          ))}
          <button className="bg-black text-white w-full py-4 rounded-2xl font-medium mt-2">
            Contact Us
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
        alt="Luxury Interior" 
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest mb-6"
      >
        Effortless Living, Curated for You.
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-8xl font-serif font-bold text-white mb-12 leading-tight"
      >
        Artistry in Every <br /> <span className="italic font-normal">Detail.</span>
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <a href="#services" className="glass text-white px-12 py-4 rounded-full font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center">
          Our Services
        </a>
        <Link to="/portfolio" className="bg-white text-black px-12 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all group w-full sm:w-auto">
          View Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "One-Stop Solution",
      description: "Full-cycle service from initial design consultation to final installation and styling.",
      features: [
        "Consultation",
        "Space Planning",
        "Concept Development",
        "Curation & Proposal",
        "Procurement & Coordination",
        "Installation & Final Styling"
      ]
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Curated Collection",
      description: "Exclusive access to our carefully selected range of premium furniture.",
      features: ["Designer Pieces", "Direct Factory Sourcing", "Quality Assurance"]
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Bespoke Design",
      description: "Tailored interior concepts that reflect your unique personality and lifestyle.",
      features: ["Mood Boards", "3D Visualization", "Color Consulting"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-ios-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Expertise</h2>
          <p className="text-ios-secondary-label max-w-2xl mx-auto">We blend aesthetic excellence with functional precision to create spaces that inspire.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="ios-card p-8 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-ios-secondary-label mb-8 flex-grow">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Modern Minimalist", category: "Living Room", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
    { title: "Classic Elegance", category: "Dining Area", img: "https://images.unsplash.com/photo-1617806118233-18e16737a2c1?auto=format&fit=crop&q=80&w=800" },
    { title: "Urban Sanctuary", category: "Bedroom", img: "https://images.unsplash.com/photo-1616594111705-3f513baf480c?auto=format&fit=crop&q=80&w=800" },
    { title: "Nordic Serenity", category: "Workspace", img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Selected Works</h2>
            <p className="text-ios-secondary-label">A glimpse into our world of refined interiors.</p>
          </div>
          <Link to="/portfolio" className="text-sm font-bold flex items-center gap-2 group">
            View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <span className="text-white/70 text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-3xl font-serif font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShopPreview = () => {
  const products = [
    { 
      name: "Seating Collection", 
      price: "Luxury Sofas & Armchairs", 
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Bedroom Collection", 
      price: "Bespoke Beds & Bedding", 
      img: "https://images.unsplash.com/photo-1505693419148-db19f487a083?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Table Collection", 
      price: "Artisan Dining & Coffee Tables", 
      img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Storage Solutions", 
      price: "Elegant Consoles & Cabinets", 
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const categories = ["Seating Collection", "Bedroom Collection", "Table Collection", "Storage Solutions"];

  return (
    <section id="shop" className="py-24 bg-ios-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Curated Collection</h2>
          <p className="text-ios-secondary-label mb-8">Hand-picked pieces to elevate your daily living.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <span key={cat} className="px-6 py-2 glass rounded-full text-sm font-medium">{cat}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="group">
              <div className="aspect-square rounded-3xl overflow-hidden mb-4 bg-white ios-shadow">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-ios-secondary-label font-medium">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/shop" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:opacity-80 transition-all inline-block">
            Explore Full Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white font-serif font-bold text-2xl">U</span>
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight">ustay</span>
          </div>
          <p className="text-ios-secondary-label max-w-sm mb-8">
            Transforming houses into homes with bespoke soft furnishing solutions and curated furniture.
          </p>
          <div className="flex gap-4">
            {[Instagram, Mail, Phone].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-ios-secondary-label">
            {['Services', 'Portfolio', 'Shop'].map(link => (
              <li key={link}>
                {link === 'Services' ? (
                  <a href="/#services" className="hover:text-black transition-colors">{link}</a>
                ) : (
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-black transition-colors">{link}</Link>
                )}
              </li>
            ))}
            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-ios-secondary-label">
            <li>123 Design District<br />Singapore</li>
            <li>clientservice@ustaysingapore.com</li>
            <li>+65 8890 4529</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-ios-secondary-label">
        <p>© 2026 ustay. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <ShopPreview />
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
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
