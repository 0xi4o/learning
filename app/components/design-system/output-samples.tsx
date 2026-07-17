import { demos } from '~/data/design-system'

import { DSSection, SectionHead } from './primitives'

export function OutputSamples() {
	return (
		<DSSection>
			<SectionHead
				num='00 · See it'
				title='Output Samples'
				lede={
					<>
						Give Claude the brief: one-pagers, long docs, letters, portfolios, resumes,
						slides all become polished layouts from one small, reliable rule set. The
						same brief also{' '}
						<a
							href='https://github.com/tw93/kami#beyond-documents'
							className='text-primary font-medium'
						>
							travels to image renderers
						</a>
						, with the copy-paste prompt and sample outputs in the README.
					</>
				}
			/>
			<div className='grid grid-cols-2 gap-3.5 min-[880px]:grid-cols-4 min-[880px]:gap-5'>
				{demos.map((demo) => (
					<div key={demo.title}>
						<a href={demo.href} target='_blank' rel='noopener'>
							<img
								src={demo.image}
								alt={demo.alt}
								loading='lazy'
								decoding='async'
								className='border-border bg-muted aspect-[3/4] w-full rounded-lg border object-cover transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'
							/>
						</a>
						<p className='text-foreground mt-2.5 text-[14px] font-medium'>
							{demo.title}
						</p>
						<p className='text-muted-foreground mt-0.5 text-[12px]'>{demo.desc}</p>
					</div>
				))}
			</div>
		</DSSection>
	)
}
