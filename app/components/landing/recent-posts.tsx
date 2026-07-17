export function RecentPosts() {
	return (
		<>
			<section id='blog' className='mb-14 min-[880px]:mb-[72px]'>
				<div className='mb-6'>
					<p className='text-primary mb-1.5 font-mono text-[13px] tracking-[0.4px]'>
						05 · ARTICLES
					</p>
					<h2 className='text-foreground text-[26px] leading-[1.2] font-medium min-[880px]:text-[32px]'>
						<a href='/blog'>From the blog</a>
					</h2>
					<p className='text-muted-foreground mt-3.5 text-[17px] leading-[1.55]'>
						Notes on durable systems, design tokens, and working calmly — an open
						notebook I keep in public.
					</p>
				</div>
				<ul className='typeset flex list-none flex-col gap-3.5'>
					<li className='p-0'>
						<a
							className='flex items-baseline justify-between gap-4'
							href='/blog/macbook-fan-loud-overheating'
						>
							<span className='text-base leading-[1.5]'>
								MacBook Fan Always Loud? Why It Happens and How to Take Control
							</span>
							<time className='text-sm'>2026-07-12</time>
						</a>
					</li>
					<li className='p-0'>
						<a
							className='flex items-baseline justify-between gap-4'
							href='/blog/the-design-of-mole'
						>
							<span className='text-base leading-[1.5]'>
								The Design of Mole: Building a Tool That Stays Out of Your Way
							</span>
							<time className='text-sm'>2026-07-12</time>
						</a>
					</li>
					<li className='p-0'>
						<a
							className='flex items-baseline justify-between gap-4'
							href='/blog/why-is-my-mac-so-slow'
						>
							<span className='text-base leading-[1.5]'>
								Why Is My Mac So Slow? How to Find the Cause and Fix It
							</span>
							<time className='text-sm'>2026-07-11</time>
						</a>
					</li>
				</ul>
			</section>
		</>
	)
}
