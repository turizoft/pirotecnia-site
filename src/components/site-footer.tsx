import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='border-t border-white/5 bg-black py-16 text-white md:py-24 relative overflow-hidden'>
      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='mb-16 grid gap-12 md:grid-cols-4 lg:gap-16'>
          <div className='md:col-span-1'>
            <h3 className='font-heading mb-6 text-2xl font-light uppercase tracking-widest text-white'>
              FAVIO <span className='text-primary'>DOMINÓ</span>
            </h3>
            <p className='text-sm font-light leading-relaxed text-white/50 max-w-xs'>
              Productos pirotécnicos premium confiados en toda Colombia.
              Elevando el arte de la celebración desde 1999.
            </p>
          </div>
          <div>
            <h4 className='mb-6 text-xs font-bold uppercase tracking-widest text-white/40'>
              Productos
            </h4>
            <ul className='space-y-4 text-sm font-light text-white/70'>
              <li>
                <Link
                  href='/products'
                  className='transition-colors hover:text-primary'
                >
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link
                  href='/products?category=best-sellers'
                  className='transition-colors hover:text-primary'
                >
                  Más Vendidos
                </Link>
              </li>
              <li>
                <Link
                  href='/products?category=new-arrivals'
                  className='transition-colors hover:text-primary'
                >
                  Nuevos Lanzamientos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-6 text-xs font-bold uppercase tracking-widest text-white/40'>
              Empresa
            </h4>
            <ul className='space-y-4 text-sm font-light text-white/70'>
              <li>
                <Link
                  href='/locations'
                  className='transition-colors hover:text-primary'
                >
                  Ubicaciones
                </Link>
              </li>
              <li>
                <Link
                  href='/events'
                  className='transition-colors hover:text-primary'
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className='transition-colors hover:text-primary'
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='transition-colors hover:text-primary'
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-6 text-xs font-bold uppercase tracking-widest text-white/40'>
              Soporte
            </h4>
            <ul className='space-y-4 text-sm font-light text-white/70'>
              <li>
                <Link
                  href='/contact'
                  className='transition-colors hover:text-primary'
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='transition-colors hover:text-primary'
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href='/safety'
                  className='transition-colors hover:text-primary'
                >
                  Información de Seguridad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 mt-8 text-xs font-light text-white/40 md:flex-row'>
          <p>
            © {new Date().getFullYear()} FAVIO FAVIO DOMINÓ. Todos los derechos
            reservados.
          </p>
          <div className='flex gap-8'>
            <Link
              href='/privacy'
              className='transition-colors hover:text-white'
            >
              Política de Privacidad
            </Link>
            <Link href='/terms' className='transition-colors hover:text-white'>
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
