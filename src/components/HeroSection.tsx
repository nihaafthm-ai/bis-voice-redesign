import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";
import aiRobot from "@/assets/ai-robot.png";
import chatMockup from "@/assets/chat-mockup.png";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: ["AI-Powered", "Voice", "Assistant"],
    colored: [false, true, true],
    desc: "BIS Voice leverages AI technology to simplify interactions between providers and patients. Engage patients with ease, speed, and accuracy — 24/7.",
    bullets: ["Automation up to 60%", "Turn calls into revenue", "Supercharge patient engagement"],
  },
  {
    title: ["Smart", "Healthcare", "Communication"],
    colored: [false, true, true],
    desc: "From appointment reminders to billing collections, automate your entire patient communication workflow with HIPAA-compliant AI.",
    bullets: ["HIPAA Compliant", "24/7 Patient Support", "Reduce no-shows by 40%"],
  },
  {
    title: ["Revenue", "Cycle", "Intelligence"],
    colored: [true, true, false],
    desc: "Replace 10 FTEs with a single AI agent. Save $496K+ annually while delivering superior patient experiences around the clock.",
    bullets: ["83% Cost Reduction", "Zero Agent Burnout", "Unlimited Call Minutes"],
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Dot patterns */}
      <div className="absolute top-20 right-10 w-40 h-40 dot-pattern opacity-30 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-32 h-32 dot-pattern opacity-20 hidden lg:block" />

      {/* Decorative circles */}
      <motion.div
        className="absolute top-32 right-[20%] w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center hidden lg:flex"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield className="text-accent" size={20} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Slider */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold leading-[1.05] mb-6">
                  {slide.title.map((word, i) => (
                    <span key={i}>
                      {slide.colored[i] ? (
                        <span className="colored-underline text-gradient-purple">{word}</span>
                      ) : (
                        <span className="text-foreground">{word}</span>
                      )}
                      {i < slide.title.length - 1 && " "}
                    </span>
                  ))}
                </h1>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                  {slide.desc}
                </p>

                <ul className="space-y-3 mb-10">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                      <ArrowUpRight size={16} className="text-primary flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Slide dots */}
            <div className="flex gap-3 mt-12">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeSlide ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative hidden lg:block">
            {/* Chat mockup */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={chatMockup}
                alt="BIS Voice Chat Interface"
                className="w-72 mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Robot image */}
            <motion.div
              className="absolute -right-10 -bottom-10 z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={aiRobot}
                alt="AI Robot Assistant"
                className="w-64 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            {/* Decorative dot pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 dot-pattern opacity-40" />

            {/* Floating badge */}
            <motion.div
              className="absolute top-10 right-10 bg-card/90 backdrop-blur-sm border border-border rounded-2xl px-4 py-3 z-30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">!</span>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">HIPAA Compliant</p>
                  <p className="text-xs font-semibold text-foreground">Secure & Encrypted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
