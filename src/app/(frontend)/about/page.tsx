import { Building2, Shield, Star, Users } from 'lucide-react';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

const ICONS = {
  shield: Shield,
  star: Star,
  users: Users,
  building: Building2,
} as const;

export default async function AboutPage() {
  const payload = await getPayloadClient();
  const about = await payload.findGlobal({ slug: 'about' }).catch(() => null);

  const hero = (about as any)?.hero ?? {
    title: 'Sobre',
    titleAccent: 'Nosotros',
    subtitle: 'Más de 25 años iluminando celebraciones en Colombia',
  };

  const sections = (about as any)?.sections ?? [];

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
                  <Building2 className='h-3 w-3 text-primary' />
                </div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                  Nuestra Historia
                </p>
              </div>
              <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
                {hero.title}{' '}
                {hero.titleAccent && (
                  <span className='text-primary font-black block mt-2'>
                    {hero.titleAccent}
                  </span>
                )}
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
          <div className='container relative z-10 mx-auto px-4 lg:px-8'>
            {sections.length > 0 ? (
              <StaggerContainer className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {sections.map((section: any, index: number) => {
                  const Icon =
                    ICONS[(section?.icon as keyof typeof ICONS) ?? 'shield'] ??
                    Shield;
                  return (
                    <StaggerItem key={index}>
                      <div className='group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,0,0,0.08)]'>
                        <CornerOrnament
                          inset='1rem'
                          size='1.5rem'
                          thickness='1px'
                          className='text-white/10 transition-colors group-hover:text-primary/30'
                        />
                        <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-transform group-hover:scale-110'>
                          <Icon className='h-8 w-8 text-primary' />
                        </div>
                        <h3 className='mb-4 font-heading text-2xl font-medium tracking-tight text-white'>
                          {section.title}
                        </h3>
                        <p className='text-sm font-light leading-relaxed text-white/60 group-hover:text-white/80'>
                          {section.description}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            ) : (
              <FadeIn className='mx-auto max-w-md rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center backdrop-blur-sm'>
                <Building2 className='mx-auto mb-6 h-16 w-16 text-white/20' />
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
