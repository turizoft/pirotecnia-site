import Link from 'next/link';
import { Clock, MapPin, Phone } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { SiteHeader } from '@/components/site-header';

const LOCATIONS = [
  {
    city: 'Bogotá',
    address: 'Carrera 7 #45-25, La Candelaria',
    phone: '(1) 2345-6789',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
  },
  {
    city: 'Medellín',
    address: 'Calle 49 #50-25, Centro Comercial',
    phone: '(4) 2345-6789',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
  },
  {
    city: 'Cali',
    address: 'Carrera 5 #12-45, San Antonio',
    phone: '(2) 2345-6789',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
  },
  {
    city: 'Barranquilla',
    address: 'Calle 84 #50-25, Altos',
    phone: '(5) 2345-6789',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
  },
];

export default function LocationsPage() {
  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container px-4'>
          <h1 className='mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            Find Our Locations
          </h1>
          <p className='max-w-2xl text-lg font-bold text-black'>
            Professional showrooms nationwide
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container px-4'>
          <div className='mb-12 grid gap-8 md:grid-cols-2'>
            {LOCATIONS.map((location) => (
              <div
                key={location.city}
                className='relative border-4 border-black bg-primary p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-2xl'
              >
                <CornerOrnament inset='0.5rem' size='1.25rem' thickness='2px' />
                <h3 className='mb-6 text-3xl font-black uppercase text-black'>
                  {location.city}
                </h3>
                <div className='relative z-10 space-y-4'>
                  <div className='flex items-start gap-3'>
                    <MapPin className='mt-1 h-5 w-5 flex-shrink-0 text-black' />
                    <p className='font-semibold text-black'>{location.address}</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Phone className='h-5 w-5 flex-shrink-0 text-black' />
                    <p className='font-semibold text-black'>{location.phone}</p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Clock className='mt-1 h-5 w-5 flex-shrink-0 text-black' />
                    <p className='text-sm font-semibold text-black'>
                      {location.hours}
                    </p>
                  </div>
                </div>
                <button className='mt-6 w-full rounded-none border-2 border-black bg-black px-4 py-3 text-sm font-black uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-black'>
                  Get Directions
                </button>
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
