import { getSitemapUrls } from '~/lib/site'

/**
 * XML sitemap of every public URL (static routes + all content). Resource route: no component — the
 * loader returns the XML directly.
 */
export function loader() {
	const urls = getSitemapUrls()
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		({ loc, lastmod }) => `	<url>
		<loc>${loc}</loc>${lastmod ? `\n\t\t<lastmod>${lastmod}</lastmod>` : ''}
	</url>`,
	)
	.join('\n')}
</urlset>
`

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	})
}
