import { Fragment } from 'react'

import { cn } from '~/lib/utils'

/**
 * Render a string with `backtick`-delimited spans as inline code chips — brand text on a faint
 * brand tint, matching the source page's `<code>`.
 */
export function Inline({ children }: { children: string }) {
	const parts = children.split(/(`[^`]+`)/g)
	return (
		<>
			{parts.map((part, i) =>
				part.startsWith('`') && part.endsWith('`') ? (
					<code
						key={i}
						className='bg-accent text-primary rounded-[2px] px-1.5 py-px font-mono text-[0.85em]'
					>
						{part.slice(1, -1)}
					</code>
				) : (
					<Fragment key={i}>{part}</Fragment>
				),
			)}
		</>
	)
}

/** Section wrapper — vertical rhythm only; the base layout supplies the column. */
export function DSSection({
	id,
	className,
	children,
}: {
	id?: string
	className?: string
	children: React.ReactNode
}) {
	return (
		<section id={id} className={cn('mb-14 min-[880px]:mb-[72px]', className)}>
			{children}
		</section>
	)
}

/** Numbered ink-blue overline + serif title + optional lede — Kami's section head. */
export function SectionHead({
	num,
	title,
	lede,
}: {
	num: string
	title: string
	lede?: React.ReactNode
}) {
	return (
		<div className='mb-6'>
			<p className='text-primary text-[14px] font-medium tracking-[0.4px]'>{num}</p>
			<h2 className='text-foreground mt-1.5 text-[26px] leading-[1.2] font-medium tracking-[0.4px] min-[880px]:text-[32px]'>
				{title}
			</h2>
			{lede ? (
				<p className='text-muted-foreground mt-3.5 max-w-[760px] text-[16px] leading-[1.55] font-medium'>
					{lede}
				</p>
			) : null}
		</div>
	)
}

/** The `h3.subhead` — serif 18px, sits above a swatch/type/spacing subgroup. */
export function Subhead({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<h3
			className={cn(
				'text-secondary-foreground mt-10 mb-3.5 text-[16px] font-medium min-[880px]:text-[18px]',
				className,
			)}
		>
			{children}
		</h3>
	)
}
