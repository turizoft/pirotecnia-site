import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/animations';

type CTASectionProps = {
  title?: string | null;
  body?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
};

export function CTASection({
  title = '¿Listo Para Encender?',
  body = 'Explora nuestra colección premium y experimenta la excelencia pirotécnica.',
  ctaLabel = 'Comprar Ahora',
  ctaHref = '/products',
}: CTASectionProps) {
  return (
    <section className='relative flex items-center justify-center overflow-hidden border-t border-white/10 bg-black py-24 md:py-32'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
      <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

      <div className='container relative z-10 mx-auto px-4 text-center'>
        <FadeIn>
          <div className='mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
            <span className='absolute h-16 w-16 rounded-full bg-primary/20 animate-ping opacity-20' />
            <Sparkles className='h-6 w-6 text-primary' />
          </div>
          <h2 className='font-heading mb-6 text-4xl font-medium uppercase tracking-tight text-white md:text-5xl lg:text-6xl'>
            {title}
          </h2>
          <p className='mx-auto mb-10 max-w-2xl text-lg md:text-xl font-light text-white/60'>
            {body}
          </p>
          <Link
            href={ctaHref || '/products'}
            className='group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,0,0,0.3)] ring-1 ring-primary/50 transition-all hover:bg-red-600 hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black'
          >
            {ctaLabel}
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
