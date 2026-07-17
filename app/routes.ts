import { type RouteConfig, index, route, layout } from '@react-router/dev/routes'

export default [
	layout('layouts/base.tsx', [
		index('routes/home.tsx'),
		route('articles', 'routes/articles.tsx'),
		route('articles/:slug', 'routes/article-entry.tsx'),
		route('learning', 'routes/learning.tsx'),
		route('learning/*', 'routes/learning-entry.tsx'),
		route('now', 'routes/now.tsx'),
		route('uses', 'routes/uses.tsx'),
		// route('portfolio', 'routes/portfolio.tsx'),
		// route('design-system', 'routes/design-system.tsx'),
	]),
] satisfies RouteConfig
