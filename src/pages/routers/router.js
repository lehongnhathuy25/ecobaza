import Home from '../home'
import detail from '../detail'

import Config from '~/config'
const PublicRouter= [
    {
        path:Config.router.home,component:Home
    },
    {
        path:Config.router.detail,component:detail, layout: null
    },
]
export {PublicRouter}
