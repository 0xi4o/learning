import { profile } from '~/data/portfolio'

import { Eyebrow, Rule } from './primitives'

export function Hero() {
	return (
		<section id='top' className='border-border border-b'>
			<div className='mx-auto flex min-h-[92vh] max-w-[1120px] flex-col justify-between px-8 pt-28 pb-16 min-[880px]:px-16 min-[880px]:pt-32 min-[880px]:pb-20'>
				<Eyebrow>{profile.yearRange}</Eyebrow>

				<div className='max-w-[900px]'>
					<h1 className='text-foreground text-[16vw] leading-[0.95] font-medium tracking-[-0.02em] min-[480px]:text-[72px] min-[880px]:text-[112px]'>
						{profile.name}
						<br />
						Portfolio
					</h1>
					<p className='text-muted-foreground mt-7 max-w-[640px] text-[18px] leading-[1.4] min-[880px]:text-[22px]'>
						{profile.tagline}
					</p>
					<Rule className='mt-8' />
				</div>

				<div className='text-muted-foreground mt-12 flex flex-col gap-4 text-[14px] tabular-nums min-[560px]:flex-row min-[560px]:items-end min-[560px]:justify-between'>
					<div>
						<span className='text-foreground font-medium'>{profile.role}</span>
						<br />
						{profile.location}
					</div>
					<div className='min-[560px]:text-right'>
						<a
							href={`mailto:${profile.email}`}
							className='hover:text-primary transition-colors'
						>
							{profile.email}
						</a>
						<br />
						<a
							href={profile.socials[0].url}
							className='hover:text-primary transition-colors'
						>
							{profile.website}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
