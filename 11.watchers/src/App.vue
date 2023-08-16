<script>
  export default{
    data: function(){
      return {
        mascota: "Firulais",
        animal: "Perro"
      }
    },
    mounted:function(){
      // Esto se hace en js vanilla asi: document.querySelector("input").style.border="1px solid red"
      this.$refs.mascotaRef.style.border="1px solid red"
      //Podemos acceder a traves de . o a través de []
      this.$refs['animal'].innerHTML += "Ref modificado"

      //Trae el elemento principal: mascota-container
      console.log(this.$el)

      this.$el.style.border="1px solid blue"
    },
    watch:{
      mascota:function(){
        //this.animal = this.animal.toUpperCase()
        if(this.mascota == "Paco")
          this.animal = "Gato"
        else if(this.mascota == "Pepe")
          this.animal = "Hamster"
        else 
          this.animal = "Perro"
      }
    }
  }
</script>
<template>
  <div id="mascota-container">
    <h1>{{ mascota }}</h1>
    <h2 ref="animal">{{ animal }}</h2>
    <input v-model="mascota" type="text" ref="mascotaRef">
  </div>
</template>