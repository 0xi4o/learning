import { cn } from '~/lib/utils'

/** Centered page container matching the site's editorial column width. */
export function Section({
	id,
	className,
	children,
}: {
	id?: string
	className?: string
	children: React.ReactNode
}) {
	return (
		<section id={id} className={cn('mx-auto max-w-[1120px] px-8 min-[880px]:px-16', className)}>
			{children}
		</section>
	)
}

/** Mono, uppercase, ink-blue label — Kami's section eyebrow. */
export function Eyebrow({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<p
			className={cn(
				'text-primary font-mono text-[11px] font-medium tracking-[0.2em] uppercase min-[880px]:text-[12px]',
				className,
			)}
		>
			{children}
		</p>
	)
}

/** The 80pt ink-blue rule that anchors covers and section breaks. */
export function Rule({ className }: { className?: string }) {
	return <div className={cn('bg-primary h-0.5 w-20 rounded-full', className)} />
}
