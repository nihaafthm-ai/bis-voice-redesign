import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Globe, DollarSign, Shield, HeartHandshake, Zap } from "lucide-react";
import robotHand from "@/assets/robot-hand.png";

const tabs = [
  { icon: Settings, label: "Customizable", sublabel: "Support" },
  { icon: Globe, label: "Omni-Channel", sublabel: "Outreach" },
  { icon: Shield, label: "HIPAA", sublabel: "Compliant" },
  { icon: DollarSign, label: "Cost", sublabel: "Saving" },
  { icon: HeartHandshake, label: "Human-Grade", sublabel: "Support" },
  { icon: Zap, label: "Always", sublabel: "Active" },
];

const tabContent = [
  {
    title: "Customizable to Your Needs",
    desc: "Tailor every interaction to align with your providers, procedures, and internal workflows — from appointment reminders to records management. Our AI adapts to your practice's unique communication style and protocols.",
  },
  {
    title: "Omni-Channel Patient Engagement",
    desc: "Engage your patients through voice, SMS, chat, and email — all in real time, all under one platform. Meet patients where they are and provide consistent experiences across every touchpoint.",
  },
  {
    title: "HIPAA-Compliant & Secure",
    desc: "Built with healthcare compliance in mind, BIS Voice ensures secure data handling, full encryption, audit logs, and secure integrations with your existing EHR and practice management systems.",
  },
  {
    title: "Transparent, Tiered Pricing",
    desc: "Choose a package that fits your needs — from 200K to 50M+ annual minutes. No hidden fees, no surprise add-ons. Scale as you grow with predictable costs.",
  },
  {
    title: "Dedicated Human-Grade Support",
    desc: "From onboarding to optimization, our team is with you every step of the way. Get help configuring, reporting, and scaling your AI-powered communication systems.",
  },
  {
    title: "24/7 Always-On Intelligence",
    desc: "Your AI agent never sleeps, never takes breaks, and never calls in sick. Provide round-the-clock patient support while your team focuses on high-value tasks.",
  },
];

const WhyChooseSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label inline-block mb-4">Why BIS Voice</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
                AI <span className="text-gradient-purple">Problem-Solving</span>
                <br />Smart Designs.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                BIS Voice combines cutting-edge AI with healthcare expertise to deliver smart, efficient patient communication solutions that save time, reduce costs, and improve outcomes.
              </p>
            </motion.div>

            {/* Tabs carousel */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm transition-all duration-300 ${
                    activeTab === i
                      ? "bg-primary/10 border-primary/40 text-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/20"
                  }`}
                >
                  <tab.icon size={16} />
                  <div className="text-left">
                    <span className="font-semibold block leading-tight">{tab.label}</span>
                    <span className="text-[10px] opacity-70">{tab.sublabel}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tabContent[activeTab].desc}
              </p>
            </motion.div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm mt-8 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Know More Details
            </a>
          </div>

          {/* Right - Robot hand image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={robotHand}
                alt="AI Robot Hand"
                className="w-full max-w-md mx-auto drop-shadow-[0_20px_60px_rgba(0,200,150,0.15)]"
              />
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
