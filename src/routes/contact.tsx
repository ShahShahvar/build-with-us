import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(20, "Please tell us a bit more about your project"),
});

type FormValues = z.infer<typeof formSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurelian Construction Group" },
      {
        name: "description",
        content:
          "Start a project with Aurelian Construction Group. Book a site visit or send an enquiry.",
      },
      { property: "og:title", content: "Contact — Aurelian Construction Group" },
      {
        property: "og:description",
        content:
          "Start a project with Aurelian Construction Group. Book a site visit or send an enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    toast.success("Proposal received", {
      description: `Thanks, ${data.name}. We'll respond to ${data.email} within two business days.`,
    });
    form.reset();
  }

  return (
    <main>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 block text-[11px] font-mono uppercase tracking-widest text-primary">
            Enquiries
          </span>
          <h1 className="mb-8 text-balance text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Start a Project.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your site, timeline, and ambitions. We respond to every enquiry within two
            business days.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-24 lg:grid-cols-2">
            <div className="">
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
                <div>
                  <span className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Hours
                  </span>
                  <p className="text-lg leading-relaxed">
                    Monday — Friday
                    <br />
                    08:00 — 18:00 GMT
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormLabel className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="NAME"
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 font-mono text-[12px] focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormLabel className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="EMAIL"
                            type="email"
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 font-mono text-[12px] focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          Project Type
                        </FormLabel>
                        <FormControl>
                          <select
                            className="w-full border-b border-border bg-transparent py-4 font-mono text-[12px] outline-none focus:border-primary"
                            {...field}
                          >
                            <option value="" disabled>
                              SELECT A PROJECT TYPE
                            </option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="renovation">Renovation / Retrofit</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="TELL US ABOUT THE SITE"
                            rows={4}
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 font-mono text-[12px] focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="col-span-2 pt-6">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="h-auto w-full rounded-none bg-foreground py-5 font-mono text-[12px] uppercase tracking-widest text-background hover:bg-primary"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Proposal"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
