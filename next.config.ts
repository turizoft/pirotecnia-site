import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = withPayload({
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  transpilePackages: ['@payloadcms/richtext-lexical'],
  serverExternalPackages: ['pino', 'thread-stream', 'sonic-boom'],
});

export default nextConfig;
