import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pirotécnicos Favio Favio Dominó',
  description: 'Venta de fuegos artificiales en Colombia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
