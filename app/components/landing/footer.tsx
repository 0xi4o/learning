import { RssIcon } from 'lucide-react'
import { Link } from 'react-router'

import { contact, footerColumns, icons, profile } from '~/data/portfolio'

export function Footer() {
	return (
		<footer className='border-border text-muted-foreground mt-14 border-t pt-10 text-[13px]'>
			<div className='flex flex-col gap-10 min-[880px]:flex-row min-[880px]:items-start min-[880px]:justify-between min-[880px]:gap-14'>
				<div className='min-[880px]:max-w-[300px]'>
					<div className='text-foreground text-[28px] leading-[1.1] font-medium'>
						{profile.name}
					</div>
					<div className='text-muted-foreground mt-1.5 leading-[1.55]'>
						{profile.tagline}
					</div>
				</div>

				<nav
					aria-label='Footer'
					className='grid grid-cols-2 gap-x-10 gap-y-8 min-[880px]:flex min-[880px]:gap-14'
				>
					{footerColumns.map((col) => (
						<div key={col.title} className='flex flex-col gap-2.5'>
							<p className='text-muted-foreground font-mono text-[11px] font-medium tracking-[1.2px] uppercase'>
								{col.title}
							</p>
							{col.links.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className='text-muted-foreground hover:text-foreground transition-colors'
								>
									{link.label}
								</Link>
							))}
						</div>
					))}

					<div className='flex flex-col gap-2.5'>
						<p className='text-muted-foreground font-mono text-[11px] font-medium tracking-[1.2px] uppercase'>
							Connect
						</p>
						<div className='flex gap-3.5'>
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
								to='/rss.xml'
								aria-label='RSS'
								reloadDocument
								className='flex items-center text-[var(--kami-brand)] transition-colors hover:text-[var(--kami-brand-light)]'
							>
								<RssIcon className='size-4' />
							</Link>
						</div>
						<a
							href={`mailto:${profile.email}`}
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							{profile.email}
						</a>
					</div>
				</nav>
			</div>

			<div className='border-border mt-10 flex flex-col gap-2 border-t pt-6 min-[880px]:flex-row min-[880px]:items-baseline min-[880px]:justify-between'>
				<p className='text-muted-foreground'>&copy; {contact.headline}</p>
				<p className='text-muted-foreground italic'>
					{profile.role} &middot; {profile.location}
				</p>
			</div>
		</footer>
	)
}
