import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 text-center px-4">
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
      </div>
    </section>
  );
};

export default Hero;
