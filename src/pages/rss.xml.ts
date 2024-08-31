import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export async function GET(context: any) {
	const posts = await getCollection('blog')
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: posts
			.filter((post) => !post.data.draft)
			.map((post) => ({
				...post.data,
				link: `post/${post.slug}/`,
				content: post.body // This is the full Markdown content of the post
			}))
	})
}
