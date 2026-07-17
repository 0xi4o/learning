import { selectedWorks } from '~/data/portfolio'

import { Eyebrow, Section } from './primitives'

export function SelectedWorks() {
	return (
		<Section id='more' className='py-20 min-[880px]:py-24'>
			<Eyebrow>Also</Eyebrow>
			<h2 className='border-primary text-foreground mt-6 border-l-2 pl-4 text-[26px] font-medium tracking-[-0.01em] min-[880px]:text-[32px]'>
				Selected Works
			</h2>

			<ul className='mt-10'>
				{selectedWorks.map((work) => (
					<li
						key={work.title}
						className='border-border grid grid-cols-[48px_1fr] items-baseline gap-4 border-b border-dotted py-4 last:border-b-0 min-[560px]:grid-cols-[64px_1fr_auto] min-[560px]:gap-6'
					>
						<span className='text-primary text-[16px] font-medium tabular-nums'>
							{work.year}
						</span>
						<div className='col-start-2'>
							<div className='text-foreground text-[16px] font-medium'>
								{work.title}
							</div>
							<div className='text-muted-foreground mt-0.5 text-[14px] leading-[1.4]'>
								{work.desc}
							</div>
						</div>
						<div className='text-muted-foreground col-start-2 font-mono text-[12px] min-[560px]:col-start-3 min-[560px]:text-right'>
							{work.url ? (
								<a href={work.url} className='hover:text-primary transition-colors'>
									{work.link}
								</a>
							) : (
								work.link
							)}
						</div>
					</li>
				))}
			</ul>
		</Section>
	)
}
