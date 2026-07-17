import { AntiPatterns } from '~/components/design-system/anti-patterns'
import { AtomicModules } from '~/components/design-system/atomic-modules'
import { BuiltWithKami } from '~/components/design-system/built-with-kami'
import { ColorSystem } from '~/components/design-system/color-system'
import { DesignOrigins } from '~/components/design-system/design-origins'
import { DesignPrinciples } from '~/components/design-system/design-principles'
import { DSFooter } from '~/components/design-system/ds-footer'
import { DSHero } from '~/components/design-system/ds-hero'
import { Faq } from '~/components/design-system/faq'
import { InlineCharts } from '~/components/design-system/inline-charts'
import { InstallInvoke } from '~/components/design-system/install-invoke'
import { OutputSamples } from '~/components/design-system/output-samples'
import { ProseTypeset } from '~/components/design-system/prose-typeset'
import { QuickReference } from '~/components/design-system/quick-reference'
import { SpacingShape } from '~/components/design-system/spacing-shape'
import { TypeSystem } from '~/components/design-system/type-system'

export function meta() {
	return [
		{ title: 'Kami · Document Design System for AI Agents' },
		{
			name: 'description',
			content:
				'Kami — a warm parchment design system for AI-assisted professional documents, shaped by one accent color, serif-led hierarchy, and editorial whitespace.',
		},
	]
}

export default function DesignSystem() {
	return (
		<>
			<DSHero />
			<OutputSamples />
			<BuiltWithKami />
			<InstallInvoke />
			<DesignPrinciples />
			<ColorSystem />
			<TypeSystem />
			<ProseTypeset />
			<SpacingShape />
			<AtomicModules />
			<InlineCharts />
			<QuickReference />
			<AntiPatterns />
			<DesignOrigins />
			<Faq />
			<DSFooter />
		</>
	)
}
