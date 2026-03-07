import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

type PolicyKey = null | "privacy" | "terms" | "delivery" | "warranty";

type PolicySection = {
  title: string;
  items: string[];
};

type PolicyModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  sections: PolicySection[];
};

const privacyPolicySections: PolicySection[] = [
  {
    title: "Data We Collect",
    items: [
      "We may collect contact details such as your name, phone number, email address, and messaging handles.",
      "We may collect service-related information such as quotation details, order information, delivery address, and communications with you.",
      "We may collect materials you choose to share with us, including photos, floor plans, measurements, inspiration images, and design references.",
      "When you use our website, we may also collect basic technical information such as IP address, device or browser type, pages viewed, and cookie-related data where applicable.",
    ],
  },
  {
    title: "How We Use Your Data",
    items: [
      "We use your information to respond to enquiries and prepare quotations.",
      "We use your information to coordinate sourcing, specification checks, shipping, delivery, installation, and after-sales support.",
      "We may use your information to process payments, issue invoices, maintain internal records, and manage client accounts.",
      "We may also use limited data to improve our service quality, communication, and website experience.",
    ],
  },
  {
    title: "Sharing & Overseas Transfers",
    items: [
      "We share personal data only where reasonably necessary to provide our services, including with logistics partners, suppliers, installers, payment providers, and technology vendors.",
      "Some suppliers or service providers may be located outside Singapore, including in China or other jurisdictions involved in sourcing and fulfilment.",
      "Where data is transferred overseas, we take reasonable steps to ensure that it is handled with appropriate care and protection.",
      "We may also disclose information where required by law, regulation, court order, or a lawful request by relevant authorities.",
    ],
  },
  {
    title: "Retention of Data",
    items: [
      "We retain personal data only for as long as reasonably necessary for service fulfilment, internal administration, record-keeping, legal, accounting, or dispute-resolution purposes.",
      "When data is no longer needed for these purposes, we will take reasonable steps to delete, anonymise, or securely store it in accordance with applicable requirements.",
    ],
  },
  {
    title: "Your Rights",
    items: [
      "You may request access to personal data we hold about you, or request correction of inaccurate or incomplete information.",
      "You may also withdraw your consent to certain uses of your personal data, subject to legal or contractual restrictions and reasonable notice.",
      "Please note that withdrawing consent may affect our ability to provide some or all of our services to you.",
    ],
  },
  {
    title: "Contact for Privacy Requests",
    items: [
      "If you would like to request access, correction, or withdrawal of consent, please contact UStay using the contact details provided on our website.",
      "We may request reasonable information to verify your identity before processing a privacy-related request.",
    ],
  },
];

const termsOfServiceSections: PolicySection[] = [
  {
    title: "Scope of Service",
    items: [
      "UStay provides furniture and soft-furnishing sourcing, coordination, and related support services for clients in Singapore.",
      "Our service may include consultation, design guidance, sourcing, specification confirmation, production follow-up, shipment coordination, import handling, delivery, installation, and after-sales coordination, depending on the agreed scope of work.",
      "UStay is not a traditional retail furniture store with ready-stock inventory. Most items are custom-made or specially sourced based on each client’s confirmed selections.",
    ],
  },
  {
    title: "Orders & Confirmation",
    items: [
      "All orders are based on the client’s confirmed selections, including dimensions, materials, colours, finishes, configurations, quantities, and any other custom details.",
      "Clients are responsible for carefully reviewing and approving all specifications before confirming an order.",
      "Once an order has been confirmed and the required deposit has been paid, sourcing, procurement, or production may begin immediately.",
    ],
  },
  {
    title: "Payment Terms",
    items: [
      "For orders above SGD 600, a 60% deposit is required upon order confirmation unless otherwise agreed in writing.",
      "The remaining balance is payable when the furniture arrives, prior to final handover, delivery completion, or installation, unless otherwise stated by UStay in writing.",
      "All prices are quoted in SGD unless otherwise stated.",
    ],
  },
  {
    title: "Changes, Cancellations & Delays",
    items: [
      "Once the required deposit has been paid, the order cannot be cancelled.",
      "Changes may not be possible once sourcing or production has started. Any amendment request will be subject to feasibility and may result in additional costs or revised lead times.",
      "Delays arising from production schedules, customisation requirements, shipping arrangements, customs clearance, logistics disruptions, or other circumstances beyond UStay’s reasonable control do not constitute product defects and are not grounds for cancellation, refund, or return.",
    ],
  },
  {
    title: "Liability",
    items: [
      "UStay’s liability for any claim relating to an affected item or service shall be limited, to the fullest extent permitted by law, to the value of the affected item or the relevant service fee actually paid.",
      "UStay shall not be liable for indirect, incidental, consequential, or special losses, including loss of use, delay-related inconvenience, or third-party costs not expressly agreed by UStay.",
    ],
  },
  {
    title: "General",
    items: [
      "These terms apply only to furniture and related services delivered within Singapore unless otherwise agreed in writing.",
      "By engaging UStay’s services through this website, WhatsApp, Telegram, email, or any other communication channel, you acknowledge and agree to these terms.",
      "These terms may be updated from time to time. The most current version published by UStay will apply unless otherwise agreed in writing.",
    ],
  },
];

const deliveryShippingSections: PolicySection[] = [
  {
    title: "Lead Time",
    items: [
      "Lead times vary depending on the products selected, customisation requirements, supplier availability, production schedules, shipping arrangements, and customs clearance.",
      "Estimated timelines are provided in good faith but are not guaranteed unless expressly confirmed in writing.",
      "Most orders typically take 8 to 12 weeks after order confirmation, though this may vary by project.",
    ],
  },
  {
    title: "Shipping & Import Coordination",
    items: [
      "UStay coordinates shipment from China to Singapore so clients do not need to manage cross-border logistics on their own.",
      "We also help coordinate import-related handling, including customs processes and applicable tax procedures where required.",
      "All furniture shipments are fully insured during transit for added peace of mind.",
    ],
  },
  {
    title: "Delivery & Installation",
    items: [
      "UStay arranges local delivery and installation in Singapore as part of the agreed service scope.",
      "Additional charges may apply for restricted access, stair carry, high-floor delivery, no-lift access, waiting time, re-delivery, or other non-standard site conditions.",
      "The client is responsible for ensuring that the site is accessible, ready for delivery, and suitable for installation.",
    ],
  },
  {
    title: "Inspection Upon Delivery",
    items: [
      "When the furniture arrives, we will inspect the items together with the client on-site, where reasonably possible, to confirm their condition upon delivery.",
      "This inspection helps identify any transit or handling issues at the point of handover.",
    ],
  },
  {
    title: "If an Item Arrives Damaged",
    items: [
      "If any item is found to be damaged upon arrival or during on-site inspection, UStay will review the issue and take responsibility for coordinating an appropriate solution.",
      "UStay reserves the right to determine the most appropriate remedy, which may include repair, replacement, replacement parts, touch-up, or another reasonable solution depending on the case.",
    ],
  },
  {
    title: "Exclusions",
    items: [
      "Damage caused after delivery by misuse, improper handling, accidental damage, poor maintenance, third-party moving, third-party installation, modification, or disassembly is not covered under this policy.",
      "Delays caused by production, shipping, customs, port congestion, or logistics processes do not constitute product defects.",
    ],
  },
];

const returnsWarrantySections: PolicySection[] = [
  {
    title: "Returns & Non-Returnable Items",
    items: [
      "As most items are custom-made or specially sourced according to each client’s confirmed selections, all confirmed orders are non-returnable.",
      "This includes selections based on approved dimensions, materials, colours, finishes, configurations, and custom specifications.",
    ],
  },
  {
    title: "Cancellations & Order Changes",
    items: [
      "Once the required deposit has been paid, the order cannot be cancelled.",
      "As sourcing and production begin after confirmation, changes may not be possible once the deposit has been received.",
      "Any amendment request will be subject to whether procurement or production has already started.",
    ],
  },
  {
    title: "Warranty Period",
    items: [
      "All furniture items come with a 1-year warranty from the date of delivery and on-site acceptance.",
      "The warranty period begins on the date the items are delivered and accepted on-site.",
    ],
  },
  {
    title: "What the Warranty Covers",
    items: [
      "The warranty covers manufacturing defects, structural defects, and workmanship defects under normal residential use.",
      "Where a warranty claim is accepted, UStay will determine the most appropriate solution based on the nature of the issue.",
    ],
  },
  {
    title: "What the Warranty Does Not Cover",
    items: [
      "Decoration items, styling accessories, and non-structural décor pieces.",
      "Normal wear and tear.",
      "Scratches, dents, stains, chips, tears, or damage occurring after delivery.",
      "Misuse, accidental damage, improper cleaning, improper handling, improper care, or unsuitable environmental conditions.",
      "Damage caused by third-party moving, third-party installation, modification, repair, or disassembly.",
      "Specifications, dimensions, materials, colours, finishes, or configurations that were approved by the client before production.",
      "Delays caused by production, shipping, customs, or logistics processes.",
    ],
  },
  {
    title: "Natural Variations",
    items: [
      "Many furniture materials are natural, handmade, or semi-handmade. Slight variations in colour, grain, texture, veining, finish, pattern, or fabric appearance are normal and are not regarded as defects.",
      "Screen-based references, photographs, and samples may not perfectly match the final product due to lighting, monitor settings, and material batch differences.",
    ],
  },
  {
    title: "How to Make a Warranty Claim",
    items: [
      "If you believe an item has a valid defect covered under warranty, please contact UStay with your order details, a description of the issue, and clear photos or videos of the affected item.",
      "We will review the case and advise on the next steps.",
      "This policy applies to furniture delivered within Singapore only.",
    ],
  },
];

const PolicyModal = ({
  open,
  onClose,
  title,
  subtitle,
  sections,
}: PolicyModalProps) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-sm flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-[2rem] bg-[#fcfaf7] border border-[#eadfce] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="sticky top-4 ml-auto mr-4 mt-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dccb] bg-white text-zinc-700 shadow-sm hover:bg-zinc-50 transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="px-6 pb-8 pt-2 md:px-10 md:pb-10">
              <div className="mb-10">
                <div className="font-subtitle tracking-[0.35em] uppercase font-bold text-zinc-400 mb-4">
                  Policy
                </div>
                <h2 className="font-title font-serif font-bold text-zinc-900 mb-4">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-zinc-600 leading-relaxed max-w-3xl">
                    {subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-6">
                {sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="rounded-[1.75rem] border border-[#eadfce] bg-white p-6 md:p-8 shadow-sm"
                  >
                    <h3 className="font-note font-bold text-zinc-900 mb-5">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-3 text-zinc-600 leading-relaxed font-content"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.75rem] bg-gradient-to-br from-[#2f2a26] via-[#3b342f] to-[#4a4038] px-6 py-7 text-white">
                <p className="text-white/80 leading-relaxed">
                  If you have any questions before placing an order, please contact
                  UStay and we will be happy to clarify the details.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FooterPolicyBlock = () => {
  const [openPolicy, setOpenPolicy] = useState<PolicyKey>(null);

  return (
    <>
      <ul className="font-subtitle">
        <li>
            <button
            onClick={() => setOpenPolicy("privacy")}
            className="text-zinc-400-300">
            Privacy Policy
            </button>
        </li>

        <li>
            <button
            onClick={() => setOpenPolicy("terms")}
            className="text-zinc-400-300">
            Terms of Service
            </button>
        </li>
        
        <li>
            <button
            onClick={() => setOpenPolicy("delivery")}
            className="text-zinc-400-300">
            Delivery, Shipping & Inspection
            </button>
        </li>
        
        <li>
            <button
            onClick={() => setOpenPolicy("warranty")}
            className="text-zinc-400-300">
            Returns & Warranty
            </button>
        </li>
        
      </ul>

      <PolicyModal
        open={openPolicy === "privacy"}
        onClose={() => setOpenPolicy(null)}
        title="Privacy Policy"
        subtitle="How UStay collects, uses, shares, and protects your personal information when you contact us or use our services."
        sections={privacyPolicySections}
      />

      <PolicyModal
        open={openPolicy === "terms"}
        onClose={() => setOpenPolicy(null)}
        title="Terms of Service"
        subtitle="A summary of how orders, payments, changes, and general service terms are handled when you work with UStay."
        sections={termsOfServiceSections}
      />

      <PolicyModal
        open={openPolicy === "delivery"}
        onClose={() => setOpenPolicy(null)}
        title="Delivery, Shipping & Inspection Policy"
        subtitle="How shipment, delivery, installation, inspection, and transit-related matters are managed for UStay orders."
        sections={deliveryShippingSections}
      />

      <PolicyModal
        open={openPolicy === "warranty"}
        onClose={() => setOpenPolicy(null)}
        title="Returns & Warranty Policy"
        subtitle="Information on non-returnable custom orders, warranty coverage, exclusions, and how claims are handled."
        sections={returnsWarrantySections}
      />
    </>
  );
};

export default FooterPolicyBlock;