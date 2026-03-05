import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label inline-block mb-4">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Do You Have Any <span className="text-gradient-purple">Queries?</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a href="tel:+18005926079" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <span className="text-sm font-medium">+1 800-592-6079</span>
                  </div>
                </a>
                <a href="mailto:contactus@thebisteam.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <span className="text-sm font-medium">contactus@thebisteam.com</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <span className="text-sm font-medium">United States</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 glow-border">
              <p className="text-sm text-foreground font-medium mb-2">🛡️ HIPAA Compliant</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                BIS Voice fits effortlessly into your existing RCM software stack — no disruption, just smarter automation.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">What you are interested in</label>
                  <select className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none">
                    <option value="">Select a service</option>
                    <option>Voice AI Assistant</option>
                    <option>Patient Collections</option>
                    <option>Appointment Management</option>
                    <option>Full Platform Demo</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
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
