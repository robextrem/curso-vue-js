<script>
    export default{
        data:function(){
            return{
                version:import.meta.env.VITE_APP_VERSION
            }
        },
        beforeMount: function(){
            // console.log(import.meta.env.VITE_APP_API_KEY)
            /*
            axios({
                method:"get",
                url: `${import.meta.env.VITE_APP_URL}/mascotas`
            })
            */
        },
        methods:{
            redigir:function(){
                this.$router.push({"name": "contacto"})
            },
            regresar:function(){
                this.$router.go(-1)
            }
        }
    }
</script>
<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-3">
                <ul class="list-group">
                    <li class="list-group-item">
                        <router-link to="/home/usuarios">Usuarios</router-link >
                    </li>
                    <li class="list-group-item">
                        <router-link to="/home/configuracion">Configuracion</router-link >
                    </li>
                    <li class="list-group-item">
                        <router-link to="/home/ayuda">Ayuda</router-link >
                    </li>
                </ul>
                <button @click="redigir" class="btn btn-warning">Navegación programatica</button>
            </div>
            <div class="col">
                <h1>Home {{ version }}</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>