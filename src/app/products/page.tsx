import Link from 'next/link';
import { Sparkles, Star } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { SiteHeader } from '@/components/site-header';

const PRODUCTS = Array.from({ length: 6 }).map((_, index) => ({
  name: `Product ${index + 1}`,
}));

export default function ProductsPage() {
  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container px-4'>
          <h1 className='mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            Our Collection
          </h1>
          <p className='max-w-2xl text-lg font-bold text-black'>
            Premium pyrotechnic products for every celebration
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container px-4'>
          <div className='grid gap-8 md:grid-cols-3'>
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className='relative border-4 border-black bg-primary p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />

                <div className='mb-6 flex h-48 items-center justify-center bg-black'>
                  <Sparkles className='h-12 w-12 text-accent' />
                </div>
                <h3 className='mb-2 text-xl font-black text-black'>
                  {product.name}
                </h3>
                <div className='mb-4 flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className='h-4 w-4 text-accent'
                      fill='currentColor'
                    />
                  ))}
                </div>
                <p className='mb-4 text-sm font-semibold text-black'>
                  Premium quality pyrotechnic product
                </p>
                <button className='w-full rounded-none border-2 border-black bg-black px-4 py-2 text-xs font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'>
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Link
              href='/'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
