import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from '../store/modules/user'
import Create from '../pages/Create.vue'
import List from '../pages/List.vue'
import Edit from '../pages/Edit.vue'
import Login from '../pages/Login.vue'

const routes = [
    {
        path:'/',
        redirect: () =>{
            return {
                path: "/login"
            }
        }
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:'/mascota/create',
        name:'mascota-create',
        component:Create,
        meta:{
            requieresAuth: true
        }
    },
    {
        path:'/mascotas',
        name:'mascotas',
        component: List,
        meta:{
            requieresAuth: true
        }
    },
    {
        path:'/mascota/:id/:error?',
        name:'mascota-edit',
        component: Edit,
        props:true,
        meta:{
            requieresAuth: true
        }
    },
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

router.beforeEach((to,from,next) =>{
    if(to.meta.requieresAuth){
        const userStore = useUserStore()
        const user = userStore.getUser
        if(user && user.token){
            next()
        }else{
            next({name:"login"})
        }
    }else{
        next()
    }
})

export default router