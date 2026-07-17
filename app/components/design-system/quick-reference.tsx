import { decisionRows } from '~/data/design-system'

import { DSSection, Inline, SectionHead } from './primitives'

export function QuickReference() {
	return (
		<DSSection>
			<SectionHead
				num='08 · Decision Lookup'
				title='Quick Reference'
				lede="When in doubt about what to use, consult this table. If it's not here, go back to first principles."
			/>
			<table className='w-full border-collapse text-[14px]'>
				<thead>
					<tr className='border-border text-muted-foreground border-b text-left text-[12px] font-medium tracking-[0.8px] uppercase'>
						<th className='py-3 pr-4 align-top'>Task</th>
						<th className='py-3 pr-4 align-top'>How</th>
					</tr>
				</thead>
				<tbody>
					{decisionRows.map((row) => (
						<tr key={row.task} className='border-border border-b align-top'>
							<td className='text-foreground w-[38%] py-3 pr-4 font-serif text-[14px] font-medium'>
								{row.task}
							</td>
							<td className='text-secondary-foreground py-3 pr-4 leading-[1.55]'>
								<Inline>{row.how}</Inline>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</DSSection>
	)
}
