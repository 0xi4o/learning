import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '~/components/ui/card'
import { componentDemos as c } from '~/data/design-system'

import { DSSection, SectionHead } from './primitives'

/** A labelled demo cell in the component gallery. */
function Comp({
	title,
	hint,
	children,
}: {
	title: string
	hint: string
	children: React.ReactNode
}) {
	return (
		<div className='border-border bg-card flex min-w-0 flex-col rounded-xl border px-6 pt-7 pb-5 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
			<h3 className='text-foreground mb-1 font-serif text-[16px] font-medium'>{title}</h3>
			<p className='text-muted-foreground mb-5 font-mono text-[12px]'>{hint}</p>
			<div className='flex-1'>{children}</div>
		</div>
	)
}

const btnClass = 'h-auto rounded-md px-3.5 py-2 text-[12px] tracking-[0.4px]'

// Documented ink-blue tint backgrounds for the three tag levels (literal hex).
const tagTints = [
	{ label: 'Light 0.08', style: { background: '#eef2f7' } },
	{ label: 'Standard 0.18', style: { background: '#e4ecf5' } },
	{
		label: 'Brush gradient',
		style: { background: 'linear-gradient(to right, #d6e1ee, #e4ecf5 70%, #eef2f7)' },
	},
]

export function AtomicModules() {
	return (
		<DSSection>
			<SectionHead
				num='06 · Components'
				title='Atomic Modules'
				lede='A small fixed set, kept only where it solves a concrete document problem.'
			/>

			<div className='grid grid-cols-1 gap-6 min-[880px]:grid-cols-2'>
				<Comp title={c.buttons.title} hint={c.buttons.hint}>
					<div className='flex flex-wrap gap-2.5'>
						<Button className={btnClass}>Primary CTA</Button>
						<Button variant='secondary' className={btnClass}>
							Secondary
						</Button>
						<Button variant='ghost' className={`${btnClass} text-primary`}>
							Ghost
						</Button>
					</div>
				</Comp>

				<Comp title={c.tags.title} hint={c.tags.hint}>
					<div className='flex flex-wrap items-center gap-2.5'>
						{tagTints.map((t) => (
							<Badge
								key={t.label}
								className='text-primary rounded-[3px] px-2 py-0.5 text-[12px] tracking-[0.4px]'
								style={t.style}
							>
								{t.label}
							</Badge>
						))}
					</div>
				</Comp>

				<Comp title={c.quote.title} hint={c.quote.hint}>
					<blockquote className='border-primary text-muted-foreground border-l-2 py-1 pl-3.5 font-serif text-[15px] leading-[1.55]'>
						{c.quote.text}
					</blockquote>
				</Comp>

				<Comp title={c.metric.title} hint={c.metric.hint}>
					<div className='flex gap-7'>
						{c.metric.items.map((m) => (
							<div key={m.label} className='flex flex-col gap-0.5'>
								<span className='text-primary font-serif text-[24px] leading-none font-medium tabular-nums'>
									{m.value}
								</span>
								<span className='text-muted-foreground text-[12px]'>{m.label}</span>
							</div>
						))}
					</div>
				</Comp>

				<Comp title={c.sectionTitle.title} hint={c.sectionTitle.hint}>
					<span className='text-foreground block font-serif text-[20px] font-medium'>
						{c.sectionTitle.sample}
					</span>
				</Comp>

				<Comp title={c.dashList.title} hint={c.dashList.hint}>
					<ul className='text-secondary-foreground m-0 list-none p-0 text-[14px] leading-[1.55]'>
						{c.dashList.items.map((item) => (
							<li
								key={item}
								className='before:text-primary relative pl-3.5 before:absolute before:left-0 before:content-["–"]'
							>
								{item}
							</li>
						))}
					</ul>
				</Comp>

				<Comp title={c.codeBlock.title} hint={c.codeBlock.hint}>
					<pre className='bg-background border-border text-foreground m-0 overflow-x-auto rounded-md border p-3.5 font-mono text-[12px] leading-[1.55]'>
						<span className='text-muted-foreground'>
							{'// warmth from restraint, not from color'}
						</span>
						{'\ncanvas   = parchment; accent = '}
						<span className='text-primary'>ink_blue</span>
						{'\npalette  = '}
						<span className='text-primary'>warm_neutrals</span>
						{' − cool_grays\ndocument = '}
						<span className='text-primary'>serif</span>
						{' × hierarchy + generous_space\nbeauty   = constraints × '}
						<span className='text-primary'>intention</span>
						{' ÷ noise'}
					</pre>
				</Comp>

				<Comp title={c.featured.title} hint={c.featured.hint}>
					<Card className='rounded-2xl px-5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
						<CardTitle className='font-serif text-[15px]'>
							{c.featured.cardTitle}
						</CardTitle>
						<CardDescription className='leading-[1.5]'>
							{c.featured.cardDesc}
						</CardDescription>
						<CardContent className='flex flex-wrap gap-2 px-0'>
							{c.featured.tags.map((tag) => (
								<Badge
									key={tag}
									className='text-primary rounded-[3px] px-2 py-0.5 text-[12px] tracking-[0.4px]'
									style={{ background: '#eef2f7' }}
								>
									{tag}
								</Badge>
							))}
						</CardContent>
					</Card>
				</Comp>
			</div>
		</DSSection>
	)
}
