import path from 'path';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { es } from '@payloadcms/translations/languages/es';

const MEDIA_PATH = path.resolve(process.cwd(), 'public/media');

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:5601',
  i18n: {
    fallbackLanguage: 'es',
    supportedLanguages: { es },
  },
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Payload',
    },
  },
  editor: lexicalEditor(),
  collections: [
    {
      slug: 'users',
      labels: {
        singular: 'Usuario',
        plural: 'Usuarios',
      },
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'role',
          type: 'select',
          options: [
            {
              label: 'Administrador',
              value: 'admin',
            },
            {
              label: 'Editor',
              value: 'editor',
            },
          ],
          defaultValue: 'admin',
          required: true,
        },
      ],
    },
    {
      slug: 'media',
      labels: {
        singular: 'Archivo',
        plural: 'Archivos',
      },
      admin: {
        useAsTitle: 'alt',
      },
      upload: {
        staticDir: MEDIA_PATH,
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 400,
          },
        ],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'products',
      labels: {
        singular: 'Producto',
        plural: 'Productos',
      },
      admin: {
        useAsTitle: 'name',
        description: 'Gestiona la lista de productos y cuales aparecen destacados.',
      },
      fields: [
        {
          name: 'name',
          label: 'Nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          label: 'Slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'badge',
          label: 'Etiqueta',
          type: 'select',
          defaultValue: 'Destacado',
          options: [
            { label: 'Nuevo Lanzamiento', value: 'Nuevo Lanzamiento' },
            { label: 'Más Vendido', value: 'Más Vendido' },
            { label: 'Limitado', value: 'Limitado' },
            { label: 'Destacado', value: 'Destacado' },
          ],
        },
        {
          name: 'description',
          label: 'Descripción',
          type: 'textarea',
        },
        {
          name: 'rating',
          label: 'Calificación',
          type: 'number',
          min: 0,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'featured',
          label: 'Mostrar como destacado en home',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'image',
          label: 'Imagen',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      slug: 'events',
      labels: {
        singular: 'Evento',
        plural: 'Eventos',
      },
      admin: {
        useAsTitle: 'title',
        description: 'Controla los eventos visibles en el home y la página de eventos.',
      },
      fields: [
        {
          name: 'title',
          label: 'Título',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          label: 'Slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'date',
          label: 'Fecha',
          type: 'date',
          required: true,
        },
        {
          name: 'city',
          label: 'Ciudad',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Descripción',
          type: 'textarea',
        },
        {
          name: 'ctaLabel',
          label: 'Texto del CTA',
          type: 'text',
          defaultValue: 'Más Información',
        },
        {
          name: 'ctaUrl',
          label: 'Enlace del CTA',
          type: 'text',
          defaultValue: '/events',
        },
      ],
    },
    {
      slug: 'locations',
      labels: {
        singular: 'Ubicación',
        plural: 'Ubicaciones',
      },
      admin: {
        useAsTitle: 'city',
        description: 'Administra las salas de exhibición y datos de contacto.',
      },
      fields: [
        {
          name: 'city',
          label: 'Ciudad',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          label: 'Dirección',
          type: 'text',
          required: true,
        },
        {
          name: 'phone',
          label: 'Teléfono',
          type: 'text',
        },
        {
          name: 'hours',
          label: 'Horarios',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Descripción',
          type: 'textarea',
        },
        {
          name: 'mapUrl',
          label: 'URL de mapa',
          type: 'text',
        },
      ],
    },
    {
      slug: 'testimonials',
      labels: {
        singular: 'Testimonio',
        plural: 'Testimonios',
      },
      admin: {
        useAsTitle: 'name',
        description: 'Reseñas que aparecen en el home y página de reseñas.',
      },
      fields: [
        {
          name: 'name',
          label: 'Nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Título o cargo',
          type: 'text',
        },
        {
          name: 'city',
          label: 'Ciudad',
          type: 'text',
        },
        {
          name: 'quote',
          label: 'Reseña',
          type: 'textarea',
          required: true,
        },
        {
          name: 'rating',
          label: 'Calificación',
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'verified',
          label: 'Compra verificada',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'homepage',
      label: 'Página Principal',
      fields: [
        {
          name: 'hero',
          label: 'Hero',
          type: 'group',
          fields: [
            {
              name: 'eyebrow',
              label: 'Etiqueta',
              type: 'text',
              defaultValue: 'Excelencia Pirotécnica',
            },
            {
              name: 'title',
              label: 'Título',
              type: 'text',
              defaultValue: 'FAVIO FAVIO DOMINÓ',
            },
            {
              name: 'subtitle',
              label: 'Subtítulo',
              type: 'text',
              defaultValue: 'Pólvora y Pirotecnia Premium para Colombia',
            },
            {
              name: 'description',
              label: 'Descripción',
              type: 'textarea',
              defaultValue:
                'La fuente más confiable para espectáculos pirotécnicos profesionales. Certificados seguros, elaborados por expertos, inolvidablemente espectaculares.',
            },
            {
              name: 'primaryCtaLabel',
              label: 'CTA Primario - Texto',
              type: 'text',
              defaultValue: 'Ver Colección',
            },
            {
              name: 'primaryCtaHref',
              label: 'CTA Primario - Enlace',
              type: 'text',
              defaultValue: '/products',
            },
            {
              name: 'secondaryCtaLabel',
              label: 'CTA Secundario - Texto',
              type: 'text',
              defaultValue: 'Ver Eventos',
            },
            {
              name: 'secondaryCtaHref',
              label: 'CTA Secundario - Enlace',
              type: 'text',
              defaultValue: '/events',
            },
            {
              name: 'videoUrl',
              label: 'Video de fondo',
              type: 'text',
              defaultValue: '/header_video.mp4',
            },
          ],
        },
        {
          name: 'featured',
          label: 'Colección destacada',
          type: 'group',
          fields: [
            {
              name: 'heading',
              label: 'Título',
              type: 'text',
              defaultValue: 'Colección Destacada',
            },
            {
              name: 'subheading',
              label: 'Descripción',
              type: 'text',
              defaultValue: 'Productos pirotécnicos premium cuidadosamente seleccionados',
            },
            {
              name: 'products',
              label: 'Productos destacados',
              type: 'relationship',
              relationTo: 'products',
              hasMany: true,
            },
          ],
        },
        {
          name: 'stats',
          label: 'Métricas',
          type: 'array',
          defaultValue: [
            { value: '5,000+', label: 'Productos Vendidos' },
            { value: '98%', label: 'Satisfacción' },
            { value: '25+', label: 'Años de Experiencia' },
            { value: '50+', label: 'Ubicaciones' },
          ],
          fields: [
            {
              name: 'value',
              label: 'Valor',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              label: 'Etiqueta',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'reasons',
          label: 'Por qué escogernos',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'icon',
              label: 'Icono',
              type: 'select',
              options: [
                { label: 'Escudo', value: 'shield' },
                { label: 'Equipo', value: 'users' },
                { label: 'Rayo', value: 'zap' },
              ],
              defaultValue: 'shield',
            },
            {
              name: 'title',
              label: 'Título',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Descripción',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'eventsSection',
          label: 'Eventos',
          type: 'group',
          fields: [
            {
              name: 'heading',
              label: 'Título',
              type: 'text',
              defaultValue: 'Próximos Eventos',
            },
            {
              name: 'subheading',
              label: 'Descripción',
              type: 'text',
              defaultValue: 'Espectáculos impresionantes en toda Colombia',
            },
          ],
        },
        {
          name: 'locationsSection',
          label: 'Ubicaciones',
          type: 'group',
          fields: [
            {
              name: 'heading',
              label: 'Título',
              type: 'text',
              defaultValue: 'Visítanos',
            },
            {
              name: 'subheading',
              label: 'Descripción',
              type: 'text',
              defaultValue: 'Salas de exhibición profesionales en todo el país',
            },
            {
              name: 'heroImage',
              label: 'Imagen',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'testimonialsSection',
          label: 'Testimonios',
          type: 'group',
          fields: [
            {
              name: 'heading',
              label: 'Título',
              type: 'text',
              defaultValue: 'Lo Que Dicen Nuestros Clientes',
            },
            {
              name: 'subheading',
              label: 'Descripción',
              type: 'text',
              defaultValue: 'Confiado por profesionales en toda Colombia',
            },
          ],
        },
        {
          name: 'cta',
          label: 'Sección CTA',
          type: 'group',
          fields: [
            {
              name: 'title',
              label: 'Título',
              type: 'text',
              defaultValue: '¿Listo Para Encender?',
            },
            {
              name: 'body',
              label: 'Descripción',
              type: 'textarea',
              defaultValue: 'Explora nuestra colección premium y experimenta la excelencia pirotécnica.',
            },
            {
              name: 'primaryLabel',
              label: 'Texto CTA',
              type: 'text',
              defaultValue: 'Comprar Ahora',
            },
            {
              name: 'primaryHref',
              label: 'Enlace CTA',
              type: 'text',
              defaultValue: '/products',
            },
          ],
        },
      ],
    },
  ],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  graphQL: {
    disable: false,
  },
  secret: process.env.PAYLOAD_SECRET || 'development-secret',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
});
