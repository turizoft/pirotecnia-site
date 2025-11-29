import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
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
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-6xl'>
            Próximos Eventos
          </h1>
          <p className='mx-auto max-w-2xl text-lg font-bold text-white'>
            Espectáculos pirotécnicos impresionantes en toda Colombia
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          {events.length > 0 ? (
            <div className='mb-12 space-y-6'>
              {events.map((event: any) => {
                const dateLabel = dayjs(event.date).format('DD');
                const monthLabel = dayjs(event.date).format('MMM');
                return (
                  <div
                    key={event.id}
                    className='relative flex items-start gap-6 border-4 border-black bg-primary p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
                  >
                    <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                    <div className='relative z-10 flex flex-shrink-0 flex-col items-center justify-center gap-2 border-2 border-black bg-black px-4 py-3 text-center'>
                      <p className='text-4xl font-black text-accent'>{dateLabel}</p>
                      <p className='text-xs font-black uppercase text-accent'>{monthLabel}</p>
                    </div>
                    <div className='relative z-10 flex-grow space-y-3'>
                      <h3 className='text-2xl font-black uppercase text-black'>{event.title}</h3>
                      <p className='text-sm font-semibold text-black'>{event.description}</p>
                      <Link
                        href={event.ctaUrl || '/events'}
                        className='inline-block rounded-none border-2 border-black bg-black px-6 py-2 text-xs font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'
                      >
                        {event.ctaLabel ?? 'Más Información'}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <Sparkles className='mx-auto mb-4 h-16 w-16 text-primary/50' />
              <p className='text-xl font-semibold text-gray-500'>
                No hay eventos programados actualmente.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <SiteFooter />
    </div>
  );
}
