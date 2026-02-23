'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/products', label: 'Productos' },
  { href: '/locations', label: 'Ubicaciones' },
  { href: '/testimonials', label: 'Reseñas' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className='container mx-auto px-4 lg:px-8 py-4'>
        <nav className='flex items-center justify-between gap-4'>
          <Link href='/' className='group flex items-center gap-2'>
            <Image
              src='/images/logo_text.png'
              alt='Logo FAVIO FAVIO DOMINÓ'
              width={180}
              height={58}
              className='h-10 w-auto md:h-12 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] filter'
              style={{ width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-8 md:flex'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='relative text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white group'
              >
                {item.label}
                <span className='absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full' />
              </Link>
            ))}
          </div>

          <Link
            href='/products'
            className='hidden md:inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:border-white'
          >
            Comprar
          </Link>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/20 md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='mt-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-4 md:hidden shadow-2xl'>
            <div className='flex flex-col gap-2'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='block rounded-xl px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white/80 transition-all hover:bg-white/10 hover:text-white'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href='/products'
                className='mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-red-600'
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
