<script>
export default{
    props:{
        nombre:{
            type:String
        },
        imagen:{
            type:String
        },
        color:{
            type:String
        }
    },
    data: function(){
        return{
            descripcion: "Alumno de excelencia"
        }
    }
    // props:["nombre"] /*Esta es otra forma de hacerlo*/
}
</script>
<template>
    <div class="card" style="width: 18rem; float:left">
        <img :src="imagen" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ nombre }}</h5>
            <p class="card-text">{{ descripcion }}</p>
            <a href="#" :class="'btn btn-'+color">Go somewhere</a>
        </div>  
    </div>
</template>