<script>
import {useUserStore} from '../store/modules/user'

export default{
  setup(){
    const userStore = useUserStore()
    return {userStore}
  },
  data:function(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    signIn:function(){
      const user = this.userStore.login(this.email, this.password)
      if(user!=null){
        this.$router.push({name:'mascotas'})
      }

    }
  }
}
</script>
<template>
  <div class="container">
    <h1 class="mt-4 mb-4">Login</h1>
    <h1 class="mt-4 mb-4">{{ userStore.getUser }}</h1>
    <form @submit.prevent="signIn">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input class="form-control" required type="email" v-model="email" name="email" placeholder="Ingresa aqui el email">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input class="form-control" required type="password" v-model="password" name="password" placeholder="Ingresa aqui el password">
      </div>
      <button class="btn btn-primary">Iniciar sesión</button>
    </form>
  </div>
</template>
