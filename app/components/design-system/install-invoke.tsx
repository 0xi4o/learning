import { installBlocks } from '~/data/design-system'

import { DSSection, SectionHead } from './primitives'

/** Inline `<code>` chip — brand text on a faint brand tint. */
function Code({ children }: { children: React.ReactNode }) {
	return (
		<code className='bg-accent text-primary rounded-[2px] px-1.5 py-px font-mono text-[0.85em]'>
			{children}
		</code>
	)
}

export function InstallInvoke() {
	return (
		<DSSection>
			<SectionHead
				num='01 · Usage'
				title='Install & Invoke'
				lede='Tell Claude what you need, for example “build me a resume”, “make a one-pager for my startup”, or “design a slide deck for my talk”. The skill auto-triggers, no slash command needed.'
			/>

			<pre className='bg-card border-border text-foreground overflow-x-auto rounded-md border p-3.5 font-mono text-[12px] leading-[1.55]'>
				{installBlocks.map((block, i) => (
					<span key={block.comment}>
						{i > 0 ? '\n\n' : ''}
						<span className='text-muted-foreground'>{block.comment}</span>
						{'\n'}
						{block.lines.join('\n')}
					</span>
				))}
			</pre>

			<p className='text-muted-foreground mt-4 text-[14px] leading-[1.55]'>
				Generic agents that read from <Code>~/.agents/</Code>:{' '}
				<Code>npx skills add tw93/kami/plugins/kami -a universal -g -y</Code>. The plugin
				path exposes the generated lightweight skill bundle; a bare <Code>tw93/kami</Code>{' '}
				installs only SKILL.md.
			</p>
			<p className='text-muted-foreground mt-3 text-[14px] leading-[1.55]'>
				Claude Desktop: download the release asset{' '}
				<a
					href='https://github.com/tw93/kami/releases/latest/download/kami.zip'
					className='text-primary font-medium'
				>
					kami.zip
				</a>
				, not GitHub's Source code ZIP, then upload it in Customize &gt; Skills &gt; “+”
				&gt; Create skill.
			</p>
		</DSSection>
	)
}
