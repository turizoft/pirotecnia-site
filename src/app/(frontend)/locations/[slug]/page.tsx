import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

const getLocationBySlug = cache(async (slug: string) => {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
        collection: 'locations',
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
    });
    return docs[0] || null;
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const location = await getLocationBySlug(resolvedParams.slug);

    if (!location) {
        return {};
    }

    // Ensure seo exists properties via optional chaining, fallback if not filled by plugin yet
    const seoTitle = location.meta?.title || `Productos Pirotécnicos en ${location.city} | FAVIO FAVIO DOMINÓ`;
    const seoDescription =
        location.meta?.description ||
        `Encuentra los mejores productos pirotécnicos y pólvora premium en ${location.city}. Visita nuestra sala de exhibición en ${location.address}.`;

    return {
        title: seoTitle,
        description: seoDescription,
        keywords: [
            `pirotecnia en ${location.city}`,
            `polvora en ${location.city}`,
            `fuegos artificiales ${location.city}`,
            `comprar pirotecnia ${location.city}`,
            `tienda de fuegos artificiales en ${location.city}`
        ],
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `/locations/${location.slug}`,
            siteName: 'FAVIO FAVIO DOMINÓ',
            locale: 'es_CO',
            type: 'website',
        },
    };
}

// Ensure the generateStaticParams works if they use static export at any point
export async function generateStaticParams() {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
        collection: 'locations',
        limit: 100,
    });

    return docs.map((doc) => ({
        slug: doc.slug,
    }));
}

function getMediaUrl(media: any) {
    if (!media) return null;
    if (typeof media === 'string') return media;
    if ('url' in media && media.url) return media.url as string;
    if ('filename' in media && media.filename) return `/media/${media.filename}` as string;
    return null;
}

export default async function LocationSinglePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const location = await getLocationBySlug(resolvedParams.slug);

    if (!location) {
        notFound();
    }

    // Fetch some products to showcase in this location
    const payload = await getPayloadClient();
    const { docs: products } = await payload.find({
        collection: 'products',
        limit: 8,
    });

    return (
        <div className='w-full bg-black text-white selection:bg-primary selection:text-white pb-0'>
            <SiteHeader />

            <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10'>
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
                <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

                <div className='container relative z-10 mx-auto px-4 pt-32 pb-20 text-center'>
                    <FadeIn>
                        <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-5 pl-2 py-1.5 backdrop-blur-md mb-8'>
                            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20'>
                                <span className='h-2 w-2 rounded-full bg-primary animate-pulse' />
                            </div>
                            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
                                Nuestra Tienda
                            </p>
                        </div>
                        <h1 className='font-heading mb-6 text-5xl font-medium uppercase tracking-tight text-white md:text-7xl'>
                            Pirotecnia en{' '}
                            <span className='text-primary font-black block mt-2'>
                                {location.city}
                            </span>
                        </h1>
                        <p className='mx-auto max-w-2xl text-xl font-light text-white/60'>
                            Visita nuestra sala de exhibición ubicada en {location.address}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Location Details Section */}
            <section className='container mx-auto px-4 py-16 text-center lg:py-24 border-b border-white/10'>
                <FadeIn className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='flex flex-col items-center bg-white/5 p-8 rounded-2xl border border-white/10'>
                        <MapPin className='mb-4 text-primary w-10 h-10' />
                        <h3 className='text-lg font-bold mb-2 uppercase tracking-wide text-white'>Dirección</h3>
                        <p className='text-white/60 font-light'>{location.address}</p>
                    </div>
                    <div className='flex flex-col items-center bg-white/5 p-8 rounded-2xl border border-white/10'>
                        <Phone className='mb-4 text-primary w-10 h-10' />
                        <h3 className='text-lg font-bold mb-2 uppercase tracking-wide text-white'>Teléfono</h3>
                        <p className='text-white/60 font-light'>{location.phone || 'No disponible'}</p>
                    </div>
                    <div className='flex flex-col items-center bg-white/5 p-8 rounded-2xl border border-white/10'>
                        <Star className='mb-4 text-primary w-10 h-10' />
                        <h3 className='text-lg font-bold mb-2 uppercase tracking-wide text-white'>Horarios</h3>
                        <p className='text-white/60 font-light'>{location.hours || 'Lunes - Viernes: 9am - 6pm'}</p>
                    </div>
                    <div className='flex flex-col items-center bg-white/5 p-8 rounded-2xl border border-white/10'>
                        <ArrowRight className='mb-4 text-primary w-10 h-10' />
                        <h3 className='text-lg font-bold mb-2 uppercase tracking-wide text-white'>Servicios</h3>
                        <p className='text-white/60 font-light'>Asesoría experta y de calidad</p>
                    </div>
                </FadeIn>
                {location.description && (
                    <FadeIn className="pt-12 text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                        {location.description}
                    </FadeIn>
                )}
            </section>

            {/* Products Display Section specifically aiming for local SEO product search intent */}
            <section className='relative py-24 md:py-32'>
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,0,0,0.05)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none' />

                <div className='container mx-auto px-4 lg:px-8'>
                    <div className="text-center mb-16">
                        <h2 className='text-3xl font-medium uppercase tracking-tight text-white md:text-5xl'>
                            Nuestros Productos en {location.city}
                        </h2>
                        <p className='mt-4 text-white/60 font-light'>Descubre nuestras ofertas especiales en nuestra tienda local.</p>
                    </div>

                    {products.length > 0 ? (
                        <StaggerContainer className='grid gap-8 md:grid-cols-3 lg:grid-cols-4'>
                            {products.map((product: any) => {
                                const rating = Math.round(product?.rating ?? 5);
                                const imageUrl = getMediaUrl(product?.image);
                                return (
                                    <StaggerItem key={product.id}>
                                        <div className='group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,0,0,0.08)]'>
                                            <div className='relative mb-8 flex h-56 items-center justify-center overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5'>
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                                                {imageUrl ? (
                                                    <Image
                                                        src={imageUrl}
                                                        alt={product.name}
                                                        width={400}
                                                        height={400}
                                                        className='relative z-0 h-[80%] w-auto object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100'
                                                    />
                                                ) : null}
                                            </div>

                                            <div className='space-y-4 relative z-10'>
                                                <h3 className='text-xl font-light text-white tracking-wide'>
                                                    {product.name}
                                                </h3>
                                                <Link
                                                    href={`/products/${product.slug}`}
                                                    className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all group-hover:border-primary group-hover:bg-primary/10'
                                                >
                                                    Ver Detalles <ArrowRight className='h-3 w-3' />
                                                </Link>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    ) : null}
                </div>
            </section>

            <CTASection
                title={`¿Buscas lo Mejor en ${location.city}?`}
                body='Visítanos hoy mismo en nuestra sala de exhibición y conoce nuestra calidad.'
                ctaLabel='Ver Catálogo Completo'
                ctaHref='/products'
            />
            <SiteFooter />
        </div>
    );
}
