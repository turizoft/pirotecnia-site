import { FileText } from 'lucide-react';

import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function PrivacyPage() {
  const payload = await getPayloadClient();
  const privacy = await payload.findGlobal({ slug: 'privacy' }).catch(() => null);

  const hero = (privacy as any)?.hero ?? {
    title: 'Política de Privacidad',
    subtitle: 'Cómo protegemos tu información personal',
  };

  const content = (privacy as any)?.content;

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
          {content ? (
            <div className='prose prose-lg mx-auto max-w-3xl'>
              {/* Rich text content would be rendered here */}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <FileText className='mx-auto mb-4 h-16 w-16 text-primary/50' />
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
