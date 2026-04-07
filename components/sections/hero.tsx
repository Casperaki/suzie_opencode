import Link from "next/link";
import { SITE_DESCRIPTION, CTA_TEXT, CTA_HREF } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateOnScroll direction="up" delay={0}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Build something{" "}
            <span className="text-primary">amazing</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={100}>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            {SITE_DESCRIPTION}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={CTA_HREF}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-2.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              {CTA_TEXT}
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-2.5 text-base font-medium transition-colors hover:bg-muted"
            >
              Read the Blog
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
