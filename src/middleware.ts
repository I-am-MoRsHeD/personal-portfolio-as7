import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privateRoutes = [
    '/dashboard',
    '/add-project',
    '/project-management',
    '/create-blog',
    '/blog-management',
]

const authRoutes = ['/login']

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const accessToken = req.cookies.get('accessToken')?.value

    if (!accessToken && privateRoutes.some((route) => pathname.startsWith(route))) {
        const loginUrl = new URL('/login', req.url)
        loginUrl.searchParams.set('redirect', pathname)
        return NextResponse.redirect(loginUrl)
    }

    if (accessToken && authRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: [
        '/dashboard/:path*',
        '/add-project/:path*',
        '/project-management/:path*',
        '/create-blog/:path*',
        '/blog-management/:path*',
        '/login',
    ],
}
