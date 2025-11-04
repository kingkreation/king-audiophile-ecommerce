import type { Metadata } from 'next';
import './globals.css';
import { ConvexClientProvider } from '@/lib/ConvexClientProvider';
import { CartProvider } from '@/lib/CartContext';

export const metadata: Metadata = {
  title: 'Audiophile - Premium Audio Gear',
  description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
