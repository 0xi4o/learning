import { type HeroToken } from './design-system'

export const hero = {
	eyebrow: 'About Me',
	// date: "· 2026.07",
	title: 'Ilango Rajagopal',
	tagline:
		'Good content deserves good paper. Kami is a layout design system for the AI era, making documents clear, readable, and memorable.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/0xi4o' },
		{ label: 'X', href: 'https://x.com/0xi4o' },
	],
	tokens: [
		{ label: 'Canvas', value: '#f5f4ed' },
		{ label: 'Accent', value: '#1B365D' },
		{ label: 'Serif', value: 'Charter / TsangerJinKai' },
		{ label: 'Sans', value: '= Serif (single font per page)' },
	] satisfies HeroToken[],
}
