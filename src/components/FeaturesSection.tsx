import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, BarChart3, FileText, Headphones } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant for patient-tailored communication",
    desc: "Custom conversations tailored to your workflows. Instant responses to patient inquiries with natural language understanding.",
  },
  {
    icon: Phone,
    title: "Voice & SMS integration for multi-channel outreach",
    desc: "Engage patients across voice calls, SMS, and chat — all managed from a single AI-powered platform.",
  },
  {
    icon: Mail,
    title: "Automated email notifications for appointments & updates",
    desc: "Send appointment confirmations, reminders, and follow-ups automatically. Never miss a patient touchpoint.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics and reporting dashboard",
    desc: "Track call volumes, patient engagement rates, collection performance, and ROI with comprehensive dashboards.",
  },
  {
    icon: FileText,
    title: "Full chat documentation and audit trails",
    desc: "Every interaction is logged with full transcripts for compliance, training, and quality assurance purposes.",
  },
  {
    icon: Headphones,
    title: "Call recordings for quality assurance monitoring",
    desc: "Every call recorded and indexed for easy review, ensuring consistent quality across all patient interactions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label inline-block mb-4">Features</span>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold leading-tight">
            Accessible <span className="text-gradient-purple">AI Features</span>
            <br />With Great Power
          </h2>
        </motion.div>

        {/* Horizontal scrolling feature cards like AI Globe */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card border border-border rounded-2xl p-8 card-hover relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3 leading-snug">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
