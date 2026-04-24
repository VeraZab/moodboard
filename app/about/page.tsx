import styles from '/styles/about.module.css'
import type { Metadata } from 'next'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'ZabZabLab Wallpaper Design Studio by Vera',
                        url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://hugyourwalls.com') + '/about',
                        image: new URL('/assets/about.jpg', process.env.NEXT_PUBLIC_SITE_URL || 'https://hugyourwalls.com').toString(),
                        sameAs: [
                            'https://www.instagram.com/zabzablab',
                        ],
                        worksFor: {
                            '@type': 'Organization',
                            name: 'ZabZabLab',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hugyourwalls.com',
                        },
                        jobTitle: 'Wallpaper Designer, owner of ZabZabLab Studio',
                    }),
                }}
            />

            {/* Bio */}
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img
                        src="/assets/about.jpg"
                        alt="Vera, wallpaper designer at ZabZabLab"
                    />
                </div>
                <div className={styles.caption}>
                    <p>
                        Hi, I&apos;m Vera.
                    </p>
                    <p>
                        I started ZabZabLab because I was tired of the way we talk about interiors &mdash;
                        all these named aesthetics and Pinterest boards telling you what&apos;s &ldquo;in.&rdquo;
                        I wanted to help people design around how a room should <em>feel</em>, not what style it&apos;s supposed to be.
                    </p>
                    <p>
                        Every pattern I create is hand-drawn on my iPad.
                        But more importantly, each one starts with a mood: serene, grounded, playful, romantic.
                        Because when you know how you want to feel in a space, the right choices become obvious.
                    </p>
                    <p>
                        If you&apos;ve ever struggled to describe what you want &mdash;
                        or felt lost in a sea of trends that don&apos;t quite fit &mdash;
                        this is for you.
                    </p>
                    <p>
                        If you&apos;re an interior designer, I have a <a href="/for-interior-designers">trade program</a> built for how you work.
                        I&apos;m based in New Jersey, USA.
                    </p>
                </div>
            </div>

            {/* Contact */}
            <section className={styles.contactSection} aria-label="Contact">
                <h2 className={styles.contactHeadline}>Let&apos;s talk.</h2>
                <a href="mailto:zabzablab@gmail.com" className={styles.contactEmail}>
                    zabzablab@gmail.com
                </a>
                <p className={styles.contactMeta}>I reply within 24&ndash;48 hours.</p>
                <div className={styles.contactLinks}>
                    <a
                        href="https://www.instagram.com/zabzablab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        Instagram ↗
                    </a>
                    <span className={styles.contactDot} aria-hidden="true">·</span>
                    <a href="/for-interior-designers" className={styles.contactLink}>
                        Trade program →
                    </a>
                </div>
            </section>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'About ZabZabLab — Wallpaper Design by Mood',
    description:
        'Meet Vera, the designer behind ZabZabLab. Hand-drawn wallpaper designed around mood, not trends. Based in New Jersey, trade program available for interior designers.',
    alternates: { canonical: '/about' },
    openGraph: {
        type: 'profile',
        url: '/about',
        title: 'About Vera | ZabZabLab',
        description:
            'Hand-drawn wallpaper designed around mood, not trends. Trade program available for interior designers.',
        images: [
            {
                url: '/assets/about.jpg',
                width: 1200,
                height: 630,
                alt: 'Vera — Wallpaper Designer at ZabZabLab',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Vera | ZabZabLab',
        description:
            'Hand-drawn wallpaper designed around mood, not trends. Trade program available for interior designers.',
        images: ['/assets/about.jpg'],
    },
}
