import type { Metadata } from 'next';
import './globals.css';
import React, { ReactNode } from 'react';
import Providers from '@/components/Providers/Providers';

export const metadata: Metadata = {
  title: 'Storyby Test Task',
  description: 'Storyby Test Task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'body'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
