import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'
import { CustomCacheKey } from '@edgio/core/router'
export default new Router().match("/", ({ cache }) => { cache({ edge: { maxAgeSeconds: 60 * 60 * 24, staleWhileRevalidateSeconds: 60 * 60 } }) }).use(nuxtRoutes);



