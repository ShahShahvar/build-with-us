import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/company", label: "Company" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-black uppercase tracking-tighter">Aurelian</span>
            <span className="hidden text-[10px] font-mono uppercase tracking-widest text-muted-foreground sm:inline">
              Est. 2004
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] font-mono font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-foreground px-5 py-2.5 text-[11px] font-mono font-medium uppercase tracking-widest text-background transition-colors hover:bg-primary"
            >
              Enquire
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="p-2 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-background md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
              <span className="text-2xl font-black uppercase tracking-tighter">Aurelian</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="p-2"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-8 px-6 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-mono font-medium uppercase tracking-widest ${
                  pathname === link.to ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-mono font-medium uppercase tracking-widest text-background"
              onClick={() => setOpen(false)}
            >
              Enquire
            </Link>
          </div>
        </div>
      )}
    </>
  );

}
