import { posts } from '~/data/portfolio'

export function RecentPosts() {
	return (
		<section id='writing' className='mb-14 min-[880px]:mb-[72px]'>
			<div className='mb-6'>
				<p className='text-primary mb-1.5 font-mono text-[13px] tracking-[0.4px]'>
					01 · WRITING
				</p>
				<h2 className='text-foreground text-[26px] leading-[1.2] font-medium min-[880px]:text-[32px]'>
					Recent posts
				</h2>
				<p className='text-muted-foreground mt-3.5 text-[17px] leading-[1.55]'>
					Notes on durable systems, design tokens, and working calmly — an open notebook I
					keep in public.
				</p>
			</div>

			<ol className='border-border list-none border-t'>
				{posts.map((post) => (
					<li
						key={post.title}
						className='border-border grid grid-cols-[1fr] gap-2 border-b py-7 min-[880px]:grid-cols-[200px_1fr] min-[880px]:items-baseline min-[880px]:gap-9'
					>
						<p className='text-primary text-[22px] leading-[1.2] font-medium'>
							{post.date}
							<small className='text-muted-foreground mt-1 block text-[13px] leading-[1.4] font-normal italic'>
								{post.tag}
							</small>
						</p>
						<div>
							<a
								href={post.url}
								className='text-foreground hover:text-primary block text-[18px] font-medium transition-colors'
							>
								{post.title}
							</a>
							<p className='text-muted-foreground mt-1.5 text-[15px] leading-[1.55]'>
								{post.excerpt}
							</p>
						</div>
					</li>
				))}
			</ol>
		</section>
	)
}
