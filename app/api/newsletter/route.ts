import { NextRequest, NextResponse } from 'next/server'

/**
 * Newsletter signup: stores emails via Formspree (free).
 *
 * Setup: Add FORMSPREE_FORM_ID to Vercel env vars (Settings → Environment Variables).
 * Get your form ID from https://formspree.io (e.g. formspree.io/f/abc123 → abc123).
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const email = typeof body?.email === 'string' ? body.email.trim() : ''

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }
        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            )
        }

        const formspreeId = process.env.FORMSPREE_FORM_ID
        if (!formspreeId) {
            console.error('FORMSPREE_FORM_ID is not set. Add it to Vercel env vars.')
            return NextResponse.json(
                { error: 'Newsletter signup is not configured' },
                { status: 503 }
            )
        }

        const formspreeRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email,
                _subject: 'Newsletter signup from hugyourwalls.com',
            }),
        })

        if (!formspreeRes.ok) {
            const data = await formspreeRes.json().catch(() => ({}))
            console.error('Formspree error:', formspreeRes.status, data)
            return NextResponse.json(
                { error: 'Could not save your email. Please try again or email us directly.' },
                { status: 502 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (e) {
        console.error('Newsletter API error:', e)
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        )
    }
}
