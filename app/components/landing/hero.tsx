import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'

import { Content } from '~/components/content'
import { hero, profile } from '~/data/portfolio'

const icons: Record<string, React.ReactElement> = {
	GitHub: <SiGithub className='size-4' />,
	X: <SiX className='size-3' />,
	Instagram: <SiInstagram className='size-4' />,
}

export default function Hero() {
	return (
		<header className='border-border mb-12 border-b pb-10 min-[880px]:mb-12'>
			<div className='text-muted-foreground mb-[18px] flex items-center justify-between gap-4 font-mono text-[12px] font-medium tracking-[1.2px] uppercase'>
				<span className='flex gap-2'>
					<span>{hero.headline}</span>
					&middot;
					<span>{hero.tagline}</span>
				</span>
			</div>

			<Content id='singletons/about' className='mb-8 max-w-[820px]' />

			<span className='flex items-center gap-3.5'>
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
			</span>
		</header>
	)
}
