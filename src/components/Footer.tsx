import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary fill-primary" />
          <span className="font-semibold text-foreground">Kuba Creators</span>
        </div>
        <p>© 2025 Kuba Creators. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
