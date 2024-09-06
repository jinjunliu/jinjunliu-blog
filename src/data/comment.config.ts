interface CommentConfig {
    enabled: boolean
    comment_service: string
}

export const commentConfig: CommentConfig = {
    enabled: true,
    comment_service: 'giscus' // 'disqus', 'utterances', or 'giscus'
}
