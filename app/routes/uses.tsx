import { data } from 'react-router'

import { Content } from '~/components/content'
import { profile } from '~/data/portfolio'
import { getContent } from '~/lib/content'

import type { Route } from './+types/uses'

export function loader() {
	const entry = getContent(`singletons/uses`)
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

export default function Uses({ loaderData }: Route.ComponentProps) {
	const { frontmatter } = loaderData

	return (
		<article className='typeset'>
			<h1>{frontmatter.title}</h1>
			<Content id='singletons/uses' className='mb-8 max-w-[820px]' />;
		</article>
	)
}
