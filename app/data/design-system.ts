// Kami Design System showcase content — the single source of truth for the
// `/design-system` page. Copy lifted 1:1 from `app/kami-landing/index.html`.
//
// NOTE on hex strings: this page documents the Kami palette itself, so swatch
// chips, tint samples, and radius/spacing demo boxes must paint literal color.
// Those hex values live here and are applied via inline `style` on the chip/box
// only — every surrounding surface still uses semantic tokens. This is the one
// sanctioned place raw hex appears.

export type HeroToken = { label: string; value: string }

export type Demo = {
	title: string
	desc: string
	/** Path under `public/` — drop the PNG at `public/kami/demos/…`. */
	image: string
	href: string
	alt: string
}

export type Showcase = {
	title: string
	desc: string
	/** Path under `public/` — drop the PNG at `public/kami/showcase/…`. */
	image: string
	href: string
	alt: string
}

export type Rule = { n: number; text: string }

export type Swatch = {
	name: string
	role?: string
	hex: string
	/** Chip needs a dark bottom border (dark swatches) or brand name tint. */
	variant?: 'dark' | 'brand'
}

export type Tint = {
	hex: string
	opacity: string
	isDefault?: boolean
}

export type TypeFamily = {
	kind: 'serif' | 'mono'
	glyph: string
	role: string
	name: string
	use: string
}

export type TypeSpec = {
	label: string
	sample: string
	size: string
	weight: string
	line: string
	/** Tailwind classes describing the visual size/weight of the sample. */
	sampleClass: string
}

export type SpaceRow = {
	name: string
	value: string
	use: string
	/** Bar width in px, literal from source. */
	bar: number
}

export type Radius = { pt: number; label: string }

export type ShadowMethod = {
	title: string
	spec: string[]
	use: string
	variant: 'ring' | 'whisper' | 'alt'
}

export type DecisionRow = { task: string; how: string }

export type AntiPattern = { kind: 'no' | 'yes'; text: string }

export type Faq = { q: string; a: string }

export const hero = {
	version: 'Design System · v1.9.4',
	date: '· 2026.07',
	title: 'Kami',
	cn: '紙',
	tagline:
		'Good content deserves good paper. Kami is a layout design system for the AI era, making documents clear, readable, and memorable.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/tw93/kami' },
		{ label: 'X', href: 'https://x.com/HiTw93' },
	],
	tokens: [
		{ label: 'Canvas', value: '#f5f4ed' },
		{ label: 'Accent', value: '#1B365D' },
		{ label: 'Serif', value: 'Charter / TsangerJinKai' },
		{ label: 'Sans', value: '= Serif (single font per page)' },
	] satisfies HeroToken[],
}

export const demos: Demo[] = [
	{
		title: 'Equity Report',
		desc: 'Tesla Q1 2026 earnings analysis',
		image: '/kami/demos/demo-tesla.png',
		href: '/kami/demos/demo-tesla.pdf',
		alt: 'Tesla equity report',
	},
	{
		title: 'Resume',
		desc: 'Founder CV, 2 pages',
		image: '/kami/demos/demo-musk-resume.png',
		href: '/kami/demos/demo-musk-resume.pdf',
		alt: 'Musk resume',
	},
	{
		title: 'One-Pager',
		desc: 'Kami intro, white-paper print, 1 page',
		image: '/kami/demos/demo-kami-print.png',
		href: '/kami/demos/demo-kami-print.pdf',
		alt: 'Kami print one-pager',
	},
	{
		title: 'Slides',
		desc: 'Agent keynote, 6 slides',
		image: '/kami/demos/demo-agent-slides.png',
		href: '/kami/demos/demo-agent-slides.pdf',
		alt: 'Agent slides',
	},
]

export const showcase: Showcase[] = [
	{
		title: 'Kami',
		desc: 'Design system homepage',
		image: '/kami/showcase/kami-landing.png',
		href: 'https://kami.tw93.fun',
		alt: 'Kami landing page',
	},
	{
		title: 'Luo',
		desc: 'CJK reading font, Chinese',
		image: '/kami/showcase/luo-landing.png',
		href: 'https://luo.tw93.fun',
		alt: 'Luo landing page',
	},
	{
		title: 'Mole',
		desc: 'macOS system utility',
		image: '/kami/showcase/mole-landing.png',
		href: 'https://mole.fit',
		alt: 'Mole landing page',
	},
]

/** Install command blocks — each is a titled shell snippet. */
export const installBlocks: { comment: string; lines: string[] }[] = [
	{
		comment: '# Claude Code (v2.1.142+)',
		lines: ['/plugin marketplace add tw93/kami', '/plugin install kami@kami'],
	},
	{
		comment: '# Codex plugin marketplace',
		lines: ['codex plugin marketplace add tw93/kami', 'codex plugin add kami@kami'],
	},
]

export const manifesto =
	'Warm parchment canvas, ink blue as the sole accent, serif carries hierarchy, while hard shadows and flashy palettes recede. This system is built for printed matter: stable, clear, and composed. Parchment is the default; an opt-in white-paper variant prints any document on a white background while keeping the warmth in cards and tables.'

export const rules: Rule[] = [
	{ n: 1, text: 'Page background is parchment `#f5f4ed`, never pure white' },
	{ n: 2, text: 'Accent color is ink blue `#1B365D` only; no second chromatic hue' },
	{ n: 3, text: 'All grays are warm, yellow-brown undertone; no cool blue-grays' },
	{
		n: 4,
		text: 'English uses serif for headlines and body; Chinese uses serif headlines and sans body',
	},
	{ n: 5, text: 'Serif body at 400, headings at 500. Avoid synthetic bold' },
	{
		n: 6,
		text: 'Three line-height bands: tight titles 1.1-1.3 / dense 1.4-1.45 / reading 1.5-1.55',
	},
	{
		n: 7,
		text: 'Tag backgrounds must be solid hex; no `rgba`, WeasyPrint double-rectangle bug',
	},
	{ n: 8, text: 'Shadows: ring or whisper only, no hard drop shadows' },
]

export const canvasSwatches: Swatch[] = [
	{ name: 'Parchment', role: 'Page background, the emotional foundation', hex: '#F5F4ED' },
	{ name: 'Ivory', role: 'Cards / elevated surfaces', hex: '#FAF9F5' },
	{ name: 'Warm Sand', role: 'Button default / interactive surfaces', hex: '#E8E6DC' },
	{
		name: 'Deep Dark',
		role: 'Dark theme page base, not pure black',
		hex: '#141413',
		variant: 'dark',
	},
]

export const brandSwatches: Swatch[] = [
	{
		name: 'Ink Blue',
		role: 'Primary color · CTA · quote bar · section overline',
		hex: '#1B365D',
		variant: 'brand',
	},
	{ name: 'Ink Light', role: 'Links on dark surfaces · lighter variant', hex: '#2D5A8A' },
	{
		name: 'Dark Surface',
		role: 'Dark theme container · warm charcoal',
		hex: '#30302E',
		variant: 'dark',
	},
	{ name: 'Error', role: 'Error state, deep warm red', hex: '#B53333' },
]

export const neutralSwatches: Swatch[] = [
	{ name: 'Near Black', hex: '#141413' },
	{ name: 'Dark Warm', hex: '#3D3D3A' },
	{ name: 'Olive', hex: '#504E49' },
	{ name: 'Stone', hex: '#6B6A64' },
]

export const tintScale: Tint[] = [
	{ hex: '#EEF2F7', opacity: '0.08' },
	{ hex: '#E4ECF5', opacity: '0.14' },
	{ hex: '#E4ECF5', opacity: '0.18', isDefault: true },
	{ hex: '#D0DCE9', opacity: '0.22' },
	{ hex: '#D6E1EE', opacity: '0.30' },
]

export const typeFamilies: TypeFamily[] = [
	{
		kind: 'serif',
		glyph: 'Aa',
		role: 'Serif · Headlines + Body',
		name: 'Charter / TsangerJinKai02',
		use: 'Used for headlines, body text, pull quotes, and numeric emphasis. English uses Charter, Chinese uses TsangerJinKai02.',
	},
	{
		kind: 'mono',
		glyph: '</>',
		role: 'Mono · Code',
		name: 'JetBrains Mono',
		use: 'Code blocks, version numbers, hex values, tabular figures.',
	},
]

export const typeScale: TypeSpec[] = [
	{
		label: 'Display',
		sample: 'Good docs read clear, stable, poised',
		size: '36-48 pt',
		weight: 'weight 500',
		line: 'line 1.10',
		sampleClass:
			'text-[36px] font-medium leading-[1.1] tracking-[-0.5px] min-[880px]:text-[54px]',
	},
	{
		label: 'H1 Section',
		sample: 'Color System · Palette',
		size: '18-22 pt',
		weight: 'weight 500',
		line: 'line 1.20',
		sampleClass: 'text-[30px] font-medium leading-[1.2]',
	},
	{
		label: 'H2 Subsection',
		sample: 'Canvas · Warm Neutrals',
		size: '14-16 pt',
		weight: 'weight 500',
		line: 'line 1.25',
		sampleClass: 'text-[22px] font-medium leading-[1.25]',
	},
	{
		label: 'H3 Item',
		sample: 'Tag Tints · Solid Hex',
		size: '12-13 pt',
		weight: 'weight 500',
		line: 'line 1.30',
		sampleClass: 'text-[17px] font-medium leading-[1.3]',
	},
	{
		label: 'Body',
		sample: 'Ink blue covers no more than 5% of any page. Beyond that is clutter, not restraint. All grays have a yellow-brown undertone: R ≈ G > B is the rule of thumb.',
		size: '9.5-10 pt',
		weight: 'weight 400',
		line: 'line 1.55',
		sampleClass: 'text-secondary-foreground max-w-[540px] text-[14px] leading-[1.55]',
	},
	{
		label: 'Caption',
		sample: 'Figure notes, footnotes, annotation text. Color drops to olive or stone.',
		size: '8.5-9 pt',
		weight: 'weight 400',
		line: 'line 1.45',
		sampleClass: 'text-muted-foreground text-[12px] leading-[1.45]',
	},
	{
		label: 'Label',
		sample: 'Design System · v1.9.4',
		size: '7.5-8 pt',
		weight: 'weight 600',
		line: 'line 1.35',
		sampleClass:
			'text-primary text-[12px] font-medium tracking-[0.4px] uppercase leading-[1.35]',
	},
]

export const spacingScale: SpaceRow[] = [
	{ name: 'xs', value: '2-3 pt', use: 'Inline elements', bar: 6 },
	{ name: 'sm', value: '4-5 pt', use: 'Tag padding · tight layout', bar: 12 },
	{ name: 'md', value: '8-10 pt', use: 'Component internals', bar: 24 },
	{ name: 'lg', value: '16-20 pt', use: 'Between components · card padding', bar: 48 },
	{ name: 'xl', value: '24-32 pt', use: 'Section title margins', bar: 72 },
	{ name: '2xl', value: '40-60 pt', use: 'Between major sections', bar: 140 },
	{ name: '3xl', value: '80-120 pt', use: 'Between long-doc chapters', bar: 240 },
]

export const radii: Radius[] = [
	{ pt: 4, label: 'Tight' },
	{ pt: 6, label: 'Code block' },
	{ pt: 8, label: 'Default card' },
	{ pt: 12, label: 'Container' },
	{ pt: 16, label: 'Feature card' },
	{ pt: 24, label: 'Large container' },
	{ pt: 32, label: 'Hero' },
]

export const shadowMethods: ShadowMethod[] = [
	{
		title: 'Ring Shadow',
		spec: ['0 0 0 1pt var(--ring-warm)'],
		use: 'Buttons · card hover',
		variant: 'ring',
	},
	{
		title: 'Whisper Shadow',
		spec: ['0 4pt 24pt rgba(0,0,0,0.05)'],
		use: 'Gentle elevation · feature cards',
		variant: 'whisper',
	},
	{
		title: 'Light ⇌ Dark',
		spec: ['parchment ⇌ deep-dark'],
		use: 'Section-level · strongest contrast',
		variant: 'alt',
	},
]

/** Live-component demo copy for the Atomic Modules section. */
export const componentDemos = {
	buttons: { title: 'Buttons', hint: 'ring shadow instead of hard drop · 8pt radius' },
	tags: { title: 'Tags, three levels', hint: 'solid hex · pick from weak to strong' },
	quote: {
		title: 'Quote',
		hint: 'left 2pt brand solid + olive text',
		text: "A thousand no's for every yes, prefer clarity over decoration.",
	},
	metric: {
		title: 'Metric',
		hint: 'serif number + sans label · tabular-nums',
		items: [
			{ value: '8', label: 'Doc types' },
			{ value: '1', label: 'Accent' },
			{ value: '8', label: 'Rules' },
		],
	},
	sectionTitle: {
		title: 'Section Title',
		hint: 'serif 500 · 15pt · size-led hierarchy, no decoration',
		sample: 'Selected Works · Projects',
	},
	dashList: {
		title: 'Dash List',
		hint: 'dash instead of bullet · editorial tone',
		items: [
			'Warm parchment, never pure white',
			'Ink blue accent, no second color',
			'Serif carries authority',
		],
	},
	codeBlock: { title: 'Code Block', hint: 'ivory bg + 0.5pt border + 6pt radius' },
	featured: {
		title: 'Featured Card',
		hint: 'whisper shadow + 16pt radius',
		cardTitle: 'Tesla Company Profile · One-Pager',
		cardDesc: 'Single A4 page · 4 metric cards + 3 body sections + timeline',
		tags: ['English', 'A4 x 1', 'Ink Blue'],
	},
}

export const decisionRows: DecisionRow[] = [
	{ task: 'Large headline', how: 'serif `500`, size by hierarchy, line-height `1.10-1.30`' },
	{ task: 'Reading body', how: 'serif `400`, `9.5-10 pt`, line-height `1.55`' },
	{ task: 'Emphasize a number', how: '`color: var(--brand)`, not bold' },
	{ task: 'Separate two sections', how: '`2.5pt` brand left bar, or `0.5pt` warm-gray dashed' },
	{ task: 'Quote someone', how: 'Left `2pt` brand solid + olive text' },
	{ task: 'Show code', how: 'Ivory bg + `0.5pt` border + `6pt` radius + mono font' },
	{
		task: 'Primary vs secondary',
		how: 'Primary: brand fill + ivory text; Secondary: warm-sand + charcoal',
	},
	{
		task: 'Mark a special card',
		how: '`border: 0.5pt solid var(--brand)` or `border-left: 3pt`',
	},
	{
		task: 'Begin a section',
		how: 'Serif `500` · `15pt` · size-led hierarchy, no decoration needed',
	},
	{
		task: 'Document cover',
		how: 'Single page, Display size + right-aligned author/date + generous whitespace',
	},
	{
		task: 'Data card',
		how: 'Ivory bg + 8pt radius + serif large number, ink blue + sans small label',
	},
]

export const antiPatterns: AntiPattern[] = [
	{
		kind: 'no',
		text: 'Use `#ffffff` pure white or `#f3f4f6` cool gray as page background. It makes the page feel brittle and weakens the warm parchment character.',
	},
	{
		kind: 'yes',
		text: 'Always use `#f5f4ed` parchment. Set `@page background` to the same color to avoid white edges when printing.',
	},
	{
		kind: 'no',
		text: 'Use `rgba(27,54,93,0.18)` for tags. WeasyPrint renders padding and glyph areas at different opacity, creating double rectangles.',
	},
	{
		kind: 'yes',
		text: 'Use the tint lookup table for equivalent solid hex `#E4ECF5`. The rendering stays clean and the color remains stable.',
	},
	{
		kind: 'no',
		text: 'Set headlines to `font-weight: 600` or heavier synthetic bold. Synthetic bold blurs strokes and degrades typographic quality.',
	},
	{
		kind: 'yes',
		text: 'Body 400, headings 500 (real W05). For more presence, use size or a brand left bar, never synthetic bold.',
	},
	{
		kind: 'no',
		text: 'Use hard drop shadow `0 2px 8px rgba(0,0,0,0.3)`. Visually heavy and likely to print as dark blobs.',
	},
	{
		kind: 'yes',
		text: 'Ring shadow `0 0 0 1pt` or whisper `rgba 0.05`, or simply alternate light and dark sections.',
	},
]

export const origins: string[] = [
	'I like investing in US equities and ask Claude to write research reports all the time. Every output landed in the same default-doc look: gray, flat, a different layout each session. The structure was hard to scan, the formatting felt dated, and nothing about the page made me want to keep reading. So I started fixing the typography, the palette, the spacing, one rule at a time, until the report became a page I actually enjoyed.',
	"Later I needed to present “The Agent You Don't Know: Principles, Architecture and Engineering Practice.” I already had the document and didn't want to build slides from scratch, so I used Claude Design to lay it out in my own style, tweaked it round after round, and eventually got it to a place I was happy with. That process added inline SVG charts, a unified warm palette, and a tighter editorial rhythm. It kept growing until it covered every document I regularly ship, so I kept abstracting the process, and it became kami: one quiet design system I can hand to any agent and trust the output.",
]

export const faqs: Faq[] = [
	{
		q: 'What is Kami?',
		a: 'A constraint-based design system for AI-generated documents. One accent color, serif-led hierarchy, warm parchment canvas. Give any LLM agent a brief, get a composed layout back. It also doubles as a visual brief you can hand to image renderers like Claude Design or GPT Canvas.',
	},
	{
		q: 'What can it produce?',
		a: 'Eight document templates: one-pagers, long documents, letters, portfolios, resumes, slides, equity reports, and changelogs, plus a landing-page system (EN + CN + KO). Plus 18 inline SVG diagram types for visual explanations. Outputs are HTML that can be exported to PDF, PNG, or editable PPTX slide decks.',
	},
	{
		q: 'How do I set it up?',
		a: 'Claude Code (v2.1.142+): /plugin marketplace add tw93/kami then /plugin install kami@kami. Codex: codex plugin marketplace add tw93/kami then codex plugin add kami@kami. Generic agents that read ~/.agents: npx skills add tw93/kami/plugins/kami -a universal -g -y. Claude Desktop: download the release asset kami.zip from GitHub Releases, not the Source code ZIP, and upload it in Customize > Skills. No slash command needed, the skill auto-triggers from natural requests.',
	},
	{
		q: 'What languages does it support?',
		a: 'English, Chinese, Japanese, and Korean. Each language uses a dedicated serif font: Charter for English, TsangerJinKai02 for Chinese, YuMincho for Japanese, Source Han Serif K for Korean. Letter-spacing, line-height, and font sizes are tuned per language for print quality. Japanese and Korean are best-effort CJK paths with visual QA before delivery.',
	},
]

export const footer = {
	name: 'Kami · 紙',
	sub: 'Good content deserves good paper.',
	github: 'https://github.com/tw93/kami',
	docs: 'One-Pager · Long Doc · Letter · Portfolio · Resume · Slides',
	colophon: 'Serif carries authority, sans function, warm grays rhythm, ink blue focus.',
}
