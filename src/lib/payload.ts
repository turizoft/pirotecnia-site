import { getPayload } from 'payload';
import { cache } from 'react';

import importMap from '@/payload.import-map';
import configPromise from '@payload-config';

export const getPayloadClient = cache(async () => {
  return getPayload({
    config: configPromise,
    importMap,
  });
});
