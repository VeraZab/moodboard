import type { Metadata } from "next";
import styles from "../../styles/resize-recolor-request.module.css";

export const metadata: Metadata = {
    title: "Custom Resize & Recolor Request — Wallpaper Color Matching",
    description: "Request a custom color match, resize, or recolor of any ZabZabLab wallpaper or fabric design. Match Sherwin-Williams, Benjamin Moore, Pantone, or any palette. Free for interior designers.",
    alternates: { canonical: '/resize-recolor-request' },
    openGraph: {
        type: 'website',
        url: '/resize-recolor-request',
        title: 'Custom Resize & Recolor Request | ZabZabLab',
        description: 'Request a custom color match, resize, or recolor of any ZabZabLab wallpaper or fabric design.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab — Custom Resize and Recolor Request',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Custom Resize & Recolor Request | ZabZabLab',
        description: 'Request a custom color match, resize, or recolor of any ZabZabLab wallpaper or fabric design.',
        images: ['/assets/zabzablab.png'],
    },
};

export default function ResizeRecolorRequestPage() {
    return (
        <main className="page-container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Resize/Recolor Request',
                        url: new URL('/resize-recolor-request', process.env.NEXT_PUBLIC_SITE_URL || 'https://hugyourwalls.com').toString(),
                        description: 'Submit a request to resize or recolor a design.',
                        isPartOf: {
                            '@type': 'WebSite',
                            name: 'ZabZabLab Wallpaper and Fabric Design Studio',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hugyourwalls.com',
                        },
                    }),
                }}
            />
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfESGLdPoJFJxVXwNQBQ2HS0z-HgZ6ZVfI62neur2y5BQvUiw/viewform?embedded=true"
                width="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                title="Spoonflower Resize/Recolor Request Form"
                className={styles.iframe}
            >
                Loading…
            </iframe>
        </main>
    );
}


