import { origins } from '~/data/design-system'

import { DSSection, SectionHead } from './primitives'

export function DesignOrigins() {
	return (
		<DSSection>
			<SectionHead num='10 · Background' title='Design Origins' />
			<div className='text-secondary-foreground font-serif text-[16px] leading-[1.6]'>
				{origins.map((paragraph, i) => (
					<p key={i} className='mb-3.5'>
						{paragraph}
					</p>
				))}
			</div>
		</DSSection>
	)
}
