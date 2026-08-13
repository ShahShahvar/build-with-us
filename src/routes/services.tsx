import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurelian Construction Group" },
      {
        name: "description",
        content:
          "Precision general contracting, bespoke timber fabrication, and heritage restoration services by Aurelian Construction Group.",
      },
      { property: "og:title", content: "Services — Aurelian Construction Group" },
      {
        property: "og:description",
        content:
          "Precision general contracting, bespoke timber fabrication, and heritage restoration services by Aurelian Construction Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    number: "01",
    title: "Construction",
    heading: "Precision General Contracting",
    description:
      "Managing complex builds from excavation to envelope. We prioritize thermal performance and structural integrity through advanced BIM integration.",
    details: [
      "Pre-construction planning and estimating",
      "Design-build and construction management",
      "Concrete, steel, and timber framing",
      "Envelope and building systems commissioning",
    ],
  },
  {
    number: "02",
    title: "Millwork",
    heading: "Bespoke Timber Fabrication",
    description:
      "Our in-house joinery workshop bridges the gap between masonry and finish, crafting warm wood interfaces that humanize concrete spaces.",
    details: [
      "Custom cabinetry and built-in furniture",
      "Architectural millwork and wall cladding",
      "Solid-surface and hardwood countertops",
      "Restoration of historic woodwork",
    ],
  },
  {
    number: "03",
    title: "Restoration",
    heading: "Heritage & Retrofit",
    description:
      "Sensitively modernizing historical frameworks. We preserve the narrative of old structures while introducing modern structural stability.",
    details: [
      "Structural assessment and stabilization",
      "Facade restoration and stone repair",
      "Seismic retrofit and energy upgrades",
      "Heritage compliance documentation",
    ],
  },
];

function ServicesPage() {
  return (
    <main>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 block text-[11px] font-mono uppercase tracking-widest text-primary">
            Disciplines
          </span>
          <h1 className="mb-8 text-balance text-5xl font-black uppercase tracking-tighter md:text-7xl">
            The Scope of Our Craft
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Aurelian delivers end-to-end building services for clients who value precision, material
            honesty, and quiet confidence in every detail.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-t border-border pt-8"
               
              >
                <span className="mb-6 block text-[11px] font-mono uppercase tracking-widest text-primary">
                  {service.number} / {service.title}
                </span>
                <h2 className="mb-4 text-2xl font-bold tracking-tight">{service.heading}</h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-32 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter">Our Process</h2>
              <p className="max-w-md leading-relaxed text-background/60">
                Every project follows a disciplined sequence: discover, design, build, and refine. We
                integrate early with architects and engineers to remove risk before it reaches the site.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { step: "01", title: "Discover", text: "Site analysis, feasibility, and program review" },
                { step: "02", title: "Design", text: "BIM coordination, costing, and value engineering" },
                { step: "03", title: "Build", text: "Managed construction with transparent reporting" },
                { step: "04", title: "Refine", text: "Handover, commissioning, and aftercare" },
              ].map((item) => (
                <div key={item.step}>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-primary/80">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-background/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Discuss your project</h2>
          <Link
            to="/contact"
            className="inline-flex bg-foreground px-8 py-4 text-[11px] font-mono uppercase tracking-widest text-background transition-colors hover:bg-primary"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
