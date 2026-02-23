import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { FadeIn } from '@/components/animations';
import { CornerOrnament } from '@/components/corner-ornament';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z' />
  </svg>
);
export default async function ContactPage() {
  const payload = await getPayloadClient();
  const contact = await payload
    .findGlobal({ slug: 'contact' })
    .catch(() => null);

  const hero = (contact as any)?.hero ?? {
    title: 'Habla',
    titleAccent: 'con nosotros',
    subtitle: 'Estamos aquí para ayudarte con tus necesidades pirotécnicas',
  };

  const email = (contact as any)?.email;
  const phone = (contact as any)?.phone;
  const whatsapp = (contact as any)?.whatsapp;
  const address = (contact as any)?.address;
  const hours = (contact as any)?.hours;

  const hasContactInfo = email || phone || whatsapp || address || hours;

  return (
    <div className='min-h-screen bg-black text-white'>
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
          <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

          <div className='container relative z-10 mx-auto px-4 pt-32 pb-20 text-center'>
            <FadeIn>
              <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-5 pl-2 py-1.5 backdrop-blur-md mb-8'>
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20'>
                  <Phone className='h-3 w-3 text-primary' />
                </div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                  Atención al Cliente
                </p>
              </div>
              <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
                Habla{' '}
                <span className='text-primary font-black block mt-2'>
                  Con Nosotros
                </span>
              </h1>
              <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
                {hero.subtitle}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content Section */}
        <section className='relative py-24 md:py-32'>
          <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />
          <div className='container relative z-10 mx-auto px-4'>
            {hasContactInfo ? (
              <FadeIn className='mx-auto max-w-3xl'>
                <div className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm shadow-[0_0_40px_rgba(255,0,0,0.05)]'>
                  <CornerOrnament
                    inset='1rem'
                    size='2rem'
                    thickness='1px'
                    className='text-white/10 transition-colors group-hover:text-primary/30'
                  />
                  <div className='space-y-8 relative z-10'>
                    {email && (
                      <div className='flex items-start gap-6'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                          <Mail className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <p className='text-xs font-bold uppercase tracking-widest text-white/40 mb-2'>
                            Email
                          </p>
                          <a
                            href={`mailto:${email}`}
                            className='text-lg font-light text-white transition-colors hover:text-primary'
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                    )}
                    {phone && (
                      <div className='flex items-start gap-6'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                          <Phone className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <p className='text-xs font-bold uppercase tracking-widest text-white/40 mb-2'>
                            Teléfono
                          </p>
                          <a
                            href={`tel:${phone}`}
                            className='text-lg font-light text-white transition-colors hover:text-primary'
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    )}
                    {whatsapp && (
                      <div className='flex items-start gap-6'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                          <WhatsAppIcon className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <p className='text-xs font-bold uppercase tracking-widest text-white/40 mb-2'>
                            WhatsApp
                          </p>
                          <a
                            href={`https://wa.me/${whatsapp}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-lg font-light text-white transition-colors hover:text-primary'
                          >
                            {whatsapp}
                          </a>
                        </div>
                      </div>
                    )}
                    {address && (
                      <div className='flex items-start gap-6'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                          <MapPin className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <p className='text-xs font-bold uppercase tracking-widest text-white/40 mb-2'>
                            Dirección
                          </p>
                          <p className='text-lg font-light text-white/80'>
                            {address}
                          </p>
                        </div>
                      </div>
                    )}
                    {hours && (
                      <div className='flex items-start gap-6'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10'>
                          <Clock className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <p className='text-xs font-bold uppercase tracking-widest text-white/40 mb-2'>
                            Horario
                          </p>
                          <p className='text-lg font-light text-white/80'>
                            {hours}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ) : (
              <FadeIn className='mx-auto max-w-md rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center backdrop-blur-sm'>
                <Mail className='mx-auto mb-6 h-16 w-16 text-white/20' />
                <p className='text-lg font-light text-white/40'>
                  Contenido próximamente.
                </p>
              </FadeIn>
            )}
          </div>
        </section>

        <CTASection />
      </main>

      <SiteFooter />
    </div>
  );
}
