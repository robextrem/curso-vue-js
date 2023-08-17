import {createRouter, createWebHistory} from 'vue-router'
import Create from '../pages/Create.vue'
import List from '../pages/List.vue'
import Edit from '../pages/Edit.vue'

const routes = [
    {
        path:'/mascota/create',
        name:'mascota-create',
        component:Create
    },
    {
        path:'/mascotas',
        name:'mascotas',
        component: List
    },
    {
        path:'/mascota/:id',
        name:'mascota-edit',
        component: Edit,
        props:true
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router