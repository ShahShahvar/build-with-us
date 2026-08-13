import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-xl font-black uppercase tracking-tighter">Aurelian</span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Est. 2004
          </span>
        </Link>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <Link to="/company" className="hover:text-foreground">
            Privacy
          </Link>
        </div>

        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Aurelian Construction Group
        </p>
      </div>
    </footer>
  );
}
