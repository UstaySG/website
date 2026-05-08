import React from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ClipboardList, Heart, Home, Sparkles, Palette, Ruler, Factory, PackageCheck, SearchCheck, ShipWheel, Sofa, MessageCircle, Instagram, Facebook, Mail, Menu, X, Send  } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, href } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.tsx';
import FactoryPage from './pages/FactoryPage.tsx'
import BrochurePage from './pages/BrochurePage.tsx'
import PortfolioPage from './pages/PortfolioPage.tsx';
import ProcessPage from './pages/ProcessPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import FooterPolicyBlock from './pages/PolicyPage.tsx'
// import HeroRoomAnimation from "./hero/HeroRoomAnimation.tsx"
import HeroFurnitureScene from "./hero/HeroRoomAnimation.tsx"


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
  const [isWhyOpen, setIsWhyOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: isHome ? "#why" : "/about"  },
    { name: "Our Services", href: isHome ? "#paths" : "/process" },
    { name: "Our Designs", href: "/design" },
    { name: "Our Furniture", href: "/brochure" },
    { name: "Our Resources", href: "/factory" },
    { name: "Contact Us", href: isHome ? "#contact" : "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-0" : "py-0"
      }`}
    >
      <div className="mx-auto px-0">
        <div
          className={`glass px-6 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "ios-shadow" : ""
          }`}
        >
          <a href={isHome ? "#" : "/"} className="nav-logo">
            U<span>S</span>tay
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative py-2"
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                      <div className="rounded-3xl border border-[#eadfce] bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3">
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
              className="bg-black !text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Get In Touch
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
            className="bg-black !text-white w-full py-4 rounded-2xl font-medium mt-2 text-center"
          >
            Get In Touch
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const HowWeWork = () => {
  const Icons = {
    pen: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>,
    plane: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
    chair: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4"/><path d="M5 10h14l-1 6H6z"/><path d="M7 16v4M17 16v4"/></svg>,
    tag: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4 13 21a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1 0-2.8L10.6 3.4A2 2 0 0 1 12 3h7a2 2 0 0 1 2 2v7a2 2 0 0 1-.4 1.4z"/><circle cx="16" cy="8" r="1.4"/></svg>,
    truck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="13" height="11"/><path d="M14 9h4l3 4v4h-7"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>,
    heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.2a5.5 5.5 0 0 0-7.8 0L12 6.2l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 22l7.8-8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  };
  const items = [
    {
      ico: Icons.pen,
      tint: "bespoke",
      placeholder: "Bespoke / Furniture",
      title: "Bespoke Furniture Design",
      price: "Custom · quote on spec",
      desc: "Custom furniture, tailored for your home."
    },
    {
      ico: Icons.home,
      tint: "whole",
      placeholder: "Whole-home / Design",
      title: "Whole Home Design",
      price: "Design fee: SGD 1.5 / sq ft",
      desc: "Beautifully designed. Perfectly styled. We take care of the entire home."
    },
    {
      ico: Icons.plane,
      tint: "trip",
      placeholder: "Factory tour / Foshan",
      title: "Comprehensive Trip",
      price: "SGD 1000",
      desc: "All-inclusive China factory trip with flight and transportation included."
    }
  ];
  const features = [
    { ico: Icons.chair,  t: "Curated Collections", d: "Handpicked pieces that elevate your space." },
    { ico: Icons.tag,    t: "Affordable Luxury",   d: "Premium quality, honest pricing." },
    { ico: Icons.truck,  t: "End-to-End Service",  d: "From concept to delivery, we've got you covered." },
    { ico: Icons.heart,  t: "Made for You",        d: "Thoughtful design. Made to last." }
  ];
  return (
    <section className="engage" id="paths">
      <div className="engage-head">
        <div className="engage-deco">
          <span></span>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>
          <span></span>
        </div>
        <h2 className="engage-title">3 Ways to Engage With Us</h2>
      </div>
      <div className="cards">
        {items.map((it, i) => (
          <article key={i} className="card" onClick={() => window.location.href = "/process"}>
            <div className="card-badge">{it.ico}</div>
            <div className={"card-img " + it.tint}>
              <div className="card-img-placeholder">{it.placeholder}</div>
            </div>
            <h3 className="card-title">{it.title}</h3>
            <div className="card-price">{it.price}</div>
            <p className="card-desc">{it.desc}</p>
          </article>
        ))}
      </div>
      <div className="features">
        {features.map((f, i) => (
          <div key={i} className="feature">
            <div className="feature-icon">{f.ico}</div>
            <div>
              <h5>{f.t}</h5>
              <p>{f.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WhyUs = () => {
  const REASONS = [
  { title: "One-Stop Furnishing",   cls: "b1", body: "Furniture, styling and delivery in one service.", href:"/portfolio" },
  { title: "No More Guesswork",     cls: "b2", body: "We help you choose pieces that fit your home.", href:"/about" },
  { title: "Factory Direct Value",  cls: "b3", body: "Better pricing without compromising quality.", href:"/factory" }
  ];

  return (
    <section className="why" id="why">
      <div className="why-head">
        <div className="engage-deco">
          <span></span>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>
          <span></span>
        </div>
        <div className="section-eyebrow">Why Ustay</div>
      </div>
      <div className="why-stage">
        <svg className="why-lines" viewBox="0 0 1100 640" preserveAspectRatio="none">
          <line x1="550" y1="320" x2="550" y2="110"/>
          <line x1="550" y1="320" x2="920" y2="540"/>
          <line x1="550" y1="320" x2="180" y2="540"/>
        </svg>
        <div className="why-center">
          <div className="why-tag">— three reasons —</div>
          <h2 style={{marginTop: 14}}>Three reasons<br/>to <em>choose</em> us.</h2>
          <div className="why-tag" style={{marginTop: 14}}>hover any bubble</div>
        </div>
        {REASONS.map((r, i) => (
          <div key={i} className={"bubble " + r.cls} onClick={() => window.location.href = r.href}>
            <span className="bubble-num">0{i+1}</span>
            <div className="bubble-label">{r.title}</div>
            <div className="bubble-detail"><p>{r.body}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}


const CTABand = () => {
  return (
    <section className="cta-band" id="contact">
      <h2>Tell us about<br/><em>your space.</em></h2>
      <p>Free 30-minute consult. We'll review your floor plan, talk budgets, and sketch a starting point.</p>
      <a href="https://wa.me/6589904529"
        target="_blank"
        rel="noopener noreferrer" 
        className="btn btn-primary">
      Book a consult <span className="arrow">→</span></a>
    </section>
  );
}

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

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-tag">A designer-looking home, without the stress.</div>
          <div style={{display:"flex",alignItems:"center",gap:10,fontFamily:"Instrument Serif",fontSize:24,color:"var(--paper)"}}>
            <span style={{width:8,height:8,background:"var(--green-bright)",borderRadius:999}}></span> ustay
          </div>
        </div>
        <div><h6>Company</h6><ul>
          <li><a href="/about">Why Ustay</a></li>
          <li><a href="/process">How We Work</a></li>
          <li><a href="/portfolio">Our Designs</a></li>
          <li><a href="/brochure">Our Furniture</a></li>
          <li><a href="/factory">Our Production</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul></div>
        <div><h6>Legal</h6><ul>
          <FooterPolicyBlock />
          <li>Singapore</li>
        </ul></div>
        <div><h6>Contact</h6><ul>
          <li>
                {socialMedia.map(({ href, icon: Icon, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                  >
                      <div className="flex gap-2"><Icon className="w-7 h-7 rounded-full border border-zinc-700 text-zinc-400-300 flex items-center justify-center" /> {label}</div>
                  </a>
                ))}
              </li>
        </ul></div>
      </div>
      <div className="footer-bottom">© 2026 USTAY PTE LTD</div>
    </footer>
  );
}

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroFurnitureScene />
      <HowWeWork />
      <WhyUs />
      <CTABand />
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
      <ScrollToTop />
      <ScrollToHashElement />

      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/design" element={<PortfolioPage />} />
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