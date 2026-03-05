import { motion } from "framer-motion";
import { Settings, Globe, DollarSign, Shield, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Settings,
    title: "Customizable to Your Needs",
    desc: "Tailor every interaction to align with your providers, procedures, and internal workflows — from appointment reminders to records management.",
  },
  {
    icon: Globe,
    title: "Omni-Channel Support",
    desc: "Engage your patients through voice, SMS, chat, and email — all in real time, all under one platform.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Tiered Pricing",
    desc: "Choose a package that fits your needs — from 200K to 50M+ annual minutes. No hidden fees, no surprise add-ons.",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant and Secure",
    desc: "Built with healthcare compliance in mind, BIS Voice ensures secure data handling and full audit capabilities.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Grade Support",
    desc: "From onboarding to optimization, our team is with you every step of the way. Get help configuring, reporting, and scaling.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Why BIS Voice</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Why Choose BIS Voice<br />
            <span className="text-gradient">For Your Practice?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border border-border rounded-2xl p-8 card-hover ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <r.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
