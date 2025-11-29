import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Shield, Sparkles, Star, Users, Zap } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { HeroCarousel } from '@/components/hero-carousel';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { getPayloadClient } from '@/lib/payload';
import { cn } from '@/lib/utils';

dayjs.locale('es');

export const revalidate = 0;

const DIAMONDS = Array.from({ length: 20 });

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
    description: 'Todos los productos cumplen con estándares internacionales de seguridad',
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
    <div className={cn('flex gap-3 text-accent', className)}>
      {DIAMONDS.map((_, i) => (
        <span key={i} className='text-lg'>
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
  if ('filename' in media && media.filename) return `/media/${media.filename}` as string;
  return null;
}

export default async function Home() {
  const payload = await getPayloadClient();

  const [home, productsRes, featuredRes, eventsRes, locationsRes, testimonialsRes] =
    await Promise.all([
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

  const stats = (home as any)?.stats?.length ? (home as any).stats : DEFAULT_STATS;
  const reasons = (home as any)?.reasons?.length ? (home as any).reasons : DEFAULT_REASONS;
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

  const featuredHeading = (home as any)?.featured?.heading ?? 'Colección Destacada';
  const featuredSubheading =
    (home as any)?.featured?.subheading ??
    'Productos pirotécnicos premium cuidadosamente seleccionados';

  const eventsHeading = (home as any)?.eventsSection?.heading ?? 'Próximos Eventos';
  const eventsSubheading =
    (home as any)?.eventsSection?.subheading ?? 'Espectáculos impresionantes en toda Colombia';

  const locationsHeading = (home as any)?.locationsSection?.heading ?? 'Visítanos';
  const locationsSubheading =
    (home as any)?.locationsSection?.subheading ?? 'Salas de exhibición profesionales en todo el país';
  const locationsHero = getMediaUrl((home as any)?.locationsSection?.heroImage) || '/images/store_bg.png';

  const testimonialsHeading =
    (home as any)?.testimonialsSection?.heading ?? 'Lo Que Dicen Nuestros Clientes';
  const testimonialsSubheading =
    (home as any)?.testimonialsSection?.subheading ?? 'Confiado por profesionales en toda Colombia';

  const cta = (home as any)?.cta ?? {
    title: '¿Listo Para Encender?',
    body: 'Explora nuestra colección premium y experimenta la excelencia pirotécnica.',
    primaryLabel: 'Comprar Ahora',
    primaryHref: '/products',
  };

  return (
    <div className='w-full bg-primary text-foreground'>
      <SiteHeader />

      <section className='relative overflow-hidden'>
        <div className='flex h-8 items-center justify-center bg-black relative z-10'>
          <DiamondRow />
        </div>

        <div className='flex flex-col md:flex-row'>
          {/* Left side - Text content with white background */}
          <div className='flex w-full flex-col justify-center bg-white px-6 py-12 md:w-1/2 md:px-12 md:py-20 lg:px-16'>
            <div className='mx-auto max-w-xl space-y-8'>
              <div className='space-y-6'>
                <div className='relative inline-block rounded-none border-2 border-black px-6 py-3'>
                  <p className='relative z-10 text-sm font-bold uppercase tracking-[0.2em] text-black'>
                    {hero.eyebrow}
                  </p>
                </div>
                <h1 className='font-heading text-4xl font-black leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl'>
                  {hero.title}
                </h1>
                <p className='text-xl font-bold leading-tight text-black md:text-2xl lg:text-3xl'>
                  {hero.subtitle}
                </p>
              </div>
              <p className='text-base font-semibold leading-relaxed text-black/80 md:text-lg'>
                {hero.description}
              </p>
              <div className='flex flex-col gap-4 pt-4 sm:flex-row'>
                <Link
                  href={hero.primaryCtaHref}
                  className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 text-center text-lg font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
                >
                  {hero.primaryCtaLabel}
                </Link>
                <Link
                  href={hero.secondaryCtaHref}
                  className='inline-block rounded-none border-4 border-black bg-primary px-8 py-4 text-center text-lg font-black uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-primary'
                >
                  {hero.secondaryCtaLabel}
                </Link>
              </div>
              <div className='flex flex-wrap gap-6 pt-8 md:gap-8'>
                <div className='flex items-center gap-2'>
                  <Shield className='h-6 w-6 text-black' />
                  <span className='text-sm font-bold text-black'>100% Seguro</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Star className='h-6 w-6 text-black' />
                  <span className='text-sm font-bold text-black'>Mejor Calificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Carousel */}
          <div className='relative h-[400px] w-full md:h-auto md:min-h-[600px] md:w-1/2'>
            <HeroCarousel />
          </div>
        </div>

        <div className='flex h-8 items-center justify-center bg-black relative z-10'>
          <DiamondRow />
        </div>
      </section>

      <section className='bg-primary py-0'>
        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-6xl'>
              {featuredHeading}
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-white'>{featuredSubheading}</p>
          </div>

          {featuredProducts.length > 0 ? (
            <div className='grid gap-8 md:grid-cols-3'>
              {featuredProducts.map((product: any) => {
                const productImage = getMediaUrl(product?.image);
                const rating = Math.round(product?.rating ?? 5);
                return (
                  <div
                    key={product.id}
                    className='relative border-[6px] border-black bg-primary p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
                  >
                    <CornerOrnament inset='0.75rem' size='2rem' thickness='2px' variant='intricate' />
                    <div className='relative mb-6 flex h-64 items-center justify-center overflow-hidden bg-black'>
                      <CornerOrnament
                        inset='0.5rem'
                        size='1.25rem'
                        thickness='2px'
                        className='[&_span]:bg-accent'
                      />
                      <div className='relative z-10 space-y-2 text-center'>
                        {productImage ? (
                          <Image
                            src={productImage}
                            alt={product.name}
                            width={300}
                            height={250}
                            className='mx-auto h-40 w-auto object-cover'
                          />
                        ) : (
                          <Sparkles className='mx-auto h-16 w-16 text-accent' />
                        )}
                        <p className='text-lg font-black text-white'>{product.name}</p>
                      </div>
                      {product.badge && (
                        <div className='absolute -top-1 -right-1 border-2 border-accent bg-black px-4 py-2 text-sm font-black text-accent'>
                          {product.badge}
                        </div>
                      )}
                    </div>

                    <div className='space-y-4'>
                      <h3 className='text-2xl font-black text-black'>{product.name}</h3>
                      {product.description && (
                        <p className='text-sm font-semibold leading-relaxed text-black'>
                          {product.description}
                        </p>
                      )}
                      <div className='flex items-center justify-between border-t-2 border-black pt-4'>
                        <div className='flex gap-1'>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className='h-5 w-5 text-accent'
                              fill={index < rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        {product.badge && (
                          <span className='text-xs font-black text-black'>{product.badge}</span>
                        )}
                      </div>
                      <Link
                        href='/products'
                        className='mt-4 block w-full rounded-none border-[3px] border-black bg-black px-4 py-3 text-center text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
                      >
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className='text-center text-lg font-semibold text-white/60'>
              No hay productos destacados actualmente.
            </p>
          )}

          <div className='mt-16 text-center'>
            <Link
              href='/products'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Ver Colección Completa
            </Link>
          </div>
        </div>

        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>
      </section>

      <section className='bg-white py-0'>
        <div className='h-2 bg-black' />

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='grid gap-8 text-center md:grid-cols-4'>
            {stats.map((stat: any) => (
              <div
                key={stat.label}
                className='relative space-y-2 border-4 border-black bg-white p-6'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' variant='intricate' />
                <p className='relative z-10 text-5xl font-black text-black md:text-6xl'>
                  {stat.value}
                </p>
                <p className='relative z-10 text-lg font-bold text-black'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='h-2 bg-black' />
      </section>

      <section className='bg-primary py-0'>
        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-6xl'>
              Por Qué Escogernos
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-white'>
              Calidad premium se encuentra con experiencia profesional
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {reasons.map((reason: any) => {
              const Icon = ICONS[(reason?.icon as keyof typeof ICONS) ?? 'shield'] ?? Shield;
              return (
                <div
                  key={reason?.title}
                  className='relative border-4 border-black bg-white p-8'
                >
                  <CornerOrnament inset='0.75rem' size='1.5rem' thickness='2px' variant='intricate' />
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-black'>
                    <Icon className='h-8 w-8 text-accent' />
                  </div>
                  <h3 className='mb-2 text-center text-2xl font-black text-black'>
                    {reason?.title}
                  </h3>
                  <p className='text-center text-sm font-semibold text-black'>
                    {reason?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>
      </section>

      {/* Events section hidden for now
      <section className='bg-primary py-0'>
        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              {eventsHeading}
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>{eventsSubheading}</p>
          </div>

          {events.length > 0 ? (
            <div className='mb-8 grid gap-8 md:grid-cols-3'>
              {events.map((event: any) => {
                const dateLabel = dayjs(event.date).format('DD');
                const monthLabel = dayjs(event.date).format('MMM');
                return (
                  <div
                    key={event.id}
                    className='relative border-4 border-black bg-white p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
                  >
                    <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex h-12 w-12 items-center justify-center border-2 border-black bg-primary'>
                        <Sparkles className='h-6 w-6 text-black' />
                      </div>
                      <div>
                        <p className='text-xs font-black uppercase text-black'>
                          {monthLabel} {dateLabel}
                        </p>
                        <p className='font-black text-black'>{event.title}</p>
                      </div>
                    </div>
                    <p className='mb-4 text-sm font-semibold text-black'>{event.description}</p>
                    <Link
                      href={event.ctaUrl || '/events'}
                      className='text-sm font-black uppercase tracking-wider text-black transition-colors hover:text-primary'
                    >
                      {event.ctaLabel || 'Más Información →'}
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className='mb-8 text-center text-lg font-semibold text-black/60'>
              No hay eventos programados actualmente.
            </p>
          )}

          <div className='text-center'>
            <Link
              href='/events'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Todos los Eventos
            </Link>
          </div>
        </div>

        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>
      </section>
      */}

      <section className='bg-white py-0'>
        <div className='h-2 bg-black' />

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              {locationsHeading}
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>{locationsSubheading}</p>
          </div>

          <div className='mb-16'>
            <Image
              src={locationsHero}
              alt='Exhibición Premium de Pólvora'
              width={1200}
              height={800}
              className='mx-auto h-auto w-full max-w-4xl'
              priority
            />
          </div>

          {locations.length > 0 ? (
            <div className='grid gap-8 md:grid-cols-3'>
              {locations.map((location: any) => (
                <div
                  key={location.id}
                  className='relative border-4 border-black bg-white p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
                >
                  <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                  <div className='mb-4 flex items-center gap-3'>
                    <MapPin className='h-6 w-6 text-primary' />
                    <h3 className='text-2xl font-black text-black'>{location.city}</h3>
                  </div>
                  {location.description && (
                    <p className='mb-4 text-sm font-semibold text-black'>{location.description}</p>
                  )}
                  {location.address && (
                    <p className='text-sm font-semibold text-black'>{location.address}</p>
                  )}
                  {location.phone && (
                    <p className='text-sm font-semibold text-black'>{location.phone}</p>
                  )}
                  {location.hours && (
                    <p className='text-xs font-semibold text-black/80'>{location.hours}</p>
                  )}
                  <Link
                    href={location.mapUrl || '/locations'}
                    className='mt-4 inline-block text-sm font-black uppercase tracking-wider text-primary transition-colors hover:text-black'
                  >
                    Ver Detalles →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center text-lg font-semibold text-black/60'>
              No hay ubicaciones registradas actualmente.
            </p>
          )}

          <div className='mt-16 text-center'>
            <Link
              href='/locations'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Todas las Ubicaciones
            </Link>
          </div>
        </div>

        <div className='h-2 bg-black' />
      </section>

      <section className='bg-primary py-0'>
        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-6xl'>
              {testimonialsHeading}
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-white'>{testimonialsSubheading}</p>
          </div>

          {testimonials.length > 0 ? (
            <div className='grid gap-8 md:grid-cols-3'>
              {testimonials.map((testimonial: any) => {
                const rating = Math.round(testimonial.rating ?? 5);
                return (
                  <div
                    key={testimonial.id}
                    className='relative border-4 border-black bg-white p-8'
                  >
                    <CornerOrnament
                      inset='0.75rem'
                      size='1.5rem'
                      thickness='2px'
                      variant='intricate'
                    />
                    <div className='relative z-10 mb-4 flex gap-1'>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className='h-5 w-5 text-accent'
                          fill={starIndex < rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <p className='relative z-10 mb-6 text-sm font-semibold italic leading-relaxed text-black'>
                      "{testimonial.quote}"
                    </p>
                    <div className='relative z-10 border-t-2 border-black pt-4'>
                      <p className='font-black text-black'>{testimonial.name}</p>
                      <p className='text-xs font-bold uppercase text-black'>
                        {testimonial.title ? `${testimonial.title} • ` : ''}
                        {testimonial.city || (testimonial.verified ? 'Compra Verificada' : '')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className='text-center text-lg font-semibold text-black/60'>
              No hay testimonios registrados actualmente.
            </p>
          )}

          <div className='mt-16 text-center'>
            <Link
              href='/testimonials'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Más Reseñas
            </Link>
          </div>
        </div>

        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>
      </section>

      <CTASection
        title={cta.title}
        body={cta.body}
        ctaLabel={cta.primaryLabel}
        ctaHref={cta.primaryHref}
      />

      <footer className='border-t-8 border-primary bg-black py-12 text-white md:py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-8 grid gap-8 md:grid-cols-4'>
            <div>
              <h3 className='mb-4 text-2xl font-black uppercase text-accent'>
                FAVIO FAVIO DOMINÓ
              </h3>
              <p className='text-sm font-semibold text-white/80'>
                Productos pirotécnicos premium confiados en toda Colombia.
              </p>
            </div>
            <div>
              <h4 className='mb-4 font-black uppercase text-accent'>Productos</h4>
              <ul className='space-y-2 text-sm font-semibold text-white/70'>
                <li>
                  <Link href='/products' className='transition-colors hover:text-accent'>
                    Todos los Productos
                  </Link>
                </li>
                <li>
                  <a href='#' className='transition-colors hover:text-accent'>
                    Más Vendidos
                  </a>
                </li>
                <li>
                  <a href='#' className='transition-colors hover:text-accent'>
                    Nuevos Lanzamientos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-4 font-black uppercase text-accent'>Empresa</h4>
              <ul className='space-y-2 text-sm font-semibold text-white/70'>
                <li>
                  <Link href='/locations' className='transition-colors hover:text-accent'>
                    Ubicaciones
                  </Link>
                </li>
                <li>
                  <Link href='/testimonials' className='transition-colors hover:text-accent'>
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='transition-colors hover:text-accent'>
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-4 font-black uppercase text-accent'>Soporte</h4>
              <ul className='space-y-2 text-sm font-semibold text-white/70'>
                <li>
                  <Link href='/contact' className='transition-colors hover:text-accent'>
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href='/faq' className='transition-colors hover:text-accent'>
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link href='/safety' className='transition-colors hover:text-accent'>
                    Información de Seguridad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/20 pt-8'>
            <div className='flex flex-col items-center justify-between gap-4 text-sm font-semibold text-white/60 md:flex-row'>
              <p>© 2024 FAVIO FAVIO DOMINÓ. Todos los derechos reservados.</p>
              <div className='flex gap-6'>
                <Link href='/privacy' className='transition-colors hover:text-accent'>
                  Política de Privacidad
                </Link>
                <Link href='/terms' className='transition-colors hover:text-accent'>
                  Términos de Servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton phoneNumber="573001234567" />
    </div>
  );
}
