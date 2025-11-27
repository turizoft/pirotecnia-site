import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Star } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

function getMediaUrl(media: any) {
  if (!media) return null;
  if (typeof media === 'string') return media;
  if ('url' in media && media.url) return media.url as string;
  if ('filename' in media && media.filename) return `/media/${media.filename}` as string;
  return null;
}

export default async function ProductsPage() {
  const payload = await getPayloadClient();
  const productsRes = await payload
    .find({
      collection: 'products',
      depth: 2,
      overrideAccess: false,
    })
    .catch(() => ({ docs: [] }));

  const products = productsRes?.docs ?? [];

  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            Nuestra Colección
          </h1>
          <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
            Productos pirotécnicos premium para cada celebración
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-8 md:grid-cols-3'>
            {(products.length ? products : Array.from({ length: 6 })).map((product: any, idx) => {
              const rating = Math.round(product?.rating ?? 5);
              const imageUrl = getMediaUrl(product?.image);
              return (
                <div
                  key={product?.id || idx}
                  className='relative border-4 border-black bg-primary p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
                >
                  <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />

                  <div className='mb-6 flex h-48 items-center justify-center bg-black'>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={product?.name || 'Producto'}
                        width={300}
                        height={220}
                        className='h-48 w-full object-cover'
                      />
                    ) : (
                      <Sparkles className='h-12 w-12 text-accent' />
                    )}
                  </div>
                  <h3 className='mb-2 text-xl font-black text-black'>
                    {product?.name ?? `Producto ${idx + 1}`}
                  </h3>
                  <div className='mb-4 flex gap-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className='h-4 w-4 text-accent'
                        fill={index < rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className='mb-4 text-sm font-semibold text-black'>
                    {product?.description ?? 'Producto pirotécnico de calidad premium'}
                  </p>
                  <button className='w-full rounded-none border-2 border-black bg-black px-4 py-2 text-xs font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'>
                    Ver Detalles
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <SiteFooter />
    </div>
  );
}
