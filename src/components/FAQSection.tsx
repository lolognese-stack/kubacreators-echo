import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué herramientas necesito?",
    answer:
      "Solo necesitás una computadora con acceso a internet. Te mostramos todas las herramientas gratuitas y de pago que usamos, y cómo configurarlas paso a paso. No se necesita equipamiento caro.",
  },
  {
    question: "¿Cuánto tiempo tarda en ver resultados?",
    answer:
      "Depende de cuánto tiempo le dediques, pero muchos de nuestros estudiantes lanzan su primer creador IA en menos de una semana y empiezan a ver tracción en las primeras 2-4 semanas.",
  },
  {
    question: "¿Necesito equipamiento costoso?",
    answer:
      "No. Todo se puede hacer desde una computadora normal. Las herramientas que usamos son accesibles y muchas tienen planes gratuitos para empezar.",
  },
  {
    question: "¿Esto va a seguir funcionando en el futuro?",
    answer:
      "Sí. El blueprint está enfocado en principios de escalabilidad a largo plazo, no en trucos temporales. La IA sigue creciendo y este sistema está diseñado para adaptarse.",
  },
  {
    question: "¿Necesito experiencia con IA o creación de contenido?",
    answer:
      "Para nada. El blueprint está diseñado para principiantes absolutos. Te guiamos desde cero — desde crear tu persona IA hasta monetizarla.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-primary font-medium mb-3 text-center">Preguntas frecuentes</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          ¿Tenés dudas? Acá las respuestas.
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-2xl px-6 border-border/50"
            >
              <AccordionTrigger className="text-foreground text-left font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
