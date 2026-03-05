import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is BIS Voice?",
    a: "BIS Voice is an AI-powered voice and chatbot assistant that automates patient communication and supports providers with smart engagement tools.",
  },
  {
    q: "How does BIS Voice improve patient engagement?",
    a: "It instantly responds to inquiries, schedules appointments, sends updates, and manages follow-ups—all while reducing admin workload.",
  },
  {
    q: "Is BIS Voice secure and HIPAA-compliant?",
    a: "Yes. BIS Voice is built with enterprise-grade security, including full HIPAA compliance, encryption, audit logs, and secure integrations.",
  },
  {
    q: "Can BIS Voice be integrated with EHR systems?",
    a: "Absolutely. It works with leading EHRs to enable real-time data access and communication.",
  },
  {
    q: "What are the benefits of AI-powered chatbots in healthcare?",
    a: "They automate repetitive tasks, improve response speed, enhance accuracy, and provide 24/7 patient support—reducing costs by up to 60%.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Frequently Asked</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Answer Your <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:glow-border transition-shadow"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
