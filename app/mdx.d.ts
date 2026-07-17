import type { Frontmatter } from '~/lib/content'

// `@types/mdx` already declares the default component export for `*.md`/`*.mdx`.
// Augment those ambient modules with the `frontmatter` named export that
// `remark-mdx-frontmatter` produces at build time (declarations merge).
declare module '*.mdx' {
	export const frontmatter: Frontmatter
}

declare module '*.md' {
	export const frontmatter: Frontmatter
}
