import Link from 'next/link';
import { CornerOrnament } from './corner-ornament';

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
    <section className='bg-black py-16'>
      <div className='relative container mx-auto border-8 border-primary px-4 py-20 text-center md:py-24'>
        <CornerOrnament
          inset='1rem'
          size='2.5rem'
          thickness='2px'
          variant='intricate'
          className='[&_span]:bg-primary'
        />
        <CornerOrnament
          inset='2.5rem'
          size='1.5rem'
          thickness='2px'
          variant='intricate'
          className='[&_span]:bg-primary'
        />
        <CornerOrnament
          inset='4rem'
          size='1rem'
          thickness='2px'
          className='[&_span]:border-accent [&_span]:bg-transparent!'
        />
        <h2 className='font-heading relative z-10 text-4xl font-black uppercase tracking-wider text-primary md:text-5xl'>
          {title}
        </h2>
        <p className='relative z-10 mx-auto mt-6 max-w-2xl text-lg font-bold text-accent'>
          {body}
        </p>
        <Link
          href={ctaHref || '/products'}
          className='relative z-10 mt-8 inline-block rounded-none border-4 border-primary bg-primary px-8 py-4 font-black uppercase tracking-wider text-black transition-colors hover:bg-accent'
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
