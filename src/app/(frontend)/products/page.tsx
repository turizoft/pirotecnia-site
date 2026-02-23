import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Colección de Productos Pirotécnicos | FAVIO FAVIO DOMINÓ',
  description: 'Explora nuestra colección de productos pirotécnicos premium para cada celebración. Fuegos artificiales de alta calidad y pólvora profesional en Colombia.',
  keywords: ['pirotecnia', 'fuegos artificiales', 'polvora', 'productos pirotecnicos colombia', 'venta de pirotecnia'],
};

function getMediaUrl(media: any) {
  if (!media) return null;
  if (typeof media === 'string') return media;
  if ('url' in media && media.url) return media.url as string;
  if ('filename' in media && media.filename)
    return `/media/${media.filename}` as string;
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
    <div className='w-full bg-black text-white selection:bg-primary selection:text-white pb-0'>
      <SiteHeader />

      <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
        <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

        <div className='container relative z-10 mx-auto px-4 pt-32 pb-20 text-center'>
          <FadeIn>
            <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-5 pl-2 py-1.5 backdrop-blur-md mb-8'>
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20'>
                <span className='h-2 w-2 rounded-full bg-primary animate-pulse' />
              </div>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                Calidad Premium
              </p>
            </div>
            <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
              Nuestra{' '}
              <span className='text-primary font-black block mt-2'>
                Colección
              </span>
            </h1>
            <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
              Productos pirotécnicos premium para cada celebración
            </p>
          </FadeIn>
        </div>
      </section>

      <section className='relative py-24 md:py-32'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none' />

        <div className='container mx-auto px-4 lg:px-8'>
          {products.length > 0 ? (
            <StaggerContainer className='grid gap-8 md:grid-cols-3 lg:grid-cols-4'>
              {products.map((product: any) => {
                const rating = Math.round(product?.rating ?? 5);
                const imageUrl = getMediaUrl(product?.image);
                return (
                  <StaggerItem key={product.id}>
                    <div className='group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,0,0,0.08)]'>
                      <CornerOrnament
                        variant='simple'
                        inset='0.75rem'
                        size='1.5rem'
                        thickness='1px'
                        className='text-white/10 group-hover:text-white/30 transition-colors'
                      />

                      <div className='relative mb-8 flex h-56 items-center justify-center overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={product.name}
                            width={400}
                            height={400}
                            className='relative z-0 h-[80%] w-auto object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100'
                          />
                        ) : (
                          <Sparkles className='mx-auto h-12 w-12 text-white/20' />
                        )}
                        {product.badge && (
                          <div className='absolute top-4 right-4 z-20 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/20'>
                            {product.badge}
                          </div>
                        )}
                      </div>

                      <div className='space-y-4 relative z-10'>
                        <div className='flex items-center gap-2 mb-2'>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className='h-3.5 w-3.5 text-accent opacity-100 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]'
                              fill={index < rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <h3 className='text-xl font-light text-white tracking-wide'>
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className='text-sm font-light leading-relaxed text-white/50 line-clamp-2'>
                            {product.description}
                          </p>
                        )}
                        <Link
                          href={`/products/${product.slug}`}
                          className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all group-hover:border-primary group-hover:bg-primary/10'
                        >
                          Ver Detalles <ArrowRight className='h-3 w-3' />
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <FadeIn className='py-24 text-center'>
              <div className='mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                <Sparkles className='h-10 w-10 text-white/20' />
              </div>
              <p className='text-xl font-light text-white/40'>
                No hay productos registrados actualmente.
              </p>
            </FadeIn>
          )}
        </div>
      </section>

      <CTASection
        title='¿Listo Para Encender?'
        body='Explora nuestra colección premium y experimenta la excelencia pirotécnica.'
        ctaLabel='Comprar Ahora'
        ctaHref='/products'
      />
      <SiteFooter />
    </div>
  );
}
