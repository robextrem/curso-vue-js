import {createWebHistory, createRouter} from 'vue-router'
// import {createWebHashHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Blog from '../pages/Blog.vue'
import Contacto from '../pages/Contacto.vue'
import Ayuda from '../pages/home/Ayuda.vue'
import Configuracion from '../pages/home/Configuracion.vue'
import Usuarios from '../pages/home/Usuarios.vue'

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
        children: [
            {
                path:"ayuda",
                name:"ayuda",
                component:Ayuda
            },
            {
                path:"configuracion",
                name:"configuracion",
                component:Configuracion
            },
            {
                path:"usuarios",
                name:"usuarios",
                component:Usuarios
            },
        ]
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog,
        props:true
    },
    {
        path: "/blog/:id",
        name: "blog-fetch",
        component: Blog,
        props:true
    },
    {
        path: "/wordpress",
        name: "wordpress",
        redirect: function(){
            // return {path:"/blog"} tambien se puede hacer asi
            return {name:"blog"}
        }
    },
    {
        path: "/contacto",
        name: "contacto",
        component: Contacto
    }

]
// Esta es para formato de url site.com/blog, sitem.com/mi-cuenta
const history = createWebHistory()
// Esta es para formato de url site.com#blog, sitem.com#mi-cuenta
// const history = createWebHashHistory()

const router = createRouter({
    history,
    routes
})

export default router