import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What does UStay do?",
        answer:
          "UStay bridges the gap between China-sourced furniture and local furniture retail in Singapore. We help clients access better-value furniture and soft furnishings from trusted suppliers in China, while providing the clarity, support, and convenience of a local service experience.",
      },
      {
        question: "How is UStay different from a regular furniture store?",
        answer:
          "We combine the best of both worlds. You get the wider range, better value, and customisation opportunities available through direct sourcing in China, without having to handle the complexity on your own. We support the process from selection and specification checks to shipment, import, delivery, installation, and after-sales coordination in Singapore.",
      },
      {
        question: "How can I work with UStay?",
        answer:
          "There are two ways to work with us. You can either choose the furniture and style yourself, or we can help design and curate the overall direction for your home. After that, the rest of the process is the same — we help handle sourcing, checking, shipping, import, delivery, and installation.",
      },
      {
        question: "Do I need to know exactly what I want before contacting you?",
        answer:
          "No. If you already know the style and pieces you want, we can help you source them. If you need help shaping the direction of your home, we can also guide you through that process.",
      },
      {
        question: "Do you have a showroom in Singapore?",
        answer:
          "We currently work primarily through consultation, proposals, and curated sourcing rather than a traditional showroom model.",
      },
    ],
  },
  {
    category: "Design & Selection",
    items: [
      {
        question: "Do you offer design help?",
        answer:
          "Yes. We can help plan the furniture and styling direction for your home based on your floor plan, preferred style, practical needs, and budget.",
      },
      {
        question: "Can I choose the furniture myself?",
        answer:
          "Yes. If you already know what you want, you can choose the furniture yourself and we will help handle the rest of the process.",
      },
      {
        question: "Can you work with small apartments and BTO layouts?",
        answer:
          "Yes. We understand that Singapore homes often require careful planning around size, layout, and practicality, and we take that into account during selection and planning.",
      },
      {
        question: "Do you only do full-home projects?",
        answer:
          "No. We can support both full-home setups and selected spaces, such as a living room, bedroom, dining area, or other parts of the home.",
      },
    ],
  },
  {
    category: "Products & Customisation",
    items: [
      {
        question: "What kind of items can you source?",
        answer:
          "We can help source a wide range of furniture and soft furnishings, including sofas, beds, mattresses, dining tables, dining chairs, coffee tables, side tables, TV consoles, rugs, curtains, lighting, decor, and other loose furniture items.",
      },
      {
        question: "Can I customise furniture?",
        answer:
          "Yes, depending on the product and supplier. Some items can be customised in size, material, colour, finish, or configuration.",
      },
    ],
  },
  {
    category: "Pricing & Quotes",
    items: [
      {
        question: "How do I get a quote?",
        answer:
          "You can send us your floor plan, inspiration images, preferred style, and budget range. The more detail you share, the more accurately we can prepare a proposal for you.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Pricing depends on the products selected, customisation requirements, shipping volume, and installation needs. We will confirm the details clearly before you proceed.",
      },
      {
        question: "Is a deposit required?",
        answer:
          "For orders above SGD 600, we require a 60% deposit upon order confirmation. This allows us to begin sourcing, production, and coordination for your order.",
      },
    ],
  },
  {
    category: "Timeline & Logistics",
    items: [
      {
        question: "How long does the process usually take?",
        answer:
          "Most orders take 8 to 12 weeks after order confirmation, depending on the products selected, customisation requirements, production time, and shipping schedule.",
      },
      {
        question: "Do you handle shipping from China to Singapore?",
        answer:
          "Yes. We coordinate the shipment process from China to Singapore so clients do not need to manage cross-border logistics on their own.",
      },
      {
        question: "Do you handle customs and tax?",
        answer:
          "Yes. We help coordinate the import process, including customs-related handling and applicable tax processes where needed.",
      },
      {
        question: "Are the items insured during shipment?",
        answer:
          "Yes. All furniture shipments are fully insured during transit for added peace of mind.",
      },
      {
        question: "Do you check the items before shipment?",
        answer:
          "Yes. We help review the order details and product condition before shipment to reduce mistakes and avoid issues where possible.",
      },
    ],
  },
  {
    category: "Delivery & Support",
    items: [
      {
        question: "What happens if something arrives damaged?",
        answer:
          "We inspect the products together with you upon arrival. If any item is found to be damaged, we will take responsibility and help resolve the issue accordingly.",
      },
      {
        question: "Do you provide delivery and installation in Singapore?",
        answer:
          "Yes. We arrange local delivery and installation in Singapore as part of the process.",
      },
    ],
  },
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return faqData;

    return faqData
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.question.toLowerCase().includes(keyword)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [searchTerm]);

  const hasResults = filteredData.length > 0;

  const toggleQuestion = (question: string) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slabel font-bold mb-10 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-subtitle tracking-[0.38em] uppercase font-bold text-zinc-400 mb-5"
          >
            FAQ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-title font-serif font-bold text-zinc-900 mb-6 leading-tight"
          >
            Frequently asked <i className="font-normal italic">questions</i>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ios-secondary-label font-note max-w-2xl leading-relaxed"
          >
            Everything you may want to know about how UStay works, from
            sourcing and pricing to shipping, delivery, and installation.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative max-w-3xl"
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-[#e7dbc8] bg-white pl-14 pr-5 py-4 text-zinc-800 shadow-sm outline-none transition-all focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/15"
          />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        {!hasResults ? (
          <div className="rounded-[2rem] border border-[#eadfce] bg-white p-8 text-zinc-500 shadow-sm">
            No matching questions found.
          </div>
        ) : (
          <div className="space-y-8">
            {filteredData.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
                className="rounded-[2.5rem] border border-[#eadfce] bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="mb-6">
                  <h2 className="font-note md:text-2xl font-bold text-zinc-900">
                    {section.category}
                  </h2>
                </div>

                <div className="divide-y divide-[#f0e7da]">
                  {section.items.map((item) => {
                    const isOpen = openQuestion === item.question;

                    return (
                      <div key={item.question} className="py-2">
                        <button
                          type="button"
                          onClick={() => toggleQuestion(item.question)}
                          className="w-full flex items-center justify-between gap-4 py-5 text-left"
                        >
                          <span className="font-content font-medium text-zinc-900 pr-4">
                            {item.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="shrink-0 text-zinc-500"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-5 pr-8 text-zinc-600 leading-relaxed font-content">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FAQPage;