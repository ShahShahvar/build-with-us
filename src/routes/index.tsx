import { createFileRoute, Link } from "@tanstack/react-router";
import heroDetail from "@/assets/hero-detail.jpg";
import projectSylvan from "@/assets/project-sylvan.jpg";
import projectVoid from "@/assets/project-void.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelian Construction Group — Building for the Next Age" },
      {
        name: "description",
        content:
          "Aurelian is a multi-disciplinary construction firm specializing in high-precision architectural builds and large-scale residential infrastructure.",
      },
      {
        property: "og:title",
        content: "Aurelian Construction Group — Building for the Next Age",
      },
      {
        property: "og:description",
        content:
          "Aurelian is a multi-disciplinary construction firm specializing in high-precision architectural builds and large-scale residential infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const projects = [
  {
    id: "sylvan",
    title: "Sylvan Residence",
    category: "Private Housing / 450sqm",
    year: "2023",
    image: projectSylvan,
    imageAlt: "Minimalist brutalist concrete residence in a pine forest",
  },
  {
    id: "void",
    title: "The Void Gallery",
    category: "Commercial / Adaptive Reuse",
    year: "2024",
    image: projectVoid,
    imageAlt: "Modern gallery interior with soaring concrete ceilings and wood accents",
  },
];

const services = [
  {
    number: "01",
    title: "Construction",
    heading: "Precision General Contracting",
    description:
      "Managing complex builds from excavation to envelope. We prioritize thermal performance and structural integrity through advanced BIM integration.",
  },
  {
    number: "02",
    title: "Millwork",
    heading: "Bespoke Timber Fabrication",
    description:
      "Our in-house joinery workshop bridges the gap between masonry and finish, crafting warm wood interfaces that humanize concrete spaces.",
  },
  {
    number: "03",
    title: "Restoration",
    heading: "Heritage & Retrofit",
    description:
      "Sensitively modernizing historical frameworks. We preserve the narrative of old structures while introducing modern structural stability.",
  },
];

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="animate-reveal lg:col-span-8">
              <h1 className="mb-12 text-balance text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl lg:text-9xl">
                BUILDING FOR
                <br />
                THE NEXT AGE.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Aurelian is a multi-disciplinary construction firm specializing in high-precision
                architectural builds and large-scale residential infrastructure.
              </p>
            </div>
            <div className="animate-reveal animation-delay-200 lg:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={heroDetail}
                  alt="Detail of smooth poured concrete meeting a warm oak beam"
                  className="h-full w-full object-cover grayscale"
                  width={800}
                  height={1000}
                  loading="eager"
                />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono uppercase tracking-widest text-background/80 mix-blend-difference">
                  Detail 01 / Materiality
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-lg">
              <span className="mb-4 block text-[11px] font-mono uppercase tracking-widest text-primary">
                Selected Works
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tight">Monoliths of Light</h2>
            </div>
            <Link
              to="/projects"
              className="hidden text-[11px] font-mono uppercase tracking-widest text-foreground hover:text-primary sm:block"
            >
              <span className="border-b border-foreground pb-1">View Archive</span>
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group animate-reveal ${index === 1 ? "md:mt-24" : ""}`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <Link to="/projects" className="block overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                </Link>
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-[12px] font-mono uppercase text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-[12px] font-mono">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-foreground py-32 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="mb-6 block text-[11px] font-mono uppercase tracking-widest text-primary/80">
                  {service.number} / {service.title}
                </span>
                <h3 className="mb-6 text-3xl font-bold tracking-tight">{service.heading}</h3>
                <p className="text-sm leading-relaxed text-background/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-24 lg:grid-cols-2">
            <div>
              <h2 className="mb-12 text-5xl font-black uppercase tracking-tighter">Start a Project.</h2>
              <div className="space-y-8">
                <div>
                  <span className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Enquiries
                  </span>
                  <p className="text-2xl font-bold">projects@aurelianbuilds.co</p>
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Studio
                  </span>
                  <p className="text-lg leading-relaxed">
                    84 Concrete Wynd, South District
                    <br />
                    London, SE1 9PL
                  </p>
                </div>
              </div>
            </div>

            <form className="grid grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full border-b border-border bg-transparent py-4 font-mono text-[12px] outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full border-b border-border bg-transparent py-4 font-mono text-[12px] outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="TELL US ABOUT THE SITE"
                  rows={4}
                  className="w-full resize-none border-b border-border bg-transparent py-4 font-mono text-[12px] outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="col-span-2 pt-6">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center bg-foreground py-5 font-mono text-[12px] uppercase tracking-widest text-background transition-colors hover:bg-primary"
                >
                  Send Proposal
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
