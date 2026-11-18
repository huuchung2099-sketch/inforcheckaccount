import { defineCloudflareConfig } from '@opennextjs/cloudflare';

const config = defineCloudflareConfig();

// `pnpm build` is the OpenNext build (that is what Cloudflare runs), and OpenNext
// would otherwise invoke the package manager's `build` script again -> infinite
// recursion. Point it at the plain Next.js build instead.
const openNextConfig = {
    ...config,
    buildCommand: 'pnpm build:next'
};

export default openNextConfig;
