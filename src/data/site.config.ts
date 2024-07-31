interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	homePaginateSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Jinjun Liu', // Site author
	title: "Jinjun Liu's Blog", // Site title.
	description: 'My personal blog about life, research, tech, and hobbies, etc.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 3, // Number of posts per page
	homePaginateSize: 5 // Number of posts per page on home page
}
