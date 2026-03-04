import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const collections = [
    {
      name: "Seating Collection",
      description: "Luxury sofas, armchairs, and stools designed for comfort and style.",
      products: [
        { name: "Signature Sofa", price: "Premium Collection", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600" },
        { name: "Velvet Armchair", price: "Artisan Series", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" },
        { name: "Modern Stool", price: "Minimalist Design", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      name: "Bedroom Collection",
      description: "Bespoke beds, nightstands, and textiles for a restful sanctuary.",
      products: [
        { name: "Master Bed", price: "Luxury Series", img: "https://images.unsplash.com/photo-1505693419148-db19f487a083?auto=format&fit=crop&q=80&w=600" },
        { name: "Linen Nightstand", price: "Classic Series", img: "https://images.unsplash.com/photo-1532372320978-9b4d6a3a854c?auto=format&fit=crop&q=80&w=600" },
        { name: "Silk Bedding Set", price: "Premium Textile", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      name: "Table Collection",
      description: "Artisan dining, coffee, and side tables crafted from premium materials.",
      products: [
        { name: "Dining Table", price: "Artisan Crafted", img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600" },
        { name: "Marble Coffee Table", price: "Luxury Series", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600" },
        { name: "Wooden Side Table", price: "Minimalist Design", img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      name: "Storage Solutions",
      description: "Elegant consoles, cabinets, and shelving for a clutter-free home.",
      products: [
        { name: "Modern Console", price: "Minimalist Design", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600" },
        { name: "Oak Cabinet", price: "Artisan Crafted", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600" },
        { name: "Brass Shelving", price: "Luxury Series", img: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=600" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-ios-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Curated Collection</h1>
          <p className="text-ios-secondary-label text-xl max-w-2xl">Exclusive access to our carefully selected range of premium furniture, categorized by collections designed to elevate your living space.</p>
        </div>

        {/* Sticky Sub-nav */}
        <div className="sticky top-24 z-40 mb-16 py-4 -mx-6 px-6 glass border-y border-black/5">
          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 justify-center">
            {collections.map((collection) => (
              <a 
                key={collection.name} 
                href={`#${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="basis-[calc(50%-6px)] sm:basis-0 sm:flex-1 px-4 py-3 sm:px-6 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all text-xs sm:text-sm font-semibold text-center flex items-center justify-center min-h-[44px]"
              >
                {collection.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {collections.map((collection, idx) => (
            <section key={idx} id={collection.name.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-48">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{collection.name}</h2>
                <p className="text-ios-secondary-label max-w-xl">{collection.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {collection.products.map((product, pIdx) => (
                  <motion.div 
                    key={pIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pIdx * 0.1 }}
                    className="group cursor-pointer bg-white p-6 rounded-[2rem] ios-shadow"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-ios-bg">
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                    <p className="text-ios-secondary-label font-medium mb-4">{product.price}</p>
                    <button className="w-full py-3 bg-black text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
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

export default ShopPage;
