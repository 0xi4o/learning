import { antiPatterns } from '~/data/design-system'
import { cn } from '~/lib/utils'

import { DSSection, Inline, SectionHead } from './primitives'

export function AntiPatterns() {
	return (
		<DSSection>
			<SectionHead
				num='09 · Anti-Patterns'
				title='What to Avoid'
				lede='Exceptions are allowed, but the reason should be explicit.'
			/>
			<div className='grid grid-cols-1 gap-4 min-[880px]:grid-cols-2'>
				{antiPatterns.map((item, i) => (
					<div
						key={i}
						className={cn(
							'border-border bg-card rounded-lg border px-5 py-4.5 text-[14px] leading-[1.55]',
							item.kind === 'yes' && 'border-l-primary border-l-[3px]',
						)}
					>
						<h3
							className={cn(
								'mb-2 text-[12px] font-medium tracking-[1.2px] uppercase',
								item.kind === 'yes' ? 'text-primary' : 'text-muted-foreground',
							)}
						>
							{item.kind === 'yes' ? 'Do' : "Don't"}
						</h3>
						<p className='text-secondary-foreground m-0'>
							<Inline>{item.text}</Inline>
						</p>
					</div>
				))}
			</div>
		</DSSection>
	)
}
