import { RssIcon } from 'lucide-react'
import { Link } from 'react-router'

import { contact, icons, profile } from '~/data/portfolio'

export function Footer() {
	return (
		<footer className='border-border text-muted-foreground mt-14 flex flex-col items-start gap-8 border-t pt-10 text-[13px] min-[880px]:flex-row min-[880px]:items-end min-[880px]:justify-between min-[880px]:gap-12'>
			<div className='mark'>
				<div className='text-foreground text-[28px] leading-[1.1] font-medium'>
					{profile.name}
				</div>
				<div className='text-muted-foreground mt-0.5 text-[13px]'>{profile.tagline}</div>
			</div>

			<div className='min-[880px]:text-right'>
				<div className='mb-4 flex gap-3.5 min-[880px]:justify-end'>
					{profile.socials.map((social) => {
						const Icon = icons[social.label]
						return (
							<a
								key={social.label}
								href={social.url}
								target='_blank'
								rel='noopener'
								aria-label={social.label}
								className='flex items-center text-[var(--kami-brand)] transition-colors hover:text-[var(--kami-brand-light)]'
							>
								{Icon ?? social.label}
							</a>
						)
					})}
					<Link
						to='/rss'
						className='flex items-center text-[var(--kami-brand)] transition-colors hover:text-[var(--kami-brand-light)]'
					>
						<RssIcon className='size-4' />
					</Link>
				</div>
				<p className='text-muted-foreground max-w-[360px] leading-[1.55] italic min-[880px]:ml-auto'>
					&copy; {contact.headline}
				</p>
			</div>
		</footer>
	)
}
