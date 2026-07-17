import { manifesto, rules } from '~/data/design-system'

import { DSSection, Inline, SectionHead } from './primitives'

export function DesignPrinciples() {
	// The source emphasizes "ink blue" in brand color inside the manifesto.
	const [before, after] = manifesto.split('ink blue')

	return (
		<DSSection>
			<SectionHead num='02 · Manifesto' title='Design Principles' />

			<p className='text-foreground mb-7 text-[17px] leading-[1.65] tracking-[0.05em] min-[880px]:text-[20px]'>
				{before}
				<em className='text-primary not-italic'>ink blue</em>
				{after}
			</p>

			<ol className='border-border grid list-none grid-cols-1 border-t p-0 min-[720px]:grid-cols-2'>
				{rules.map((rule) => (
					<li
						key={rule.n}
						className='border-border grid grid-cols-[32px_1fr] items-start gap-1 border-b py-[18px] min-[720px]:odd:border-r min-[720px]:odd:pr-8 min-[720px]:even:pl-8'
					>
						<span className='text-primary text-[20px] leading-none font-medium'>
							{rule.n}
						</span>
						<p className='text-secondary-foreground m-0 text-[14px] leading-[1.5]'>
							<Inline>{rule.text}</Inline>
						</p>
					</li>
				))}
			</ol>
		</DSSection>
	)
}
