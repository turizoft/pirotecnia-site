import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-lg'>
      <div className='container mx-auto py-4'>
        <nav className='flex items-center justify-between gap-8'>
          <Link href='/' className='group flex items-center gap-2'>
            <Image
              src='/logo_text.png'
              alt='Logo FAVIO FAVIO DOMINÓ'
              width={150}
              height={48}
              className='h-12 w-auto'
              priority
            />
          </Link>

          <div className='flex flex-1 flex-wrap items-center justify-center gap-2 md:flex-none md:gap-4'>
            {[
              { href: '/', label: 'Inicio' },
              { href: '/products', label: 'Productos' },
              { href: '/events', label: 'Eventos' },
              { href: '/locations', label: 'Ubicaciones' },
              { href: '/testimonials', label: 'Reseñas' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='rounded-none px-3 py-2 text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-primary/50 hover:text-accent md:text-base'
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href='/products'
            className='hidden rounded-none border-2 border-black bg-black px-6 py-3 text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black md:inline-block'
          >
            Comprar
          </Link>
        </nav>
      </div>
    </header>
  );
}
