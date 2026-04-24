import type { Metadata } from 'next'
import styles from '/styles/trade.module.css'

export const metadata: Metadata = {
    title: 'For Interior Designers — Trade Program',
    description:
        'Trade program for interior designers: custom wallpaper, exact color matching, scale adjustments, and bespoke commissions. No minimums, fast turnaround.',
    alternates: { canonical: '/for-interior-designers' },
    openGraph: {
        type: 'website',
        url: '/for-interior-designers',
        title: 'For Interior Designers — Trade Program | ZabZabLab',
        description:
            'Custom color matching, scale adjustments, and bespoke wallpaper commissions for interior designers.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab — Wallpaper Services for Interior Designers',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'For Interior Designers — Trade Program | ZabZabLab',
        description:
            'Custom color matching, scale adjustments, and bespoke wallpaper commissions for interior designers.',
        images: ['/assets/zabzablab.png'],
    },
}

export default function ForInteriorDesignersPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com').toString(),
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'For Interior Designers',
                                item: new URL('/for-interior-designers', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com').toString(),
                            },
                        ],
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Custom Wallpaper Design Services for Interior Designers',
                        serviceType: 'Custom wallpaper design, wallpaper customization, color matching',
                        description:
                            'Trade-friendly wallpaper design services for interior designers, including exact color matching, scale adjustments, and custom wallpaper commissions.',
                        provider: {
                            '@type': 'Organization',
                            name: 'ZabZabLab',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com',
                            logo: new URL('/assets/zabzablab.png', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com').toString(),
                        },
                        areaServed: {
                            '@type': 'Country',
                            name: 'United States',
                        },
                        availableChannel: {
                            '@type': 'ServiceChannel',
                            serviceUrl: 'mailto:zabzablab@gmail.com',
                        },
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Wallpaper Design Services for Interior Designers',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Color match and recolor',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Scale and repeat adjustments',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Custom wallpaper commissions',
                                    },
                                },
                            ],
                        },
                        url: new URL('/for-interior-designers', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hugyourwalls.com').toString(),
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'Can you color match wallpaper to my paint color?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. I can match any paint manufacturer\'s color — Sherwin-Williams, Benjamin Moore, Farrow & Ball, Pantone, HEX, or RGB — to any pattern in the shop.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Can I commission a custom wallpaper design?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. I accept custom wallpaper commissions — from full repeat development to tailored recolors and coordinates.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Can you resize a wallpaper pattern for my project?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. Any design can be resized for wallpaper, upholstery, pillows, bedding, or other applications.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'What if I\'m not happy with a recolor?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'I\'ll revise until it\'s right. Your project needs to be perfect for your client.',
                                },
                            },
                        ],
                    }),
                }}
            />
            <div className="page-container" style={{ textAlign: 'center' }}>
                <h1 style={{ marginTop: 0, marginBottom: 'var(--gap-stack)' }}>
                    For Interior Designers
                </h1>
                <p style={{ margin: 0 }}>
                    Whether you&apos;re designing a client&apos;s living room, staging a property,
                    or specifying for a boutique hotel &mdash; I can help you get the wallpaper exactly right.
                </p>
            </div>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ margin: 0 }}>Color Match &amp; Recolor</h2>
                        </div>
                        <div className="col-body">
                            <p>
                                I can match your project palette and adapt my designs to your specs:
                            </p>
                            <ul>
                                <li>Match any paint color (Sherwin-Williams, Benjamin Moore, Farrow &amp; Ball, Pantone, HEX, RGB)</li>
                                <li>Adjust values for contrast, mood, or light conditions</li>
                                <li>Resize for wallpaper, upholstery, pillows, bedding, and more</li>
                            </ul>
                            <p>
                                <a href="/resize-recolor-request">Submit a request</a>{' '}
                                or <a href="mailto:zabzablab@gmail.com">email me</a>. I typically respond within 24&ndash;48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid swap">
                        <div className="col-body">
                            <p>
                                Working with me gives you:
                            </p>
                            <ul>
                                <li>Direct access &mdash; no middlemen, no runaround</li>
                                <li>Quick turnaround on recolors and resizes</li>
                                <li>Flexible production options</li>
                                <li>No minimum order requirements</li>
                            </ul>
                            <p style={{ marginTop: 'var(--space-4)' }}>
                                <strong>My guarantee:</strong> Not happy with a recolor? I&apos;ll revise until it&apos;s right.
                            </p>
                        </div>
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                            <h2 style={{ margin: 0 }}>Why Work With Me</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ margin: 0 }}>Custom Commissions</h2>
                        </div>
                        <div className="col-body">
                            <p>
                                Have a specific brief, motif, or space in mind? I accept custom commissions &mdash; from full
                                repeat development to tailored recolors and coordinates.
                            </p>
                            <p>
                                <a href="mailto:zabzablab@gmail.com">Email me</a> to discuss scope, timeline, sampling, and production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <h2 style={{ textAlign: 'center', marginTop: 0 }}>Common Questions</h2>
                    <div className={styles.faqSection}>
                        <details className={styles.faqItem}>
                            <summary>Can you color match to my paint color?</summary>
                            <p className={styles.faqAnswer}>
                                Yes. I can match any paint manufacturer&apos;s color &mdash; Sherwin-Williams, Benjamin Moore, 
                                Farrow &amp; Ball, Pantone, HEX, or RGB &mdash; to any pattern in my shop.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary>Can you resize a pattern for my project?</summary>
                            <p className={styles.faqAnswer}>
                                Yes. Any design can be resized for wallpaper, upholstery, pillows, bedding, or other applications.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary>What if I&apos;m not happy with a recolor?</summary>
                            <p className={styles.faqAnswer}>
                                I&apos;ll revise until it&apos;s right. Your project needs to be perfect for your client.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary>How quickly do you respond?</summary>
                            <p className={styles.faqAnswer}>
                                I typically respond within 24&ndash;48 hours. For urgent projects, mention your timeline in the email.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt page-section-strip-before-footer">
                <div className="page-section-strip-inner">
                    <div className={styles.ctaSection}>
                        <h2>Ready to start?</h2>
                        <a href="mailto:zabzablab@gmail.com" className={styles.ctaEmail}>zabzablab@gmail.com</a>
                        <p className={styles.ctaNote}>
                            I typically respond within 24&ndash;48 hours.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
