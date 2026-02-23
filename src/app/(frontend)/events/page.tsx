import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { getPayloadClient } from '@/lib/payload';

dayjs.locale('es');
export const revalidate = 0;

export default async function EventsPage() {
  const payload = await getPayloadClient();
  const eventsRes = await payload
    .find({
      collection: 'events',
      depth: 1,
      sort: 'date',
      overrideAccess: false,
    })
    .catch(() => ({ docs: [] }));

  const events = eventsRes?.docs ?? [];

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
                Agenda Oficial
              </p>
            </div>
            <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
              Nuestros <span className='text-primary font-black block mt-2'>Eventos</span>
            </h1>
            <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
              Espectáculos pirotécnicos impresionantes en toda Colombia
            </p>
          </FadeIn>
        </div>
      </section>

      <section className='relative py-24 md:py-32'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)]' />

        <div className='container relative z-10 mx-auto px-4 lg:px-8'>
          {events.length > 0 ? (
            <div className='mb-12 max-w-4xl mx-auto space-y-6'>
              <StaggerContainer>
                {events.map((event: any) => {
                  const dateLabel = dayjs(event.date).format('DD');
                  const monthLabel = dayjs(event.date).format('MMM');
                  return (
                    <StaggerItem key={event.id}>
                      <div className='group relative flex flex-col md:flex-row items-center md:items-start gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm transition-all hover:bg-white/[0.05] hover:border-white/20 text-white/5 hover:text-white/20'>
                        <CornerOrnament variant='simple' inset='0.75rem' size='1.5rem' thickness='1px' />
                        <div className='absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/10 via-transparent to-transparent mix-blend-overlay pointer-events-none' />

                        <div className='relative z-10 flex flex-shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 px-8 py-6 text-center ring-1 ring-white/5 min-w-[140px]'>
                          <p className='text-5xl font-light tracking-tighter text-white'>{dateLabel}</p>
                          <p className='mt-2 text-xs font-bold uppercase tracking-widest text-primary'>{monthLabel}</p>
                        </div>

                        <div className='relative z-10 flex-grow space-y-4 text-center md:text-left'>
                          <h3 className='text-3xl font-light uppercase tracking-wide text-white'>{event.title}</h3>
                          <p className='text-base font-light leading-relaxed text-white/60'>{event.description}</p>
                          <div className='pt-4'>
                            <Link
                              href={event.ctaUrl || '/events'}
                              className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors group-hover:translate-x-1 duration-300'
                            >
                              {event.ctaLabel ?? 'Más Información'} <ArrowRight className='h-3 w-3' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          ) : (
            <FadeIn className='py-24 text-center'>
              <div className='mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                <Sparkles className='h-10 w-10 text-white/20' />
              </div>
              <p className='text-xl font-light text-white/40'>
                No hay eventos programados actualmente.
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
