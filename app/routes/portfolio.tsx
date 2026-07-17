import { About } from '~/components/portfolio/about'
import { Contact } from '~/components/portfolio/contact'
import { Hero } from '~/components/portfolio/hero'
import { PortfolioNav } from '~/components/portfolio/portfolio-nav'
import { Eyebrow, Section } from '~/components/portfolio/primitives'
import { ProjectCase } from '~/components/portfolio/project-case'
import { SelectedWorks } from '~/components/portfolio/selected-works'
import { profile, projects } from '~/data/portfolio'

export function meta() {
	return [
		{ title: `${profile.name} · Portfolio` },
		{ name: 'description', content: profile.tagline },
	]
}

export default function Portfolio() {
	return (
		<>
			<PortfolioNav />
			<main>
				<Hero />
				<About />

				<Section id='work' className='pb-4'>
					<Eyebrow>Case Studies</Eyebrow>
					<div className='mt-8'>
						{projects.map((project) => (
							<ProjectCase key={project.num} project={project} />
						))}
					</div>
				</Section>

				<SelectedWorks />
				<Contact />
			</main>
		</>
	)
}
