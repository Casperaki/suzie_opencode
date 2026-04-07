import Link from "next/link";
import { CTA_TEXT, CTA_HREF } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function CTA() {
  return (
    <section className="bg-primary px-6 py-20">
      <AnimateOnScroll direction="none">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of teams already building with us.
          </p>
          <Link
            href={CTA_HREF}
            className="mt-8 inline-flex h-9 items-center justify-center rounded-lg bg-secondary px-2.5 text-base font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            {CTA_TEXT}
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
