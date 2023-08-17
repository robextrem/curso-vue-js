<script>
  import Fecha from './components/Fecha.vue'
  export default{
    components:{
      Fecha
    },
    data:function(){
      return{
        fecha_inicio:"11-10-2014",
        fecha_fin:"12-12-2023"
      }
    }
  }
</script>
<template>
  <Fecha v-model="fecha_inicio"></Fecha>
  <Fecha v-model="fecha_fin"></Fecha>

  {{ fecha }}
</template>