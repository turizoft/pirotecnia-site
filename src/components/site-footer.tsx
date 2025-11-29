import Link from 'next/link';

export function SiteFooter() {
  return (
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
                  href='/locations'
                  className='transition-colors hover:text-accent'
                >
                  Ubicaciones
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className='transition-colors hover:text-accent'
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='transition-colors hover:text-accent'
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-4 font-black uppercase text-accent'>Soporte</h4>
            <ul className='space-y-2 text-sm font-semibold text-white/70'>
              <li>
                <Link
                  href='/contact'
                  className='transition-colors hover:text-accent'
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='transition-colors hover:text-accent'
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href='/safety'
                  className='transition-colors hover:text-accent'
                >
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
  );
}
