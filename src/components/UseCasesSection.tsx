import { motion } from "framer-motion";
import { CalendarCheck, PhoneMissed, UserCheck, CreditCard, Star, HelpCircle } from "lucide-react";

const useCases = [
  { icon: CalendarCheck, title: "Appointment Reminders", desc: "Automate confirmations and reduce administrative burden" },
  { icon: PhoneMissed, title: "No-Show Follow-Up", desc: "Reach missed patients and reschedule automatically" },
  { icon: UserCheck, title: "Patient Recall", desc: "Proactive wellness visits and screening reminders" },
  { icon: CreditCard, title: "Billing Reminders", desc: "Automated payment reminders and collection" },
  { icon: Star, title: "Patient Feedback", desc: "Post-visit surveys and satisfaction tracking" },
  { icon: HelpCircle, title: "General FAQs", desc: "Answer common questions and basic triage" },
];

const UseCasesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Use Cases</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Voice AI in <span className="text-gradient">Patient Communication</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From simple reminders to complex scheduling and triage operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <uc.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
