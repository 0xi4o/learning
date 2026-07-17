import { MDXProvider } from '@mdx-js/react'
import type { MDXComponents } from 'mdx/types'
import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

// Element styling lives in `app/typeset.css` (applied via the `.typeset`
// wrapper), so this map only overrides behavior and exposes design-system
// components for authors to use directly inside `.md`/`.mdx` files.
function Anchor({ href = '', children, ...props }: ComponentProps<'a'>) {
	const isInternal = href.startsWith('/') && !href.startsWith('//')
	if (isInternal) {
		return (
			<Link to={href} {...props}>
				{children}
			</Link>
		)
	}
	const isExternal = href.startsWith('http')
	return (
		<a href={href} {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})} {...props}>
			{children}
		</a>
	)
}

const components: MDXComponents = {
	a: Anchor,
	Badge,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
}

/** Supplies the Kami/shadcn component map to compiled MDX/Markdown content. */
export function MdxProvider({ children }: { children: ReactNode }) {
	return <MDXProvider components={components}>{children}</MDXProvider>
}
