import { Link, Outlet, useLocation } from 'react-router'

import { Footer } from '~/components/landing/footer'
import { hero, nav } from '~/data/portfolio'

export default function Base() {
	const location = useLocation()

	return (
		<main className='mx-auto max-w-[1120px] px-8 pt-16 pb-20 min-[880px]:px-16 min-[880px]:pt-[88px] min-[880px]:pb-[120px]'>
			<header className='mb-14 min-[880px]:mb-[72px]'>
				<div className='text-muted-foreground mb-[18px] flex items-center justify-between gap-4 font-mono text-[12px] font-medium tracking-[1.2px] uppercase'>
					{location.pathname === '/' ? (
						<span className='flex gap-2'>
							<span>{hero.headline}</span>
							&middot;
							<span>{hero.tagline}</span>
						</span>
					) : (
						<span className='flex gap-2'>
							<span>{hero.title}</span>
						</span>
					)}
					<span className='flex items-center gap-3.5'>
						{nav.map((link) => (
							<Link
								className='flex items-center text-[var(--kami-brand)] transition-colors hover:text-[var(--kami-brand-light)]'
								key={link.to}
								to={link.to}
							>
								{link.label}
							</Link>
						))}
					</span>
				</div>
			</header>

			<Outlet />

			<Footer />
		</main>
	)
}
