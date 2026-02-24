import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

import { FadeIn } from '@/components/animations';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getPayloadClient } from '@/lib/payload';

export const revalidate = 0;

const getProductBySlug = cache(async (slug: string) => {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
        collection: 'products',
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
    const product = await getProductBySlug(resolvedParams.slug);

    if (!product) {
        return {};
    }

    // Ensure seo properties exist via optional chaining
    const seoTitle = product.meta?.title || `${product.name} | Venta de Pirotecnia Premium`;
    const seoDescription =
        product.meta?.description ||
        product.description ||
        `Compra ${product.name}, uno de nuestros mejores productos de pirotecnia de calidad profesional.`;

    return {
        title: seoTitle,
        description: seoDescription,
        keywords: [
            product.name,
            'comprar pirotecnia online',
            'pirotecnia premium',
            'polvora profesional',
            'fuegos artificiales',
        ],
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `/products/${product.slug}`,
            siteName: 'FAVIO FAVIO DOMINÓ',
            locale: 'es_CO',
            type: 'website',
            images: product.image && typeof product.image !== 'string' ? [{ url: product.image.url || `/media/${product.image.filename}` }] : []
        },
    };
}

export async function generateStaticParams() {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
        collection: 'products',
        limit: 100,
    });

    return docs.map((doc) => ({
        slug: doc.slug,
    }));
}

function getMediaUrl(media: any) {
  if (!media) return null;
  let url = null;
  if (typeof media === 'string') {
    url = media;
  } else if ('url' in media && media.url) {
    url = media.url as string;
  } else if ('filename' in media && media.filename) {
    url = `/api/media/file/${media.filename}`;
  }
  
  if (url && url.startsWith('http')) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === 'localhost' || parsed.hostname.includes('pirotecnia')) {
        return parsed.pathname;
      }
    } catch (e) {}
  }
  return url;
}

export default async function ProductSinglePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const product = await getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const imageUrl = getMediaUrl(product.image);
    const rating = Math.round(product.rating ?? 5);

    return (
        <div className='w-full bg-black text-white selection:bg-primary selection:text-white pb-0'>
            <SiteHeader />

            <section className='relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/10'>
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,0,0,0.15)_0%,_rgba(0,0,0,1)_70%)]' />
                <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-[0.02] mix-blend-overlay' />

                <div className='container relative z-10 mx-auto px-4 pt-32 pb-20'>
                    <div className='grid md:grid-cols-2 gap-16 items-center'>
                        <FadeIn>
                            <div className='relative h-96 md:h-[32rem] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 overflow-hidden group flex items-center justify-center'>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                                {imageUrl ? (
                                    <Image
                                        src={imageUrl}
                                        alt={product.name}
                                        width={800}
                                        height={800}
                                        className='relative z-0 object-contain w-full h-full opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100'
                                    />
                                ) : (
                                    <Sparkles className='mx-auto h-24 w-24 text-white/20' />
                                )}
                                {product.badge && (
                                    <div className='absolute top-6 right-6 z-20 rounded-full bg-primary/20 backdrop-blur-md px-6 py-2 text-sm font-bold uppercase tracking-wider text-primary ring-1 ring-primary/50'>
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className='space-y-8'>
                                <Link
                                    href='/products'
                                    className='inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-primary transition-colors'
                                >
                                    <ArrowRight className='h-4 w-4 rotate-180' /> Volver a la Colección
                                </Link>

                                <div className='space-y-4'>
                                    <div className='flex items-center gap-2'>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star
                                                key={index}
                                                className='h-5 w-5 text-accent opacity-100 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]'
                                                fill={index < rating ? 'currentColor' : 'none'}
                                            />
                                        ))}
                                        <span className='ml-2 text-white/60 font-light text-sm'>
                                            ({rating}/5 Calificación de Calidad)
                                        </span>
                                    </div>

                                    <h1 className='text-4xl md:text-6xl font-medium uppercase tracking-tight text-white mb-6'>
                                        {product.name}
                                    </h1>
                                </div>

                                <div className='space-y-6 pt-6 border-t border-white/10'>
                                    <p className='text-xl text-white/60 font-light leading-relaxed max-w-xl'>
                                        {product.description || 'Consulta nuestra amplia selección de productos pirotécnicos para tu evento. ¡Seguridad y calidad garantizada!'}
                                    </p>
                                </div>

                                <div className='flex gap-4 pt-8'>
                                    <Link
                                        href='/contact'
                                        className='inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95'
                                    >
                                        Cotizar Ahora
                                    </Link>
                                    <Link
                                        href='/locations'
                                        className='inline-flex items-center justify-center gap-3 rounded-full bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white ring-1 ring-white/10 transition-all hover:bg-white hover:text-black hover:ring-white'
                                    >
                                        Ver Disponibilidad Local
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <CTASection
                title='Ilumina tu Evento'
                body={`¿Te interesa ${product.name}? Agenda una cita con nuestros expertos.`}
                ctaLabel='Contáctanos'
                ctaHref='/contact'
            />

            <SiteFooter />
        </div>
    );
}
