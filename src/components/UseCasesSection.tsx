import { motion } from "framer-motion";
import { CalendarCheck, PhoneMissed, UserCheck, CreditCard, Star, HelpCircle, Smartphone, Download } from "lucide-react";
import chatMockup from "@/assets/chat-mockup.png";

const useCases = [
  { icon: CalendarCheck, title: "Appointment Reminders", desc: "Automate confirmations and reduce no-shows" },
  { icon: PhoneMissed, title: "No-Show Follow-Up", desc: "Reach missed patients and reschedule automatically" },
  { icon: UserCheck, title: "Patient Recall", desc: "Proactive wellness visits and screening reminders" },
  { icon: CreditCard, title: "Billing & Collections", desc: "Automated payment reminders and collection calls" },
  { icon: Star, title: "Patient Feedback", desc: "Post-visit surveys and satisfaction tracking" },
  { icon: HelpCircle, title: "General FAQs", desc: "Answer common questions and basic triage 24/7" },
];

const UseCasesSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile App Section - Like AI Globe's app section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={chatMockup}
                alt="BIS Voice Mobile App"
                className="w-64 md:w-72 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label inline-block mb-4">Our Future</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Voice AI in <span className="text-gradient-purple">Patient Communication</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From simple reminders to complex scheduling and triage operations, BIS Voice handles it all. Our AI-powered platform integrates seamlessly with your existing systems to deliver superior patient engagement.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 hover:border-primary/30 transition-colors group">
                <Smartphone size={20} className="text-primary" />
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground">Schedule a</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Free Demo</p>
                </div>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 hover:border-primary/30 transition-colors group">
                <Download size={20} className="text-primary" />
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground">Download</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Case Study</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label inline-block mb-4">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Explore BIS Voice <span className="text-gradient-purple">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <uc.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground">{uc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature pills - like AI Globe's chatbot explorer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {["Cost-Effective", "24/7 Availability", "Flexibility", "Reliable"].map((item) => (
              <span key={item} className="bg-primary/10 border border-primary/20 text-primary text-sm px-5 py-2 rounded-full font-medium">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
