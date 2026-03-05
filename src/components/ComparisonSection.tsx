import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Zap, Target } from "lucide-react";
import statsBg from "@/assets/stats-bg.jpg";

const CountUp = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const stats = [
  { icon: TrendingUp, value: 496, prefix: "$", suffix: "K+", label: "Annual Savings" },
  { icon: Users, value: 83, suffix: "%", label: "Cost Reduction" },
  { icon: Zap, value: 24, suffix: "/7", label: "Always Active" },
  { icon: Target, value: 30, suffix: "%", label: "More Collections" },
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="relative">
      {/* Stats section with background image - like AI Globe's accomplishments */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={statsBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label inline-block mb-4">ROI Impact</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Accomplishments <span className="text-gradient-purple">& Results</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See the measurable impact of switching to AI-powered communication.
            </p>
          </motion.div>

          {/* Counter stats - Like AI Globe */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <s.icon size={28} className="text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  <CountUp end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-primary/10 border-b border-border">
                <div className="p-5 font-heading font-semibold text-sm text-foreground">Metric</div>
                <div className="p-5 font-heading font-semibold text-sm text-muted-foreground text-center">Manual</div>
                <div className="p-5 font-heading font-semibold text-sm text-primary text-center">AI-Powered</div>
                <div className="p-5 font-heading font-semibold text-sm text-foreground text-center">Impact</div>
              </div>
              {[
                ["Annual FTE Cost", "$600,000", "$103,680", "83% Savings"],
                ["Staff Required", "10 FTEs", "AI Agent", "Zero Burnout"],
                ["Minutes/Year", "1,152,000", "Unlimited", "Always On"],
                ["Availability", "Business Hours", "24/7 × 365", "Full Coverage"],
              ].map(([metric, manual, ai, impact], i) => (
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid grid-cols-4 ${i < 3 ? "border-b border-border" : ""} hover:bg-primary/5 transition-colors`}
                >
                  <div className="p-5 text-sm font-medium text-foreground">{metric}</div>
                  <div className="p-5 text-sm text-muted-foreground text-center">{manual}</div>
                  <div className="p-5 text-sm text-primary font-semibold text-center">{ai}</div>
                  <div className="p-5 text-sm text-accent font-medium text-center">{impact}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all">
              Know More Details
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
