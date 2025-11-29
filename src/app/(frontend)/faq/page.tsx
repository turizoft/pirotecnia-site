import { HelpCircle } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function FAQPage() {
  const payload = await getPayloadClient();
  const faq = await payload.findGlobal({ slug: 'faq' }).catch(() => null);

  const hero = (faq as any)?.hero ?? {
    title: 'Preguntas Frecuentes',
    subtitle: 'Respuestas a las dudas más comunes de nuestros clientes',
  };

  const questions = (faq as any)?.questions ?? [];

  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-6xl'>
            {hero.title}
          </h1>
          <p className='mx-auto max-w-2xl text-lg font-bold text-white'>
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          {questions.length > 0 ? (
            <div className='mx-auto max-w-3xl space-y-4'>
              {questions.map((item: any, index: number) => (
                <div
                  key={index}
                  className='relative border-4 border-black bg-primary p-6'
                >
                  <CornerOrnament inset='0.5rem' size='1rem' thickness='2px' />
                  <h3 className='mb-3 text-xl font-black text-black'>
                    {item.question}
                  </h3>
                  <p className='text-sm font-semibold leading-relaxed text-black'>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <HelpCircle className='mx-auto mb-4 h-16 w-16 text-primary/50' />
              <p className='text-xl font-semibold text-gray-500'>
                Contenido próximamente.
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
