import { Star } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function TestimonialsPage() {
  const payload = await getPayloadClient();
  const testimonialsRes = await payload
    .find({
      collection: 'testimonials',
      depth: 1,
      overrideAccess: false,
    })
    .catch(() => ({ docs: [] }));

  const testimonials = testimonialsRes?.docs ?? [];

  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-6xl'>
            Reseñas de Clientes
          </h1>
          <p className='mx-auto max-w-2xl text-lg font-bold text-white'>
            Experiencias reales de clientes satisfechos
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          {testimonials.length > 0 ? (
            <div className='mb-12 grid gap-8 md:grid-cols-2'>
              {testimonials.map((testimonial: any) => {
                const rating = Math.round(testimonial?.rating ?? 5);
                return (
                  <div
                    key={testimonial.id}
                    className='relative border-4 border-black bg-primary p-8'
                  >
                    <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                    <div className='relative z-10 mb-4 flex gap-1'>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className='h-5 w-5 text-accent'
                          fill={index < rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <p className='relative z-10 mb-6 text-sm font-semibold italic leading-relaxed text-black'>
                      "{testimonial.quote}"
                    </p>
                    <div className='relative z-10 border-t-2 border-black pt-4'>
                      <p className='text-lg font-black uppercase text-black'>{testimonial.name}</p>
                      <p className='text-xs font-bold uppercase text-black'>
                        {testimonial.title ? `${testimonial.title} • ` : ''}
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <Star className='mx-auto mb-4 h-16 w-16 text-primary/50' />
              <p className='text-xl font-semibold text-gray-500'>
                No hay testimonios registrados actualmente.
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
