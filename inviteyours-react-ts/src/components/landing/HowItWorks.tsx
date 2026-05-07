const steps = [
  { n: "01", title: "Create your event", desc: "Pick a category — wedding, birthday, corporate, or custom — and set the essentials." },
  { n: "02", title: "Customize your invitation", desc: "Choose a premium template, your colors, fonts, music, and add your story." },
  { n: "03", title: "Share & manage", desc: "Send via QR or link. Watch RSVPs roll in and manage everything in one dashboard." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">How it works</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Three steps to a <span className="text-gradient-gold italic">flawless</span> event
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto h-24 w-24 rounded-full glass flex items-center justify-center shadow-elegant">
                <span className="font-display text-3xl text-gradient-gold">{s.n}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-sm mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
