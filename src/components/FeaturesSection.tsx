import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, BarChart3, FileText, Headphones, Shield, Users } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "AI Chat Assistant", desc: "Custom conversations tailored to your workflows" },
  { icon: Phone, title: "Voice & SMS Integration", desc: "Multi-channel engagement with patients" },
  { icon: Mail, title: "Automated Email Notifications", desc: "For appointments, reminders & updates" },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time insights, performance metrics" },
  { icon: FileText, title: "Full Chat Documentation", desc: "Transparent transcripts of all interactions" },
  { icon: Headphones, title: "Call Recordings", desc: "Every call logged for quality assurance" },
  { icon: Shield, title: "HIPAA-Compliant Infrastructure", desc: "Secure hosting and data privacy" },
  { icon: Users, title: "Client Success Support", desc: "Personalized onboarding and optimization" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Features</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Accessible AI Features<br />
            <span className="text-gradient">With Great Power</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Free up staff and ensure patients are supported 24/7 with our comprehensive suite of AI-powered tools.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-card border border-border rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
