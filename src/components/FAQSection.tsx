import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aiRobot from "@/assets/ai-robot.png";

const faqs = [
  {
    q: "How Secure Is My Information When Using BIS Voice?",
    a: "BIS Voice is built with enterprise-grade security, including full HIPAA compliance, AES-256 encryption, comprehensive audit logs, and secure integrations with your existing healthcare systems. All data is encrypted at rest and in transit.",
  },
  {
    q: "Can BIS Voice Improve Patient Engagement Over Time?",
    a: "Yes! BIS Voice uses machine learning to continuously improve its responses and engagement patterns. It learns from every interaction to provide more accurate, personalized patient communication that drives better outcomes.",
  },
  {
    q: "Can I Customize BIS Voice For My Practice?",
    a: "Absolutely. BIS Voice is fully customizable — from conversation scripts and workflows to scheduling rules and billing protocols. Our team works with you to configure the AI to match your practice's unique needs and voice.",
  },
  {
    q: "What is the ROI of using BIS Voice?",
    a: "Practices typically see 83% cost reduction compared to manual FTEs, with annual savings of $496K+. No-show rates drop by 40%, and collections improve by 30% — all while providing 24/7 patient support.",
  },
  {
    q: "How quickly can BIS Voice be deployed?",
    a: "BIS Voice can be deployed in as little as 2 weeks. Our dedicated onboarding team handles the entire setup, including system integration, script customization, and staff training.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label inline-block mb-4">Frequently Asked</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Answer Your <span className="text-gradient-purple">Needs</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Everything you need to know about BIS Voice and AI-powered healthcare communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:glow-border transition-all duration-300"
                >
                  <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline py-5 text-left">
                    <span className="text-primary mr-2">{i + 1}.</span>{faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Side card - like AI Globe's "Still Have Question?" */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-card border border-border rounded-2xl p-8 text-center sticky top-28">
              <img
                src={aiRobot}
                alt="AI Assistant"
                className="w-32 mx-auto mb-6 drop-shadow-lg"
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                Still Have Questions?
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Kindly converse with our team. We're here to help you find the right solution.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Get In Touch <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
