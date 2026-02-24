import { getPayload } from 'payload';
import configPromise from './payload.config';

async function push() {
    console.log('Initializing payload...');
    const payload = await getPayload({ config: configPromise });
    console.log('Payload initialized, database schema should be pushed!');
    process.exit(0);
}

push();
