import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist_Mono, Inter, Oswald } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const monoFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pirotécnicos Favio Favio Dominó',
  description: 'Venta de fuegos artificiales en Colombia.',
  icons: {
    icon: [
      {
        url: '/images/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      { url: '/images/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        url: '/images/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        rel: 'icon',
      },
      {
        url: '/images/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        rel: 'icon',
      },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head></head>
      <body
        className={`${inter.variable} ${oswald.variable} ${monoFont.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Tailwind green-500 (#22c55e), higher z-index, taller bar */}
          <NextTopLoader
            color='#22c55e'
            height={3}
            zIndex={9999}
            showSpinner={false}
          />
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
