const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-heading font-bold text-primary text-sm">B</span>
            </div>
            <span className="font-heading font-bold text-foreground">BIS <span className="text-primary">Voice</span></span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#why-choose" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#comparison" className="hover:text-foreground transition-colors">ROI</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BIS Voice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
