import Home from '../home'
import detail from '../detail'
import feedback from '../feedback'
import checkout from '../checkout'
import Cart from '../cart'
import Shop from '../shop'
import Config from '~/config'
const PublicRouter= [
    {
        path:Config.router.Home,component:Home
    },
    {
        path:Config.router.detail,component:detail, layout: null
    },
]
export {PublicRouter}
