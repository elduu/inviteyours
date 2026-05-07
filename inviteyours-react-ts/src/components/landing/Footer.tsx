import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display text-xl">
              Invite<span className="text-gradient-gold font-semibold">Yours</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The premier digital invitation platform for unforgettable celebrations.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>www.inviteyours.com</li>
            <li>+251 921251486</li>
            <li>Telegram: @inviteyours</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Platform</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-primary transition">Features</a></li>
            <li><a href="#how" className="hover:text-primary transition">How It Works</a></li>
            <li><a href="#showcase" className="hover:text-primary transition">Showcase</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/40 max-w-7xl mx-auto px-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-3">
        <div>© {new Date().getFullYear()} InviteYours — Digital Invitation Platform. All rights reserved.</div>
        <div className="font-script text-base text-gradient-gold">Crafted with elegance.</div>
      </div>
    </footer>
  );
}
