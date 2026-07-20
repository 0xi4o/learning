import { data } from 'react-router'

import { Content } from '~/components/content'
import { profile } from '~/data/portfolio'
import { getContent } from '~/lib/content'

import type { Route } from './+types/now'

export function loader() {
	const entry = getContent(`singletons/now`)
	if (!entry) throw data(null, { status: 404 })
	return { frontmatter: entry.frontmatter }
}

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return [
		{ title: `${loaderData.frontmatter.title} — ${profile.name}` },
		{ name: 'description', content: loaderData.frontmatter.description ?? '' },
	]
}

export default function Now({ loaderData }: Route.ComponentProps) {
	const { frontmatter } = loaderData

	return (
		<article className='typeset flex flex-col gap-12'>
			<header className='border-border border-b pb-12'>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.description}</p>
			</header>
			<Content id='singletons/now' className='mb-8 max-w-[820px]' />;
		</article>
	)
}
