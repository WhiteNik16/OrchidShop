import Vue from 'vue'
import Router from 'vue-router'

import vMainPage from '../components/v-main-page/v-main-page'
import vCatalog from '../components/catalog/v-catalog'
import vAdminPage from '../components/adminpage/v-admin-page'
import vDirectory from '../components/directory/v-directory'
import vPage1 from '../components/directory/childdir/v-page1'
import vPage2 from '../components/directory/childdir/v-page2'
import vPage3 from '../components/directory/childdir/v-page3'
import vPage4 from '../components/directory/childdir/v-page4'
import vPage5 from '../components/directory/childdir/v-page5'
import vCart from '../components/cart/v-cart'
import vRegister from '../components/auth/v-auth-register'
import vLogin from '../components/auth/v-auth_login'
import vOrder from '../components/cart/v-order'

Vue.use(Router);



let router = new Router ({
    routes: [

        {
            path: '/v-admin',
            name: 'adminPage',
            component: vAdminPage,
            meta: {requiresAuth: true}
        },
        {
            path: '/v-catalog',
            name: 'catalog',
            component: vCatalog
        },

        {
            path: '/',
            name: 'mainPage',
            component: vMainPage
        },
        {
            path:'/v-directory',
            component: vDirectory,
            name:'directory',
                },
        {
            path: '/page1',
            name: 'page1',
            component: vPage1
                },
        {
            path: '/page2',
            name: 'page2',
            component: vPage2
        },
        {
            path: '/page3',
            name: 'page3',
            component: vPage3
        },
        {
            path: '/page4',
            name: 'page4',
            component: vPage4
        },
        {
            path: '/page5',
            name: 'page5',
            component: vPage5
        },
        {
            path: '/v-cart',
            name: 'cart',
            component: vCart,
        },
        {
            path:'/order',
            name: 'vOrder',
            component: vOrder



        },
        {
            path: '/register',
            name: 'register',
            component: vRegister

        },
        {
            path: '/login',
            name: 'login',
            component: vLogin

        }



    ]

})
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth))  {
        if(localStorage.admin == 'true') {
            next()
        }
        else {
            next('/')
        }
    }
    else {
        next()
    }
})

export default router;