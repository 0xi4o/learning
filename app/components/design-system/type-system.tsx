import { typeFamilies, typeScale } from '~/data/design-system'
import { cn } from '~/lib/utils'

import { DSSection, SectionHead, Subhead } from './primitives'

export function TypeSystem() {
	return (
		<DSSection>
			<SectionHead
				num='04 · Typography'
				title='Type System'
				lede='Serif carries hierarchy, sans carries function. Serif body at 400, headings at 500.'
			/>

			<div className='grid grid-cols-1 gap-4 min-[880px]:grid-cols-2'>
				{typeFamilies.map((family) => (
					<div
						key={family.name}
						className='border-border bg-card rounded-xl border px-6 pt-7 pb-5 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'
					>
						<p
							className={cn(
								'text-foreground m-0 mb-4 flex h-16 items-center text-[64px] leading-none font-medium min-[880px]:h-20 min-[880px]:text-[80px]',
								family.kind === 'mono' ? 'font-mono' : 'font-serif',
							)}
						>
							{family.glyph}
						</p>
						<p className='text-foreground mb-1 text-[18px] font-medium'>
							{family.role}
						</p>
						<p className='text-muted-foreground mb-3 font-mono text-[12px]'>
							{family.name}
						</p>
						<p className='text-secondary-foreground m-0 text-[12px] leading-[1.55]'>
							{family.use}
						</p>
					</div>
				))}
			</div>

			<Subhead>Scale (print pt; screen px = pt x 1.33)</Subhead>
			<div className='border-border border-t'>
				{typeScale.map((spec) => (
					<div
						key={spec.label}
						className='border-border grid grid-cols-1 gap-2 border-b py-5 min-[880px]:grid-cols-[180px_1fr_160px] min-[880px]:items-center min-[880px]:gap-10'
					>
						<div className='text-muted-foreground font-serif text-[13px] font-medium'>
							{spec.label}
						</div>
						<div className={cn('text-foreground font-serif', spec.sampleClass)}>
							{spec.sample}
						</div>
						<div className='text-muted-foreground font-mono text-[12px] leading-[1.6] min-[880px]:text-right'>
							<b className='text-secondary-foreground font-medium'>{spec.size}</b>
							<br />
							{spec.weight}
							<br />
							{spec.line}
						</div>
					</div>
				))}
			</div>
		</DSSection>
	)
}
