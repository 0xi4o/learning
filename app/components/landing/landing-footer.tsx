import { contact, profile } from '~/data/portfolio'

export function LandingFooter() {
	return (
		<footer className='border-border text-muted-foreground mt-14 flex flex-col items-start gap-8 border-t pt-10 text-[13px] min-[880px]:flex-row min-[880px]:items-end min-[880px]:justify-between min-[880px]:gap-12'>
			<div className='mark'>
				<div className='text-foreground text-[28px] leading-[1.1] font-medium'>
					{profile.name}
				</div>
				<div className='text-muted-foreground mt-0.5 text-[13px]'>{profile.tagline}</div>
			</div>

			<div className='min-[880px]:text-right'>
				<div className='text-secondary-foreground mb-4 flex flex-wrap gap-x-1 gap-y-1 min-[880px]:justify-end'>
					{contact.items.map((item, index) => (
						<span key={item.label} className='inline-flex items-center'>
							{item.url ? (
								<a href={item.url} className='hover:text-primary transition-colors'>
									{item.value}
								</a>
							) : (
								item.value
							)}
							{index < contact.items.length - 1 && (
								<span className='text-border mx-1.5'>·</span>
							)}
						</span>
					))}
				</div>
				<p className='text-muted-foreground max-w-[360px] leading-[1.55] italic min-[880px]:ml-auto'>
					{contact.headline}
				</p>
			</div>
		</footer>
	)
}
