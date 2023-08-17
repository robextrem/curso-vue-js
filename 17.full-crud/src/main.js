import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.css'
import './style.css'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
