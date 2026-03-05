import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  "BIS Voice works just like your best agent — but it never sleeps, never calls out, and never asks for a raise.",
  "Your next great hire doesn't need onboarding. It's AI-powered, fully trained, and always on script.",
  "Think of it as cloning your top rep and giving them a coffee IV. Available 24/7, zero burnout.",
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Your 24/7 Team Member</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            BIS Voice: <span className="text-gradient">Never Off Duty</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover relative"
            >
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed text-sm italic">"{q}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
