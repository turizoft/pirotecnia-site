import Link from 'next/link';
import { Clock, MapPin, Phone } from 'lucide-react';

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
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            Encuentra Nuestras Ubicaciones
          </h1>
          <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
            Salas de exhibición profesionales en todo el país
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          {locations.length > 0 ? (
            <div className='mb-12 grid gap-8 md:grid-cols-2'>
              {locations.map((location: any) => (
                <div
                  key={location.id}
                  className='relative border-4 border-black bg-primary p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
                >
                  <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                  <h3 className='mb-6 text-3xl font-black uppercase text-black'>{location.city}</h3>
                  <div className='relative z-10 space-y-4'>
                    <div className='flex items-start gap-3'>
                      <MapPin className='mt-1 h-5 w-5 flex-shrink-0 text-black' />
                      <p className='font-semibold text-black'>{location.address}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Phone className='h-5 w-5 flex-shrink-0 text-black' />
                      <p className='font-semibold text-black'>{location.phone}</p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Clock className='mt-1 h-5 w-5 flex-shrink-0 text-black' />
                      <p className='text-sm font-semibold text-black'>{location.hours}</p>
                    </div>
                  </div>
                  <Link
                    href={location.mapUrl || '/locations'}
                    className='mt-6 block w-full rounded-none border-2 border-black bg-black px-4 py-3 text-center text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'
                  >
                    Cómo Llegar
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <MapPin className='mx-auto mb-4 h-16 w-16 text-primary/50' />
              <p className='text-xl font-semibold text-gray-500'>
                No hay ubicaciones registradas actualmente.
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
