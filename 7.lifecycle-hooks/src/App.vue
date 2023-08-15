<script>
import HelloWorld from './components/HelloWorld.vue'
export default{
  components:{
    HelloWorld
  },
  data: function(){
    return{
      mensaje: "Otra vez",
      alumnos:[]
    }
  },
  mounted:function(){
    console.log("El componente se encuentra montado")
  },
  beforeMount:function(){
    this.alumnos = ['Marcelino','Ana','Zabdiel','Ulises']
    console.log("El componente se encuentra antes de ser montado")
  },
  updated:function(){
    console.log("El componente se ha actualizado")
  }
}
</script>
<template>
  <h1>Componente</h1>
  <HelloWorld v-if="mensaje"></HelloWorld>
  <h1 :key="i" v-for="(alumno, i) in alumnos">Hola mundo!! {{ alumno }}</h1>
</template>