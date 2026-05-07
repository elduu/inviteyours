import { Sparkles } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Showcase", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Sparkles className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
          <span className="font-display text-xl tracking-wide">
            Invite<span className="text-gradient-gold font-semibold">Yours</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
