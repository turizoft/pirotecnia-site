import Link from 'next/link';
import { Star } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { SiteHeader } from '@/components/site-header';

const TESTIMONIALS = [
  {
    name: 'Carlos Rodríguez',
    title: 'Event Organizer',
    city: 'Bogotá',
    text: 'IGNITION has been our trusted partner for over 5 years. Their professionalism and product quality are unmatched. Every event is a success!',
  },
  {
    name: 'María García',
    title: 'Wedding Planner',
    city: 'Medellín',
    text: 'The customer service was exceptional. They guided us through every step and our celebration was absolutely spectacular!',
  },
  {
    name: 'Juan Martínez',
    title: 'City Event Manager',
    city: 'Cali',
    text: 'Professional, reliable, and safe. IGNITION sets the standard for pyrotechnic displays. Highly recommended!',
  },
  {
    name: 'Laura Sánchez',
    title: 'Corporate Event Coordinator',
    city: 'Barranquilla',
    text: 'Outstanding quality and service. The displays were magnificent and added the perfect touch to our corporate event.',
  },
  {
    name: 'Fernando López',
    title: 'Festival Director',
    city: 'Cali',
    text: 'Year after year, IGNITION delivers excellence. Their safety standards and product variety make them the best choice.',
  },
  {
    name: 'Ana Pérez',
    title: 'Hotel Event Manager',
    city: 'Bogotá',
    text: 'Professional team, amazing results. Our guests were blown away by the pyrotechnic displays. Will definitely use them again!',
  },
];

export default function TestimonialsPage() {
  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container px-4'>
          <h1 className='mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            Customer Reviews
          </h1>
          <p className='max-w-2xl text-lg font-bold text-black'>
            Real experiences from satisfied clients
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container px-4'>
          <div className='mb-12 grid gap-8 md:grid-cols-2'>
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className='relative border-4 border-black bg-primary p-8'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                <div className='relative z-10 mb-4 flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className='h-5 w-5 text-accent'
                      fill='currentColor'
                    />
                  ))}
                </div>
                <p className='relative z-10 mb-6 text-sm font-semibold italic leading-relaxed text-black'>
                  "{testimonial.text}"
                </p>
                <div className='relative z-10 border-t-2 border-black pt-4'>
                  <p className='text-lg font-black uppercase text-black'>
                    {testimonial.name}
                  </p>
                  <p className='text-xs font-bold uppercase text-black'>
                    {testimonial.title} • {testimonial.city}
                  </p>
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
