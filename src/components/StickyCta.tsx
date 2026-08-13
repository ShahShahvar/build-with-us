import { Link } from "@tanstack/react-router";

export function StickyCta() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Link
        to="/contact"
        className="group flex items-center gap-3 bg-primary px-6 py-4 text-white shadow-2xl transition-transform hover:-translate-y-1"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">Book Site Visit</span>
      </Link>
    </div>
  );
}
