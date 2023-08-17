<script>
import Padre from './components/Padre.vue'
export default{
  components:{
    Padre
  },
  data:function(){
    return{
      mensaje:""
    }
  }
}
</script>
<template>
  <h1>Yo soy el abuelo</h1>
  <p>{{ mensaje }}</p>
  <Padre></Padre>
</template>