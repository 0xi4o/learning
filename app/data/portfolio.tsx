import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'

// Portfolio content — the single source of truth for the page.
// Replace the placeholder copy with your own, and drop real images into
// `public/` then point `Project.image` at them (e.g. '/work/atlas-hero.png').
// Writing follows the Kami rules: open each case study with the problem and
// its stakes, keep outcomes quantified, and state your exact role.

export const icons: Record<string, React.ReactElement> = {
	GitHub: <SiGithub className='size-4' />,
	X: <SiX className='size-3' />,
	Instagram: <SiInstagram className='size-4' />,
}

export type Profile = {
	name: string
	tagline: string
	yearRange: string
	role: string
	location: string
	email: string
	website: string
	socials: Array<{ label: string; handle: string; url: string }>
}

export type About = {
	headline: string
	lead: string
	background: string
	focus: string
}

export type Result = {
	value: string
	label: string
}

export type Project = {
	num: string
	type: string
	title: string
	subtitle: string
	date: string
	tags: string[]
	/** Optional hero image path from `public/`. Omit to render a placeholder band. */
	image?: string
	context: string
	approach: string
	outcome: string
	results: Result[]
}

export type Work = {
	year: string
	title: string
	desc: string
	link: string
	url?: string
}

export type Post = {
	title: string
	/** ISO-ish display date, e.g. '2026.06'. */
	date: string
	excerpt: string
	tag: string
	/** Link to the full post. Point at real slugs once you have them. */
	url: string
}

export type Contact = {
	headline: string
	items: { label: string; value: string; url?: string }[]
}

export const hero = {
	headline: 'About Me',
	tagline: 'Software Engineer, Tinkerer, Coffee Nerd',
	title: 'Ilango Rajagopal',
}

export const nav = [
	{ label: 'Articles', to: '/articles' },
	{ label: 'Series', to: '/series' },
	{ label: 'Projects', to: '/projects' },
	{ label: 'Now', to: '/now' },
]

export const footerColumns: {
	title: string
	links: { label: string; to: string }[]
}[] = [
	{
		title: 'Writing',
		links: [
			{ label: 'Articles', to: '/articles' },
			{ label: 'Series', to: '/series' },
			{ label: 'Learning', to: '/learning' },
		],
	},
	{
		title: 'Site',
		links: [
			{ label: 'Projects', to: '/projects' },
			{ label: 'Now', to: '/now' },
			{ label: 'Uses', to: '/uses' },
		],
	},
]

export const profile: Profile = {
	name: 'Ilango',
	tagline: 'I design and build calm, durable software — and write about the craft in public.',
	yearRange: 'Selected Works 2023–2026',
	role: 'Product Engineer',
	location: 'Bangalore, India',
	email: 'hey@i4o.dev',
	website: 'https://i4o.dev',
	socials: [
		{ label: 'GitHub', handle: '0xi4o', url: 'https://github.com/0xi4o' },
		{ label: 'X', handle: '0xi4o', url: 'https://x.com/0xi4o' },
		{
			label: 'Instagram',
			handle: 'ilango.builds.stuff',
			url: 'https://instagram.com/ilango.builds.stuff',
		},
	],
}

export const about: About = {
	headline: 'I turn fuzzy problems into systems people can trust.',
	lead: 'I work end to end — from the first sketch to the service running in production. I care most about the seams: the interfaces between people and software, and between the parts of a system that have to survive failure.',
	background:
		'A decade shipping product across startups and platform teams — frontend systems, durable backends, and the design work that ties them together. I have led small teams and been the person on call at 3am; both taught me to value boring, legible software.',
	focus: 'Right now I am going deep on distributed systems and durable execution — building long-running processes that recover cleanly — and on the design language that makes complex tools feel quiet instead of loud.',
}

export const projects: Project[] = [
	{
		num: '01',
		type: 'Product · Full-Stack',
		title: 'Atlas',
		subtitle: 'A workflow engine that made a fragile nightly job impossible to lose.',
		date: '2025.04 – 2026.02',
		tags: ['Durable Execution', 'TypeScript', 'Postgres', 'Systems Design'],
		context:
			'A critical nightly reconciliation ran as a single cron script. When it failed halfway — and it did, roughly once a week — an engineer spent the morning hand-replaying it. Every failure risked double-charging customers.',
		approach:
			'I modelled the job as a durable workflow with idempotent steps and explicit checkpoints, so a crash resumes exactly where it stopped. I weighed a queue-based retry design against a workflow engine, and chose the engine for its replay guarantees over raw throughput.',
		outcome:
			'Zero lost runs in the six months since launch, and the morning firefighting disappeared entirely. The on-call rotation reclaimed an estimated four hours a week.',
		results: [
			{ value: '0', label: 'Lost runs in 6 months' },
			{ value: '~4h', label: 'On-call time saved / week' },
			{ value: '99.98%', label: 'Job completion rate' },
		],
	},
	{
		num: '02',
		type: 'Design System · Open Source',
		title: 'Kami',
		subtitle:
			'One warm, serif-led design language that survives light and dark, print and screen.',
		date: '2024.09 – 2025.06',
		tags: ['Design Systems', 'Tailwind', 'Accessibility'],
		context:
			'Documents and product UI drifted apart — a PDF resume looked nothing like the web app it described. Teams re-picked colors per surface, and dark mode was an afterthought bolted on with one-off overrides.',
		approach:
			'I encoded the whole system as semantic tokens — a single ink-blue accent over warm parchment neutrals — so every surface reads from the same source of truth. Components style only with tokens, which makes dark mode fall out for free instead of doubling the work.',
		outcome:
			'A shared visual language now spans print deliverables and the web app with no per-surface color decisions, and contributors ship on-brand UI without a designer in the loop.',
		results: [
			{ value: '1', label: 'Accent color, system-wide' },
			{ value: '2', label: 'Themes, zero overrides' },
			{ value: 'AA', label: 'Contrast, both modes' },
		],
	},
]

export const selectedWorks: Work[] = [
	{
		year: '2025',
		title: 'Learning in Public',
		desc: 'An open notebook of everything I am working through, built on this same design system.',
		link: 'v4.i4o.dev/learning',
		url: '/learning',
	},
	{
		year: '2024',
		title: 'Ledger CLI',
		desc: 'A small, fast command-line tool for plain-text accounting with a typed importer.',
		link: 'Open Source',
	},
	{
		year: '2023',
		title: 'Field Notes',
		desc: 'A writing practice on software craft, systems thinking, and working calmly.',
		link: 'Essays',
	},
]

// Placeholder posts — swap in your real writing. Each excerpt opens with the
// problem or the claim, following the Kami voice: concrete over adjectival.
export const posts: Post[] = [
	{
		title: 'What durable execution actually buys you',
		date: '2026.06',
		excerpt:
			'A retry loop is not durability. The moment a process can crash mid-flight, you need replay you can trust — here is where the guarantees come from, and where they quietly leak.',
		tag: 'Systems',
		url: '/learning',
	},
	{
		title: 'One accent color, two themes, zero overrides',
		date: '2026.03',
		excerpt:
			'Dark mode stops being a chore when color lives in semantic tokens. A short walk through encoding a whole design language so light and dark fall out for free.',
		tag: 'Design',
		url: '/learning',
	},
	{
		title: 'Boring software is a feature',
		date: '2025.11',
		excerpt:
			'Being on call at 3am taught me to value legible, predictable systems over clever ones. Notes on designing for the person who has to debug it half-asleep.',
		tag: 'Craft',
		url: '/learning',
	},
]

export const contact: Contact = {
	headline: '2026 Ilango Rajagopal',
	items: [
		{ label: 'Email', value: '0xido@proton.me', url: 'mailto:0xido@proton.me' },
		{ label: 'Website', value: 'i4o.dev', url: 'https://i4o.dev' },
		{ label: 'GitHub', value: '@0xi4o', url: 'https://github.com/0xi4o' },
	],
}
