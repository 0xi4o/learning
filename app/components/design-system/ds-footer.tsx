import { footer } from '~/data/design-system'

export function DSFooter() {
	return (
		<footer className='border-border mt-6 flex flex-col items-start justify-between gap-6 border-t pt-10 min-[880px]:flex-row min-[880px]:items-end min-[880px]:gap-10'>
			<div className='flex items-center gap-4'>
				{/* Kami brand mark — literal brand fills, a logo not chrome. */}
				<svg
					width='56'
					height='56'
					viewBox='0 0 80 80'
					xmlns='http://www.w3.org/2000/svg'
					aria-label='Kami mark'
				>
					<rect
						x='6'
						y='6'
						width='68'
						height='68'
						rx='10'
						fill='#faf9f5'
						stroke='#1B365D'
						strokeWidth='1.25'
					/>
					<line x1='16' y1='26' x2='64' y2='26' stroke='#1B365D' strokeWidth='1.25' />
					<text
						x='40'
						y='56'
						fontFamily='TsangerJinKai02, Georgia, serif'
						fontSize='34'
						fontWeight='500'
						fill='#141413'
						textAnchor='middle'
					>
						紙
					</text>
				</svg>
				<div>
					<p className='text-foreground m-0 font-serif text-[22px] leading-none font-medium min-[880px]:text-[28px]'>
						{footer.name}
					</p>
					<p className='text-muted-foreground mt-1 font-serif text-[14px]'>
						{footer.sub}
					</p>
				</div>
			</div>
			<div className='text-muted-foreground max-w-[420px] text-[12px] leading-[1.6] tabular-nums min-[880px]:text-right'>
				<div>
					<a href={footer.github} className='text-primary font-medium'>
						GitHub
					</a>
					&nbsp;&nbsp;·&nbsp;&nbsp;{footer.docs}
				</div>
				<div className='mt-2 font-serif'>{footer.colophon}</div>
			</div>
		</footer>
	)
}
