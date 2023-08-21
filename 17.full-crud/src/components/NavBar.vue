<script>
import {useUserStore} from '../store/modules/user'

export default{
  setup(){
    const userStore = useUserStore()
    return {userStore}
  },
  data: function(){
    return{
      item:"mascotas"
    }
  },
  watch:{
    $route(to,from){
      if(to.name=="mascotas")
        this.item="mascotas"
      else if(to.name=="mascota-create")
      this.item="mascota-create"
    }
  },
  methods:{
    logOut:function(){
      this.userStore.logout()
      this.$router.push({name:"login"})
    }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/src/assets/images/logo.png" style="height:51px">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul v-if="userStore.getUser" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :class="{'active':item=='mascotas'}" to="/mascotas">Mascotas</router-link>
        </li>
        <li class="nav-item">
          <!--a class="nav-link active" aria-current="page" href="/home">Home</a-->
          <router-link class="nav-link" :class="{'active':item=='mascota-create'}" to="/mascota/create">Nueva mascota</router-link>
        </li>
      </ul>
    </div>
    <button v-if="userStore.getUser" @click="logOut" class="btn d-flex btn-warning" type="submit">Cerrar sesión</button>
  </div>
</nav>
</template>
<style>
  .nav-link.active{
    color: gold !important;
  }
</style>