<script>
  import NavBar from './components/NavBar.vue'
  export default{
    components:{
      NavBar
    }
  }
</script>
<template>
  <main>
    <NavBar></NavBar>
    <!-- Este router view no esta animado -->
    <!--router-view></router-view-->
    
    <!-- Este router view esta animado -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>