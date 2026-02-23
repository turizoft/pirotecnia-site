import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {
  ArrowRight,
  MapPin,
  Play,
  Quote,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CornerOrnament } from '@/components/corner-ornament';
import { HeroCarousel } from '@/components/hero-carousel';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { getPayloadClient } from '@/lib/payload';
import { cn } from '@/lib/utils';

dayjs.locale('es');

export const revalidate = 0;

const DIAMONDS = Array.from({ length: 9 });

const ICONS = {
  shield: Shield,
  users: Users,
  zap: Zap,
} as const;

const DEFAULT_STATS = [
  { value: '5,000+', label: 'Productos Vendidos' },
  { value: '98%', label: 'Satisfacción' },
  { value: '25+', label: 'Años de Experiencia' },
  { value: '50+', label: 'Ubicaciones' },
];

const DEFAULT_REASONS = [
  {
    icon: 'shield',
    title: 'Certificado Seguro',
    description:
      'Todos los productos cumplen con estándares internacionales de seguridad',
  },
  {
    icon: 'users',
    title: 'Equipo Experto',
    description: 'Profesionales listos para ayudar con tus necesidades',
  },
  {
    icon: 'zap',
    title: 'Entrega Rápida',
    description: 'Entrega nacional con manejo profesional',
  },
];

function DiamondRow({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-6 items-center text-primary/40', className)}>
      {DIAMONDS.map((_, i) => (
        <span key={i} className='text-xs transform rotate-45'>
          ◆
        </span>
      ))}
    </div>
  );
}

function getMediaUrl(media: any) {
  if (!media) return null;
  if (typeof media === 'string') return media;
  if ('url' in media && media.url) return media.url as string;
  if ('filename' in media && media.filename)
    return `/media/${media.filename}` as string;
  return null;
}

export default async function Home() {
  const payload = await getPayloadClient();

  const [
    home,
    productsRes,
    featuredRes,
    eventsRes,
    locationsRes,
    testimonialsRes,
  ] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 2 }).catch(() => null),
    payload
      .find({
        collection: 'products',
        depth: 2,
        limit: 12,
        overrideAccess: false,
      })
      .catch(() => null),
    payload
      .find({
        collection: 'products',
        depth: 2,
        limit: 6,
        where: { featured: { equals: true } },
        overrideAccess: false,
      })
      .catch(() => null),
    payload
      .find({
        collection: 'events',
        limit: 3,
        sort: 'date',
        overrideAccess: false,
      })
      .catch(() => null),
    payload
      .find({
        collection: 'locations',
        limit: 3,
        overrideAccess: false,
      })
      .catch(() => null),
    payload
      .find({
        collection: 'testimonials',
        limit: 3,
        overrideAccess: false,
      })
      .catch(() => null),
  ]);

  const allProducts = productsRes?.docs ?? [];
  const featuredProductsFromGlobal =
    (home as any)?.featured?.products?.map((product: any) => {
      if (typeof product === 'string') {
        return allProducts.find((p: any) => `${p.id}` === product);
      }
      return product;
    }) ?? [];

  const featuredProducts =
    featuredProductsFromGlobal.filter(Boolean).length > 0
      ? featuredProductsFromGlobal.filter(Boolean)
      : featuredRes?.docs?.length
        ? featuredRes.docs
        : allProducts.slice(0, 3);

  const stats = (home as any)?.stats?.length
    ? (home as any).stats
    : DEFAULT_STATS;
  const reasons = (home as any)?.reasons?.length
    ? (home as any).reasons
    : DEFAULT_REASONS;
  const events = eventsRes?.docs ?? [];
  const locations = locationsRes?.docs ?? [];
  const testimonials = testimonialsRes?.docs ?? [];

  const hero = (home as any)?.hero ?? {
    eyebrow: 'Excelencia Pirotécnica',
    title: 'FAVIO FAVIO DOMINÓ',
    subtitle: 'Pólvora y Pirotecnia Premium para Colombia',
    description:
      'La fuente más confiable para espectáculos pirotécnicos profesionales. Certificados seguros, elaborados por expertos, inolvidablemente espectaculares.',
    primaryCtaLabel: 'Ver Colección',
    primaryCtaHref: '/products',
    secondaryCtaLabel: 'Ver Eventos',
    secondaryCtaHref: '/events',
    videoUrl: '/header_video.mp4',
  };

  const featuredHeading =
    (home as any)?.featured?.heading ?? 'Colección Destacada';
  const featuredSubheading =
    (home as any)?.featured?.subheading ??
    'Productos pirotécnicos premium cuidadosamente seleccionados';

  const locationsHeading =
    (home as any)?.locationsSection?.heading ?? 'Visítanos';
  const locationsSubheading =
    (home as any)?.locationsSection?.subheading ??
    'Salas de exhibición profesionales en todo el país';
  const locationsHero =
    getMediaUrl((home as any)?.locationsSection?.heroImage) ||
    '/images/store_bg.png';

  const testimonialsHeading =
    (home as any)?.testimonialsSection?.heading ??
    'Lo Que Dicen Nuestros Clientes';
  const testimonialsSubheading =
    (home as any)?.testimonialsSection?.subheading ??
    'Confiado por profesionales en toda Colombia';

  const cta = (home as any)?.cta ?? {
    title: '¿Listo Para Encender?',
    body: 'Explora nuestra colección premium y experimenta la excelencia pirotécnica.',
    primaryLabel: 'Comprar Ahora',
    primaryHref: '/products',
  };

  return (
    <div className='w-full bg-black text-white selection:bg-primary selection:text-white pb-0'>
      <SiteHeader />

      {/* HERO SECTION */}
      <section className='relative min-h-[90vh] flex items-center overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)] opacity-100 z-0' />
        <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay z-0 pointer-events-none' />

        <div className='container relative z-10 mx-auto px-4 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row items-center gap-16'>
          <div className='w-full md:w-1/2'>
            <FadeIn delay={0.1} className='max-w-xl space-y-10'>
              <div className='space-y-6'>
                <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-5 pl-2 py-1.5 backdrop-blur-md transition-all hover:bg-white/10'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20'>
                    <span className='h-2 w-2 rounded-full bg-primary animate-pulse' />
                  </div>
                  <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                    {hero.eyebrow}
                  </p>
                </div>

                <h1 className='font-heading text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]'>
                  FAVIO FAVIO{' '}
                  <span className='text-primary font-black'>DOMINÓ</span>
                </h1>

                <p className='text-xl md:text-2xl font-light leading-relaxed text-white/80'>
                  {hero.subtitle}
                </p>
              </div>

              <p className='text-base font-light leading-relaxed text-white/50 md:text-lg max-w-md'>
                {hero.description}
              </p>

              <div className='flex flex-col gap-4 pt-4 sm:flex-row'>
                <Link
                  href={hero.primaryCtaHref}
                  className='group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,0,0,0.3)]'
                >
                  <span className='relative z-10'>{hero.primaryCtaLabel}</span>
                  <ArrowRight className='relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110' />
                </Link>
                <Link
                  href={hero.secondaryCtaHref}
                  className='group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30'
                >
                  <Play className='h-3 w-3 fill-current opacity-80' />
                  <span>{hero.secondaryCtaLabel}</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className='w-full md:w-1/2'>
            <FadeIn
              delay={0.3}
              className='relative rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(255,0,0,0.15)] ring-1 ring-white/10 before:absolute before:inset-0 before:ring-1 before:ring-inset before:ring-white/10 before:rounded-[2rem] before:z-20'
            >
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none' />
              <div className='h-[500px] w-full md:h-[650px]'>
                <HeroCarousel />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className='relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent flex items-center justify-center'>
        <div className='bg-black px-8'>
          <DiamondRow />
        </div>
      </div>

      {/* FEATURED PRODUCTS SECTION */}
      <section className='relative py-24 md:py-32'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none' />

        <div className='container mx-auto px-4 lg:px-8'>
          <FadeIn className='mb-20 text-center'>
            <p className='text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4'>
              Excelencia Comprobada
            </p>
            <h2 className='font-heading text-4xl font-light uppercase tracking-tight text-white md:text-5xl lg:text-6xl'>
              {featuredHeading}
            </h2>
            <p className='mt-6 mx-auto max-w-2xl text-lg font-light text-white/60'>
              {featuredSubheading}
            </p>
          </FadeIn>

          {featuredProducts.length > 0 ? (
            <StaggerContainer className='grid gap-8 md:grid-cols-3'>
              {featuredProducts.map((product: any) => {
                const productImage = getMediaUrl(product?.image);
                const rating = Math.round(product?.rating ?? 5);
                return (
                  <StaggerItem key={product.id}>
                    <div className='group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,0,0,0.08)]'>
                      <div className='relative mb-8 flex h-72 items-center justify-center overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                        {productImage ? (
                          <Image
                            src={productImage}
                            alt={product.name}
                            width={400}
                            height={400}
                            className='relative z-0 h-[80%] w-auto object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100'
                          />
                        ) : (
                          <Sparkles className='mx-auto h-16 w-16 text-white/20' />
                        )}
                        {product.badge && (
                          <div className='absolute top-4 right-4 z-20 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/20'>
                            {product.badge}
                          </div>
                        )}
                      </div>

                      <div className='space-y-4'>
                        <div className='flex items-center gap-2 mb-2'>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className='h-3.5 w-3.5 text-accent opacity-100 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]'
                              fill={index < rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <h3 className='text-2xl font-light text-white tracking-wide'>
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className='text-sm font-light leading-relaxed text-white/50 line-clamp-2'>
                            {product.description}
                          </p>
                        )}
                        <Link
                          href='/products'
                          className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all group-hover:border-primary group-hover:bg-primary/10'
                        >
                          Ver Detalles <ArrowRight className='h-3 w-3' />
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <p className='text-center text-lg font-light text-white/40'>
              No hay productos destacados actualmente.
            </p>
          )}

          <FadeIn delay={0.2} className='mt-20 text-center'>
            <Link
              href='/products'
              className='inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:text-white group'
            >
              <span className='border-b border-primary/30 pb-1 group-hover:border-white/50 transition-colors'>
                Ver Colección Completa
              </span>
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-2' />
            </Link>
          </FadeIn>
        </div>
      </section>

      <div className='relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent flex items-center justify-center'>
        <div className='bg-black px-8'>
          <DiamondRow />
        </div>
      </div>

      {/* STATS & REASONS SECTION */}
      <section className='relative py-24'>
        <div className='container mx-auto px-4 lg:px-8'>
          <StaggerContainer className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-24'>
            {stats.map((stat: any) => (
              <StaggerItem key={stat.label}>
                <div className='group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-12 text-center transition-all hover:bg-white/[0.04] text-white/5 hover:text-white/20'>
                  <CornerOrnament
                    variant='simple'
                    inset='0.75rem'
                    size='1rem'
                    thickness='1px'
                  />
                  <div className='absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-2xl mix-blend-overlay' />
                  <p className='relative z-10 text-5xl md:text-6xl font-heading font-light tracking-tighter text-white mb-4'>
                    {stat.value}
                  </p>
                  <p className='relative z-10 text-sm font-medium uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors'>
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className='w-full bg-gradient-to-r from-transparent via-white/10 to-transparent h-px mb-24' />

          <FadeIn className='mb-20 text-center'>
            <h2 className='font-heading mb-6 text-4xl font-light uppercase tracking-tight text-white md:text-5xl lg:text-6xl'>
              Por Qué Escogernos
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-light text-white/60'>
              Calidad premium se encuentra con experiencia profesional
            </p>
          </FadeIn>

          <StaggerContainer className='grid gap-8 md:grid-cols-3'>
            {reasons.map((reason: any) => {
              const Icon =
                ICONS[(reason?.icon as keyof typeof ICONS) ?? 'shield'] ??
                Shield;
              return (
                <StaggerItem key={reason?.title}>
                  <div className='group relative h-full rounded-2xl border border-white/5 bg-white/[0.01] p-10 text-center transition-all hover:border-white/10 hover:bg-white/[0.03]'>
                    <div className='mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110'>
                      <Icon className='h-8 w-8 text-primary/80' />
                    </div>
                    <h3 className='mb-4 text-xl font-light tracking-wide text-white'>
                      {reason?.title}
                    </h3>
                    <p className='text-sm font-light leading-relaxed text-white/50'>
                      {reason?.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <div className='relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent flex items-center justify-center'>
        <div className='bg-black px-8'>
          <DiamondRow />
        </div>
      </div>

      {/* LOCATIONS SECTION - preserves wireframe */}
      <section className='relative py-24 md:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none' />
        <div className='container mx-auto px-4 lg:px-8'>
          <FadeIn className='mb-16 text-center'>
            <h2 className='font-heading mb-6 text-4xl font-light uppercase tracking-tight text-white md:text-5xl lg:text-6xl'>
              {locationsHeading}
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-light text-white/60'>
              {locationsSubheading}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className='mb-24 relative flex justify-center'>
            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10' />
            <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10' />
            <div className='absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10' />
            <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10' />
            <Image
              src={locationsHero}
              alt='Exhibición Premium de Pólvora'
              width={1400}
              height={900}
              className='h-auto w-full max-w-5xl opacity-100 invert filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] brightness-125 select-none pointer-events-none'
              priority
            />
          </FadeIn>

          {locations.length > 0 ? (
            <StaggerContainer className='grid gap-6 md:grid-cols-3 relative z-20 -mt-20'>
              {locations.map((location: any) => (
                <StaggerItem key={location.id}>
                  <div className='relative h-full rounded-2xl border border-white/5 bg-black/80 backdrop-blur-xl p-8 shadow-2xl transition-all hover:border-white/20 hover:bg-black'>
                    <div className='mb-6 flex items-start gap-4'>
                      <div className='rounded-full bg-primary/20 p-3 ring-1 ring-primary/30'>
                        <MapPin className='h-6 w-6 text-primary' />
                      </div>
                      <h3 className='text-2xl font-light text-white tracking-wide mt-1'>
                        {location.city}
                      </h3>
                    </div>
                    <div className='space-y-3 ps-14'>
                      {location.description && (
                        <p className='text-sm font-light text-white/50'>
                          {location.description}
                        </p>
                      )}
                      {location.address && (
                        <p className='text-xs font-medium uppercase tracking-widest text-white/80'>
                          {location.address}
                        </p>
                      )}
                      {location.phone && (
                        <p className='text-xs font-medium uppercase tracking-widest text-white/80'>
                          {location.phone}
                        </p>
                      )}
                      {location.hours && (
                        <p className='text-xs font-light text-white/40 mt-2'>
                          {location.hours}
                        </p>
                      )}
                      <div className='pt-6'>
                        <Link
                          href={location.mapUrl || '/locations'}
                          className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors'
                        >
                          Ver Detalles <ArrowRight className='h-3 w-3' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <p className='text-center text-lg font-light text-white/40 relative z-20'>
              No hay ubicaciones registradas actualmente.
            </p>
          )}

          <FadeIn delay={0.3} className='mt-20 text-center relative z-20'>
            <Link
              href='/locations'
              className='inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-black'
            >
              Todas las Ubicaciones
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className='relative py-24 md:py-32'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none' />

        <div className='container mx-auto px-4 lg:px-8'>
          <FadeIn className='mb-24 text-center relative z-10'>
            <h2 className='font-heading mb-6 text-4xl font-light uppercase tracking-tight text-white md:text-5xl lg:text-6xl'>
              {testimonialsHeading}
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-light text-white/60'>
              {testimonialsSubheading}
            </p>
          </FadeIn>

          {testimonials.length > 0 ? (
            <StaggerContainer className='grid gap-8 md:grid-cols-3 relative z-10'>
              {testimonials.map((testimonial: any) => {
                const rating = Math.round(testimonial.rating ?? 5);
                return (
                  <StaggerItem key={testimonial.id}>
                    <div className='group relative h-full rounded-2xl border border-white/5 bg-white/[0.01] p-10 backdrop-blur-sm transition-all hover:bg-white/[0.03] hover:border-white/10 text-white/5 hover:text-white/20'>
                      <CornerOrnament
                        variant='simple'
                        inset='0.5rem'
                        size='1rem'
                        thickness='1px'
                      />
                      <Quote className='absolute top-8 right-8 h-8 w-8 text-white/5 opacity-50 transition-colors group-hover:text-primary/10' />

                      <div className='mb-8 flex gap-1.5'>
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className='h-4 w-4 text-accent drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]'
                            fill={starIndex < rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>

                      <p className='mb-10 text-base font-light italic leading-relaxed text-white/80'>
                        "{testimonial.quote}"
                      </p>

                      <div className='mt-auto flex items-center gap-4'>
                        <div className='h-10 w-10 rounded-full bg-white/5 flex items-center justify-center font-heading text-lg font-medium text-white ring-1 ring-white/10'>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className='text-sm font-medium tracking-wide text-white'>
                            {testimonial.name}
                          </p>
                          <p className='text-[10px] font-medium tracking-widest text-white/50 mt-1 uppercase'>
                            {testimonial.title ? `${testimonial.title} • ` : ''}
                            {testimonial.city ||
                              (testimonial.verified ? 'Compra Verificada' : '')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <p className='text-center text-lg font-light text-white/40'>
              No hay testimonios registrados actualmente.
            </p>
          )}

          <FadeIn delay={0.2} className='mt-20 text-center relative z-10'>
            <Link
              href='/testimonials'
              className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:text-white'
            >
              <span className='border-b border-primary/30 pb-1'>
                Más Reseñas
              </span>
              <ArrowRight className='h-3 w-3' />
            </Link>
          </FadeIn>
        </div>
      </section>

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
              {cta.title}
            </h2>
            <p className='mx-auto mb-10 max-w-2xl text-lg md:text-xl font-light text-white/60'>
              {cta.body}
            </p>
            <Link
              href={cta.primaryHref || '/products'}
              className='group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,0,0,0.3)] ring-1 ring-primary/50 transition-all hover:bg-red-600 hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black'
            >
              {cta.primaryLabel || 'Comprar Ahora'}
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER - Refined and Elegant */}
      <SiteFooter />

      <WhatsAppButton phoneNumber='573001234567' />
    </div>
  );
}
