<script>
  export default{
    data: function(){
      return {
        nombre: "Ulises",
        pais: "México",
        color: "rojo"
      }
    },
    methods:{
      cambiarNombre: function(){
        this.nombre = "Zabdiel"
      }
    }
  }
</script>
<template>
  <div>
    <h1>Hola mundo, {{ nombre }}!</h1>
    <p :class="color">Bienvenido al curso desde {{ pais }}</p>
    <button @click="cambiarNombre">Zabdiel</button>
  </div>
</template>
<style>
  .rojo{
    background-color:red
  }
  .azul{
    background-color: blue;
  }
</style>