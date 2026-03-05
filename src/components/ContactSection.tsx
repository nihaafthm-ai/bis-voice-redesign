import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-6">
              Ready to <span className="text-gradient">Redefine</span> Patient Communication?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Discover how BIS Voice can transform your revenue cycle and engagement workflows. Our experts are here to help.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:+18005926079" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="font-medium">+1 800-592-6079</span>
              </a>
              <a href="mailto:contactus@thebisteam.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="font-medium">contactus@thebisteam.com</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              BIS Voice fits effortlessly into your existing RCM software stack — no disruption, just smarter automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Request a Demo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="text"
                  placeholder="Organization"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <textarea
                placeholder="Your message (optional)"
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Request Free Consultation <ArrowRight size={18} />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                HIPAA Compliant · No Obligation · Response within 24hrs
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
