import {
	brandSwatches,
	canvasSwatches,
	neutralSwatches,
	tintScale,
	type Swatch,
} from '~/data/design-system'
import { cn } from '~/lib/utils'

import { DSSection, Inline, SectionHead, Subhead } from './primitives'

/**
 * A single palette swatch. The chip paints literal Kami hex (from data) because documenting the
 * palette IS this page's subject — the card, text and border around it stay on semantic tokens.
 */
function SwatchCard({ swatch, showRole = true }: { swatch: Swatch; showRole?: boolean }) {
	return (
		<div className='border-border bg-card overflow-hidden rounded-lg border transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
			<div className='border-border h-24 border-b' style={{ background: swatch.hex }} />
			<div className='px-3.5 pt-3 pb-3.5'>
				<p
					className={cn(
						'text-[15px] leading-[1.25] font-medium',
						swatch.variant === 'brand' ? 'text-primary' : 'text-foreground',
					)}
				>
					{swatch.name}
				</p>
				{showRole && swatch.role ? (
					<p className='text-muted-foreground mt-0.5 mb-1.5 text-[12px] leading-[1.4]'>
						{swatch.role}
					</p>
				) : null}
				<span className='text-muted-foreground font-mono text-[12px] tracking-[0.4px]'>
					{swatch.hex}
				</span>
			</div>
		</div>
	)
}

export function ColorSystem() {
	return (
		<DSSection>
			<SectionHead
				num='03 · Color'
				title='Warm Restraint'
				lede={
					<>
						One accent + warm neutrals + zero cool colors. Ink blue covers no more than{' '}
						<b className='text-secondary-foreground font-medium'>5%</b> of any page.
						Beyond that is clutter, not restraint.
					</>
				}
			/>

			<Subhead>Canvas</Subhead>
			<div className='grid grid-cols-2 gap-3.5 min-[880px]:grid-cols-4'>
				{canvasSwatches.map((s) => (
					<SwatchCard key={s.name} swatch={s} />
				))}
			</div>

			<Subhead>Brand</Subhead>
			<div className='grid grid-cols-2 gap-3.5 min-[880px]:grid-cols-4'>
				{brandSwatches.map((s) => (
					<SwatchCard key={s.name} swatch={s} />
				))}
			</div>

			<Subhead>Warm Neutrals</Subhead>
			<div className='grid grid-cols-2 gap-3.5 min-[880px]:grid-cols-4'>
				{neutralSwatches.map((s) => (
					<SwatchCard key={s.name} swatch={s} showRole={false} />
				))}
			</div>

			<Subhead>Tag Tints: rgba to solid hex</Subhead>
			<p className='text-muted-foreground mb-4 text-[14px] leading-[1.55]'>
				<Inline>
					Solid hex equivalents of ink blue `#1B365D` on parchment. Tags use solid hex
					instead of `rgba()` to avoid a WeasyPrint double-rectangle rendering bug.
				</Inline>
			</p>
			<div className='grid grid-cols-3 gap-2 min-[880px]:grid-cols-5 min-[880px]:gap-3'>
				{tintScale.map((tint, i) => (
					<div
						key={i}
						className={cn(
							'border-border bg-card rounded-lg border px-4 pt-4 pb-3.5',
							tint.isDefault &&
								'outline-primary outline-[1.5px] -outline-offset-[1.5px]',
						)}
					>
						<span
							className={cn(
								'mb-2 block h-3 text-[12px] font-medium tracking-[0.8px] uppercase',
								tint.isDefault ? 'text-primary' : 'text-transparent',
							)}
						>
							Default
						</span>
						<span
							className='text-primary mb-2.5 inline-block rounded-[3px] px-2 py-0.5 text-[12px] font-medium tracking-[0.4px]'
							style={{ background: tint.hex }}
						>
							Tag sample
						</span>
						<p
							className={cn(
								'mb-0.5 text-[14px]',
								tint.isDefault ? 'text-primary' : 'text-muted-foreground',
							)}
						>
							{tint.opacity}
						</p>
						<span className='text-muted-foreground font-mono text-[12px]'>
							{tint.hex}
						</span>
					</div>
				))}
			</div>
		</DSSection>
	)
}
