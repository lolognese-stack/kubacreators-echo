import { Check, X, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Blueprint",
    price: "$29",
    period: "One-time payment",
    cta: "Get Blueprint",
    href: "https://whop.com/kuba-creators/kuba-creators-master-blueprint/",
    highlighted: false,
    features: [
      { name: "Full Blueprint Course", included: true },
      { name: "AI Creator Setup Guide", included: true },
      { name: "Monetization Playbook", included: true, note: "Basic" },
      { name: "Private Community", included: false },
      { name: "Weekly Live Calls", included: false },
      { name: "Prompts & Models", included: false },
      { name: "1 on 1 Strategy Calls", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Community Access",
    price: "$79",
    period: "/mo",
    cta: "Join Community",
    href: "https://whop.com/kuba-creators/kuba-creators-community/",
    highlighted: true,
    features: [
      { name: "Full Blueprint Course", included: true },
      { name: "AI Creator Setup Guide", included: true },
      { name: "Monetization Playbook", included: true, note: "Advanced" },
      { name: "Private Community", included: true },
      { name: "Weekly Live Calls", included: true },
      { name: "Prompts & Models", included: true },
      { name: "1 on 1 Strategy Calls", included: false },
      { name: "Priority Support", included: true, note: "Community" },
    ],
  },
  {
    name: "1 on 1 Scaling",
    price: "$549",
    period: "/mo",
    cta: "Apply Now",
    href: "https://cal.com/kuba-creates-ai/1-on-1-ai-creator-scaling",
    highlighted: false,
    features: [
      { name: "Full Blueprint Course", included: true },
      { name: "AI Creator Setup Guide", included: true },
      { name: "Monetization Playbook", included: true, note: "Custom" },
      { name: "Private Community", included: true },
      { name: "Weekly Live Calls", included: true },
      { name: "Prompts & Models", included: true },
      { name: "1 on 1 Strategy Calls", included: true, note: "2/Month" },
      { name: "Priority Support", included: true, note: "Direct" },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-primary font-medium mb-3 text-center">Investment</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Choose your path to AI creators
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          One-time or monthly plans. Cancel anytime. Scale infinitely.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-primary/10 border-2 border-primary glow-primary"
                  : "glass-card"
              }`}
            >
              <h3 className="font-semibold text-foreground mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                    )}
                    <span className={f.included ? "text-secondary-foreground" : "text-muted-foreground/60"}>
                      {f.name}
                    </span>
                    {f.note && (
                      <span className="text-xs text-primary ml-auto">{f.note}</span>
                    )}
                  </li>
                ))}
              </ul>

              <Button
                className={`rounded-full w-full py-6 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                asChild
              >
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lifetime access</span>
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Secure checkout</span>
          <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Instant delivery</span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
