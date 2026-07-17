import { showcase } from '~/data/design-system'

import { DSSection, SectionHead } from './primitives'

export function BuiltWithKami() {
	return (
		<DSSection>
			<SectionHead
				num='Landing Pages'
				title='Built with Kami'
				lede='The same landing-page template applied to three different products. One constraint set, three distinct purposes.'
			/>
			<div className='grid grid-cols-1 gap-3.5 min-[880px]:grid-cols-3 min-[880px]:gap-5'>
				{showcase.map((item) => (
					<div key={item.title}>
						<a href={item.href} target='_blank' rel='noopener'>
							<img
								src={item.image}
								alt={item.alt}
								loading='lazy'
								decoding='async'
								className='border-border bg-muted aspect-[16/10] w-full rounded-lg border object-cover transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'
							/>
						</a>
						<p className='text-foreground mt-2.5 text-[14px] font-medium'>
							{item.title}
						</p>
						<p className='text-muted-foreground mt-0.5 text-[12px]'>{item.desc}</p>
					</div>
				))}
			</div>
		</DSSection>
	)
}
