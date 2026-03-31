import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 text-center px-4">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground">
        Luka Creates ya está disponible
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto text-foreground">
        Generá y escalá{" "}
        <br className="hidden md:block" />
        tu propio <span className="text-gradient-primary">creador con IA.</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Construí creadores de contenido con IA, entrenalos con tu estilo y escalá canales ilimitados. Todo desde una sola plataforma.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90"
          asChild
        >
          <a href="#pricing">Obtené el Blueprint</a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8 py-6 text-base border-border text-foreground hover:bg-secondary"
          asChild
        >
          <a href="#why">
            <Play className="w-4 h-4 mr-2 fill-current" />
            Ver demo
          </a>
        </Button>
      </div>
      <p className="mt-12 text-sm text-muted-foreground">La confianza de creadores que escalan sin esfuerzo</p>
      <div className="flex items-center justify-center gap-8 mt-4 text-muted-foreground/50 font-semibold text-sm tracking-widest uppercase">
        <span>Acme Co</span>
        <span>Pulse</span>
        <span>Orbit</span>
        <span>Helix</span>
      </div>
    </section>
  );
};

export default Hero;
