<script>
export default{
  beforeUnmount: function(){
    console.log("El componente se va a destruir")
  },
  unmounted:function(){
    alert("Se destruyo componente")
    console.log("El componente se ha destruido")
  }
}
</script>
<template>
  <h1>Componente para destruir el  mundo</h1>
</template>