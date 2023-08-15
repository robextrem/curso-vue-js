<script>
    export default{
        methods:{
            saludar: function(){
                alert("Hola, soy vue")
            }
        }
    }
</script>
<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" @click="saludar" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            Componentes en Vue.js
            </a>
        </div>
    </nav>
</template>