import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = withPayload({
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  transpilePackages: ['payload', '@payloadcms/richtext-lexical'],
  serverExternalPackages: ['pino', 'thread-stream', 'sonic-boom'],
});

export default nextConfig;
