import Image from 'next/image';

import '@/styles/carousel.css';

const CAROUSEL_IMAGES = [
  { src: '/images/1.jpg', alt: 'Pirotecnia 1' },
  { src: '/images/2.jpg', alt: 'Pirotecnia 2' },
  { src: '/images/3.jpg', alt: 'Pirotecnia 3' },
];

export function HeroCarousel() {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide-${index + 1} absolute inset-0`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className='object-cover'
            sizes='100vw'
          />
        </div>
      ))}
    </div>
  );
}
