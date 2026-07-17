import { type HeroToken } from './design-system'

export const hero = {
	eyebrow: 'About Me',
	tagline: 'Software Engineer, Tinkerer, Coffee Nerd, Adventure Motorcyclist',
	title: 'Ilango Rajagopal',
	links: [
		{ label: 'GitHub', href: 'https://github.com/0xi4o' },
		{ label: 'X', href: 'https://x.com/0xi4o' },
		{ label: 'Instagram', href: 'https://instagram.com/ilango.builds.stuff' },
	],
	tokens: [
		{ label: 'Canvas', value: '#f5f4ed' },
		{ label: 'Accent', value: '#1B365D' },
		{ label: 'Serif', value: 'Charter / TsangerJinKai' },
		{ label: 'Sans', value: '= Serif (single font per page)' },
	] satisfies HeroToken[],
}
