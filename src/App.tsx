import React from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ClipboardList, Heart, Home, Sparkles, Palette, Ruler, Factory, PackageCheck, SearchCheck, ShipWheel, Sofa, MessageCircle, Instagram, Facebook, Mail, Menu, X, Send  } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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

type NavbarProps = {
  scrolled: boolean;
  overDark: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ scrolled,overDark }) => {
  const dark = overDark && !scrolled;
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''} ${dark ? 'dark' : ''}`}>
      <div className="tb-left">
        <Link className="tb-link" to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}}>Home</Link>
        <a className="tb-link" href="story">Story</a>
        <a className="tb-link" href="service">Service</a>
        <a className="tb-link" href="lookbook">Lookbook</a>
        <a className="tb-link" href="atelier">Atelier</a>
      </div>

      <a href="#top" className="brand">
        UStay<sup>SG</sup>
      </a>

      <div className="tb-right">
        <a className="tb-link" href="#footer">CONTACT</a>
      </div>
    </header>
  );
};


const Hero = () => {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      ref.current?.classList.add("loaded");
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="top" ref={ref}>
      <div
        className="hero-img"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=2200&q=85&auto=format&fit=crop)",
        }}
      />

      <div className="hero-inner">
        <div>
          <div className="hero-kicker reveal">
            Maison d&apos;intérieur · Singapore · Est. 2022
          </div>

          <h1 className="reveal reveal-d1">
            Interior
            <br />
            styling,
            <br />
            <em>made personal.</em>
          </h1>

          <div className="hero-meta reveal reveal-d2">
            <span>Condominium</span>
            <span>HDB</span>
            <span>Landed</span>
            <span>Rental</span>
          </div>
        </div>

        <div className="hero-cta-col reveal reveal-d3">
          <p className="hero-lead">
            A Singapore atelier styling homes that feel considered, calm &amp; quietly distinctive.
          </p>

          <button className="btn btn-primary"
              onClick={() => (window.open("https://wa.me/6589904529", "_blank"))}>
            Book a consultation <span className="btn-arrow">→</span>
          </button>

          {/* <button className="btn btn-ghost">
            Enter the studio <span className="btn-arrow">→</span>
          </button> */}
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  );
};


const Marquee = () => {
  const items = [
    'Interior Styling',
    'Moodboards',
    'Colour Direction',
    'Layout Planning',
    'Curated Sourcing',
    'Move-in Ready Homes',
    'Singapore Atelier',
  ];
  const all = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {all.map((t, i) => (
          <span key={i}>{t} <span className="ticker-dot">✦</span></span>
        ))}
      </div>
    </div>
  );
};

const Manifesto = () => {
  return (
    <section className="manifesto" id="about">
      <div className="wrap manifesto-grid">
        <div className="manifesto-label reveal">
          <div className="num">01<em>.</em></div>
          <div className="divider" />
          <span className="eyebrow">The Philosophy</span>
        </div>
        <div>
          <p className="reveal">
            We don't sell furniture. <em>We style homes.</em>
          </p>
          <p className="reveal reveal-d1">
            Every room is a quiet composition — the right pieces, in the right places,
            in a palette that makes sense for the people who live there.
          </p>
          <p className="reveal reveal-d2">
            Our work is styling first. Sourcing second. And always, intentionally,
            made-to-measure.
          </p>
          <div className="manifesto-sig reveal reveal-d3">UStay Interiors, Singapore</div>
        </div>
      </div>
    </section>
  );
}

const CHAPTERS = [
  {
    no: '01',
    title: 'The',
    titleEm: 'Story',
    desc: 'Who we are and the philosophy behind every room we style.',
    link: 'About the atelier',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80&auto=format&fit=crop',
  },
  {
    no: '02',
    title: 'The',
    titleEm: 'Service',
    desc: 'Interior styling for Singapore homes, from S$1.50 per sq ft.',
    link: 'View the service',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1400&q=80&auto=format&fit=crop',
  },
  {
    no: '03',
    title: 'The',
    titleEm: 'Lookbook',
    desc: 'Selected rooms and residences styled across the island.',
    link: 'Open the lookbook',
    img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1400&q=80&auto=format&fit=crop',
  },
  {
    no: '04',
    title: 'The',
    titleEm: 'Atelier',
    desc: 'Bespoke furniture, factory-direct — available on request.',
    link: 'Commission a piece',
    img: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1400&q=80&auto=format&fit=crop',
  },
];

const Chapters = () => {
  return (
    <section className="chapters" id="service">
      <div className="wrap">
        <div className="chapters-head">
          <h2 className="reveal">Four <em>chapters.</em><br/>One studio.</h2>
          <p className="reveal reveal-d1">
            The landing page keeps things quiet. Step into any chapter below to meet the
            studio, the service, the lookbook, or the atelier.
          </p>
        </div>
        <div className="chapter-grid">
          {CHAPTERS.map((c, i) => (
            <a key={c.no} className={`chapter reveal reveal-d${i}`} href={`${c.titleEm.toLowerCase()}`}>
              <div className="chapter-img" style={{ backgroundImage: `url(${c.img})` }} />
              <div className="chapter-body">
                <div className="chapter-num">{c.no} · Chapter</div>
                <div>
                  <h3>{c.title} <em>{c.titleEm}</em></h3>
                  <p>{c.desc}</p>
                  <span className="chapter-link">{c.link} <span>→</span></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const QuoteBand = () => {
  return (
    <section className="quote-band">
      <div className="wrap">
        <blockquote className="reveal">
          A home is not decorated.<br/>
          It is <em>composed.</em>
        </blockquote>
        <cite className="reveal reveal-d1">— From the studio, Singapore</cite>
      </div>
    </section>
  );
}

const Signature = () => {
  return (
    <section className="sig" id="contact">
      <div className="wrap sig-grid">
        <h2 className="reveal">Begin with a <em>conversation.</em></h2>
        <div className="sig-right reveal reveal-d1">
          <p>
            Send us your floor plan, a few room photos, or simply an idea. We'll reply
            personally, within a working day.
          </p>
          <div className="sig-ctas">
            <button className="btn btn-primary"
            onClick={() => (window.open("https://wa.me/6589904529", "_blank"))}>
              WhatsApp the studio <span className="btn-arrow">→</span></button>
            {/* <button className="btn btn-outline">WhatsApp the studio</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

type StickyProps = {
  show: boolean;
};

const Sticky: React.FC<StickyProps> = ({ show }) => {
  const handleClick = () => {
    window.open("https://wa.me/6591369630", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className={`sticky ${show ? "show" : ""}`}
      onClick={handleClick}
    >
      <span className="dot" /> WhatsApp the studio
    </button>
  );
};


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
    <footer id="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">UStay<sup>Sg</sup></div>
            <p>A Singapore atelier for interior styling. Quiet, considered, personal.</p>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="story">Story</a></li>
              <li><a href="service">Service</a></li>
              <li><a href="lookbook">Lookbook</a></li>
              <li><a href="atelier">Atelier</a></li>
              <li><a href="faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <div className="flex">
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
          </div>
          <div>
            <h5>Legal</h5>
            <FooterPolicyBlock />
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 UStay Interiors</div>
          <div>Styled in Singapore</div>
        </div>
      </div>
    </footer>
  );
}

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Marquee />
      <Manifesto />
      <Chapters />
      <QuoteBand />
      <Signature />
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
  const [scrolled, setScrolled] = React.useState(false);
  const [overDark, setOverDark] = React.useState(true);
  const [showSticky, setShowSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1️⃣ 控制是否滚动
      setScrolled(scrollY > 60);

      // 2️⃣ 控制是否在 Hero（深色区域）
      const heroHeight = window.innerHeight;
      setOverDark(scrollY < heroHeight - 100);

      setShowSticky(scrollY > 500);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />

      <div className="min-h-screen">
        <Navbar scrolled={scrolled} overDark={overDark} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lookbook" element={<PortfolioPage />} />
          <Route path="/service" element={<ProcessPage />} />
          <Route path="/story" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/factory" element={<FactoryPage />} />
          <Route path="/atelier" element={<BrochurePage />} />
        </Routes>
        <Sticky show={showSticky} />
        <Footer />
      </div>
    </Router>
  );

  
}