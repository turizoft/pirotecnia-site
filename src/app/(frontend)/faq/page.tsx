import { HelpCircle, Plus } from 'lucide-react';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function FAQPage() {
  const payload = await getPayloadClient();
  const faq = await payload.findGlobal({ slug: 'faq' }).catch(() => null);

  const hero = (faq as any)?.hero ?? {
    title: 'Preguntas',
    titleAccent: 'Frecuentes',
    subtitle: 'Respuestas a las dudas más comunes de nuestros clientes',
  };

  const questions = (faq as any)?.questions ?? [];

  return (
    <div className='min-h-screen bg-black text-white'>
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
          <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

          <div className='container relative z-10 mx-auto px-4 pt-32 pb-20 text-center'>
            <FadeIn>
              <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-5 pl-2 py-1.5 backdrop-blur-md mb-8'>
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20'>
                  <HelpCircle className='h-3 w-3 text-primary' />
                </div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                  Centro de Ayuda
                </p>
              </div>
              <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
                Preguntas{' '}
                <span className='text-primary font-black block mt-2'>
                  Frecuentes
                </span>
              </h1>
              <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
                {hero.subtitle}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content Section */}
        <section className='relative py-24 md:py-32'>
          <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />
          <div className='container relative z-10 mx-auto px-4'>
            {questions.length > 0 ? (
              <StaggerContainer className='mx-auto max-w-3xl space-y-4'>
                {questions.map((item: any, index: number) => (
                  <StaggerItem key={index}>
                    <div className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-white/20'>
                      <div className='flex items-start gap-4'>
                        <div className='mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary'>
                          <Plus className='h-4 w-4 transition-transform group-hover:rotate-45' />
                        </div>
                        <div>
                          <h3 className='font-heading mb-3 text-xl font-medium tracking-tight text-white'>
                            {item.question}
                          </h3>
                          <p className='text-sm font-light leading-relaxed text-white/60'>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <FadeIn className='mx-auto max-w-md rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center backdrop-blur-sm'>
                <HelpCircle className='mx-auto mb-6 h-16 w-16 text-white/20' />
                <p className='text-lg font-light text-white/40'>
                  Contenido próximamente.
                </p>
              </FadeIn>
            )}
          </div>
        </section>

        <CTASection />
      </main>

      <SiteFooter />
    </div>
  );
}
