import { data } from 'react-router'

import { Content } from '~/components/content'
import { profile } from '~/data/portfolio'
import { getContent } from '~/lib/content'
import { pageMeta } from '~/lib/site'

import type { Route } from './+types/now'

export function loader() {
	const entry = getContent(`singletons/now`)
	if (!entry) throw data(null, { status: 404 })
	return { frontmatter: entry.frontmatter }
}

export function meta({ loaderData, location }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return pageMeta({
		title: `${loaderData.frontmatter.title} — ${profile.name}`,
		description: loaderData.frontmatter.description,
		pathname: location.pathname,
		ogTitle: loaderData.frontmatter.title,
	})
}

export default function Now({ loaderData }: Route.ComponentProps) {
	const { frontmatter } = loaderData

	return (
		<article className='typeset flex flex-col gap-10'>
			<header className='border-border border-b pb-10'>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.description}</p>
			</header>
			<Content id='singletons/now' className='mb-8 max-w-[820px]' />;
		</article>
	)
}
