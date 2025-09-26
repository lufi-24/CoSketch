import type { Metadata } from 'next';
import '@/styles/globals.css';

import { space_grotesk } from '@/data/fonts';
import ReactQueryProvider from '@/lib/react-query';
import { Toaster } from 'react-hot-toast';
import siteMetadata from '@/lib/siteMetadata';

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: 'CoSketch | Sketch Together, Think Better',
    template: `%s | ${siteMetadata.title}`,
  },

  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* Favicons */}
      <link
        rel='icon'
        type='image/png'
        href='/favicons/favicon-96x96.png'
        sizes='96x96'
      />
      <link rel='icon' type='image/svg+xml' href='/favicons/favicon.svg' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />
      <meta name='apple-mobile-web-app-title' content='CoSketch' />
      <link rel='manifest' href='/favicons/site.webmanifest' />

      <body className={`${space_grotesk.className} scroll-smooth antialiased`}>
        <ReactQueryProvider>
          {children}
          <Toaster position='top-right' reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
