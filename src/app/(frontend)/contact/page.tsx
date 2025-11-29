import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

export default async function ContactPage() {
  const payload = await getPayloadClient();
  const contact = await payload.findGlobal({ slug: 'contact' }).catch(() => null);

  const hero = (contact as any)?.hero ?? {
    title: 'Contacto',
    subtitle: 'Estamos aquí para ayudarte con tus necesidades pirotécnicas',
  };

  const email = (contact as any)?.email;
  const phone = (contact as any)?.phone;
  const whatsapp = (contact as any)?.whatsapp;
  const address = (contact as any)?.address;
  const hours = (contact as any)?.hours;

  const hasContactInfo = email || phone || whatsapp || address || hours;

  return (
    <div className='w-full bg-background text-foreground'>
      <SiteHeader />

      <section className='border-b-8 border-black bg-primary py-16 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='font-heading mb-4 text-5xl font-black uppercase tracking-tight text-black md:text-6xl'>
            {hero.title}
          </h1>
          <p className='mx-auto max-w-2xl text-lg font-bold text-black'>
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className='bg-white py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          {hasContactInfo ? (
            <div className='mx-auto max-w-2xl'>
              <div className='relative border-4 border-black bg-primary p-8'>
                <CornerOrnament inset='0.75rem' size='1.5rem' thickness='2px' variant='intricate' />
                <div className='space-y-6'>
                  {email && (
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 items-center justify-center bg-black'>
                        <Mail className='h-6 w-6 text-accent' />
                      </div>
                      <div>
                        <p className='text-sm font-bold uppercase text-black/60'>Email</p>
                        <a href={`mailto:${email}`} className='text-lg font-black text-black hover:text-primary'>
                          {email}
                        </a>
                      </div>
                    </div>
                  )}
                  {phone && (
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 items-center justify-center bg-black'>
                        <Phone className='h-6 w-6 text-accent' />
                      </div>
                      <div>
                        <p className='text-sm font-bold uppercase text-black/60'>Teléfono</p>
                        <a href={`tel:${phone}`} className='text-lg font-black text-black hover:text-primary'>
                          {phone}
                        </a>
                      </div>
                    </div>
                  )}
                  {whatsapp && (
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 items-center justify-center bg-black'>
                        <Phone className='h-6 w-6 text-accent' />
                      </div>
                      <div>
                        <p className='text-sm font-bold uppercase text-black/60'>WhatsApp</p>
                        <a
                          href={`https://wa.me/${whatsapp}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-lg font-black text-black hover:text-primary'
                        >
                          {whatsapp}
                        </a>
                      </div>
                    </div>
                  )}
                  {address && (
                    <div className='flex items-start gap-4'>
                      <div className='flex h-12 w-12 shrink-0 items-center justify-center bg-black'>
                        <MapPin className='h-6 w-6 text-accent' />
                      </div>
                      <div>
                        <p className='text-sm font-bold uppercase text-black/60'>Dirección</p>
                        <p className='text-lg font-black text-black'>{address}</p>
                      </div>
                    </div>
                  )}
                  {hours && (
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 items-center justify-center bg-black'>
                        <Clock className='h-6 w-6 text-accent' />
                      </div>
                      <div>
                        <p className='text-sm font-bold uppercase text-black/60'>Horario</p>
                        <p className='text-lg font-black text-black'>{hours}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className='py-16 text-center'>
              <Mail className='mx-auto mb-4 h-16 w-16 text-primary/50' />
              <p className='text-xl font-semibold text-gray-500'>
                Contenido próximamente.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <SiteFooter />
    </div>
  );
}
