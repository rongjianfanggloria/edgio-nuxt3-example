import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'
// export default new Router().match("/", ({ cache }) => { cache({ edge: { maxAgeSeconds: 60 * 60 * 24, staleWhileRevalidateSeconds: 60 * 60 } }) }).use(nuxtRoutes);

export default new Router()
    .match({}, {
        'headers': {
            set_response_header: {
                "x-gloria-cookie": "%{cookie_<COOKIE>}",
                "x-request-uri": "%{request_uri}"

            }
        }
    })
    // .get('/doc', {
    //     'response': {
    //         'set_response_body': 'Hello GloriaTest2304',
    //         'set_done': true
    //     }
    // })
    // .get('/docs/guide/concepts/:id', {
    //     caching: { max_age: { 200: "3600s" }, stale_while_revalidate: "3600s", bypass_client_cache: true },
    // })
    // .match({}, {
    //     'headers': {
    //         set_response_header: {
    //             'original-request-path-Gloria': '%{path}'
    //         }
    //     }
    // })
    .match("/", ({ cache }) => { cache({ edge: { maxAgeSeconds: 60 * 60 * 24, staleWhileRevalidateSeconds: 60 * 60 } }) })
    .use(nuxtRoutes);


