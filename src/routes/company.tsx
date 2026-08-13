import { createFileRoute, Link } from "@tanstack/react-router";
import companyImage from "@/assets/company.jpg";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Aurelian Construction Group" },
      {
        name: "description",
        content:
          "Learn about Aurelian Construction Group, a multi-disciplinary firm building high-precision architecture since 2004.",
      },
      { property: "og:title", content: "Company — Aurelian Construction Group" },
      {
        property: "og:description",
        content:
          "Learn about Aurelian Construction Group, a multi-disciplinary firm building high-precision architecture since 2004.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompanyPage,
});

const stats = [
  { value: "20+", label: "Years in practice" },
  { value: "120", label: "Completed projects" },
  { value: "34", label: "Craftsmen & staff" },
  { value: "8", label: "Industry awards" },
];

const values = [
  {
    title: "Material Honesty",
    text: "We specify what performs, not what trends. Concrete, timber, stone, and glass are celebrated for their inherent character.",
  },
  {
    title: "Spatial Clarity",
    text: "Every joint and plane is considered in relation to the whole. We build spaces that feel resolved from the first sketch to final handover.",
  },
  {
    title: "Long-Term Performance",
    text: "Our work is measured in decades. Durability, energy efficiency, and low maintenance are embedded from day one.",
  },
];

function CompanyPage() {
  return (
    <main>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 block text-[11px] font-mono uppercase tracking-widest text-primary">
            Company
          </span>
          <h1 className="mb-8 text-balance text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Built on Discipline.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Founded in 2004, Aurelian is a multi-disciplinary construction firm working at the
            intersection of architecture, engineering, and craft. We build for clients who understand
            that quality is measured in millimetres and decades.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="overflow-hidden bg-muted">
              <img
                src={companyImage}
                alt="Aurelian project team reviewing architectural drawings"
                className="aspect-[16/10] w-full object-cover"
                width={1200}
                height={800}
                loading="lazy"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">A practice led by making.</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Our leadership team includes architects, structural engineers, and master builders who
                share a single conviction: the best ideas mean nothing unless they can be built with
                precision. This is why we keep fabrication, detailing, and site execution under one roof.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                From private residences to cultural spaces, we approach each commission as a long-term
                collaboration — between client, designer, and the material itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="border-t border-border pt-6"
               
              >
                <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-32 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 block text-[11px] font-mono uppercase tracking-widest text-primary/80">
              Principles
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight">What we believe</h2>
          </div>
          <div className="grid gap-16 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-reveal"
               
              >
                <h3 className="mb-4 text-2xl font-bold tracking-tight">{value.title}</h3>
                <p className="text-sm leading-relaxed text-background/60">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-black uppercase tracking-tight">Join us or collaborate</h2>
          <Link
            to="/contact"
            className="bg-foreground px-8 py-4 text-[11px] font-mono uppercase tracking-widest text-background transition-colors hover:bg-primary"
          >
            Contact the Studio
          </Link>
        </div>
      </section>
    </main>
  );
}
