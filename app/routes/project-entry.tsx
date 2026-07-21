import { format } from 'date-fns'
import { ArrowLeftIcon, ConstructionIcon, GlobeIcon, InfoIcon, RocketIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { getCollection, getContent } from '~/lib/content'

import type { Route } from './+types/project-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug } = params
	const entry = getContent(`collections/projects/${slug}/index`)
	if (!entry) throw data(null, { status: 404 })
	const updates = getCollection(`collections/projects/${slug}/updates`)
	return { frontmatter: entry.frontmatter, slug, updates }
}

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return [
		{ title: loaderData.frontmatter.title },
		{ name: 'description', content: loaderData.frontmatter.description ?? '' },
	]
}

export default function ProjectEntry({ loaderData }: Route.ComponentProps) {
	const { frontmatter, slug, updates } = loaderData

	return (
		<>
			<Link
				to='/projects'
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				Projects
			</Link>
			<article className='typeset mt-8'>
				<header className='border-border mb-10 border-b pb-10'>
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<p className='mb-2 font-mono text-[13px] tracking-[0.4px] uppercase'>
							{frontmatter.tags.join(' \u00B7 ')}
						</p>
					)}
					<h1 className='mt-0'>{frontmatter.title}</h1>
					<Content id={`collections/projects/${slug}/index`} />
					{
						// @ts-ignore
						frontmatter.progress ||
						// @ts-ignore
						frontmatter.site ||
						// @ts-ignore
						frontmatter.createdAt ||
						// @ts-ignore
						frontmatter.launchedAt ? (
							<div className='mt-4.5 flex items-center gap-5'>
								{
									// @ts-ignore
									frontmatter.site && (
										<a
											// @ts-ignore
											href={frontmatter.site}
											rel='noopener noreferrer'
											target='_blank'
										>
											<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
												<GlobeIcon className='size-4' />
												{
													// @ts-ignore
													frontmatter.site.replace('https://', '')
												}
											</span>
										</a>
									)
								}
								{
									// @ts-ignore
									frontmatter.createdAt && (
										<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
											<ConstructionIcon className='size-4' />
											{format(
												// @ts-ignore
												new Date(frontmatter.createdAt),
												'MMMM dd, yyyy',
											)}
										</span>
									)
								}
								{
									// @ts-ignore
									frontmatter.launchedAt && (
										<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
											<RocketIcon className='size-4' />
											{format(
												// @ts-ignore
												new Date(frontmatter.launchedAt),
												'MMMM dd, yyyy',
											)}
										</span>
									)
								}
								{
									// @ts-ignore
									frontmatter.progress && (
										<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
											<InfoIcon className='size-4' />
											{
												// @ts-ignore
												frontmatter.progress
											}
										</span>
									)
								}
							</div>
						) : null
					}
				</header>

				<section className='typeset'>
					<h2>Updates</h2>
					{updates && updates.length > 0 ? (
						<ul className='flex list-none flex-col gap-3.5 p-0'>
							{updates.map((update, index) => (
								<li className='p-0' key={update.id}>
									<span className='text-base leading-[1.5]'>
										{`${index + 1}. ${update.frontmatter.title}`}
									</span>
									<time className='text-sm'>
										{format(
											// @ts-ignore
											new Date(lesson.frontmatter.createdAt),
											'MMMM dd, yyyy',
										)}
									</time>
								</li>
							))}
						</ul>
					) : (
						<Empty className='border-border col-span-3 border'>
							<EmptyHeader>
								<EmptyMedia variant='icon'>
									<ConstructionIcon className='size-4' />
								</EmptyMedia>
								<EmptyTitle>Nothing here yet</EmptyTitle>
								<EmptyDescription>
									When I publish an update, it'll show up here.
								</EmptyDescription>
							</EmptyHeader>
						</Empty>
					)}
				</section>
			</article>
		</>
	)
}
