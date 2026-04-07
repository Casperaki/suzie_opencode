import Link from "next/link";
import { CTA_TEXT, CTA_HREF } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand/10" />
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-brand/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full from-cyan-500/20 to-blue-500/20 blur-3xl animate-float-delayed" />

      <AnimateOnScroll direction="none">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to Build Your{" "}
            <span className="gradient-text">AI Team?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join forward-thinking organizations already transforming their operations with Team Suzie.
          </p>
          <Link
            href={CTA_HREF}
            className="group mt-8 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-brand px-8 text-base font-semibold text-brand-foreground shadow-lg transition-all hover:shadow-xl hover:shadow-brand/25"
          >
            <span className="relative z-10">{CTA_TEXT}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
              {CTA_TEXT}
            </span>
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
