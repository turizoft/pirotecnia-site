import { FileText } from 'lucide-react';

import { FadeIn } from '@/components/animations';
import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function PrivacyPage() {
  const payload = await getPayloadClient();
  const privacy = await payload
    .findGlobal({ slug: 'privacy' })
    .catch(() => null);

  const hero = (privacy as any)?.hero ?? {
    title: 'Política de',
    titleAccent: 'Privacidad',
    subtitle: 'Cómo protegemos tu información personal',
  };

  const content = (privacy as any)?.content;

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
                  <FileText className='h-3 w-3 text-primary' />
                </div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                  Información Legal
                </p>
              </div>
              <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
                Política de{' '}
                <span className='text-primary font-black block mt-2'>
                  Privacidad
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
            {content ? (
              <FadeIn className='mx-auto max-w-4xl'>
                <div className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm shadow-[0_0_40px_rgba(255,0,0,0.05)]'>
                  <CornerOrnament
                    inset='1rem'
                    size='2rem'
                    thickness='1px'
                    className='text-white/10'
                  />
                  <div className='prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-white prose-p:text-white/70 prose-p:font-light'>
                    {/* Rich text content would be rendered here */}
                    {typeof content === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                      <p className='text-white/40 font-mono text-sm'>
                        Contenido detectado pero requiere renderizado de Payload
                        CMS.
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ) : (
              <FadeIn className='mx-auto max-w-md rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center backdrop-blur-sm'>
                <FileText className='mx-auto mb-6 h-16 w-16 text-white/20' />
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
