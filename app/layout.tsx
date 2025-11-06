import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Danslessen Rooster',
  description: 'Lesrooster met filters voor Salsa, Bachata en Kizomba',
  metadataBase: new URL('https://agentic-a33ea6fe.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
