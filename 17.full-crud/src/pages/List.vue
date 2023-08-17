<script>
    import axios from 'axios';
    export default{
        data: function(){
            return{
                mascotas:[]
            }
        },
        beforeMount: function(){
            //Se va a mandar llamar 'algo' antes de montar el componente
            this.getMascotas()
        },
        methods:{
            getMascotas:async function(){
                const response = await axios({
                    method: 'get',
                    url: `${import.meta.env.VITE_APP_URL}/mascotas`
                })
                this.mascotas = response.data
            }
        }
    }
</script>
<template>
    <div class="container">
        <h1 class="mt-4 mb-4">Listado de mascotas</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Especie</th>
                    <th scope="col">Email del dueño</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(mascota, n) in mascotas">
                    <th scope="row">{{ mascota._id }}</th>
                    <td>{{ mascota.nombre }}</td>
                    <td>{{ mascota.tipo }}</td>
                    <td>{{ mascota.especie }}</td>
                    <td>{{ mascota.email }}</td>
                    <td>
                        <router-link :to="`/mascota/${mascota._id}`" class="btn btn-primary btn-sm">Editar</router-link>
                        <button class="btn btn-danger btn-sm mx-2">Borrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>