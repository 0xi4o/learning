import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router'

export function RecentPosts() {
	return (
		<>
			<section id='blog' className='mb-14 min-[880px]:mb-[72px]'>
				<div className='mb-6'>
					<div className='flex items-center justify-between'>
						<p className='text-primary mb-1.5 font-mono text-[13px] tracking-[0.4px] uppercase'>
							01 &middot; Writing
						</p>
						<span className='flex items-center gap-3.5'>
							<Link
								to='/articles'
								className='flex items-center gap-2 font-mono text-[12px] font-medium tracking-[1.2px] text-[var(--kami-brand)] uppercase transition-colors hover:text-[var(--kami-brand-light)]'
							>
								All Articles
								<ArrowRightIcon className='size-4' />
							</Link>
						</span>
					</div>
					<h2 className='text-foreground text-[26px] leading-[1.2] font-medium min-[880px]:text-[32px]'>
						<Link to='/articles'>Recent Articles</Link>
					</h2>
					<p className='text-muted-foreground mt-3.5 text-[17px] leading-[1.55]'>
						Notes on durable systems, design tokens, and working calmly — an open
						notebook I keep in public.
					</p>
				</div>
				<ul className='typeset flex list-none flex-col gap-3.5'>
					<li className='p-0'>
						<Link
							className='flex items-baseline justify-between gap-4'
							to='/articles/macbook-fan-loud-overheating'
						>
							<span className='text-base leading-[1.5]'>
								MacBook Fan Always Loud? Why It Happens and How to Take Control
							</span>
							<time className='text-sm'>2026-07-12</time>
						</Link>
					</li>
					<li className='p-0'>
						<Link
							className='flex items-baseline justify-between gap-4'
							to='/articles/the-design-of-mole'
						>
							<span className='text-base leading-[1.5]'>
								The Design of Mole: Building a Tool That Stays Out of Your Way
							</span>
							<time className='text-sm'>2026-07-12</time>
						</Link>
					</li>
					<li className='p-0'>
						<Link
							className='flex items-baseline justify-between gap-4'
							to='/articles/why-is-my-mac-so-slow'
						>
							<span className='text-base leading-[1.5]'>
								Why Is My Mac So Slow? How to Find the Cause and Fix It
							</span>
							<time className='text-sm'>2026-07-11</time>
						</Link>
					</li>
				</ul>
			</section>
		</>
	)
}
