import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ConvexClientProvider } from '@/lib/ConvexClientProvider';
import { CartProvider } from '@/lib/CartContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Audiophile - Premium Audio Gear',
  description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. Browse premium headphones, speakers, and earphones.',
  icons: {
    icon: '/assets/favicon-32x32.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://audiophile.com',
    siteName: 'Audiophile',
    title: 'Audiophile - Premium Audio Gear',
    description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ConvexClientProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
