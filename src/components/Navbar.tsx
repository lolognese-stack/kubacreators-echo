import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary fill-primary" />
          <span className="font-bold text-foreground text-lg">Kuba Creators</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
