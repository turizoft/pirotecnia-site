import { Quote, Star } from 'lucide-react';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
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
    <div className='w-full bg-black text-white selection:bg-primary selection:text-white pb-0'>
      <SiteHeader />

      <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
        <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

        <div className='container relative z-10 mx-auto px-4 pt-32 pb-20 text-center'>
          <FadeIn>
            <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-5 pl-2 py-1.5 backdrop-blur-md mb-8'>
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20'>
                <Star className='h-3 w-3 text-primary' />
              </div>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                Calificación 5 Estrellas
              </p>
            </div>
            <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
              Lo Que Dicen{' '}
              <span className='text-primary font-black block mt-2'>
                Nuestros Clientes
              </span>
            </h1>
            <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
              Experiencias reales de clientes satisfechos
            </p>
          </FadeIn>
        </div>
      </section>

      <section className='relative py-24 md:py-32'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none' />

        <div className='container mx-auto px-4 lg:px-8'>
          {testimonials.length > 0 ? (
            <StaggerContainer className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {testimonials.map((testimonial: any) => {
                const rating = Math.round(testimonial?.rating ?? 5);
                return (
                  <StaggerItem key={testimonial.id}>
                    <div className='group relative h-full rounded-2xl border border-white/10 bg-white/[0.01] p-10 backdrop-blur-sm transition-all hover:bg-white/[0.03] hover:border-white/20 text-white/5 hover:text-white/20'>
                      <CornerOrnament
                        variant='simple'
                        inset='0.5rem'
                        size='1rem'
                        thickness='1px'
                      />
                      <Quote className='absolute top-8 right-8 h-8 w-8 text-white/5 opacity-50 transition-colors group-hover:text-primary/10' />

                      <div className='mb-8 flex gap-1.5 relative z-10'>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className='h-4 w-4 text-accent drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]'
                            fill={index < rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <p className='relative z-10 mb-10 text-base font-light italic leading-relaxed text-white/80'>
                        "{testimonial.quote}"
                      </p>
                      <div className='relative z-10 mt-auto flex items-center gap-4'>
                        <div className='h-12 w-12 rounded-full bg-white/5 flex items-center justify-center font-heading text-xl font-medium text-white ring-1 ring-white/10 group-hover:border-primary group-hover:ring-primary/30 transition-colors'>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className='text-base font-light tracking-wide text-white'>
                            {testimonial.name}
                          </p>
                          <p className='text-[10px] font-medium tracking-widest text-white/40 mt-1 uppercase'>
                            {testimonial.title ? `${testimonial.title} • ` : ''}
                            {testimonial.city}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <FadeIn className='py-24 text-center'>
              <div className='mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                <Star className='h-10 w-10 text-white/20' />
              </div>
              <p className='text-xl font-light text-white/40'>
                No hay testimonios registrados actualmente.
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
