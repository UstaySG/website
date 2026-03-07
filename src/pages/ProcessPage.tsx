import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ClipboardList, Palette, Ruler, Factory, PackageCheck, SearchCheck, ShipWheel, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    number: '01',
    title: 'Share your space',
    description: 'Send us your floor plan, measurements, inspiration, and budget.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Choose your route',
    description: 'Either you decide the furniture direction yourself, or we help design it for you.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Confirm selections and specifications',
    description: 'We confirm sizes, materials, colours, finishes, quantities, and custom details before ordering.',
    icon: Ruler,
  },
  {
    number: '04',
    title: 'Source from trusted factories',
    description: 'We place orders with trusted suppliers and manufacturers in China.',
    icon: Factory,
  },
  {
    number: '05',
    title: 'Coordinate production',
    description: 'For custom or made-to-order items, we follow up on production and key details.',
    icon: PackageCheck,
  },
  {
    number: '06',
    title: 'Check before shipment',
    description: 'We review details and item condition before the goods leave China.',
    icon: SearchCheck,
  },
  {
    number: '07',
    title: 'Handle shipping and import',
    description: 'We coordinate shipment to Singapore, including customs and tax handling where applicable.',
    icon: ShipWheel,
  },
  {
    number: '08',
    title: 'Deliver and install',
    description: 'We arrange delivery to your home and installation in Singapore.',
    icon: Sofa,
  },
];

const highlights = [
  'Clear selections before order confirmation',
  'Trusted factory sourcing in China',
  'Singapore-side delivery and installation',
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-slabel font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
          <div>
            <div className="font-subtitle tracking-[0.4em] uppercase font-bold text-zinc-400 mb-5">Our Process</div>
            <h1 className="font-title font-serif font-bold text-zinc-900 mb-6 leading-tight">
              From initial floor plan to final <i className="font-normal italic">installation</i>
            </h1>
            <p className="text-ios-secondary-label font-note max-w-2xl leading-relaxed">
              A clear, managed process designed to keep furniture sourcing simple, coordinated, and low-stress from China to Singapore.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e8dccb] bg-white/80 px-4 py-2 font-slabel font-semibold text-zinc-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.75rem] border border-[#eadfce] bg-white p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#efe4d2] blur-3xl opacity-70" />
            <div className="relative">
              <div className="font-subtitle uppercase tracking-[0.35em] font-bold text-[#c5a059] mb-4">What you can expect</div>
              <div className="space-y-5">
                <div className="rounded-[2rem] bg-pinkcream p-5">
                  <div className="font-note font-bold text-zinc-600 mb-1">Two ways to start</div>
                  <p className="font-content text-zinc-500 leading-relaxed">Come with your own furniture direction, or let us help shape it with you.</p>
                </div>
                <div className="rounded-[2rem] bg-greyblue-50 p-5">
                  <div className="font-note text-zinc-800 font-bold mb-1">Managed coordination</div>
                  <p className="font-content text-zinc-600 leading-relaxed">We handle sourcing, production follow-up, checking, shipping, and installation flow.</p>
                </div>
                <div className="rounded-[2rem] bg-darkcyan-50 p-5 text-white">
                  <div className="font-note font-bold mb-1">Built for Singapore delivery</div>
                  <p className="font-content leading-relaxed">The process is structured around overseas purchasing without the usual cross-border hassle.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <div className="font-subtitle tracking-[0.35em] uppercase font-bold text-zinc-400 mb-4">Step by step</div>
          <h2 className="font-lnote md:text-6xl font-serif font-bold text-zinc-900">
            A clear flow with every stage carefully handled
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#e7dac7] via-[#cfb487] to-transparent lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className={`relative lg:flex ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} ${index > 0 ? 'lg:-mt-6' : ''}`}
                >
                  <div
                    className={`relative w-full lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'} rounded-[2.5rem] border border-[#eadfce] bg-white p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f6efe5] text-[#8f6b2e]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="font-subtitle font-bold tracking-[0.25em] text-[#c5a059]">{step.number}</span>
                          <div className="h-px flex-1 bg-[#ede4d7]" />
                        </div>
                        <h3 className="font-note md:text-2xl font-bold text-zinc-900 mb-3 leading-snug">{step.title}</h3>
                        <p className="font-content text-zinc-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className={`hidden lg:flex absolute top-1/2 ${isLeft ? '-right-8' : '-left-8'} -translate-y-1/2 h-16 w-16 items-center justify-center`}>
                      <div className="h-px w-8 bg-[#d5b98d]" />
                      <div className="h-3 w-3 rounded-full bg-[#c5a059] shadow-[0_0_0_8px_rgba(197,160,89,0.08)]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] border border-[#eadfce] bg-gradient-charcoal from-[#1f3a34] to-[#294c44] px-8 py-10 md:px-12 md:py-14 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-5xl">
              <div className="font-subtitle uppercase tracking-[0.35em] font-bold text-white-50 mb-4">Ready to start</div>
              <h3 className="font-lnote font-serif font-bold mb-4">Let’s build the right route for your home.</h3>
              <p className="font-content text-white-75 leading-relaxed">
                Whether you already know what you want or need help shaping the direction, we can guide the next step.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6589904529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-note font-bold text-black transition-all hover:scale-[1.02]"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-note font-bold text-white transition-all hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProcessPage;
