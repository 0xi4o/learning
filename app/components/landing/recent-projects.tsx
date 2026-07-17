import { Button } from '~/components/ui/button'
import { projects } from '~/data/portfolio'

export function RecentProjects() {
	return (
		<section id='projects' className='mb-14 min-[880px]:mb-[72px]'>
			<div className='mb-6 flex items-end justify-between gap-6'>
				<div>
					<p className='text-primary mb-1.5 font-mono text-[13px] tracking-[0.4px]'>
						02 · WORK
					</p>
					<h2 className='text-foreground text-[26px] leading-[1.2] font-medium min-[880px]:text-[32px]'>
						Recent projects
					</h2>
				</div>
				<Button
					variant='outline'
					render={<a href='/portfolio' />}
					className='border-primary text-primary hover:bg-accent hover:text-primary h-auto shrink-0 rounded-full px-5 py-2.5 text-[14px]'
				>
					View case studies →
				</Button>
			</div>

			<ol className='border-border list-none border-t'>
				{projects.map((project) => (
					<li
						key={project.num}
						className='border-border grid grid-cols-[1fr] gap-3 border-b py-7 min-[880px]:grid-cols-[200px_1fr] min-[880px]:items-baseline min-[880px]:gap-9'
					>
						<p className='text-primary text-[22px] leading-[1.2] font-medium'>
							{project.title}
							<small className='text-muted-foreground mt-1 block text-[13px] leading-[1.4] font-normal italic'>
								{project.type}
							</small>
						</p>
						<div>
							<p className='text-secondary-foreground text-[15px] leading-[1.55]'>
								{project.subtitle}
							</p>
							<div className='mt-5 flex flex-wrap gap-8'>
								{project.results.map((result) => (
									<div key={result.label} className='flex flex-col gap-1'>
										<div className='text-foreground text-[28px] leading-none font-medium tabular-nums min-[880px]:text-[36px]'>
											{result.value}
										</div>
										<div className='text-muted-foreground font-mono text-[13px]'>
											{result.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</li>
				))}
			</ol>
		</section>
	)
}
