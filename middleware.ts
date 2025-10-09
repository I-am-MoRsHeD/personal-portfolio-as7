import { NextResponse, NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const url = request.nextUrl.clone();

  if (!token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/project-management',
    '/add-project',
    '/create-blog',
    '/blog-management',
    '/edit-blog/:path*',
  ],
};
