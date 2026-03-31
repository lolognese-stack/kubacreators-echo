import { Check, TrendingUp, Users, Zap, Eye } from "lucide-react";
import creatorSample from "@/assets/creator-sample.jpg";
import lifestyleSample from "@/assets/lifestyle-sample.jpg";
import fanContentSample from "@/assets/fan-content-sample.jpg";

const stats = [
  { label: "Vistas en TikTok en 30 días", value: "+1.2M", icon: Eye },
  { label: "Nuevos seguidores", value: "+18K", icon: Users },
  { label: "Crecimiento de suscriptores", value: "+2.7x", icon: TrendingUp },
  { label: "Aumento de engagement", value: "+340%", icon: Zap },
];

const features = [
  "Creadores IA hiperrealistas",
  "Voz y movimiento natural",
  "Formatos optimizados para cada plataforma",
  "Contenido de estilo de vida auténtico",
  "UGC por el que las marcas realmente pagan",
];

const WhySection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-primary font-medium mb-3 text-center">Por qué Luka Creates</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Tipos de contenido ilimitados. Un solo creador IA.
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Desde UGC y reseñas de productos hasta vlogs y contenido exclusivo para fans. Tu creador IA lo hace todo.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Contenido UGC a escala", img: creatorSample },
            { title: "Lifestyle y vlogs en piloto automático", img: lifestyleSample },
            { title: "Contenido exclusivo para fans", img: fanContentSample },
          ].map((card) => (
            <div key={card.title} className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-2 text-foreground">Aumento de ingresos proyectado</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Estimá el ingreso potencial generado por sistemas de contenido automatizado.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <span className="text-muted-foreground">Contenido de formato corto</span>
              <p className="text-primary font-bold text-lg">+$3,200/mes</p>
            </div>
            <div>
              <span className="text-muted-foreground">Conversión de suscriptores</span>
              <p className="text-primary font-bold text-lg">+41%</p>
            </div>
            <div>
              <span className="text-muted-foreground">Producción de contenido</span>
              <p className="text-primary font-bold text-lg">3.6x /semana</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2 text-foreground">Contenido IA que no parece IA</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Nuestra IA produce videos estilo creador que se sienten reales, atractivos y optimizados para los algoritmos sociales.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2 text-foreground">Resultados de crecimiento</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Te ayudamos a escalar tu contenido y audiencia de influencer IA más rápido.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
