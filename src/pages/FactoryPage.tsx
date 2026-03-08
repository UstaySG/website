import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  PackageCheck,
  Scissors,
  Sofa,
} from "lucide-react";
import { Link } from "react-router-dom";

import factory1 from "../factory/factory1.gif";
import factory2 from "../factory/factory2_ustay_watermarked.jpg";
import factory3 from "../factory/factory3_ustay_watermarked.jpg";
import factory4 from "../factory/factory4_ustay_watermarked.png";
import factory5 from "../factory/factory5_ustay_watermarked.jpg";
import factory7 from "../factory/factory7.gif";
import factory8 from "../factory/factory8_ustay_watermarked.jpg";
import factory10 from "../factory/factory10.gif";
import factory11 from "../factory/factory11.gif";
import factory12 from "../factory/factory12.gif";
import ship from "../factory/ship_ustay_watermarked.jpg";


const mediaItems = [
    {
    type: "image",
    src: factory2,
    alt: "Pattern templates hanging in the workshop",
    title: "Pattern templates",
    description: "Paper patterns kept close for consistency in cutting.",
  },
  {
    type: "gif",
    src: factory1,
    alt: "Craftsmen cutting materials at worktables",
    title: "Cutting by hand",
    description: "Materials are measured and cut with care at the worktable.",
  },
  {
    type: "gif",
    src: factory10,
    alt: "Soft furnishing and sewing area in the workshop",
    title: "Sewing in progress",
    description: "Fabric and soft furnishing pieces are stitched for the next stage.",
  },
  {
    type: "image",
    src: factory5,
    alt: "Upholstery covers and leather preparation area",
    title: "Upholstery preparation",
    description: "Covers and materials set aside for fitting and finishing.",
  },
  {
    type: "image",
    src: factory3,
    alt: "Foam and internal sofa parts staged in the workshop",
    title: "Material staging",
    description: "Foam and inner parts prepared before upholstery begins.",
  },
  {
    type: "gif",
    src: factory11,
    alt: "Semi-finished sofa components and foam structures in the workshop",
    title: "Structure taking shape",
    description: "Frames, foam, and semi-finished pieces gradually come together.",
  },
  {
    type: "image",
    src: factory8,
    alt: "Worker assembling a sofa in the workshop",
    title: "Assembly in progress",
    description: "A sofa takes shape through careful hands-on work.",
  },
  {
    type: "gif",
    src: factory7,
    alt: "Finished sofas on the workshop floor",
    title: "Finished pieces",
    description: "Completed sofas prepared for checking and the next step.",
  },
  {
    type: "gif",
    src: factory12,
    alt: "Furniture packed into cartons",
    title: "Packed in cartons",
    description: "Smaller items and accessories are packed and labelled for delivery.",
  },
  {
    type: "image",
    src: ship,
    alt: "Packed goods prepared for shipment",
    title: "Ready to ship",
    description: "Crates and packed parts prepared for the journey ahead.",
  },
];

const highlights = [
  {
    icon: Factory,
    title: "Trusted workshops",
    text: "We work with selected production partners rather than anonymous marketplace sourcing.",
  },
  {
    icon: Scissors,
    title: "Details in process",
    text: "From templates to cutting and fitting, each stage is handled with practical care.",
  },
  {
    icon: Sofa,
    title: "From parts to pieces",
    text: "Materials, structure, upholstery, and assembly come together step by step.",
  },
  {
    icon: PackageCheck,
    title: "Prepared to travel",
    text: "The process continues through packing, storage, and shipment preparation.",
  },
];

const renderMedia = (item: (typeof mediaItems)[number]) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <img
      src={item.src}
      alt={item.alt}
      className="w-full h-full object-cover"
    />
  );
};

const FactoryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-24 overflow-hidden">
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
              Factory Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-title font-serif font-bold text-zinc-900 mb-6 leading-tight"
            >
              A closer look at the making process behind what we source.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="text-ios-secondary-label font-note max-w-2xl leading-relaxed"
            >
              From material preparation to assembly and shipment, this page
              offers a clearer view of the workshop-side process behind the
              pieces that eventually arrive in Singapore homes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="rounded-[2.75rem] border border-[#eadfce] bg-white p-7 md:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="font-slabel uppercase tracking-[0.35em] font-bold text-[#c5a059] mb-4">
              What you’ll see
            </div>

            <div className="space-y-4 text-zinc-600 leading-relaxed font-content">
              <p>Cutting, assembly, upholstery, and material preparation</p>
              <p>Workshop details that sit behind everyday furniture making</p>
              <p>Packing and shipment preparation before goods leave China</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center">
          <div className="font-subtitle tracking-[0.35em] uppercase font-bold text-zinc-400 mb-4">
            Factory Gallery
          </div>
          <h2 className="font-lnote font-serif font-bold text-zinc-900">
            A closer look inside the process
          </h2>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.8rem] border border-[#eadfce] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="relative h-[320px] md:h-[520px] lg:h-[620px] bg-[#f7f2eb]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  {renderMedia(currentItem)}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black-40 text-white shadow-md transition hover:scale-105"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black-40 text-white shadow-md transition hover:scale-105"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 bg-black-40">
                <div className="max-w-2xl">
                  <div className="font-slabel uppercase tracking-[0.28em] font-bold font-cream">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(mediaItems.length).padStart(2, "0")}
                  </div>
                  <h3 className="font-note text-white">
                    {currentItem.title}
                  </h3>
                  <p className="font-content font-cream leading-relaxed max-w-xl">
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#c5a059]"
                    : "w-2.5 bg-[#ddd2c3] hover:bg-[#cbb79a]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center">
          <div className="font-subtitle tracking-[0.35em] uppercase font-bold text-zinc-400 mb-4">
            Why it matters
          </div>
          <h2 className="font-lnote font-serif font-bold text-zinc-900">
            A more visible process builds more confidence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
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
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-note font-bold text-zinc-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-content text-zinc-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[3rem] border border-[#d8c0a3] bg-gradient-charcoal px-8 py-10 md:px-12 md:py-14 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="font-subtitle tracking-[0.34em] uppercase font-bold text-white/45 mb-4">
                From workshop to home
              </div>
              <h3 className="font-lnote font-serif font-bold mb-4 leading-tight">
                See how sourcing connects to the final home experience.
              </h3>
              <p className="font-content text-white/75 leading-relaxed">
                If you already have a space in mind, we can help you move from
                selection to sourcing, shipment, and installation with greater
                clarity and less stress.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6589904529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-note font-bold text-black transition-all hover:scale-[1.02]"
              >
                Start a Quote <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/process"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-note font-bold text-white transition-all hover:bg-white/10"
              >
                View Our Process
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FactoryPage;