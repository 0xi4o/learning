import { type RouteConfig, index, route, layout } from '@react-router/dev/routes'

export default [
	layout('layouts/base.tsx', [
		index('routes/home.tsx'),
		route('learning', 'routes/learning.tsx'),
		route('portfolio', 'routes/portfolio.tsx'),
		route('design-system', 'routes/design-system.tsx'),
	]),
] satisfies RouteConfig
