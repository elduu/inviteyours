import wedding from "@/assets/sample-wedding.jpg";
import birthday from "@/assets/sample-birthday.jpg";
import corporate from "@/assets/sample-corporate.jpg";
import religious from "@/assets/sample-religious.jpg";
import { Eye } from "lucide-react";

const samples = [
  { img: wedding, title: "Royal Wedding", category: "Wedding" },
  { img: birthday, title: "Golden Thirty", category: "Birthday" },
  { img: corporate, title: "Annual Gala", category: "Corporate" },
  { img: religious, title: "Sacred Celebration", category: "Religious" },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Showcase</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-xl">
              Crafted designs for <span className="text-gradient-gold italic">every occasion</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse of what's possible. Every template is fully customizable, optimized for mobile,
            and ready to share in seconds.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samples.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl overflow-hidden gold-border bg-card hover:shadow-gold transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">{s.category}</div>
                  <div className="font-display text-xl mt-1">{s.title}</div>
                </div>
                <button className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <Eye className="h-4 w-4 text-primary-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
