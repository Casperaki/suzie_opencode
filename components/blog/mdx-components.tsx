import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-8 scroll-m-20 text-3xl font-bold tracking-tight" {...props} />
  ),
  h2: (props) => (
    <h2
      className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => (
    <p className="mt-4 leading-7 text-muted-foreground" {...props} />
  ),
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6" {...props} />,
  li: (props) => <li className="text-muted-foreground" {...props} />,
  a: (props) => (
    <a className="font-medium text-primary underline underline-offset-4" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="mt-4 rounded-lg" alt={props.alt ?? ""} {...props} />
  ),
};
