import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, FileText, Download, ExternalLink,
    Sofa, BedDouble, UtensilsCrossed,  Armchair,  Archive,  Table2,
 } from "lucide-react";
import { Link } from "react-router-dom";

import bed from "../brochure/bed.pdf";
import casegoods from "../brochure/casegoods.pdf";
import chair from "../brochure/chair.pdf";
import cst from "../brochure/coffee and side tables.pdf";
import dt from "../brochure/dining table.pdf";
import sofa from "../brochure/sofa.pdf";


const brochures = [
  {
    title: "Sofas",
    description:
      "Explore sofa styles, sizes, and configurations for different living spaces and comfort preferences.",
    category: "Living",
    file: sofa,
    icon: Sofa,
  },
  {
    title: "Beds",
    description:
      "Browse bed designs and bedroom essentials suited to different layouts and furnishing needs.",
    category: "Bedroom",
    file: bed,
    icon: BedDouble,
  },
  {
    title: "Dining Tables",
    description:
      "A selection of dining table designs suited to everyday dining and different space requirements.",
    category: "Dining",
    file: dt,
    icon: UtensilsCrossed,
  },
  {
    title: "Chairs",
    description:
      "Browse accent chairs, lounge chairs, and versatile seating options for different parts of the home.",
    category: "Chairs",
    file: chair,
    icon: Armchair,
  },
  {
    title: "Casegoods",
    description:
      "Includes bedside tables, dressing tables, desks, side cabinets, and other supporting pieces.",
    category: "Casegoods",
    file: casegoods,
    icon: Archive,
  },
  {
    title: "Coffee & Side Tables",
    description:
      "A collection of coffee tables and side tables designed for living spaces and smaller corners.",
    category: "Tables",
    file: cst,
    icon: Table2,
  },
];

const BrochurePage = () => {
  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slabel font-bold mb-10 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-subtitle tracking-[0.38em] uppercase font-bold text-zinc-400 mb-5"
            >
              Product Brochures
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-title font-serif font-bold text-zinc-900 mb-6 leading-tight"
            >
              Browse our collections and downloadable product brochures.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="text-ios-secondary-label font-note max-w-2xl leading-relaxed"
            >
              A curated selection of brochures covering furniture and soft furnishings, designed to help you explore styles, categories, and possibilities more easily.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="rounded-[2.75rem] border border-[#eadfce] bg-white p-7 md:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="text-slabel uppercase tracking-[0.35em] font-bold text-[#c5a059] mb-4">
              What’s inside
            </div>

            <div className="space-y-4 text-zinc-600 leading-relaxed font-content">
              <p>Furniture collections by category</p>
              <p>Easy-to-open PDF brochures</p>
              <p>Quick download access for later reference</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brochures.map((item, index) => {
            const Icon = item.icon;

            return (
                <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[2.2rem] border border-[#eadfce] bg-white p-7 shadow-sm hover:-translate-y-1 transition-transform"
                >
                <div className="w-12 h-12 rounded-2xl bg-[#f5ede3] text-[#9a7440] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                </div>

                <div className="inline-flex rounded-full bg-[#f8f3ec] px-3 py-1 text-slabel font-bold tracking-wide text-[#9a7440] mb-4">
                    {item.category}
                </div>

                <h3 className="font-note font-bold text-zinc-900 mb-3">
                    {item.title}
                </h3>

                <p className="font-content text-zinc-600 leading-relaxed mb-6">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-3">
                    <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2f2a26] px-5 py-3 text-white font-note font-bold transition-all hover:scale-[1.02]"
                    >
                    View PDF
                    <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                    href={item.file}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-[#e5d7c7] bg-white px-5 py-3 text-zinc-900 font-note font-bold transition-all hover:bg-[#faf6f0]"
                    >
                    Download
                    <Download className="w-4 h-4" />
                    </a>
                </div>
                </motion.div>
            );
            })}
        </div>
      </section>
    </div>
  );
};

export default BrochurePage;