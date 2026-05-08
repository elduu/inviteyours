import { QrCode, Users, Palette, MapPin, Send, Image as ImageIcon } from "lucide-react";

const features = [
  { icon: QrCode, title: "QR Code Generation", desc: "Generate a unique QR for every event, table, or guest. Instant access, zero friction." },
  { icon: Users, title: "RSVP Management", desc: "Track responses in real time with elegant dashboards and guest insights." },
  { icon: Palette, title: "Event Customization", desc: "Tailor invitations for weddings, birthdays, corporate galas, and religious celebrations." },
  { icon: MapPin, title: "Map Integration", desc: "Built-in Google Maps so guests find your venue effortlessly — every time." },
  { icon: Send, title: "Telegram Bot", desc: "Auto notifications, confirmations, and reminders directly through Telegram." },
  { icon: ImageIcon, title: "Media Sharing", desc: "Create photos, videos, and live galleries that bring every moment together." },
];

export function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Features</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Everything you need to host <span className="text-gradient-gold italic">extraordinary</span> events
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-2xl glass hover:-translate-y-1 transition-all duration-500 hover:shadow-gold"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-[0.04] transition" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
