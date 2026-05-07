import { Send, Phone, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl glass shadow-elegant p-8 md:p-14 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Let's build your <span className="text-gradient-gold italic font-script">perfect</span> invitation
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Reach out and our team will help craft an unforgettable event experience tailored to you.
            </p>
            <div className="mt-10 space-y-4">
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/40 transition">
                <Send className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Telegram</div>
                  <div className="font-medium">@inviteyours</div>
                </div>
              </a>
              <a href="tel:+1000" className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/40 transition">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="font-medium">+251 921251486</div>
                </div>
              </a>
              <div className="flex gap-3 pt-2">
                {[Instagram, Twitter, Facebook, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:text-primary-foreground transition">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input type="text" placeholder="Your full name"
                className="mt-2 w-full px-5 py-4 rounded-xl bg-input/50 gold-border focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/60" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input type="email" placeholder="you@example.com"
                className="mt-2 w-full px-5 py-4 rounded-xl bg-input/50 gold-border focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/60" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={5} placeholder="Tell us about your event..."
                className="mt-2 w-full px-5 py-4 rounded-xl bg-input/50 gold-border focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/60 resize-none" />
            </div>
            <button type="submit"
              className="w-full py-4 rounded-xl bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition">
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
