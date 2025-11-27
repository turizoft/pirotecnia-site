import { cache } from 'react';
import { getPayload } from 'payload';

import configPromise from '@payload-config';
import importMap from '@/payload.import-map';

export const getPayloadClient = cache(async () => {
  return getPayload({
    config: configPromise,
    importMap,
  });
});
