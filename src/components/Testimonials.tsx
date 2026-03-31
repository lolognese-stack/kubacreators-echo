import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    quote: "Building AI creators seemed impossible until I found this system. Now I have 3 AI versions of myself creating content 24/7.",
    img: testimonial1,
  },
  {
    quote: "The blueprint made everything click. I went from zero to launching my first AI creator in under a week.",
    img: testimonial2,
  },
  {
    quote: "Best investment I've made. My AI creators generate more engaging content than I ever could alone.",
    img: testimonial3,
  },
  {
    quote: "The community support is incredible. Everyone is scaling their AI influencer and sharing what works.",
    img: testimonial4,
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-primary font-medium mb-3 text-center">Customer Stories</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Creators scale faster with Kuba Creators.
        </h2>
        <p className="text-muted-foreground text-center mb-6">
          Real outcomes: more content, higher engagement, less effort.
        </p>
        <div className="text-center mb-16">
          <Button variant="outline" className="rounded-full border-border text-foreground" asChild>
            <a href="https://whop.com/kuba-creators/kuba-creators-community/" target="_blank" rel="noopener noreferrer">
              Join the community
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 flex gap-5">
              <img
                src={t.img}
                alt="Customer"
                loading="lazy"
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-foreground text-sm leading-relaxed mb-3">"{t.quote}"</p>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
