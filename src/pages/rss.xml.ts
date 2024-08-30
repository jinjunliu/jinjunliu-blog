import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export async function GET(context: any) {
	const posts = await getCollection('blog')
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		// filter out drafts
		items: posts
			.filter((post) => !post.data.draft)
			.map((post) => ({
				...post.data,
				link: `post/${post.slug}/`
			}))
	})
}
