import { radii, shadowMethods, spacingScale } from '~/data/design-system'
import { cn } from '~/lib/utils'

import { DSSection, SectionHead, Subhead } from './primitives'

export function SpacingShape() {
	return (
		<DSSection>
			<SectionHead
				num='05 · Spacing & Shape'
				title='Rhythm & Form'
				lede='Base unit: 4pt. Denser layouts get smaller margins; more formal documents get larger ones.'
			/>

			<table className='w-full border-collapse'>
				<thead>
					<tr className='border-border text-muted-foreground border-b text-left font-serif text-[13px] font-medium'>
						<th className='py-3.5 pr-4'>Scale</th>
						<th className='py-3.5 pr-4'>Value</th>
						<th className='py-3.5 pr-4'>Use</th>
						<th className='hidden min-[880px]:table-cell' />
					</tr>
				</thead>
				<tbody>
					{spacingScale.map((row) => (
						<tr key={row.name} className='border-border border-b align-middle'>
							<td className='text-foreground w-[120px] py-3.5 pr-4 font-serif text-[15px] font-medium'>
								{row.name}
							</td>
							<td className='text-muted-foreground w-[130px] py-3.5 pr-4 font-mono text-[13px]'>
								{row.value}
							</td>
							<td className='text-muted-foreground py-3.5 pr-4 text-[13px]'>
								{row.use}
							</td>
							<td className='hidden w-[280px] py-3.5 min-[880px]:table-cell'>
								<span
									className='bg-muted block h-1 rounded-[2px]'
									style={{ width: `${row.bar}px` }}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Subhead>Radii</Subhead>
			<div className='mt-1 flex flex-wrap gap-4'>
				{radii.map((r) => (
					<div key={r.pt} className='text-center'>
						{/* Literal border-radius documents the actual pt value. */}
						<div
							className='border-border bg-card mb-2 h-14 w-14 border min-[880px]:h-[72px] min-[880px]:w-[72px]'
							style={{ borderRadius: `${r.pt}px` }}
						/>
						<div className='text-secondary-foreground font-mono text-[12px]'>
							<b className='text-primary font-medium'>{r.pt}</b> pt
						</div>
						<div className='text-muted-foreground mt-0.5 text-[12px]'>{r.label}</div>
					</div>
				))}
			</div>

			<Subhead>Depth: Three Shadow Methods</Subhead>
			<p className='text-muted-foreground mb-3 text-[14px] leading-[1.55]'>
				Kami avoids traditional hard shadows. Depth comes from ring shadows, whisper
				shadows, and light-dark alternation.
			</p>
			<div className='grid grid-cols-1 gap-4 min-[880px]:grid-cols-3'>
				{shadowMethods.map((m) => (
					<div
						key={m.title}
						className={cn(
							'rounded-xl px-5 py-6',
							m.variant === 'ring' && 'bg-card ring-border ring-1',
							m.variant === 'whisper' &&
								'bg-card shadow-[0_4px_24px_rgba(0,0,0,0.05)]',
							m.variant === 'alt' && 'bg-foreground text-background',
						)}
					>
						<p
							className={cn(
								'mb-1 font-serif text-[15px] font-medium',
								m.variant === 'alt' ? 'text-background' : 'text-foreground',
							)}
						>
							{m.title}
						</p>
						<p
							className={cn(
								'font-mono text-[12px] leading-[1.5]',
								m.variant === 'alt'
									? 'text-background/70'
									: 'text-muted-foreground',
							)}
						>
							{m.spec.join(' ')}
							<br />
							&nbsp;
							<br />
							{m.use}
						</p>
					</div>
				))}
			</div>
		</DSSection>
	)
}
