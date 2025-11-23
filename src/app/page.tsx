import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Shield, Sparkles, Star, Users, Zap } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { SiteHeader } from '@/components/site-header';
import { cn } from '@/lib/utils';

const DIAMONDS = Array.from({ length: 20 });

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

export default function Home() {
  return (
    <div className='w-full bg-primary text-foreground'>
      <SiteHeader />

      <section className='relative overflow-hidden bg-primary'>
        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 h-full w-full object-cover'
        >
          <source src='/header_video.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='2' height='2' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='rgba(255,255,255,0.25)'/%3E%3Ccircle cx='0.5' cy='0.5' r='0.5' fill='%23BA182F'/%3E%3C/svg%3E")`,
          backgroundSize: '2px 2px',
          backgroundRepeat: 'repeat'
        }} />

        <div className='container relative z-10 mx-auto px-4 py-20 md:py-32'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div className='space-y-8'>
              <div className='space-y-6'>
                <div className='relative inline-block rounded-none border-2 border-black px-6 py-3'>
                  <CornerOrnament inset='0.25rem' size='0.5rem' thickness='2px' />
                  <p className='relative z-10 text-sm font-bold uppercase tracking-[0.2em] text-black'>
                    Excelencia Pirotécnica
                  </p>
                </div>
                <h1 className='font-heading whitespace-nowrap text-[3.375rem] font-black leading-tight tracking-tight text-black md:text-[3.9375rem]'>
                  FAVIO FAVIO DOMINÓ
                </h1>
                <p className='max-w-lg text-2xl font-bold leading-tight text-black md:text-3xl'>
                  Pólvora y Pirotecnia Premium para Colombia
                </p>
              </div>
              <p className='max-w-lg text-lg font-semibold leading-relaxed text-black'>
                La fuente más confiable para espectáculos pirotécnicos
                profesionales. Certificados seguros, elaborados por expertos,
                inolvidablemente espectaculares.
              </p>
              <div className='flex flex-col gap-4 pt-4 sm:flex-row'>
                <Link
                  href='/products'
                  className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 text-center text-lg font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
                >
                  Ver Colección
                </Link>
                <Link
                  href='/events'
                  className='inline-block rounded-none border-4 border-black bg-primary px-8 py-4 text-center text-lg font-black uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-primary'
                >
                  Ver Eventos
                </Link>
              </div>
              <div className='flex gap-8 pt-8'>
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
        </div>

        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>
      </section>

      <section className='bg-white py-0'>
        <div className='h-2 bg-black' />

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              Colección Destacada
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
              Productos pirotécnicos premium cuidadosamente seleccionados
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {[
              { name: 'Fuego de Dragón Elite', badge: 'Nuevo Lanzamiento' },
              { name: 'Estallido Celestial Premium', badge: 'Más Vendido' },
              { name: 'Serie Oro Imperial', badge: 'Limitado' },
            ].map((product) => (
              <div
                key={product.name}
                className='relative border-[6px] border-black bg-primary p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
              >
                <CornerOrnament inset='0.75rem' size='2rem' thickness='2px' variant='intricate' />
                <div className='relative mb-6 flex h-64 items-center justify-center overflow-hidden bg-black'>
                  <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' className='[&_span]:bg-accent' />
                  <div className='relative z-10 space-y-2 text-center'>
                    <Sparkles className='mx-auto h-16 w-16 text-accent' />
                    <p className='text-lg font-black text-white'>
                      {product.name}
                    </p>
                  </div>
                  <div className='absolute -top-1 -right-1 border-2 border-accent bg-black px-4 py-2 text-sm font-black text-accent'>
                    {product.badge}
                  </div>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-2xl font-black text-black'>
                    {product.name}
                  </h3>
                  <p className='text-sm font-semibold leading-relaxed text-black'>
                    Kit de exhibición pirotécnica de grado profesional con
                    características de seguridad certificadas e instrucciones expertas.
                  </p>
                  <div className='flex items-center justify-between border-t-2 border-black pt-4'>
                    <div className='flex gap-1'>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className='h-5 w-5 text-accent'
                          fill='currentColor'
                        />
                      ))}
                    </div>
                    <span className='text-xs font-black text-black'>(48)</span>
                  </div>
                  <Link
                    href='/products'
                    className='mt-4 block w-full rounded-none border-[3px] border-black bg-black px-4 py-3 text-center text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Link
              href='/products'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Ver Colección Completa
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
          <div className='grid gap-8 text-center md:grid-cols-4'>
            {[
              { value: '5,000+', label: 'Productos Vendidos' },
              { value: '98%', label: 'Satisfacción' },
              { value: '25+', label: 'Años de Experiencia' },
              { value: '50+', label: 'Ubicaciones' },
            ].map((stat) => (
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

        <div className='flex h-8 items-center justify-center bg-black'>
          <DiamondRow />
        </div>
      </section>

      <section className='bg-white py-0'>
        <div className='h-2 bg-black' />

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              Por Qué Escogernos
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
              Calidad premium se encuentra con experiencia profesional
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {[
              {
                icon: Shield,
                title: 'Certificado Seguro',
                desc: 'Todos los productos cumplen con estándares internacionales de seguridad',
              },
              {
                icon: Users,
                title: 'Equipo Experto',
                desc: 'Profesionales listos para ayudar con tus necesidades',
              },
              {
                icon: Zap,
                title: 'Entrega Rápida',
                desc: 'Entrega nacional con manejo profesional',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className='relative border-4 border-black bg-primary p-8'
              >
                <CornerOrnament inset='0.75rem' size='1.5rem' thickness='2px' variant='intricate' />
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-black'>
                  <Icon className='h-8 w-8 text-accent' />
                </div>
                <h3 className='mb-2 text-center text-2xl font-black text-black'>
                  {title}
                </h3>
                <p className='text-center text-sm font-semibold text-black'>
                  {desc}
                </p>
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
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              Próximos Eventos
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
              Espectáculos impresionantes en toda Colombia
            </p>
          </div>

          <div className='mb-8 grid gap-8 md:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className='relative border-4 border-black bg-white p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                <div className='mb-4 flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center border-2 border-black bg-primary'>
                    <Sparkles className='h-6 w-6 text-black' />
                  </div>
                  <div>
                    <p className='text-xs font-black uppercase text-black'>
                      Dic {15 + (index + 1) * 5}
                    </p>
                    <p className='font-black text-black'>Evento {index + 1}</p>
                  </div>
                </div>
                <p className='mb-4 text-sm font-semibold text-black'>
                  Exhibición pirotécnica profesional con sincronización musical.
                </p>
                <Link
                  href='/events'
                  className='text-sm font-black uppercase tracking-wider text-black transition-colors hover:text-primary'
                >
                  Más Información →
                </Link>
              </div>
            ))}
          </div>

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

      <section className='bg-white py-0'>
        <div className='h-2 bg-black' />

        <div className='container mx-auto px-4 py-20 md:py-28'>
          <div className='mb-16 text-center'>
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              Visítanos
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
              Salas de exhibición profesionales en todo el país
            </p>
          </div>

          <div className='mb-16'>
            <Image
              src='/store_bg.png'
              alt='Exhibición Premium de Pólvora'
              width={1200}
              height={800}
              className='mx-auto h-auto w-full max-w-4xl'
              priority
            />
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {['Bogotá', 'Medellín', 'Cali'].map((city) => (
              <div
                key={city}
                className='relative border-4 border-black bg-white p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                <div className='mb-4 flex items-center gap-3'>
                  <MapPin className='h-6 w-6 text-primary' />
                  <h3 className='text-2xl font-black text-black'>{city}</h3>
                </div>
                <p className='mb-4 text-sm font-semibold text-black'>
                  Sala de exhibición profesional y centro de atención al cliente
                </p>
                <Link
                  href='/locations'
                  className='text-sm font-black uppercase tracking-wider text-primary transition-colors hover:text-black'
                >
                  Ver Detalles →
                </Link>
              </div>
            ))}
          </div>

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
            <h2 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
              Confiado por profesionales en toda Colombia
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className='relative border-4 border-black bg-white p-8'
              >
                <CornerOrnament inset='0.75rem' size='1.5rem' thickness='2px' variant='intricate' />
                <div className='relative z-10 mb-4 flex gap-1'>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className='h-5 w-5 text-accent'
                      fill='currentColor'
                    />
                  ))}
                </div>
                <p className='relative z-10 mb-6 text-sm font-semibold italic leading-relaxed text-black'>
                  "¡Calidad y servicio excepcionales! FAVIO FAVIO DOMINÓ ha entregado
                  consistentemente los mejores productos pirotécnicos para nuestros
                  eventos. ¡Muy recomendado!"
                </p>
                <div className='relative z-10 border-t-2 border-black pt-4'>
                  <p className='font-black text-black'>Cliente {index + 1}</p>
                  <p className='text-xs font-bold uppercase text-black'>
                    Compra Verificada
                  </p>
                </div>
              </div>
            ))}
          </div>

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

      <section className='bg-black py-16'>
        <div className='relative container mx-auto border-8 border-primary px-4 py-20 text-center md:py-24'>
          <CornerOrnament inset='1rem' size='2.5rem' thickness='2px' variant='intricate' className='[&_span]:bg-primary' />
          <CornerOrnament inset='2.5rem' size='1.5rem' thickness='2px' variant='intricate' className='[&_span]:bg-primary' />
          <CornerOrnament inset='4rem' size='1rem' thickness='2px' className='[&_span]:border-accent [&_span]:bg-transparent!' />
          <h2 className='font-heading relative z-10 text-4xl font-black uppercase tracking-wider text-primary md:text-5xl'>
            ¿Listo Para Encender?
          </h2>
          <p className='relative z-10 mx-auto mt-6 max-w-2xl text-lg font-bold text-accent'>
            Explora nuestra colección premium y experimenta la excelencia pirotécnica.
          </p>
          <Link
            href='/products'
            className='relative z-10 mt-8 inline-block rounded-none border-4 border-primary bg-primary px-8 py-4 font-black uppercase tracking-wider text-black transition-colors hover:bg-accent'
          >
            Comprar Ahora
          </Link>
        </div>
      </section>

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
                  <Link
                    href='/products'
                    className='transition-colors hover:text-accent'
                  >
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
                  <Link
                    href='/events'
                    className='transition-colors hover:text-accent'
                  >
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link
                    href='/locations'
                    className='transition-colors hover:text-accent'
                  >
                    Ubicaciones
                  </Link>
                </li>
                <li>
                  <a href='#' className='transition-colors hover:text-accent'>
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-4 font-black uppercase text-accent'>Soporte</h4>
              <ul className='space-y-2 text-sm font-semibold text-white/70'>
                <li>
                  <a href='#' className='transition-colors hover:text-accent'>
                    Contacto
                  </a>
                </li>
                <li>
                  <a href='#' className='transition-colors hover:text-accent'>
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href='#' className='transition-colors hover:text-accent'>
                    Información de Seguridad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/20 pt-8'>
            <div className='flex flex-col items-center justify-between gap-4 text-sm font-semibold text-white/60 md:flex-row'>
              <p>© 2024 FAVIO FAVIO DOMINÓ. Todos los derechos reservados.</p>
              <div className='flex gap-6'>
                <a href='#' className='transition-colors hover:text-accent'>
                  Política de Privacidad
                </a>
                <a href='#' className='transition-colors hover:text-accent'>
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
