import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router'

import { projects } from '~/data/portfolio'

export function RecentProjects() {
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
				{projects.map((project) => (
					<li key={project.num} className='p-0'>
						<Link
							className='flex items-center justify-between'
							to={`/projects/${project.num}`}
						>
							<span className='text-primary text-base leading-[1.5] font-medium'>
								{project.title}
								<small className='text-muted-foreground mt-1 block text-[13px] leading-[1.4] font-normal italic'>
									{project.subtitle}
								</small>
							</span>
							<p className='text-secondary-foreground text-sm leading-[1.55]'>
								{project.type}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
