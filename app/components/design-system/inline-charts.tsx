import { DSSection, SectionHead } from './primitives'

/**
 * The four inline SVG diagrams are ported verbatim from the source page. Their fills are literal
 * Kami palette values — these are illustrative charts (the kind Kami embeds into documents), so
 * they intentionally do not recolor in dark mode. Only the card chrome around them uses semantic
 * tokens.
 */

function ChartCard({
	label,
	caption,
	children,
}: {
	label: string
	caption: string
	children: React.ReactNode
}) {
	return (
		<div className='border-border bg-card rounded-xl border px-4 pt-4 pb-3'>
			<div className='text-primary mb-2.5 font-mono text-[12px] font-medium tracking-[0.3px] uppercase'>
				{label}
			</div>
			<svg
				viewBox='0 0 280 160'
				xmlns='http://www.w3.org/2000/svg'
				className='block h-auto w-full'
			>
				{children}
			</svg>
			<p className='text-muted-foreground mt-2 text-[12px] leading-[1.4]'>{caption}</p>
		</div>
	)
}

export function InlineCharts() {
	return (
		<DSSection>
			<SectionHead
				num='07 · Diagrams'
				title='Inline Charts'
				lede='Eighteen inline SVG diagram types covering architecture, process, and data chart scenarios. Tell Claude which type you need and it embeds directly into the document, colors and fonts following the Kami design language.'
			/>

			<div className='grid grid-cols-1 gap-5 min-[880px]:grid-cols-2'>
				<ChartCard
					label='Architecture'
					caption='System components and connections, one focal node'
				>
					<rect width='280' height='160' fill='#f5f4ed' />
					<path
						d='M 84,79.5 L 103,79.5 L 103,78 L 107,80 L 103,82 L 103,80.5 L 84,80.5 Z'
						fill='#6b6a64'
					/>
					<path
						d='M 172,79.5 L 191,79.5 L 191,78 L 195,80 L 191,82 L 191,80.5 L 172,80.5 Z'
						fill='#504e49'
					/>
					<rect
						x='20'
						y='58'
						width='64'
						height='44'
						rx='3'
						fill='#f5f4ed'
						stroke='#6b6a64'
						strokeWidth='0.8'
					/>
					<text
						x='52'
						y='76'
						textAnchor='middle'
						fontSize='7'
						letterSpacing='0.5'
						fill='#6b6a64'
					>
						CLIENT
					</text>
					<text
						x='52'
						y='91'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#141413'
					>
						Browser
					</text>
					<rect
						x='108'
						y='58'
						width='64'
						height='44'
						rx='3'
						fill='#EEF2F7'
						stroke='#1B365D'
						strokeWidth='1'
					/>
					<text
						x='140'
						y='76'
						textAnchor='middle'
						fontSize='7'
						letterSpacing='0.5'
						fill='#1B365D'
					>
						SERVICE
					</text>
					<text
						x='140'
						y='91'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#141413'
					>
						API
					</text>
					<rect
						x='196'
						y='58'
						width='64'
						height='44'
						rx='3'
						fill='#f5f4ed'
						stroke='#504e49'
						strokeWidth='0.8'
					/>
					<text
						x='228'
						y='76'
						textAnchor='middle'
						fontSize='7'
						letterSpacing='0.5'
						fill='#6b6a64'
					>
						DATA
					</text>
					<text
						x='228'
						y='91'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#141413'
					>
						Database
					</text>
				</ChartCard>

				<ChartCard
					label='Flowchart'
					caption='Decision branches, yes/no paths, focal on success'
				>
					<rect width='280' height='160' fill='#f5f4ed' />
					<rect x='100' y='8' width='80' height='28' rx='14' fill='#141413' />
					<text x='140' y='25' textAnchor='middle' fontSize='9' fill='#f5f4ed'>
						Start
					</text>
					<path
						d='M 139.5,36 L 139.5,48 L 138,48 L 140,52 L 142,48 L 140.5,48 L 140.5,36 Z'
						fill='#504e49'
					/>
					<polygon
						points='140,52 172,72 140,92 108,72'
						fill='#f5f4ed'
						stroke='#141413'
						strokeWidth='1'
					/>
					<text x='140' y='76' textAnchor='middle' fontSize='8' fill='#141413'>
						Valid?
					</text>
					<path
						d='M 172,71.5 L 204,71.5 L 204,70 L 208,72 L 204,74 L 204,72.5 L 172,72.5 Z'
						fill='#1B365D'
					/>
					<text x='186' y='68' textAnchor='middle' fontSize='8' fill='#1B365D'>
						Yes
					</text>
					<rect
						x='208'
						y='56'
						width='64'
						height='32'
						rx='4'
						fill='#EEF2F7'
						stroke='#1B365D'
						strokeWidth='1'
					/>
					<text x='240' y='75' textAnchor='middle' fontSize='9' fill='#141413'>
						Process
					</text>
					<path
						d='M 139.5,92 L 139.5,112 L 138,112 L 140,116 L 142,112 L 140.5,112 L 140.5,92 Z'
						fill='#504e49'
					/>
					<text x='151' y='106' fontSize='8' fill='#504e49'>
						No
					</text>
					<rect
						x='96'
						y='116'
						width='88'
						height='32'
						rx='4'
						fill='#f5f4ed'
						stroke='#6b6a64'
						strokeWidth='0.8'
					/>
					<text x='140' y='134' textAnchor='middle' fontSize='9' fill='#504e49'>
						Reject
					</text>
				</ChartCard>

				<ChartCard
					label='Bar Chart'
					caption='Quarterly revenue comparison, gradient or single color'
				>
					<rect width='280' height='160' fill='#f5f4ed' />
					<rect x='18' y='78' width='42' height='50' rx='3' fill='#6b6a64' />
					<rect x='78' y='62' width='42' height='66' rx='3' fill='#504e49' />
					<rect x='138' y='44' width='42' height='84' rx='3' fill='#2d4e7a' />
					<rect x='198' y='30' width='42' height='98' rx='3' fill='#1B365D' />
					<text x='39' y='145' textAnchor='middle' fontSize='10' fill='#6b6a64'>
						Q1
					</text>
					<text x='99' y='145' textAnchor='middle' fontSize='10' fill='#504e49'>
						Q2
					</text>
					<text x='159' y='145' textAnchor='middle' fontSize='10' fill='#4d4c48'>
						Q3
					</text>
					<text x='219' y='145' textAnchor='middle' fontSize='10' fill='#4d4c48'>
						Q4
					</text>
					<text
						x='39'
						y='73'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#6b6a64'
					>
						180
					</text>
					<text
						x='99'
						y='57'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#504e49'
					>
						220
					</text>
					<text
						x='159'
						y='39'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#2d4e7a'
					>
						195
					</text>
					<text
						x='219'
						y='25'
						textAnchor='middle'
						fontSize='9'
						fontWeight='600'
						fill='#1B365D'
					>
						240
					</text>
				</ChartCard>

				<ChartCard
					label='Donut Chart'
					caption='Revenue structure breakdown, supports 3–6 segments'
				>
					<rect width='280' height='160' fill='#f5f4ed' />
					<path
						d='M 80,25 A 55,55 0 1,1 47.7,124.5 L 62.4,104.3 A 30,30 0 1,0 80,50 Z'
						fill='#1B365D'
						stroke='white'
						strokeWidth='1.5'
					/>
					<path
						d='M 47.7,124.5 A 55,55 0 0,1 35.5,47.7 L 55.7,62.4 A 30,30 0 0,0 62.4,104.3 Z'
						fill='#504e49'
						stroke='white'
						strokeWidth='1.5'
					/>
					<path
						d='M 35.5,47.7 A 55,55 0 0,1 80,25 L 80,50 A 30,30 0 0,0 55.7,62.4 Z'
						fill='#6b6a64'
						stroke='white'
						strokeWidth='1.5'
					/>
					<text
						x='80'
						y='77'
						textAnchor='middle'
						fontSize='13'
						fontWeight='600'
						fill='#1B365D'
					>
						60%
					</text>
					<text x='80' y='92' textAnchor='middle' fontSize='10' fill='#504e49'>
						Primary
					</text>
					<rect x='150' y='46' width='10' height='10' rx='2' fill='#1B365D' />
					<text x='165' y='55' fontSize='11' fill='#4d4c48'>
						Core revenue · 60%
					</text>
					<rect x='150' y='72' width='10' height='10' rx='2' fill='#504e49' />
					<text x='165' y='81' fontSize='11' fill='#4d4c48'>
						Services · 25%
					</text>
					<rect x='150' y='98' width='10' height='10' rx='2' fill='#6b6a64' />
					<text x='165' y='107' fontSize='11' fill='#4d4c48'>
						Other · 15%
					</text>
				</ChartCard>
			</div>
		</DSSection>
	)
}
