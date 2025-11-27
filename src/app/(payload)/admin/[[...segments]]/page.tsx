import type { Metadata } from 'next';
import { RootPage } from '@payloadcms/next/views';
import { generatePageMetadata } from '@payloadcms/next/views';

import configPromise from '@payload-config';
import { importMap } from '../importMap.js';

type Props = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
};

export async function generateMetadata({ params, searchParams }: Props) {
  return generatePageMetadata({
    config: configPromise,
    params,
    searchParams,
  });
}

export default async function AdminPage(props: Props) {
  return RootPage({
    ...props,
    config: configPromise,
    importMap,
  });
}
