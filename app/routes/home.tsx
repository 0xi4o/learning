import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export function meta() {
	return [
		{ title: 'Learning in Public' },
		{
			name: 'description',
			content: 'A running collection of everything I am learning with the help of AI.',
		},
	]
}

type Topic = {
	title: string
	blurb: string
	tags: string[]
	started: string
}

const topics: Topic[] = [
	{
		title: 'Golang',
		blurb: 'Getting fluent with Go — goroutines, channels, and writing idiomatic, production-ready services.',
		tags: ['Language', 'Backend', 'Concurrency'],
		started: 'Since 2026',
	},
	{
		title: 'Temporal.io',
		blurb: 'Durable execution and workflow orchestration — building reliable, long-running processes that survive failure.',
		tags: ['Workflows', 'Distributed Systems'],
		started: 'Since 2026',
	},
	{
		title: 'System Design',
		blurb: 'The foundations — scalable architecture, the trade-offs behind it, and the discrete maths that underpins it all.',
		tags: ['Foundations', 'Architecture'],
		started: 'Since 2026',
	},
]

export default function Home() {
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
					{topics.map((topic) => (
						<li key={topic.title} className='flex'>
							<Card className='border-border flex-1 rounded-lg border ring-0 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
								<CardHeader>
									<CardTitle className='text-[15px] font-medium'>
										{topic.title}
									</CardTitle>
									<CardDescription className='text-[12px]'>
										{topic.started}
									</CardDescription>
								</CardHeader>
								<CardContent className='flex flex-1 flex-col gap-4'>
									<p className='text-muted-foreground text-[12px] leading-[1.4]'>
										{topic.blurb}
									</p>
									<div className='mt-auto flex flex-wrap gap-1.5'>
										{topic.tags.map((tag) => (
											<Badge key={tag} variant='secondary'>
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</li>
					))}
				</ul>
			</section>
		</main>
	)
}
