<script>
export default{
  data:function(){
    return{
      x: 10,
      y: 5,
      nombre: "Roberto",
      apellido: "Romero",
      deuda:1500
    }
  },
  computed:{
    nombreCompleto:function(){
      return this.nombre+' '+this.apellido;
    },
    suma:function(){
      const resultado = this.x+this.y
      return `${this.x} + ${this.y} = ${resultado}`
    },
    moneyFormat:function(){
      return `$ ${this.deuda.toFixed(2)}`
    },
    /*Este es un computed con parametro, es raro, pero existe*/
    nombreConTitulo() {
      return (titulo) =>{
        return `${titulo} ${this.nombre}`
      }
    }
  },
  methods:{
    /*nombreCompleto:function(){
      return this.nombre+' '+this.apellido;
    }*/
  }
}
</script>
<template>
  <!--h1>{{x}} + {{ y }} = {{ x + y }}</h1-->
  <h1>{{ suma }}</h1>
  <!--h1>{{ nombre }} {{ apellido }}</h1-->
  <h1>{{ nombreCompleto }}</h1>
  <!--h1>${{ deuda.toFixed(2) }}</h1-->
  <h1>{{ moneyFormat }}</h1>
  <h1>{{ nombreConTitulo('Ing.') }}</h1>
</template>