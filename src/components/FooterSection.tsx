import { Phone, Mail, Zap } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-heading font-bold text-primary text-lg">B</span>
              </div>
              <div>
                <span className="font-heading font-bold text-foreground text-xl">BIS </span>
                <span className="font-heading font-bold text-primary text-xl">Voice</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI-powered voice and chatbot assistant transforming healthcare communication with HIPAA-compliant automation.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all text-xs font-semibold"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "Services", href: "#services" },
                { label: "ROI Calculator", href: "#comparison" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-3">
              {["Voice AI Assistant", "Patient Collections", "Appointment Reminders", "Billing Automation", "Patient Feedback"].map((s) => (
                <p key={s} className="text-sm text-muted-foreground">{s}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+18005926079" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} /> +1 800-592-6079
              </a>
              <a href="mailto:contactus@thebisteam.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} /> contactus@thebisteam.com
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-xs mt-6 hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Join Community <Zap size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BIS Voice by Business Integrity Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
