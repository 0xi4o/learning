import { profile } from '~/data/portfolio'

const links = [
	{ label: 'About', href: '#about' },
	{ label: 'Work', href: '#work' },
	{ label: 'Contact', href: '#contact' },
]

export function PortfolioNav() {
	return (
		<header className='border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur'>
			<nav className='mx-auto flex max-w-[1120px] items-center justify-between px-8 py-4 min-[880px]:px-16'>
				<a
					href='#top'
					className='text-foreground text-[15px] font-medium tracking-[-0.01em]'
				>
					{profile.name}
				</a>
				<ul className='flex gap-6'>
					{links.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className='text-muted-foreground hover:text-primary font-mono text-[12px] tracking-[0.05em] uppercase transition-colors'
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
