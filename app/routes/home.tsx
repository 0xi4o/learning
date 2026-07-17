import Hero from '~/components/landing/hero'
import { LandingFooter } from '~/components/landing/landing-footer'
import { RecentPosts } from '~/components/landing/recent-posts'
import { RecentProjects } from '~/components/landing/recent-projects'
import { profile } from '~/data/portfolio'

export function meta() {
	return [
		{ title: `${profile.name} · ${profile.role}` },
		{ name: 'description', content: profile.tagline },
	]
}

export default function Home() {
	return (
		<>
			<Hero />
			<RecentPosts />
			<RecentProjects />
			<LandingFooter />
		</>
	)
}
