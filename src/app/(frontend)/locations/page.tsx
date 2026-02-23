import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function LocationsPage() {
  const payload = await getPayloadClient();
  const locationsRes = await payload
    .find({
      collection: 'locations',
      depth: 1,
      overrideAccess: false,
    })
    .catch(() => ({ docs: [] }));

  const locations = locationsRes?.docs ?? [];

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
                Red Nacional
              </p>
            </div>
            <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
              Encuentra Nuestras{' '}
              <span className='text-primary font-black block mt-2'>
                Ubicaciones
              </span>
            </h1>
            <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
              Salas de exhibición profesionales en todo el país
            </p>
          </FadeIn>
        </div>
      </section>

      <section className='relative py-24 md:py-32'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)]' />

        <div className='container relative z-10 mx-auto px-4 lg:px-8'>
          {locations.length > 0 ? (
            <StaggerContainer className='grid gap-8 md:grid-cols-2'>
              {locations.map((location: any) => (
                <StaggerItem key={location.id}>
                  <div className='group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-white/20 text-white/5 hover:text-white/20'>
                    <CornerOrnament
                      variant='simple'
                      inset='0.75rem'
                      size='1.5rem'
                      thickness='1px'
                    />
                    <div className='absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/10 via-transparent to-transparent mix-blend-overlay pointer-events-none' />

                    <h3 className='mb-8 text-3xl font-light tracking-wide text-white'>
                      {location.city}
                    </h3>

                    <div className='relative z-10 space-y-6'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-white/5 p-2.5 ring-1 ring-white/10'>
                          <MapPin className='h-5 w-5 text-primary' />
                        </div>
                        <p className='font-light text-white/80 leading-relaxed pt-1'>
                          {location.address}
                        </p>
                      </div>

                      <div className='flex items-center gap-4'>
                        <div className='rounded-full bg-white/5 p-2.5 ring-1 ring-white/10'>
                          <Phone className='h-5 w-5 text-primary' />
                        </div>
                        <p className='font-light text-white/80 tracking-wider'>
                          {location.phone}
                        </p>
                      </div>

                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-white/5 p-2.5 ring-1 ring-white/10'>
                          <Clock className='h-5 w-5 text-primary' />
                        </div>
                        <p className='text-sm font-light text-white/60 leading-relaxed pt-1'>
                          {location.hours}
                        </p>
                      </div>
                    </div>

                    <div className='mt-10 pt-8 border-t border-white/10'>
                      <Link
                        href={location.mapUrl || '/locations'}
                        className='inline-flex w-full items-center justify-center gap-3 rounded-full bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary ring-1 ring-white/10 transition-all hover:bg-white hover:text-black hover:ring-white group-hover:border-primary'
                      >
                        Cómo Llegar{' '}
                        <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn className='py-24 text-center'>
              <div className='mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                <MapPin className='h-10 w-10 text-white/20' />
              </div>
              <p className='text-xl font-light text-white/40'>
                No hay ubicaciones registradas actualmente.
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
