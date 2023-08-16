<script>
  export default{
    data:function(){
      return{
        isDisabled:true
      }
    },
    methods:{
      teletransportar: function(){
        this.isDisabled=false
      },
      saludar: function(){
        alert("Hola mundo!")
      }
    }
  }
</script>
<template>
    <button @click="teletransportar" class="btn btn-primary">Teleport</button>
    <div class="own-modal" id="modal">
      <h1>Hola mundo</h1>
    </div>
    <Teleport :disabled="isDisabled" to="#modal">
      <div class="mt-3">
        <p style="color:blueviolet">Hola soy un parrafo</p>
        <span>y un span</span><br/>
        <button @click="saludar" class="btn btn-warning">Saludar</button>
      </div>
    </Teleport>
</template>
<style scoped>
.own-modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  border:1px solid black;
}
</style>