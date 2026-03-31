import { Check, Shield, Clock, Zap, Crown, Gift, Brain, Target, Film, TrendingUp, DollarSign, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { name: "Creá una persona IA única y consistente", icon: Brain },
  { name: "Posicionamiento y branding que atrae seguidores", icon: Target },
  { name: "Sistema rápido de creación de contenido", icon: Film },
  { name: "Estrategias de crecimiento y escalado", icon: TrendingUp },
  { name: "Métodos de monetización comprobados", icon: DollarSign },
  { name: "Sistema repetible para escalar en múltiples nichos", icon: Repeat },
];

const perfectFor = [
  "Creadores sin mostrar la cara",
  "Principiantes en IA",
  "Personas que quieren monetizar contenido",
  "Cualquiera que quiera construir un negocio online",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-primary font-medium mb-3 text-center">Inversión única</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          El Blueprint del Creador IA
        </h2>
        <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
          Construí tu propio influencer IA — De la idea a los ingresos.
        </p>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-sm">
          Esto no es otro tutorial de IA más. Es un sistema completo para construir, hacer crecer y monetizar tu propio creador IA desde cero.
        </p>

        <div className="rounded-2xl bg-primary/10 border-2 border-primary glow-primary p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="w-7 h-7 text-primary fill-primary" />
            <h3 className="text-2xl font-bold text-foreground">Master Blueprint</h3>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl md:text-6xl font-bold text-foreground">$9.99</span>
              <span className="text-muted-foreground text-sm">USD — Pago único</span>
            </div>
            <p className="text-primary text-sm font-medium mt-2">Acceso de por vida • Sin cargos recurrentes</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Lo que vas a aprender:</h4>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f.name} className="flex items-center gap-3 text-sm">
                  <f.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground">{f.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 glass-card rounded-xl p-6">
            <h4 className="text-lg font-semibold text-foreground mb-1">¿Qué hace a esto diferente?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              No se trata de trucos de IA al azar. Vas a aprender cómo:
            </p>
            <ul className="space-y-2">
              {["Construir un activo digital", "Hacer crecer una audiencia", "Convertir la atención en dinero"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-xs mt-3">Enfocado en escalabilidad a largo plazo.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-3">Perfecto para:</h4>
            <div className="flex flex-wrap gap-2">
              {perfectFor.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-medium border border-primary/20">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10 glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Bonus: Pack de Prompts Secretos</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Obtené mis prompts exactos para crear, escalar y monetizar influencers IA.
            </p>
            <ul className="space-y-1.5">
              {["Contenido más rápido", "Personaje consistente", "Crecimiento optimizado"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-primary text-xs font-medium mt-3">Tu atajo hacia los resultados.</p>
          </div>

          <Button
            className="rounded-full w-full py-7 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            asChild
          >
            <a href="https://whop.com/kuba-creators/kuba-creators-master-blueprint/" target="_blank" rel="noopener noreferrer">
              Obtené el Blueprint ahora — $9.99
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 mt-10 text-sm text-muted-foreground flex-wrap">
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Acceso de por vida</span>
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Pago seguro</span>
          <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Entrega instantánea</span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
