import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Behavioral Health Revenue Recovery',
  description: 'Revenue audits, authorization recovery, and documentation intelligence for behavioral health treatment centers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
