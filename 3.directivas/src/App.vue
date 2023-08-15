<script>
  export default{
    data:function(){
      return {
        dia:"Lunes",
        frutas: ["sandia","naranja","melón","papaya","platano"],
        text:"Hola, buen martes!!",
        html: "<b>Bienvenido</b> al curso de <i>vue.js</i>",
        mostrar:false,
        color: "rojo"
      }
    },
    methods:{
      enviar: function(){
        alert("Hola, el mensaje fue enviado")
      }
    }
  }
</script>
<template>
  <h1 v-if="mostrar">Vamos a esconder esto</h1>
  <div v-show="mostrar">
    <p v-text="text"></p>
    <p>{{ text }}</p>
    <p v-html="html"></p>
  </div>
  <h2 v-bind:class="color">Este es v-bind</h2>
  <h2 :class="color">Este es v-bind</h2>
  <button v-on:click="enviar">Boton</button>
  <!--button @click="enviar">Boton</button-->
  <!-- v-if -->
  <div v-if="dia=='Lunes'">
    <h1 >Hola! Hoy es lunes, no quiero trabajar</h1>
    <p>Saludos</p>
  </div>
  <!--v-else-if -->
  <h2 v-else-if="dia=='Martes'">Hola, hoy es martes, ya casi hay que trabajar</h2>
  <!--v-else -->
  <h3 v-else>hoy es otro día, hoy si se chambea</h3> 
  <hr/>
  <!--v-for -->
  <h2 v-for="i in 10">Hola {{ i }}</h2>
  <hr/>
  <div v-for="(fruta, i) in frutas" :key="i">
    <p>FRUTA:</p>
    <h3>{{ fruta }} {{ i }}</h3>
  </div>
  <a href="#" @click.prevent="enviar">Boton c shorthand</a>
</template>
<style>
.rojo{
  color:red
}
</style>