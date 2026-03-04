import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const styles = [
    {
      name: "Modern Minimalist",
      description: "Clean lines, neutral palettes, and functional elegance.",
      projects: [
        { title: "Zen Living", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
        { title: "Glass House", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" },
        { title: "Monochrome Loft", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      name: "Classic Elegance",
      description: "Timeless sophistication with a touch of luxury.",
      projects: [
        { title: "Royal Suite", img: "https://images.unsplash.com/photo-1617806118233-18e16737a2c1?auto=format&fit=crop&q=80&w=800" },
        { title: "Heritage Manor", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
        { title: "Velvet Lounge", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      name: "Urban Sanctuary",
      description: "Vibrant city living balanced with serene interiors.",
      projects: [
        { title: "Skyline Penthouse", img: "https://images.unsplash.com/photo-1616594111705-3f513baf480c?auto=format&fit=crop&q=80&w=800" },
        { title: "Industrial Chic", img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800" },
        { title: "Concrete Garden", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      name: "Nordic Serenity",
      description: "Warm woods, soft textiles, and natural light.",
      projects: [
        { title: "Fjord Retreat", img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800" },
        { title: "Pine Studio", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800" },
        { title: "Hygge Home", img: "https://images.unsplash.com/photo-1513519247388-44735da42c17?auto=format&fit=crop&q=80&w=800" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Selected Works</h1>
          <p className="text-ios-secondary-label text-xl max-w-2xl">Explore our portfolio of curated spaces, categorized by the unique styles that define our design philosophy.</p>
        </div>

        {/* Sticky Sub-nav */}
        <div className="sticky top-24 z-40 mb-16 py-4 -mx-6 px-6 glass border-y border-black/5">
          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 justify-center">
            {styles.map((style) => (
              <a 
                key={style.name} 
                href={`#${style.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="basis-[calc(50%-6px)] sm:basis-0 sm:flex-1 px-4 py-3 sm:px-6 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all text-xs sm:text-sm font-semibold text-center flex items-center justify-center min-h-[44px]"
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{style.name}</h2>
                <p className="text-ios-secondary-label max-w-xl">{style.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {style.projects.map((project, pIdx) => (
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
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-ios-secondary-label flex items-center gap-2 group-hover:text-black transition-colors">
                      View Project <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </motion.div>
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
