<script>
  export default{
    data:function(){
      return {
        dia:"Lunes",
        frutas: ["sandia","naranja","melón","papaya","platano"]
      }
    },
    methods:{

    }
  }
</script>
<template>
  <div v-if="dia=='Lunes'">
    <h1 >Hola! Hoy es lunes, no quiero trabajar</h1>
    <p>Saludos</p>
  </div>
  <h2 v-else-if="dia=='Martes'">Hola, hoy es martes, ya casi hay que trabajar</h2>
  <h3 v-else>hoy es otro día, hoy si se chambea</h3> 
  <hr/>
  <h2 v-for="i in 10">Hola {{ i }}</h2>
  <hr/>
  <div v-for="(fruta, i) in frutas" :key="i">
    <p>FRUTA:</p>
    <h3>{{ fruta }} {{ i }}</h3>
  </div>

</template>