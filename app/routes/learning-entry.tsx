import { format } from 'date-fns'
import { ArrowLeftIcon, NotebookTextIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { getCollection, getContent } from '~/lib/content'

import type { Route } from './+types/learning-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug } = params
	const entry = getContent(`collections/learning/${slug}/index`)
	if (!entry) throw data(null, { status: 404 })
	const lessons = getCollection(`collections/learning/${slug}/lessons`)
	return { frontmatter: entry.frontmatter, lessons, slug }
}

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return [
		{ title: loaderData.frontmatter.title },
		{ name: 'description', content: loaderData.frontmatter.description ?? '' },
	]
}

export default function LearningEntry({ loaderData }: Route.ComponentProps) {
	const { frontmatter, lessons, slug } = loaderData

	return (
		<>
			<Link
				to='/learning'
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				Learning
			</Link>
			<article className='typeset mt-8'>
				<header className='mb-10 flex flex-col gap-2'>
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<p className='font-mono text-[13px] tracking-[0.4px] uppercase'>
							{frontmatter.tags.join(' \u00B7 ')}
						</p>
					)}
					<h1 className='mt-0'>{frontmatter.title}</h1>
					<Content
						id={`collections/learning/${slug}/index`}
						className='border-border border-b pb-10'
					/>
				</header>

				<section className='typeset'>
					<h2>Lessons</h2>
					{lessons && lessons.length > 0 ? (
						<ul className='flex list-none flex-col gap-3.5 p-0'>
							{lessons.map((lesson, index) => (
								<li className='p-0' key={lesson.id}>
									<Link
										className='flex items-center justify-between gap-4'
										key={lesson.id}
										to={`/learning/${slug}/lessons/${lesson.slug}`}
									>
										<span className='text-base leading-[1.5]'>
											{`${index + 1}. ${lesson.frontmatter.title}`}
										</span>
										<time className='text-sm'>
											{format(
												// @ts-ignore
												new Date(lesson.frontmatter.createdAt),
												'MMMM dd, yyyy',
											)}
										</time>
									</Link>
								</li>
							))}
						</ul>
					) : (
						<Empty className='border-border col-span-3 border'>
							<EmptyHeader>
								<EmptyMedia variant='icon'>
									<NotebookTextIcon className='size-4' />
								</EmptyMedia>
								<EmptyTitle>Nothing here yet</EmptyTitle>
								<EmptyDescription>
									When I publish a lesson, it'll show up here.
								</EmptyDescription>
							</EmptyHeader>
						</Empty>
					)}
				</section>
			</article>
		</>
	)
}
