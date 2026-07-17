import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'

import type { Route } from './+types/articles'

export function loader() {
	const entry = getContent('collections/articles/index')
	const articles = getCollection('collections/articles')
	const publishedArticles = articles.filter(
		// @ts-ignore
		(article) => article.frontmatter.status === 'published',
	)
	const publishedArticlesSorted = publishedArticles.sort(
		(a, b) =>
			// @ts-ignore
			new Date(b.frontmatter.publishedAt) -
			// @ts-ignore
			new Date(a.frontmatter.publishedAt),
	)
	if (!entry) throw data(null, { status: 404 })
	return { articles: publishedArticlesSorted, frontmatter: entry.frontmatter }
}

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return [
		{ title: `${loaderData.frontmatter.title} — ${profile.name}` },
		{ name: 'description', content: loaderData.frontmatter.description ?? '' },
	]
}

export default function Articles({ loaderData }: Route.ComponentProps) {
	const { articles, frontmatter } = loaderData

	return (
		<article className='typeset'>
			<h1>{frontmatter.title}</h1>
			<Content
				id='collections/articles/index'
				className='border-border mb-12 max-w-[820px] border-b pb-12'
			/>
			<ul className='flex list-none flex-col gap-3.5 p-0'>
				{articles.map((article) => (
					<li className='p-0' key={article.id}>
						<Link
							className='flex items-baseline justify-between gap-4'
							key={article.id}
							to={`/articles/${article.slug}`}
						>
							<span className='text-base leading-[1.5]'>
								{
									// @ts-ignore
									article.frontmatter.title
								}
							</span>
							<time className='text-sm'>
								{
									// @ts-ignore
									article.frontmatter.publishedAt
								}
							</time>
						</Link>
					</li>
				))}
			</ul>
		</article>
	)
}
