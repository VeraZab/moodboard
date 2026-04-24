import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com'

    const routes: {
        path: string
        changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
        priority: number
    }[] = [
        { path: '', changeFrequency: 'weekly', priority: 1.0 },
        { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
        { path: '/for-interior-designers', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/designs/faux-fabric', changeFrequency: 'monthly', priority: 0.7 },
        { path: '/designs/faux-stone', changeFrequency: 'monthly', priority: 0.7 },
        { path: '/designs/faux-limewash', changeFrequency: 'monthly', priority: 0.7 },
        { path: '/resize-recolor-request', changeFrequency: 'monthly', priority: 0.5 },
        { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
        { path: '/blog/green-kitchen-trend', changeFrequency: 'yearly', priority: 0.6 },
    ]

    const now = new Date().toISOString()

    return routes.map((route) => ({
        url: `${baseUrl}${route.path || '/'}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}


