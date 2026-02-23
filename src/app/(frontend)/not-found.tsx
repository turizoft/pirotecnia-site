import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { CornerOrnament } from '@/components/corner-ornament';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return (
    <div className='w-full bg-primary'>
      <SiteHeader />

      <div className='flex min-h-screen items-center justify-center bg-primary px-4 py-20'>
        <div className='relative max-w-2xl border-8 border-black bg-white p-12 text-center'>
          <CornerOrnament inset='0.75rem' size='1.5rem' thickness='3px' />

          <AlertCircle className='mx-auto h-20 w-20 text-primary' />
          <div>
            <h1 className='mb-4 text-7xl font-black uppercase text-primary'>
              404
            </h1>
            <p className='mb-2 text-3xl font-black uppercase text-black'>
              Page Not Found
            </p>
            <p className='mx-auto mb-8 max-w-md text-lg font-bold text-black'>
              Sorry, the page you&apos;re looking for doesn&apos;t exist.
              Let&apos;s get you back on track.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='/'
              className='inline-block rounded-none border-4 border-black bg-primary px-8 py-4 font-black uppercase tracking-wider text-black transition-colors hover:bg-accent'
            >
              Back Home
            </Link>
            <Link
              href='/products'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
