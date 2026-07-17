import { Link } from 'react-router'

import { Content } from '~/components/content'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { getCollection } from '~/lib/content'

import type { Route } from './+types/learning'

export function meta() {
	return [
		{ title: 'Learning in Public' },
		{
			name: 'description',
			content: 'A running collection of everything I am learning with the help of AI.',
		},
	]
}

export function loader() {
	// Content is read from Markdown/MDX at build time via `import.meta.glob`.
	return { topics: getCollection('learning') }
}

export default function Learning({ loaderData }: Route.ComponentProps) {
	const { topics } = loaderData
	return (
		<main className='mx-auto max-w-[1120px] px-8 pt-16 pb-20 min-[880px]:px-16 min-[880px]:pt-[88px] min-[880px]:pb-[120px]'>
			{/* Hero */}
			<header className='border-border mb-20 border-b pb-12'>
				<p className='text-primary font-mono text-[12px] font-medium tracking-[0.4px] uppercase'>
					Learning Log
				</p>
				<h1 className='text-foreground mt-[22px] text-[56px] leading-[1.05] font-medium tracking-[0] min-[480px]:text-[64px] min-[880px]:text-[96px]'>
					Learning in Public
				</h1>
				<p className='text-muted-foreground mt-[18px] max-w-[820px] text-[17px] leading-[1.4] tracking-[0.2px] min-[480px]:text-[18px] min-[880px]:text-[21px]'>
					A running collection of everything I&apos;m exploring with the help of AI —
					notes, experiments, and the topics I&apos;m working through right now.
				</p>
			</header>

			{/* Embedded singleton — Markdown rendered inline via <Content>, no dedicated route. */}
			<Content id='singletons/learning-intro' className='mb-20 max-w-[820px]' />

			{/* Currently learning */}
			<section className='mb-[72px]'>
				<div className='mb-6'>
					<p className='text-primary text-[13px] tracking-[0.4px]'>
						{topics.length} Topics
					</p>
					<h2 className='text-foreground mt-1.5 text-[26px] leading-[1.2] font-medium min-[880px]:text-[32px]'>
						Currently learning
					</h2>
				</div>

				<ul className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px]'>
					{topics.map(({ slug, frontmatter }) => (
						<li key={slug} className='flex'>
							<Link to={`/learning/${slug}`} className='flex flex-1'>
								<Card className='border-border flex-1 rounded-lg border ring-0 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
									<CardHeader>
										<CardTitle className='text-[15px] font-medium'>
											{frontmatter.title}
										</CardTitle>
										{frontmatter.date && (
											<CardDescription className='text-[12px]'>
												{frontmatter.date}
											</CardDescription>
										)}
									</CardHeader>
									<CardContent className='flex flex-1 flex-col gap-4'>
										<p className='text-muted-foreground text-[12px] leading-[1.4]'>
											{frontmatter.description}
										</p>
										<div className='mt-auto flex flex-wrap gap-1.5'>
											{frontmatter.tags?.map((tag) => (
												<Badge key={tag} variant='secondary'>
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	)
}
