import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
