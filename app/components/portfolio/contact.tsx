import { contact } from '~/data/portfolio'

import { Eyebrow, Rule, Section } from './primitives'

export function Contact() {
	return (
		<Section
			id='contact'
			className='border-border flex min-h-[70vh] flex-col justify-center border-t py-24 min-[880px]:py-32'
		>
			<Eyebrow>Let&apos;s Talk</Eyebrow>

			<h2 className='text-foreground mt-6 max-w-[840px] text-[40px] leading-[1.05] font-medium tracking-[-0.02em] min-[880px]:text-[56px]'>
				{contact.headline}
			</h2>

			<Rule className='mt-8' />

			<dl className='mt-10 flex flex-col gap-3 text-[16px] min-[880px]:text-[18px]'>
				{contact.items.map((item) => (
					<div key={item.label} className='flex flex-col gap-1 min-[480px]:flex-row'>
						<dt className='text-muted-foreground font-mono text-[12px] tracking-[0.1em] uppercase min-[480px]:w-32 min-[480px]:pt-1'>
							{item.label}
						</dt>
						<dd>
							{item.url ? (
								<a href={item.url} className='text-primary hover:underline'>
									{item.value}
								</a>
							) : (
								<span className='text-foreground'>{item.value}</span>
							)}
						</dd>
					</div>
				))}
			</dl>
		</Section>
	)
}
