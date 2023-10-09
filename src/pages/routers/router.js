import Home from '../home'
import detail from '../detail'
import Config from '~/config'
import Layouts  from '../Admin/Layouts'
import Feedback from '../feedback'
import DefaultLayout from '../../Layouts/DefaultLayout'
import ProdTypes from '../Admin/Layouts/ProdTypes'
import AddProdType from '../Admin/Layouts/ProdTypes/addProdType'
import UpdateProdType from '../Admin/Layouts/ProdTypes/updateProdType'
import ProductPopular from '../Admin/Layouts/ProdPopular'
import AddProdPopular from '../Admin/Layouts/ProdPopular/addProdPopular'
import UpdateProdPopular from '../Admin/Layouts/ProdPopular/updateProdPopular'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import  Users from '../Admin/Layouts/Users'
import UpdateUser from '../Admin/Layouts/Users/updateUser'
import Checkout from '../checkout'
import Detail from '../detail'
const PublicRouter= [
    {
        path:Config.router.home,component:Home
    },
    {
        path:Config.router.detail,component:detail, layout: DefaultLayout
    },
    {
        path:Config.router.admin, component:ProdTypes , layout: Layouts
    },
    {
        path:Config.router.feedback, component: Feedback, layout:  DefaultLayout
    },
    {
        path:Config.router.addProTypes, component: AddProdType, layout:  Layouts
    },
    {
        path:Config.router.updateProTypes, component: UpdateProdType, layout:  Layouts
    },
    {
        path:Config.router.productPopular, component: ProductPopular, layout:  Layouts
    },
    {
        path:Config.router.addProdPopular, component: AddProdPopular, layout:  Layouts
    },
    {
        path:Config.router.updateProPopular, component: UpdateProdPopular, layout:  Layouts
    },
    {
        path:Config.router.signIn, component: SignIn, layout:  null
    },
    {
        path:Config.router.signUp, component: SignUp, layout:  null
    },
    {
        path:Config.router.usersManager, component: Users, layout:Layouts
    },
    {
        path:Config.router.updateUser, component: UpdateUser, layout:Layouts
    },
    {
        path:Config.router.checkout ,component:Checkout,layout:DefaultLayout
    },
    
]
export {PublicRouter}
