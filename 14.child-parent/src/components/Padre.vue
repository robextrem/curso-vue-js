<script>
  import Hijo from './Hijo.vue';
  export default{
    components:{
      Hijo
    },
    data: function(){
      return{
        message:"Hola luke, soy tu padre",
        respuesta: ""
      }
    }
  }
</script>
<template>
  <div id="padre">
    <h3>{{ message }}</h3>
    <p>{{ respuesta }}</p>
    <Hijo></Hijo>
  </div>
</template>
<style>
  #padre{
    width:300px;
    height: 300px;
    background-color: fuchsia;
  }
</style>