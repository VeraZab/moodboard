import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hugyourwalls.com'
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: ['/r', '/qr'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}


