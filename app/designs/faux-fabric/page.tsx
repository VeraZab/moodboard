import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from './textureFoundations.module.css'

type TextureItem = { designSrc: string; alt: string; href?: string; bestFor?: string }

const fauxFabricTextures: TextureItem[] = [
    { designSrc: '/portfolio/linen-weave-block.jpg', alt: 'Tight Linen Weave Texture', href: 'https://www.spoonflower.com/collections/1459860-tight-linen-weave-zab26005-by-zabzablab', bestFor: 'Calm living rooms and bedrooms where you want subtle texture instead of a flat painted wall.' },
    { designSrc: '/portfolio/grasscloth-block.jpg', alt: 'Slubby Vertical Grasscloth Texture', href: 'https://www.spoonflower.com/collections/1466387', bestFor: '\u2018Grasscloth look\u2019 feature walls in dining rooms, home offices, and cozy corners\u2014without the cost and delicacy of real grasscloth.' },
    { designSrc: '/portfolio/diagonal-canvas-block.png', alt: 'Diagonal Weave Canvas Texture', href: 'https://www.spoonflower.com/collections/1466399', bestFor: 'Accent walls and textiles (pillows, headboards, bench cushions) that need a bit more structure and visual weight.' },
    { designSrc: '/portfolio/linen2-block.jpg', alt: 'Slubby Linen Texture', href: 'https://www.spoonflower.com/collections/1462110', bestFor: 'Bedrooms, nurseries, and reading nooks where you want softness and warmth without pattern.' },
    { designSrc: '/portfolio/basketweave-block3.jpg', alt: 'Basketweave Texture', href: 'https://www.spoonflower.com/collections/1468931', bestFor: 'Upholstery projects, statement walls, and throw pillows where you want a tactile, woven feel with real visual depth.' },
    { designSrc: '/portfolio/tweed-block.jpg', alt: 'Wool Tweed Texture', href: 'https://www.spoonflower.com/collections/1468939', bestFor: 'Moody corners, home offices and reading nooks where you want a warm, cocooning, suiting‑like wall that feels textured and cozy without an obvious pattern.' },
]

export const metadata: Metadata = {
    title: 'Faux Fabric Texture Wallpaper — Linen, Grasscloth, Basketweave & Tweed',
    description:
        'A curated toolkit of faux fabric texture wallpaper and fabric — linen, grasscloth, canvas, basketweave, and tweed. Photo-based, color customizable, and a fraction of the cost of real textile wallcovering. Available on Spoonflower for designers and homeowners.',
    alternates: { canonical: '/designs/faux-fabric' },
    openGraph: {
        type: 'website',
        url: '/designs/faux-fabric',
        title: 'Faux Fabric Texture Wallpaper — Linen, Grasscloth, Basketweave & Tweed | ZabZabLab',
        description:
            'Faux linen, grasscloth, canvas, basketweave, and tweed texture wallpaper and fabric. Photo-based, color customizable, available on Spoonflower.',
        images: [{ url: '/portfolio/linen-weave-block.jpg', width: 1200, height: 630, alt: 'ZabZabLab Faux Fabric Texture Wallpaper' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Faux Fabric Texture Wallpaper — Linen, Grasscloth, Basketweave & Tweed | ZabZabLab',
        description:
            'Faux linen, grasscloth, canvas, basketweave, and tweed texture wallpaper and fabric. Photo-based, color customizable, available on Spoonflower.',
        images: ['/portfolio/linen-weave-block.jpg'],
    },
}

export default function FauxFabricPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'What is faux fabric texture wallpaper?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Faux fabric texture wallpaper is printed wallpaper that realistically mimics the look and feel of woven textiles like linen, grasscloth, basketweave, or tweed. It starts from a high-resolution photograph of actual fabric, so the weave and grain look authentic — but at a fraction of the cost of real textile wallcovering, and much easier to clean and maintain.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Is faux grasscloth wallpaper cheaper than real grasscloth?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. Faux grasscloth wallpaper costs a fraction of real grasscloth wallcovering. It is also easier to clean, maintain, and install, with quicker turnaround times. ZabZabLab\'s faux grasscloth textures can be color customized and are available on wallpaper and fabric through Spoonflower.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Can faux fabric wallpaper be color customized?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. Every ZabZabLab faux fabric texture — linen, grasscloth, canvas, basketweave, and tweed — can be color customized to match your palette, adjusted to scale, or rotated. Submit a customization request at hugyourwalls.com/resize-recolor-request.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Which rooms are faux fabric texture wallpapers best for?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'It depends on the texture. Tight linen weave is great for calm living rooms and bedrooms. Faux grasscloth works well as a feature wall in dining rooms, home offices, and cozy corners. Canvas weave suits accent walls and textiles like pillows and headboards. Slubby linen is ideal for bedrooms, nurseries, and reading nooks. Basketweave adds tactile, woven depth to upholstery projects and statement walls. Tweed brings a warm, cocooning feel to moody home offices and reading nooks.',
                                },
                            },
                        ],
                    }),
                }}
            />
            <div className={`page-container ${styles.intro}`}>
                <h1>Faux Fabric Textures</h1>
                <div className={styles.introLead}>
                    <p className="subheading">
                        A small toolkit of my most-used faux fabric textures for walls and textiles.
                    </p>
                    <p>
                        They&apos;re designed to be a neutral, tactile base&mdash;something that plays well with bold art, vintage finds, or a quiet palette
                        without competing for attention. Each one starts from a real, high-resolution photograph of actual fabric, so the weave, grain, and detail feel authentic.
                    </p>
                </div>
            </div>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className={`col-title ${styles.twoColTitle}`}>
                            <h2>The Look of Real Fabric,<br />Without the Drawbacks</h2>
                        </div>
                        <div className={`col-body ${styles.twoColBody}`}>
                            <ul>
                                <li>Available on wallpaper and fabric, and <Link href="/resize-recolor-request">color customizable</Link></li>
                                <li>Easy to clean and maintain compared to real fabric on walls</li>
                                <li>A fraction of the cost of real grasscloth or textile wallcovering</li>
                                <li>Quick turnaround so you can keep projects moving</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <p className={styles.spoonflowerNote}>
                        If you already use Spoonflower in your projects, these textures are available there as wallpaper and fabric&mdash;easy to order and ready to go.
                    </p>
                    <div className={styles.textureGrid}>
                        {fauxFabricTextures.map((item, index) => (
                            <figure key={`fabric-${index}`} className={styles.textureFigure}>
                                <div className={styles.textureImageWrap}>
                                    <Image
                                        src={item.designSrc}
                                        alt={item.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 600px) 100vw, 50vw"
                                    />
                                </div>
                                <div className={styles.textureMeta}>
                                    <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                                    {item.href && (
                                        <>
                                            <p className={styles.nonReturnableNote}>
                                                Non-returnable &mdash; printed to order.{' '}
                                                <Link href="/the-match">Start with the Match</Link> to see it in your space first.
                                            </p>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.textureCta}>
                                                See more color options &rarr;
                                            </a>
                                        </>
                                    )}
                                </div>
                                {item.bestFor && (
                                    <p className={styles.bestFor}>
                                        <strong>Best for:</strong> {item.bestFor}
                                    </p>
                                )}
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.notFinding}>
                        <h2>Don&apos;t See What You&apos;re Looking For?</h2>
                        <p>
                            Send me your moodboard or reference pictures at <a href="mailto:zabzablab@gmail.com" className={styles.ctaLink}>zabzablab@gmail.com</a>;
                            I&apos;ll pick out 2&ndash;3 textures that fit and send you direct Spoonflower links&mdash;no guesswork on your end.
                        </p>
                        <p>
                            See a texture you like but need an adjustment? Every texture can be color customized to match your palette, adjusted to scale, or rotated.
                            Just <Link href="/resize-recolor-request" className={styles.ctaLink}>send a customization request here</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <div className={`page-container ${styles.backBlock}`}>
                <p>
                    <Link href="/for-interior-designers" className={styles.ctaLink}>
                        See all designer benefits &rarr;
                    </Link>
                </p>
            </div>
        </main>
    )
}
