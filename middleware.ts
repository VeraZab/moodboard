import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/** Forward pathname so the root layout can SSR `is-home` (hero full viewport / padding) without client-only hacks. */
export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-pathname', request.nextUrl.pathname)
    return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
    matcher: [
        '/((?!_next/|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt)$).*)',
    ],
}
