import { format } from 'date-fns'
import { BookOpenIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'

import type { Route } from './+types/projects'

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return [
		{ title: `${loaderData.frontmatter.title} — ${profile.name}` },
		{ name: 'description', content: loaderData.frontmatter.description ?? '' },
	]
}

export function loader() {
	const entry = getContent('collections/projects/index')
	if (!entry) throw data(null, { status: 404 })
	const projects = getCollection('collections/projects/*/index')
	const currentProjects = projects.filter((project) => project.frontmatter.progress === 'current')
	const pastProjects = projects.filter((project) => project.frontmatter.progress === 'completed')
	return {
		frontmatter: entry.frontmatter,
		currentProjects,
		pastProjects,
	}
}

export default function Learning({ loaderData }: Route.ComponentProps) {
	const { frontmatter, currentProjects, pastProjects } = loaderData
	return (
		<article className='typeset flex flex-col gap-10'>
			<header>
				<h1>{frontmatter.title}</h1>
				<Content id='collections/projects/index' className='border-border border-b pb-10' />
			</header>

			<section className='typeset'>
				<h2>Current Projects</h2>

				<ul className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px] p-0'>
					{currentProjects && currentProjects.length > 0 ? (
						<>
							{currentProjects.map(({ slug, frontmatter }) => (
								<li key={slug} className='flex p-0'>
									<Link to={`/projects/${slug}`} className='flex flex-1'>
										<Card className='border-border flex-1 rounded-lg border ring-0 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
											<CardHeader>
												<CardTitle className='text-[15px] font-medium'>
													{frontmatter.title}
												</CardTitle>
												{
													// @ts-ignore
													frontmatter.createdAt && (
														<CardDescription className='text-[12px]'>
															{format(
																// @ts-ignore
																new Date(frontmatter.createdAt),
																'MMMM dd, yyyy',
															)}
														</CardDescription>
													)
												}
											</CardHeader>
											<CardContent className='flex flex-1 flex-col gap-4'>
												<Content
													id={`collections/projects/${slug}/index`}
													className='text-muted-foreground text-[12px] leading-[1.4]'
												/>
												<div className='mt-auto flex flex-wrap gap-1.5'>
													{frontmatter.tags?.map((tag) => (
														<Badge key={tag} variant='secondary'>
															{tag}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</Link>
								</li>
							))}
						</>
					) : (
						<Empty className='border-border col-span-3 border'>
							<EmptyHeader>
								<EmptyMedia variant='icon'>
									<BookOpenIcon className='size-4' />
								</EmptyMedia>
								<EmptyTitle>Nothing here yet</EmptyTitle>
								<EmptyDescription>
									Once I publish notes on the things I'm building, they'll show up
									here.
								</EmptyDescription>
							</EmptyHeader>
						</Empty>
					)}
				</ul>
			</section>

			{pastProjects && pastProjects.length > 0 && (
				<section className='typeset'>
					<h2>Past Projects</h2>

					<ul className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px] p-0'>
						{pastProjects.map(({ slug, frontmatter }) => (
							<li key={slug} className='flex p-0'>
								<Link to={`/projects/${slug}`} className='flex flex-1'>
									<Card className='border-border flex-1 rounded-lg border ring-0 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
										<CardHeader>
											<CardTitle className='text-[15px] font-medium'>
												{frontmatter.title}
											</CardTitle>
											{
												// @ts-ignore
												frontmatter.createdAt && (
													<CardDescription className='text-[12px]'>
														{format(
															// @ts-ignore
															new Date(frontmatter.createdAt),
															'MMMM dd, yyyy',
														)}
													</CardDescription>
												)
											}
										</CardHeader>
										<CardContent className='flex flex-1 flex-col gap-4'>
											<Content
												id={`collections/projects/${slug}/index`}
												className='text-muted-foreground text-[12px] leading-[1.4]'
											/>
											<div className='mt-auto flex flex-wrap gap-1.5'>
												{frontmatter.tags?.map((tag) => (
													<Badge key={tag} variant='secondary'>
														{tag}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</article>
	)
}
