import { DSSection, SectionHead } from './primitives'

/**
 * Live specimen for `app/typeset.css` — the `.typeset` class that renders markdown/prose. Exercises
 * the elements Kami actually restyles (headings at weight 500, dark-warm underlined links, ink-blue
 * quote bar, tint-fill `mark`, inline/block code) so the design tokens can be eyeballed in light
 * and dark.
 */
export function ProseTypeset() {
	return (
		<DSSection>
			<SectionHead
				num='Prose · Typeset'
				title='Markdown & Prose'
				lede='Long-form content rendered through the .typeset class — the same tokens as the rest of Kami, applied to raw HTML.'
			/>

			<div className='border-border bg-card rounded-xl border p-6 min-[880px]:p-10'>
				<div className='typeset'>
					<h1>The Composed Document</h1>
					<p>
						Kami is built for printed matter: warm parchment, a single ink-blue accent,
						and serif that <strong>carries the hierarchy</strong>. Body copy reads at a
						calm measure, and <em>emphasis</em> stays typographic rather than loud. Read
						the <a href='#prose-typeset'>full principles</a> for the rationale.
					</p>

					<h2>Why restraint reads as authority</h2>
					<p>
						You can <mark>highlight a key phrase</mark> without a second hue, drop in a
						term like <code>--primary</code>, or press <kbd>⌘</kbd> <kbd>K</kbd> to jump
						around. Nothing shouts.
					</p>

					<blockquote>
						<p>
							Parchment is the default; the accent is scarce on purpose. Take the
							color out and the page should still feel composed.
						</p>
					</blockquote>

					<h3>What the system covers</h3>
					<ul>
						<li>Warm neutrals only — no cool blue-grays.</li>
						<li>
							Serif at <strong>400 body / 500 headings</strong>, never synthetic bold.
						</li>
						<li>Ring or whisper shadows, never hard drop shadows.</li>
					</ul>

					<ol>
						<li>Set the parchment canvas.</li>
						<li>Reserve ink-blue for the one focal accent.</li>
						<li>Let type and whitespace do the rest.</li>
					</ol>

					<ul className='contains-task-list'>
						<li className='task-list-item'>
							<input type='checkbox' checked readOnly /> Tokens map to Kami
						</li>
						<li className='task-list-item'>
							<input type='checkbox' readOnly /> Dark mode verified
						</li>
					</ul>

					<pre>
						<code>{`.typeset a {
  color: var(--typeset-link); /* dark-warm, ink-light on dark */
}`}</code>
					</pre>

					<table>
						<thead>
							<tr>
								<th>Role</th>
								<th>Token</th>
								<th align='right'>Hex</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Accent</td>
								<td>
									<code>--primary</code>
								</td>
								<td align='right'>#1B365D</td>
							</tr>
							<tr>
								<td>Canvas</td>
								<td>
									<code>--background</code>
								</td>
								<td align='right'>#F5F4ED</td>
							</tr>
						</tbody>
					</table>

					<hr />

					<p>
						Toggle the theme: links lift to ink-light, surfaces and tints adapt — no
						per-component overrides.
					</p>
				</div>
			</div>
		</DSSection>
	)
}
