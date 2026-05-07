import { useState } from "react";
import heroPhone from "@/assets/hero-phone.png";
import { ArrowRight, PlayCircle, X } from "lucide-react";

export function Hero() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden radial-gold">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] gold-border text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Digital Invitation Platform
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Create <span className="font-script text-gradient-gold text-6xl md:text-7xl lg:text-8xl">Beautiful</span>
              <br />
              Digital Invitations
              <br />
              in Minutes
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Craft unforgettable events with QR-based invitations, real-time RSVP tracking, and intelligent event management.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.02] transition-transform"
              >
                Create Invitation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* VIEW DEMO BUTTON */}
              <button
                onClick={() => setOpenVideo(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass hover:border-primary/50 transition"
              >
                <PlayCircle className="h-5 w-5 text-primary" />
                View Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center animate-fade-up [animation-delay:200ms]">
            <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <img
              src={heroPhone}
              alt="Luxury digital invitation"
              className="relative w-[340px] md:w-[440px] animate-float"
            />
          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 z-10 text-white bg-black/60 p-2 rounded-full"
            >
              <X size={18} />
            </button>

            {/* Cloudinary video */}
            <video
              src="https://res.cloudinary.com/dkfawrhqz/video/upload/v1778070180/Lazi_Vid_yasdtf.mp4"
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}