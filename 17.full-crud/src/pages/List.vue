<script>
    import axios from 'axios';
    import Swal from 'sweetalert2'

    export default{
        data: function(){
            return{
                mascotas:[]
            }
        },
        beforeMount: function(){
            // Podemos hacer redirects con todo y parmetros o incluso agregar queryString
            // this.$router.push({name:'mascota-edit',params: {id:'1', error:'Hubo un error'} })
            // this.$router.push({name:'mascota-edit', params:{id: '1'}, query:{mensaje:'Hubo un error'} })

            //Se va a mandar llamar 'algo' antes de montar el componente
            this.getMascotas()
        },
        methods:{
            confirmDelete: function(id){
                Swal.fire({
                    'icon': 'question',
                    'title': "¿Estás seguro?",
                    'text': 'Se borrará este registro',
                    'showCancelButton': true
                }).then((result)=>{
                    if (result.isConfirmed) {
                        this.deleteMascota(id)
                    }
                })
            },
            getMascotas:async function(){
                const response = await axios({
                    method: 'get',
                    url: `${import.meta.env.VITE_APP_URL}/mascotas`
                })
                this.mascotas = response.data
            },
            deleteMascota: async function(id){
                await axios({
                    method: "delete",
                    url: `${import.meta.env.VITE_APP_URL}/mascotas/${id}`
                })
                this.getMascotas()
            }
        }
    }
</script>
<template>
    <div class="container">
        <h1 class="mt-4 mb-4">Listado de mascotas</h1>
        <table v-if="mascotas.length>0" class="table">
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
                        <button @click="confirmDelete(mascota._id)" class="btn btn-danger btn-sm mx-2">Borrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <p>No hay mascotas disponibles. Crea tu primer mascota</p>
            <router-link to="/mascota/create" class="btn btn-primary">Agrega una mascota</router-link>
        </div>
    </div>
</template>