import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Heart, Home, PackageCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import me from "../portfolio/jingyi.jpg";

const storyParagraphs = [
  `Hi, I’m Jingyi — founder of UStay, and someone who knows firsthand what it feels like to turn a foreign place into a home.`,
  `I moved to Singapore eight years ago with a suitcase, a Statistics PhD from NUS, and a quiet determination to build a life here. And I did. But somewhere along the way, I kept running into the same frustrating reality: making a home in Singapore — one that truly feels like you — often costs far more, and involves far more stress, than it should.`,
  `As a licensed property agent, I saw this even more clearly. Families stretching their budgets just to furnish their homes decently. Couples compromising on quality because “good” felt out of reach. First-time homeowners overwhelmed by endless choices, markups, and middlemen.`,
  `It didn’t sit right with me.`,
  `Growing up in China and building my life in Singapore, I found myself naturally standing between two worlds. I understood the factories, the craftsmanship, and what things were actually worth. I also understood how difficult and expensive the process could feel here for everyday families.`,
  `So I started UStay to close that gap.`,
  `Not just as a business, but as something I genuinely wish had existed when I was building my own home. A way to bring trusted, quality sourcing from China directly to Singapore families — without inflated costs, without unnecessary confusion, and without having to choose between a space that looks beautiful and one you can actually afford.`,
  `Because everyone deserves a home that feels warm, complete, and truly theirs.`,
  `That’s what UStay is for.`,
];

const values = [
  {
    icon: Heart,
    title: "Warmth first",
    text: "We believe a home should feel personal, comforting, and genuinely lived in.",
  },
  {
    icon: PackageCheck,
    title: "Less stress",
    text: "We simplify sourcing, coordination, and delivery so the process feels lighter.",
  },
  {
    icon: Sparkles,
    title: "Better value",
    text: "Good design and trusted quality should feel achievable, not out of reach.",
  },
  {
    icon: Home,
    title: "Real homes",
    text: "We care about spaces that work beautifully for everyday life in Singapore.",
  },
];

const AboutPage = () => {
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

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-subtitle tracking-[0.38em] uppercase font-bold text-zinc-400 mb-5"
            >
              About Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-llabel font-serif font-bold text-zinc-900 mb-6 leading-tight max-w-2xl"
            >
              Built from a personal belief that creating a home should feel more{" "}
              <i className="font-normal italic">joyful</i>, not more complicated.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="text-ios-secondary-label font-note max-w-2xl leading-relaxed"
            >
              UStay was created to make furnishing a home in Singapore feel more
              approachable, more transparent, and much more human.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#efe4d2] rounded-[2.8rem] blur-3xl opacity-60 scale-95" />

            <div className="relative rounded-[2.8rem] border border-[#e7dbc8] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* envelope top */}
              <motion.div
                initial={{ rotateX: -90, transformOrigin: "top center" }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-28 bg-gradient-to-br from-[#d8c0a3] via-[#cfae82] to-[#b88f5e]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    background:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.14), rgba(255,255,255,0.02))",
                  }}
                />
              </motion.div>

              {/* letter */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: -18, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mx-6 md:mx-8 -mt-8 mb-8 rounded-[2rem] border border-[#efe4d6] bg-[#fffdf9] px-6 py-7 md:px-8 md:py-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="text-xs uppercase tracking-[0.34em] font-bold text-[#b88f5e] mb-4">
                  A note from our founder
                </div>
                <p className="font-content text-zinc-700 leading-relaxed mb-4">
                  “I started UStay because I knew there had to be a better way
                  to create a beautiful home — one that felt more transparent,
                  more thoughtful, and more within reach.”
                </p>
                <div className="font-serif italic text-zinc-900">— Jingyi</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-story-section">
        <motion.div className="letter-envelope">
            <div className="letter-flap" />

            <div className="letter-paper">
            <div className="polaroid-photo">
                <img src={me} alt="Jingyi" />
            </div>

            <div className="letter-header">
                <div className="font-subtitle tracking-[0.32em] uppercase font-bold text-zinc-400 mb-4">
                Our Story
                </div>
                <h2 className="font-lnote font-serif font-bold text-zinc-900">
                Why UStay began
                </h2>
            </div>

            <div className="letter-content">
                {storyParagraphs.map((paragraph, index) => (
                <motion.p
                    key={index}
                    className={`letter-paragraph ${
                    paragraph === "It didn’t sit right with me." ||
                    paragraph === "So I started UStay to close that gap." ||
                    paragraph === "That’s what UStay is for."
                        ? "letter-paragraph--emphasis"
                        : ""
                    }`}
                >
                    {paragraph}
                </motion.p>
                ))}
            </div>
            </div>
        </motion.div>
        </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center">
          <div className="font-subtitle tracking-[0.32em] uppercase font-bold text-zinc-400 mb-4">
            What matters to us
          </div>
          <h2 className="font-lnote font-serif font-bold text-zinc-900">
            The values behind UStay
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
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
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-[3rem] border border-[#d8c0a3] bg-gradient-charcoal from-[#2f2a26] via-[#3b342f] to-[#4a4038] px-8 py-10 md:px-12 md:py-14 text-white shadow-2xl"
        >
          <div className="max-w-7xl">
            <div className="font-subtitle tracking-[0.34em] uppercase font-bold text-white-45 mb-4">
              A warmer way to furnish
            </div>
            <h3 className="font-lnote font-serif font-bold mb-4 leading-tight">
              We’re here to help you build a home that feels beautiful, grounded,
              and genuinely yours.
            </h3>
            <p className="font-content text-white-75 leading-relaxed mb-8">
              Whether you already know what you want or need help shaping the
              direction, UStay is built to make the process clearer, calmer, and
              more affordable.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6589904529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-note font-bold text-black transition-all hover:scale-[1.02]"
              >
                Start a Quote
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-note font-bold text-white transition-all hover:bg-white/10"
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

export default AboutPage;