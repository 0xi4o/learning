import { escapeXml, getFeedItems, SITE } from '~/lib/site'

/**
 * RSS 2.0 feed of published Articles + Series. Resource route: no component — the loader returns
 * the XML directly. A summary feed (title/link/description/pubDate per item); full post bodies are
 * compiled React components, not HTML strings, so they're intentionally omitted.
 */
export function loader() {
	const items = getFeedItems()
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title>${escapeXml(SITE.title)}</title>
	<link>${SITE.url}</link>
	<description>${escapeXml(SITE.description)}</description>
	<language>en</language>
	<atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items
	.map(
		(item) => `	<item>
		<title>${escapeXml(item.title)}</title>
		<link>${item.url}</link>
		<guid>${item.url}</guid>${item.date ? `\n\t\t<pubDate>${new Date(item.date).toUTCString()}</pubDate>` : ''}${
			item.description
				? `\n\t\t<description>${escapeXml(item.description)}</description>`
				: ''
		}
	</item>`,
	)
	.join('\n')}
</channel>
</rss>
`

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
	})
}
