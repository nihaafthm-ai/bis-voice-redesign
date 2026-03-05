import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="font-heading font-bold text-primary text-lg">B</span>
          </div>
          <div>
            <span className="font-heading font-bold text-foreground text-xl">BIS</span>
            <span className="font-heading font-bold text-primary text-xl ml-1">Voice</span>
            <p className="text-[10px] text-muted-foreground -mt-1">AI in Action, Intelligence on Calls</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#why-choose" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why BIS Voice</a>
          <a href="#comparison" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ROI</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="#contact" className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Book a Call
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#features" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#why-choose" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Why BIS Voice</a>
              <a href="#comparison" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>ROI</a>
              <a href="#faq" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>FAQ</a>
              <a href="#contact" className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-center">Book a Call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
