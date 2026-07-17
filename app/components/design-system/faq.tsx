import { faqs } from '~/data/design-system'

import { DSSection, SectionHead } from './primitives'

export function Faq() {
	return (
		<DSSection>
			<SectionHead num='11 · Questions' title='FAQ' />
			<dl className='flex flex-col gap-5'>
				{faqs.map((faq) => (
					<div key={faq.q}>
						<dt className='text-foreground mb-1 font-serif text-[16px] font-semibold'>
							{faq.q}
						</dt>
						<dd className='text-secondary-foreground m-0 font-serif text-[15px] leading-[1.6]'>
							{faq.a}
						</dd>
					</div>
				))}
			</dl>
		</DSSection>
	)
}
