import { Badge } from '~/components/ui/badge'
import type { Project } from '~/data/portfolio'

export function ProjectCase({ project }: { project: Project }) {
	return (
		<article className='border-border border-t py-16 first:border-t-0 min-[880px]:py-20'>
			{/* Header */}
			<div className='border-primary flex flex-col gap-4 border-l-2 pl-4 min-[560px]:flex-row min-[560px]:items-start min-[560px]:justify-between'>
				<div className='flex gap-5'>
					<span className='text-primary text-[44px] leading-none font-medium tracking-[-0.02em] tabular-nums min-[880px]:text-[56px]'>
						{project.num}
					</span>
					<div className='pt-1'>
						<p className='text-primary font-mono text-[11px] font-medium tracking-[0.15em] uppercase'>
							{project.type}
						</p>
						<h3 className='text-foreground mt-1 text-[24px] leading-[1.15] font-medium tracking-[-0.01em] min-[880px]:text-[30px]'>
							{project.title}
						</h3>
						<p className='text-muted-foreground mt-1 max-w-[520px] text-[15px] leading-[1.4]'>
							{project.subtitle}
						</p>
					</div>
				</div>
				<p className='text-muted-foreground shrink-0 font-mono text-[12px] tabular-nums min-[560px]:pt-2 min-[560px]:text-right'>
					{project.date}
				</p>
			</div>

			{/* Tags */}
			<div className='mt-6 flex flex-wrap gap-1.5'>
				{project.tags.map((tag) => (
					<Badge
						key={tag}
						className='bg-accent text-accent-foreground rounded-sm tracking-[0.06em] uppercase'
					>
						{tag}
					</Badge>
				))}
			</div>

			{/* Hero image band */}
			<div className='bg-card border-border mt-6 aspect-[16/10] w-full overflow-hidden rounded-lg border'>
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className='h-full w-full object-cover'
					/>
				) : (
					<div className='text-muted-foreground flex h-full w-full items-center justify-center font-mono text-[12px]'>
						{project.title} — hero image
					</div>
				)}
			</div>

			{/* Context / Approach / Outcome */}
			<div className='mt-8 grid gap-8 min-[720px]:grid-cols-3 min-[720px]:gap-8'>
				<div>
					<h4 className='text-primary text-[14px] font-medium'>Context</h4>
					<p className='text-muted-foreground mt-2 text-[14px] leading-[1.6]'>
						{project.context}
					</p>
				</div>
				<div>
					<h4 className='text-primary text-[14px] font-medium'>Approach</h4>
					<p className='text-muted-foreground mt-2 text-[14px] leading-[1.6]'>
						{project.approach}
					</p>
				</div>
				<div>
					<h4 className='text-primary text-[14px] font-medium'>Outcome</h4>
					<p className='text-muted-foreground mt-2 text-[14px] leading-[1.6]'>
						{project.outcome}
					</p>
				</div>
			</div>

			{/* Results strip */}
			<div className='border-border mt-10 flex flex-col gap-6 border-t border-dotted pt-6 min-[560px]:flex-row min-[560px]:gap-10'>
				{project.results.map((result) => (
					<div key={result.label} className='flex-1'>
						<div className='text-primary text-[22px] leading-none font-medium tabular-nums min-[880px]:text-[26px]'>
							{result.value}
						</div>
						<div className='text-muted-foreground mt-1.5 text-[13px] leading-[1.35]'>
							{result.label}
						</div>
					</div>
				))}
			</div>
		</article>
	)
}
