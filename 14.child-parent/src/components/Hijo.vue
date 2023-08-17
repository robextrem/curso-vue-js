<script>
 export default{
    data: function(){
        return{
            respuesta: "Nooooooooooooo!"
        }
    },
    methods:{
        responder: function(){
            this.$parent.respuesta=this.respuesta
            //Esto se soluciona con store
            this.$parent.$parent.mensaje=this.respuesta
        }
    }
 }
</script>
<template>
    <div id="hijo">
        <p>Soy el hijo</p>
        <input type="text" v-model="respuesta">
        <!--p>{{ respuesta }}</p-->
        <button @click="responder">Responder al padre</button>
    </div>
</template>
<style>
    #hijo{
        width: 200px;
        height: 150px;
        background-color: aqua;
    }
</style>