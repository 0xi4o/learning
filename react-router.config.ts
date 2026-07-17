import { existsSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

import type { Config } from '@react-router/dev/config'

const CONTENT_ROOT = 'app/content'

/**
 * Content directories whose files each become their own prerendered page, mapped to their URL
 * prefix. Add a collection here and give it a matching splat route (see `app/routes.ts`) to turn
 * every file in that directory into a static page. Singletons/embedded snippets are NOT listed here
 * — they render inside other routes via `<Content>` and need no URL of their own.
 */
const PAGE_COLLECTIONS: Record<string, string> = {
	learning: '/learning',
}

/**
 * Recursively list every `.md`/`.mdx` file under a content directory as its URL. Runs in Node at
 * build time — it cannot use `import.meta.glob` (that only exists in the Vite app graph), so it
 * reads the filesystem directly. Runtime code in the Worker never touches the filesystem; that path
 * uses `import.meta.glob` instead (see `app/lib/content.ts`).
 */
function collectionUrls(collection: string, urlPrefix: string): string[] {
	const base = join(CONTENT_ROOT, collection)
	if (!existsSync(base)) return []
	const urls: string[] = []
	const walk = (dir: string) => {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			const full = join(dir, entry.name)
			if (entry.isDirectory()) {
				walk(full)
			} else if (/\.mdx?$/.test(entry.name)) {
				const slug = relative(base, full)
					.replace(/\.mdx?$/, '')
					.split(sep)
					.join('/')
				urls.push(`${urlPrefix}/${slug}`)
			}
		}
	}
	walk(base)
	return urls
}

export default {
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	// Prerender static + content routes to HTML at build time. The Cloudflare plugin serves these as
	// static assets and only invokes the Worker for genuinely dynamic routes. Content is read at
	// build time, never at runtime.
	async prerender() {
		return [
			'/',
			'/learning',
			'/portfolio',
			'/design-system',
			...Object.entries(PAGE_COLLECTIONS).flatMap(([collection, prefix]) =>
				collectionUrls(collection, prefix),
			),
		]
	},
} satisfies Config
