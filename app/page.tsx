import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Your app starts here</CardTitle>
          <CardDescription>
            This template includes Next.js, TypeScript, Tailwind CSS, and
            shadcn/ui — all pre-configured and ready to build on.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Edit <code className="font-mono text-foreground">app/page.tsx</code>{" "}
            to get started. shadcn/ui components are available in{" "}
            <code className="font-mono text-foreground">components/ui/</code>.
          </p>
          <a
            href="https://ui.shadcn.com/docs/components"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-2.5 h-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Browse Components
          </a>
        </CardContent>
      </Card>
    </main>
  );
}
