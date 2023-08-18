import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.css'
import './style.css'
import SimpleVueValidator from 'simple-vue3-validator'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(SimpleVueValidator)
app.config.warnHandler = () => null
app.mount('#app')
