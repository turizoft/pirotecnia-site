'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/products', label: 'Productos' },
  { href: '/locations', label: 'Ubicaciones' },
  { href: '/testimonials', label: 'Reseñas' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-lg'>
      <div className='container mx-auto px-4 py-4'>
        <nav className='flex items-center justify-between gap-4'>
          <Link href='/' className='group flex items-center gap-2'>
            <Image
              src='/images/logo_text.png'
              alt='Logo FAVIO FAVIO DOMINÓ'
              width={150}
              height={48}
              className='h-10 w-auto md:h-12'
              style={{ width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-4 md:flex'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='rounded-none px-3 py-2 text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-primary hover:text-white lg:text-base'
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href='/products'
            className='hidden rounded-none border-2 border-black bg-black px-6 py-3 text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black lg:inline-block'
          >
            Comprar
          </Link>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center border-2 border-black bg-black text-primary md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='border-t-2 border-black pt-4 md:hidden'>
            <div className='flex flex-col gap-2'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='block rounded-none px-4 py-3 text-center text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-primary hover:text-white'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href='/products'
                className='mt-2 block rounded-none border-2 border-black bg-black px-4 py-3 text-center text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'
                onClick={() => setIsMenuOpen(false)}
              >
                Comprar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
