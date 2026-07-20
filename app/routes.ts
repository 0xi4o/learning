import { type RouteConfig, index, route, layout } from '@react-router/dev/routes'

export default [
	layout('layouts/base.tsx', [
		index('routes/home.tsx'),
		route('articles', 'routes/articles.tsx'),
		route('articles/:slug', 'routes/article-entry.tsx'),
		route('learning', 'routes/learning.tsx'),
		route('learning/:slug', 'routes/learning-entry.tsx'),
		route('learning/:slug/lessons/:lesson_slug', 'routes/lesson-entry.tsx'),
		route('now', 'routes/now.tsx'),
		route('projects', 'routes/projects.tsx'),
		route('projects/:slug', 'routes/project-entry.tsx'),
		route('uses', 'routes/uses.tsx'),
		// route('portfolio', 'routes/portfolio.tsx'),
		// route('design-system', 'routes/design-system.tsx'),
	]),
] satisfies RouteConfig
