import { Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-primary fill-primary" />
          <span className="font-semibold text-foreground">Luka Creates</span>
        </div>
        <p>© 2025 Luka Creates. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
