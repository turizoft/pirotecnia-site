import { AlertTriangle, CheckCircle, Flame, ShieldCheck } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

const ICONS = {
  shield: ShieldCheck,
  alert: AlertTriangle,
  check: CheckCircle,
  flame: Flame,
} as const;

export default async function SafetyPage() {
  const payload = await getPayloadClient();
  const safety = await payload.findGlobal({ slug: 'safety' }).catch(() => null);

  const hero = (safety as any)?.hero ?? {
    title: 'Información de Seguridad',
    subtitle: 'Tu seguridad es nuestra prioridad',
  };

  const guidelines = (safety as any)?.guidelines ?? [];

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
          {guidelines.length > 0 ? (
            <div className='grid gap-8 md:grid-cols-2'>
              {guidelines.map((guideline: any, index: number) => {
                const Icon = ICONS[(guideline?.icon as keyof typeof ICONS) ?? 'shield'] ?? ShieldCheck;
                return (
                  <div
                    key={index}
                    className='relative border-4 border-black bg-primary p-8'
                  >
                    <CornerOrnament inset='0.75rem' size='1.5rem' thickness='2px' variant='intricate' />
                    <div className='mb-4 flex h-16 w-16 items-center justify-center bg-black'>
                      <Icon className='h-8 w-8 text-accent' />
                    </div>
                    <h3 className='mb-2 text-2xl font-black text-black'>
                      {guideline.title}
                    </h3>
                    <p className='text-sm font-semibold text-black'>
                      {guideline.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='py-16 text-center'>
              <ShieldCheck className='mx-auto mb-4 h-16 w-16 text-primary/50' />
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
