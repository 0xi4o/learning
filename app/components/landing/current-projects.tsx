import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router'

import { Content } from '~/components/content'

export function CurrentProjects({ currentProjects }: { currentProjects: Array<unknown> }) {
	return (
		<section id='projects' className='mb-12'>
			<div className='typeset mb-6 space-y-2'>
				<div className='flex items-center justify-between'>
					<p className='font-mono text-[13px] tracking-[0.4px] uppercase'>
						02 &middot; Work
					</p>
					<span className='flex items-center gap-3.5'>
						<Link
							to='/projects'
							className='flex items-center gap-2 font-mono text-[12px] font-medium tracking-[1.2px] text-[var(--kami-brand)] uppercase transition-colors hover:text-[var(--kami-brand-light)]'
						>
							All Projects
							<ArrowRightIcon className='size-4' />
						</Link>
					</span>
				</div>
				<h2>
					<Link to='/projects'>Current Projects</Link>
				</h2>
				<p className='text-muted-foreground mt-0'>
					I design and build calm, durable software — and write about the craft in public.
				</p>
			</div>

			<ul className='typeset flex list-none flex-col gap-3.5'>
				{currentProjects.map((project) => (
					<li
						// @ts-ignore
						key={project.slug}
						className='p-0'
					>
						<Link
							className='flex items-center justify-between'
							// @ts-ignore
							to={`/projects/${project.slug}`}
						>
							<span className='text-primary text-base leading-[1.5] font-medium'>
								{
									// @ts-ignore
									project.frontmatter.title
								}
								<Content
									// @ts-ignore
									id={`collections/projects/${project.slug}/index`}
									className='text-muted-foreground mt-1 block text-[13px] leading-[1.4] font-normal italic'
								/>
							</span>
							{
								// @ts-ignore
								project.frontmatter.tags &&
									// @ts-ignore
									project.frontmatter.tags.length > 0 && (
										<p className='text-secondary-foreground text-sm leading-[1.55] capitalize'>
											{
												// @ts-ignore
												project.frontmatter.tags.join(' \u00B7 ')
											}
										</p>
									)
							}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
