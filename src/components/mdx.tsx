import { compileMDX } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Server-side MDX renderer. Shiki highlights at build time (zero client JS for
 * code, §4.3). Headings get slug ids + a hoverable anchor. Prose styling is the
 * instrumentation system: mono for code/meta, sans for prose, 68ch measure.
 */

type AnchorProps = ComponentPropsWithoutRef<"a">;
type HeadingProps = ComponentPropsWithoutRef<"h2">;

const components = {
  h2: (props: HeadingProps) => (
    <h2
      className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-fg"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="mt-8 scroll-mt-24 text-lg font-semibold tracking-tight text-fg"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-4 leading-relaxed text-fg-dim" {...props} />
  ),
  a: ({ href = "#", ...props }: AnchorProps) => (
    <a
      href={href}
      className="text-accent underline decoration-from-font underline-offset-2 hover:no-underline"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-fg-dim" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-fg-dim" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-2 border-accent pl-4 italic text-fg-dim"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto rounded-sm border border-border p-4 text-sm [&>code]:bg-transparent"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded-sm bg-bg-raised px-1 py-0.5 font-mono text-[0.85em]"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-fg" {...props} />
  ),
};

export async function Mdx({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeShiki,
            {
              themes: { light: "github-light", dark: "github-dark" },
              defaultColor: false,
            },
          ],
        ],
      },
    },
  });

  return <>{content}</>;
}
