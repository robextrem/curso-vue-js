<script>
import Swal from 'sweetalert2'
export default{
    methods:{
      alerta: function(){
          Swal.fire({
            'icon':'success',
            'title': 'Mensaje exitoso',
            'text': 'Bien hecho, enviaste tu informacion'
          })
      },
      error: function(){
          Swal.fire({
            'icon':'error',
            'title': 'Mensaje de error',
            'text': 'Mal hecho, no enviaste tu informacion'
          })
      },
      confirmar: function(){
        Swal.fire({
            'icon':'question',
            'title': '¿Estas seguro?',
            'text': 'Tus datos seran guardados para siempre',
            'showCancelButton': true
        }).then((result)=>{
          if (result.isConfirmed) {
            this.alerta()
          }else{
            console.log("No hace nada")
          }
        })
      }
    }
}
</script>
<template>
  <div>
    <button @click="alerta">Alerta</button>
    <button @click="error">Error</button>
    <button @click="confirmar">Confirmacion</button>
  </div>
</template>