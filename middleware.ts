import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, locales } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Handle root path
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    )
  }

  // Handle missing locale
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
    return NextResponse.redirect(
      new URL(newPath, request.url)
    )
  }

  // Validate locale in the path
  const pathLocale = pathname.split('/')[1]
  if (!locales.includes(pathLocale as any)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Match all pathnames except for
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
} 