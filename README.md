# FAVIO FAVIO DOMINÓ - Premium Pyrotechnics Web Platform

Official platform for sales, exhibition, and booking of professional pyrotechnic products in Colombia.
This application is built on a modern **Headless** architecture, combining the power of the Next.js App Router and the robust Payload CMS admin panel.

## 🚀 Core Technologies

- **Web Framework**: [Next.js 15](https://nextjs.org/) (App Router & React 19)
- **CMS / Backend**: [Payload CMS v3](https://payloadcms.com/) (100% typed Headless CMS)
- **Database**: PostgreSQL via [@payloadcms/db-postgres](https://payloadcms.com/docs/database/postgres)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: Framer Motion
- **Iconography**: Lucide React

## ⚙️ Programmatic SEO Architecture (IMPORTANT!)

The SEO ecosystem of the platform is designed to dynamically scale by product, service, and location automatically, thanks to the native integration between the CMS and the Frontend programmatically.

### How does SEO work in this repository?
1. **Native Payload SEO Plugin**: Initialized inside `payload.config.ts` for the main collections (`products`, `locations`, `events`). In the admin panel, every time you create content, you will have a dedicated "SEO" tab to customize dynamic Titles, Meta Descriptions, and configure OpenGraph cards/Social images for each individual item.
2. **Programmatic Generation for Local Search Intent (Local SEO)**: The dynamic frontend pages `/locations/[slug]` and `/products/[slug]` automatically query data (from Payload via `generateMetadata()`) and build friendly HTML tags for crawlers via Server-Side Rendering (SSR), such as: `Pyrotechnic Products in [City]`, injecting contextual keywords exclusive to the niche or location (*long-tail keywords*).
3. **Strategic Internal Linking (Link Juice)**: All native buttons and links throughout the catalog and map pages on the home page distribute *SEO Juice* in a pyramidal way towards the singular pages `/[collection]/[slug]` to speed up the discovery (and subsequent indexing) process by Google bots.

### ⚠️ Required Action for the Content Team:
If you have locations (`locations`) or products (`products`) already listed in the database prior to this SEO enhancement:
1. You must enter the Payload admin panel.
2. Enter the editor for each Location or Product.
3. **You must fill in the "Slug" field** that was introduced in this version (e.g., if the location is "Sede Bogotá Centro", the ideal slug would be `sede-bogota-centro`).
4. Save the changes. This value will be the identifier in the URL (e.g., `/locations/sede-bogota-centro`). From that moment on, the individual page will be 100% enabled without throwing a `404 - Not Found` error.

## 🛠️ Getting Started (Development)

### 1. Environment Variables
Duplicate the `.env.example` file to create a `.env` file in the root directory of the project and configure your own local credentials:

```env
DATABASE_URI=postgres://user:password@localhost:5432/pirotecnia
PAYLOAD_SECRET=payload-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:5601
```

### 2. Install Dependencies
Make sure you have a **Node.js 20+** environment running beforehand and install the packages:

```bash
npm install
```

### 3. Start the Development Server
The project runs on the fast Turbopack compiler locally:

```bash
npm run dev
```

This command synchronously spins up the SSR frontend environment in Next.js and the Payload backend/CMS through the configured port `http://localhost:5601`.

**Important Note on CMS Type Generation:**
If you create new fields or modify collections from the `/payload.config.ts` file, make sure to sync the TS IntelliSense on the front-end by running the Payload CLI:
```bash
npm run payload:types
```

## 📜 package.json Scripts

- `npm run dev` - Starts the app (Front + CMS Admin) in development mode on port `5601` via Turbopack.
- `npm run build` - Builds and compiles the server-side packages for production deployment.
- `npm run start` - Deploys the production web server in node (requires a previous build).
- `npm run payload:dev` - Pure Payload Server script (usually wrapped together with dev).
- `npm run payload:types` - Scans your `payload.config.ts` and generates the required TypeScript interfaces in `/src/payload-types.ts`.
- `npm run format` / `npm run lint` - Evaluates static issues and automatically formats indentation under uniform rules (ESLint & Prettier).

## 📁 Main Folder Structure

- `/src/app/(frontend)` - Contains all main navigation pages, routing, global Next.js UI `layout`.
- `/src/app/(payload)` - Private wrapper required by Payload 3 to deploy the React UI of the admin panel.
- `/src/components` - Granular Reusable React Components (hero, shared animations, UI elements, and buttons).
- `/src/lib` - Utilities, miscellaneous hooks, payload initialization clients.
- `/payload.config.ts` - Source file. Dictates to Postgres how to structure itself, configures the Media bucket, Translations, User Tiers, Plugins such as SEO, and entire collections.

---
*Developed and structured with clean code, to illuminate celebrations throughout Colombia while maintaining technical excellence.*
