import type { ComponentType } from 'react'

/**
 * Frontmatter contract shared by every content file. `remark-mdx-frontmatter` exposes a file's YAML
 * frontmatter as its `frontmatter` named export at build time; this type is the JSON shape loaders
 * return for listings and `meta()`. Singletons may omit frontmatter entirely.
 */
export type Frontmatter = {
	title: string
	description?: string
	tags?: string[]
	/** ISO date string, e.g. `2026-07-17`. Used for sorting collections. */
	date?: string
}

/** A compiled content module: the rendered component + its frontmatter. */
export type ContentModule = {
	default: ComponentType
	frontmatter: Frontmatter
}

/** Listing item — frontmatter only, safe to return from a loader as JSON. */
export type CollectionEntry = {
	/** Full id (path under `app/content`, no extension), e.g. `learning/golang`. */
	id: string
	/** Id relative to the collection dir, e.g. `golang` (or `2026/hello` when nested). */
	slug: string
	frontmatter: Frontmatter
}

/** A resolved entry including the compiled component (NOT loader-serializable). */
export type ContentEntry = {
	id: string
	frontmatter: Frontmatter
	Component: ComponentType
}

/*
 * Build-time globs. Vite inlines these at build time, so at runtime the Worker only holds JS
 * modules — it never reads the filesystem. `frontmatters` pulls only the frontmatter export (cheap,
 * for listings); `modules` holds the full compiled components (for rendering a single entry). The
 * pattern is intentionally deep (`**`) so any folder structure the CMS produces is picked up.
 */
const frontmatters = import.meta.glob<Frontmatter>('/app/content/**/*.{md,mdx}', {
	eager: true,
	import: 'frontmatter',
})
const modules = import.meta.glob<ContentModule>('/app/content/**/*.{md,mdx}', {
	eager: true,
})

/** `/app/content/pages/about.md` → `pages/about` (path under content root, no extension). */
function idFromPath(path: string): string {
	return path.replace(/^\/app\/content\//, '').replace(/\.mdx?$/, '')
}

/**
 * Resolve a single content file by id (its path under `app/content`, without extension) to its
 * frontmatter and compiled component. Prefers `.mdx` over `.md` when both exist. Returns `null`
 * when the id does not exist. Cheap object lookup, safe to call in both loaders and components.
 *
 * Use for singletons (`getContent('pages/about')`) and inside collection routes
 * (`getContent(`learning/${slug}`)`).
 */
export function getContent(id: string): ContentEntry | null {
	const mod = modules[`/app/content/${id}.mdx`] ?? modules[`/app/content/${id}.md`]
	if (!mod) return null
	return { id, frontmatter: mod.frontmatter, Component: mod.default }
}

/**
 * All entries under a collection directory (e.g. `getCollection('learning')`), newest first.
 * Matches nested files too. Returns frontmatter only, so the result is safe to return from a
 * loader.
 */
export function getCollection(dir: string): CollectionEntry[] {
	const prefix = `${dir}/`
	const entries: CollectionEntry[] = []
	for (const [path, frontmatter] of Object.entries(frontmatters)) {
		const id = idFromPath(path)
		if (id.startsWith(prefix) && frontmatter) {
			entries.push({ id, slug: id.slice(prefix.length), frontmatter })
		}
	}
	return entries.sort((a, b) => {
		const byDate = (b.frontmatter.date ?? '').localeCompare(a.frontmatter.date ?? '')
		if (byDate !== 0) return byDate
		return (a.frontmatter.title ?? '').localeCompare(b.frontmatter.title ?? '')
	})
}
