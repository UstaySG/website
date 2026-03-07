import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import song from "../portfolio/song/pic1.jpg";
import wcream from "../portfolio/wcream/pic1.jpg";
import fcream from "../portfolio/fcream/pic1.jpg";
import italian from "../portfolio/italian/pic1.jpg";
import bauhaus from "../portfolio/bauhaus/pic1.jpg";
import mtra2 from "../portfolio/mtra2/pic1.jpg";



const PortfolioPage = () => {
  const styles = [
    {
      name: "Serenity Collection",
      description: "Soft tones, natural textures, and restrained elegance. Designed for calm, breathable living.",
      projects: [
        { title: "Natural Cream", img: wcream, quote: 12666, link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYXBHMBA?gs.nav.type=auto-site" },
        { title: "Song-Inspired Aesthetic", img: song, quote: 12888, link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYX4RP81?gs.nav.type=auto-site" },
        { title: "French Cream", img: fcream, quote: 13888, link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYYEYX58?gs.nav.type=auto-site" },
        { title: "Japandi", quote: 13666, img: "https://qhrenderpicoss.kujiale.com/r/2025/12/01/L3D723S41ENDOQZPFUYUWLR4ELUFX7CMUVY8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYX4RP81?gs.nav.type=auto-site" },
        { title: "Italian Cream", img: "https://qhrenderpicoss.kujiale.com/r/2025/12/01/L3D723S41ENDOQZOFVAUWITYOLUFX7CIM7I8.jpg", quote: 15666, link: "https://www.kujiale.com/xiaoguotu/pano/3FOKO1VVDNHE?gs.nav.type=auto-site" }
      ]
    },
    {
      name: "Urban Signature",
      description: "Timeless sophistication with a touch of luxury.",
      projects: [
        { title: "Italian Modern", img: "https://qhrenderpicoss.kujiale.com/r/2026/01/19/L3D723S41ENDORZGONAUWKAM6LUFX75JYQY8.jpg", quote:12666, link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYVCMOSJ?gs.nav.type=auto-site" },
        { title: "Warm Modern", quote: 13666, img: "https://qhrenderpicoss.kujiale.com/r/2026/01/19/L3D723S41ENDORZGGMAUWLVCOLUFX75PLQY8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYYFWP11?gs.nav.type=auto-site" },
        { title: "Dark Modern", quote:17666, img: "https://qhrenderpicoss.kujiale.com/r/2025/12/01/L3D723S41ENDOQZPN2AUWIK5ULUFX7CL3UI8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKO1WP8CRD?gs.nav.type=auto-site" }
      ]
    },
    {
      name: "Elevated Luxury",
      description: "Premium materials, layered details, and timeless sophistication. Spaces that reflect status and taste.",
      projects: [
        { title: "Italian Luxury", quote: 13888, img: "https://qhrenderpicoss.kujiale.com/r/2025/01/14/L3D763S41ENDPKNMDRYUWII4QLUFX6VH5ZY8_3840x1644.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKO1X0DJJL?gs.nav.type=auto-site" },
        { title: "Modren Luxury", quote: 14888, img: "https://qhrenderpicoss.kujiale.com/r/2025/11/28/L3D723S41ENDOQ3HRNQUWLR4ELUFX7PFZXA8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKO1VJLW99?gs.nav.type=auto-site" },
        { title: "Warm Luxury", quote: 15888, img: "https://qhrenderpicoss.kujiale.com/r/2025/12/01/L3D723S41ENDOQZNFEQUWIUIALUFX7BSIBA8.jpg", link:"https://www.kujiale.com/xiaoguotu/pano/3FOKO1OL5YYV?gs.nav.type=auto-site" },
        { title: "Light Luxury", quote: 16888, img: "https://qhrenderpicoss.kujiale.com/r/2025/12/01/L3D723S41ENDOQZOWFYUWIMU4LUFX7CLQ2Q8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKO1USEHXV?gs.nav.type=auto-site" },
        
      ]
    },
    {
      name: "Character & Revival",
      description: "Expressive palettes, nostalgic elements, and curated personality. Design with emotion and individuality.",
      projects: [
        { title: "French Vintage", quote: 14666, img: "https://qhrenderpicoss.kujiale.com/r/2025/12/01/L3D723S41ENDOQZK4AYUWJ2M6LUFX73VTYY8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKO1N1Y30K?gs.nav.type=auto-site" },
        { title: "Modern Mid-Century", quote: 15666, img: mtra2, link: "https://www.kujiale.com/xiaoguotu/pano/3FOKKPY4MOSN?gs.nav.type=auto-site" },
        { title: "Retro Modern", quote: 15888, img: "https://qhrenderpicoss.kujiale.com/r/2026/01/19/L3D723S41ENDORZHNZIUWLTNILUFX75M3LQ8.jpg", link: "https://www.kujiale.com/xiaoguotu/pano/3FOKGYXE1XN0?gs.nav.type=auto-site" },
        // { title: "Bauhaus", quote: 17666, img: bauhaus, link:"https://www.kujiale.com/xiaoguotu/pano/3FOKA80D3IKA?gs.nav.type=auto-site"},
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slabel font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-10">
          <h1 className="font-title font-serif font-bold mb-6">Selected Works</h1>
          <p className="text-ios-secondary-label font-note`  max-w-7xl">Explore our portfolio of curated spaces, categorized by the unique styles that define our design philosophy.</p>
        </div>

        {/* Sticky Sub-nav */}
        <div className="sticky top-24 z-40 mb-10 py-1 -mx-6 px-2 glass border-y border-black/5">
          <div className="flex flex-wrap gap-0-12-60 justify-center">
            {styles.map((style) => (
              <a 
                key={style.name} 
                href={`#${style.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-2 py-0 rounded-full text-zinc-400-800 transition-all font-content font-semibold text-center flex items-center justify-center min-h-[30px]"
              >
                {style.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {styles.map((style, idx) => (
            <section key={idx} id={style.name.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-48">
              <div className="mb-12">
                <h2 className="font-lnote font-serif font-bold mb-4">{style.name}</h2>
                <p className="text-ios-secondary-label font-content max-w-7xl">{style.description}</p>
              </div>
              
              <div className="grid grid-1-3 gap-8">
                {style.projects.map((project, pIdx) => (
                  <Link 
                    key={pIdx}
                    target="_blank"
                    rel="noopener noreferrer"
                    to={project.link}>
                    <motion.div 
                      key={pIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pIdx * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 ios-shadow">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="font-note font-bold mb-1">{project.title}</h3>
                      <p className="mb-4 font-subtitle font-bold mb-1 text-zinc-600">
                        S$ {project.quote} &nbsp; View Project → </p>
                    </motion.div>
                  </Link>
                  
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
