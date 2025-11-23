import Link from 'next/link';
import { Sparkles } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { SiteHeader } from '@/components/site-header';

const EVENTS = Array.from({ length: 4 }).map((_, index) => ({
  date: 15 + (index + 1) * 5,
  title: `Event ${index + 1}: Spectacular Display`,
}));

export default function EventsPage() {
  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container px-4'>
          <h1 className='mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            Upcoming Events
          </h1>
          <p className='max-w-2xl text-lg font-bold text-black'>
            Spectacular pyrotechnic displays across Colombia
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container px-4'>
          <div className='mb-12 space-y-6'>
            {EVENTS.map((event) => (
              <div
                key={event.title}
                className='relative flex items-start gap-6 border-4 border-black bg-primary p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                <div className='relative z-10 flex flex-shrink-0 flex-col items-center justify-center gap-2 border-2 border-black bg-black px-4 py-3 text-center'>
                  <p className='text-4xl font-black text-accent'>{event.date}</p>
                  <p className='text-xs font-black uppercase text-accent'>Dec</p>
                </div>
                <div className='relative z-10 flex-grow space-y-3'>
                  <h3 className='text-2xl font-black uppercase text-black'>
                    {event.title}
                  </h3>
                  <p className='text-sm font-semibold text-black'>
                    Professional fireworks display with synchronized music and
                    special effects. All ages welcome!
                  </p>
                  <button className='rounded-none border-2 border-black bg-black px-6 py-2 text-xs font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center'>
            <Link
              href='/'
              className='inline-block rounded-none border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black'
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
