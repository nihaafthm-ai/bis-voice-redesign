import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">ROI</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Manual FTEs vs <span className="text-gradient">AI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See the measurable impact of switching to AI-powered communication.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-primary/10 border-b border-border">
              <div className="p-4 font-heading font-semibold text-sm text-foreground">Metric</div>
              <div className="p-4 font-heading font-semibold text-sm text-muted-foreground text-center">Manual</div>
              <div className="p-4 font-heading font-semibold text-sm text-primary text-center">AI-Powered</div>
              <div className="p-4 font-heading font-semibold text-sm text-foreground text-center">Impact</div>
            </div>
            {[
              ["Annual FTE Cost", "$600,000", "$103,680", "83% Savings"],
              ["Staff Required", "10 FTEs", "AI Agent", "Zero Burnout"],
              ["Minutes/Year", "1,152,000", "Unlimited", "Always On"],
              ["Availability", "Business Hours", "24/7 × 365", "Full Coverage"],
            ].map(([metric, manual, ai, impact], i) => (
              <div key={metric} className={`grid grid-cols-4 ${i < 3 ? "border-b border-border" : ""}`}>
                <div className="p-4 text-sm font-medium text-foreground">{metric}</div>
                <div className="p-4 text-sm text-muted-foreground text-center">{manual}</div>
                <div className="p-4 text-sm text-primary font-semibold text-center">{ai}</div>
                <div className="p-4 text-sm text-primary/80 text-center font-medium">{impact}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Savings highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card border border-primary/30 rounded-2xl p-8 glow-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: TrendingUp, value: "$496K+", label: "Annual Savings" },
              { icon: Users, value: "10→1", label: "FTE Reduction" },
              { icon: Zap, value: "24/7", label: "Always Active" },
              { icon: Target, value: "30%", label: "More Collections" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon size={24} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
