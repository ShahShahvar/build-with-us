import { createFileRoute, Link } from "@tanstack/react-router";
import projectSylvan from "@/assets/project-sylvan.jpg";
import projectVoid from "@/assets/project-void.jpg";
import companyImage from "@/assets/company.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aurelian Construction Group" },
      {
        name: "description",
        content:
          "Explore selected architectural builds and large-scale residential projects by Aurelian Construction Group.",
      },
      { property: "og:title", content: "Projects — Aurelian Construction Group" },
      {
        property: "og:description",
        content:
          "Explore selected architectural builds and large-scale residential projects by Aurelian Construction Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: "sylvan",
    title: "Sylvan Residence",
    location: "Oslo, Norway",
    category: "Private Housing / 450sqm",
    year: "2023",
    image: projectSylvan,
    imageAlt: "Minimalist brutalist concrete residence in a pine forest",
  },
  {
    id: "void",
    title: "The Void Gallery",
    location: "London, United Kingdom",
    category: "Commercial / Adaptive Reuse",
    year: "2024",
    image: projectVoid,
    imageAlt: "Modern gallery interior with soaring concrete ceilings and wood accents",
  },
  {
    id: "riverdale",
    title: "Riverdale Co-Housing",
    location: "Copenhagen, Denmark",
    category: "Multi-Unit Residential / 2,800sqm",
    year: "2022",
    image: companyImage,
    imageAlt: "Construction team reviewing architectural plans",
  },
];

function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 block text-[11px] font-mono uppercase tracking-widest text-primary">
            Archive
          </span>
          <h1 className="mb-8 text-balance text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Monoliths of Light
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A selection of architectural builds that demonstrate our commitment to material honesty,
            spatial clarity, and long-term performance.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`grid gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
               
              >
                <div className={`overflow-hidden bg-muted ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                </div>
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="mb-4 text-[11px] font-mono uppercase tracking-widest text-primary">
                    Case Study / {project.year}
                  </span>
                  <h2 className="mb-2 text-3xl font-bold tracking-tight">{project.title}</h2>
                  <p className="mb-6 text-[12px] font-mono uppercase text-muted-foreground">
                    {project.category} · {project.location}
                  </p>
                  <p className="max-w-md leading-relaxed text-muted-foreground">
                    Each Aurelian project begins with a deep reading of site and program. The result is
                    architecture that responds to its context while pushing structural craft forward.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="text-3xl font-black uppercase tracking-tight">Ready to start your project?</h2>
            <Link
              to="/contact"
              className="bg-foreground px-8 py-4 text-[11px] font-mono uppercase tracking-widest text-background transition-colors hover:bg-primary"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
