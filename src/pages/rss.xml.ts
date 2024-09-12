import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export async function GET(context: any) {
    const posts = await getCollection('blog')
    const sortedPosts = posts
        .filter((post) => !post.data.draft)
        .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
    
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        // description: 'feedId:52443064995444736+userId:46735639826583552',
        site: context.site,
        items: sortedPosts.map((post) => ({
            ...post.data,
            link: `post/${post.slug}/`,
            content: post.body // This is the full Markdown content of the post
        }))
    })
}
