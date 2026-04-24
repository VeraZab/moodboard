import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/blog.module.css'
import type { Metadata } from 'next'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import itemStyles from '/styles/portfolioitem.module.css'

type BlogPost = {
    slug: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    date: string
}

const posts: BlogPost[] = [
    {
        slug: 'green-kitchen-trend',
        title: 'Why Dark Green Kitchens Attract Buyers',
        description:
            'Insights inspired by Zillow and Sherwin-Williams: deep olive greens in kitchens can boost desirability and sale price.',
        imageSrc: '/blog/dark_green_kitchen.jpg',
        imageAlt: 'Olive green kitchen cabinetry with patterned tile backsplash',
        date: '2025-08-24',
    },
]

export const metadata: Metadata = {
    title: 'Blog — Color, Pattern & Interior Design Ideas',
    description: 'Design inspiration from ZabZabLab: color trends, pattern ideas, wallpaper tips, and interior styling guidance for homeowners and designers.',
    alternates: { canonical: '/blog' },
    openGraph: {
        type: 'website',
        url: '/blog',
        title: 'Blog — Color, Pattern & Interior Design Ideas | ZabZabLab',
        description: 'Color trends, pattern ideas, wallpaper tips, and interior styling guidance from ZabZabLab.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab Blog — Color, Pattern and Design',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog — Color, Pattern & Interior Design Ideas | ZabZabLab',
        description: 'Color trends, pattern ideas, wallpaper tips, and interior styling guidance from ZabZabLab.',
        images: ['/assets/zabzablab.png'],
    },
}

export default function BlogIndexPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        name: 'ZabZabLab Blog',
                        url: new URL('/blog', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com').toString(),
                        description: 'Thoughts on color, pattern, and design from ZabZabLab.',
                        publisher: {
                            '@type': 'Organization',
                            name: 'ZabZabLab',
                        },
                    }),
                }}
            />
            <PortfolioGrid>
                {posts.map((post) => (
                    <article key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className={styles.card}>
                            <div className={itemStyles.container}>
                                <Image src={post.imageSrc} alt={post.imageAlt} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '0 0.75rem 0.75rem' }}>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <p className={styles.cardDesc}>{post.description}</p>
                                <p className={styles.date}>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </PortfolioGrid>
        </main>
    )
}


