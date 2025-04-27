import type {Metadata} from 'next';
import {Geist} from 'next/font/google'; // Use Geist Sans only
import './globals.css';
import {Toaster} from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Remove Geist Mono if not explicitly needed
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Sardar Ji',
  description: 'Premium Jaggery and Jaggery Powder by Sardar Ji',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply only Geist Sans font variable */}
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
