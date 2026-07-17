import { Content } from '~/components/content'
import { icons, profile } from '~/data/portfolio'

export default function Hero({ title }: { title: string }) {
	return (
		<article className='typeset'>
			<h1>{title}</h1>

			<Content id='singletons/about' className='mb-8 max-w-[820px]' />

			<span className='mb-14 flex items-center gap-3.5 min-[880px]:mb-[72px]'>
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
		</article>
	)
}
