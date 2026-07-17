import { data, Link } from 'react-router'

import { MdxProvider } from '~/components/mdx-provider'
import { getContent } from '~/lib/content'

import type { Route } from './+types/article-entry'

export function loader({ params }: Route.LoaderArgs) {
	// Prerendering requests the trailing-slash form (`/learning/golang/`), so the splat param can
	// arrive as `golang/` — normalize before resolving.
	// const slug = (params["*"] ?? "").replace(/\/+$/, "");
	const { slug } = params
	const entry = getContent(`collections/articles/${slug}`)
	// The compiled MDX component is not serializable, so the loader returns only the frontmatter
	// (JSON). The component re-resolves the entry (cheap object lookup) to render it.
	if (!entry) throw data(null, { status: 404 })
	return { slug, frontmatter: entry.frontmatter }
}

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return [
		{ title: loaderData.frontmatter.title },
		{ name: 'description', content: loaderData.frontmatter.description ?? '' },
	]
}

export default function LearningEntry({ loaderData }: Route.ComponentProps) {
	const entry = getContent(`collections/articles/${loaderData.slug}`)
	if (!entry) return null
	const { Component, frontmatter } = entry

	return (
		<main className='mx-auto max-w-[820px] px-8 pt-16 pb-20 min-[880px]:px-16 min-[880px]:pt-[88px] min-[880px]:pb-[120px]'>
			<header className='border-border mb-12 border-b pb-12'>
				<Link
					to='/articles'
					className='text-primary font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
				>
					← Articles
				</Link>
				<h1 className='text-foreground mt-[22px] text-[40px] leading-[1.1] font-medium tracking-[0] min-[880px]:text-[56px]'>
					{frontmatter.title}
				</h1>
				{frontmatter.description && (
					<p className='text-muted-foreground mt-[18px] text-[17px] leading-[1.4] tracking-[0.2px] min-[880px]:text-[19px]'>
						{frontmatter.description}
					</p>
				)}
			</header>

			<article className='typeset'>
				<MdxProvider>
					<Component />
				</MdxProvider>
			</article>
		</main>
	)
}
