import { about } from '~/data/portfolio'

import { Eyebrow, Section } from './primitives'

export function About() {
	return (
		<Section id='about' className='py-20 min-[880px]:py-28'>
			<Eyebrow>About</Eyebrow>

			<h2 className='border-primary text-foreground mt-6 max-w-[840px] border-l-2 pl-4 text-[28px] leading-[1.15] font-medium tracking-[-0.01em] min-[880px]:text-[38px]'>
				{about.headline}
			</h2>

			<p className='text-muted-foreground mt-8 max-w-[760px] text-[17px] leading-[1.5] min-[880px]:text-[19px]'>
				{about.lead}
			</p>

			<div className='mt-12 grid gap-8 min-[720px]:grid-cols-2 min-[720px]:gap-12'>
				<div>
					<h3 className='text-foreground text-[16px] font-medium'>Background</h3>
					<p className='text-muted-foreground mt-2 text-[15px] leading-[1.6]'>
						{about.background}
					</p>
				</div>
				<div>
					<h3 className='text-foreground text-[16px] font-medium'>Focus</h3>
					<p className='text-muted-foreground mt-2 text-[15px] leading-[1.6]'>
						{about.focus}
					</p>
				</div>
			</div>
		</Section>
	)
}
