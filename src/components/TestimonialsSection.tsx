import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Medical Director",
    quote: "BIS Voice works just like your best agent — but it never sleeps, never calls out, and never asks for a raise. It has revolutionized how we handle patient follow-ups and appointment scheduling. Our no-show rate dropped by 40% in the first month.",
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Practice Manager",
    quote: "Your next great hire doesn't need onboarding. It's AI-powered, fully trained, and always on script. We replaced 8 phone agents and our patient satisfaction scores actually went up. The ROI was immediate and undeniable.",
    avatar: "JR",
  },
  {
    name: "Lisa Chen",
    role: "Healthcare Administrator",
    quote: "Think of it as cloning your top rep and giving them a coffee IV. Available 24/7, zero burnout. BIS Voice handles our entire billing communication workflow now, and collections are up 30%. I wish we had switched sooner.",
    avatar: "LC",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label inline-block mb-4">Testimonial</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            What They <span className="text-gradient-purple">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel - AI Globe style */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-12 relative"
            >
              <Quote size={48} className="text-primary/15 absolute top-8 left-8" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-primary">{testimonials[active].avatar}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mt-4 text-sm">{testimonials[active].name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonials[active].role}</p>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <p className="text-foreground/90 leading-relaxed text-base md:text-lg italic">
                    "{testimonials[active].quote}"
                  </p>

                  {/* Star rating */}
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
