<script>
import axios from 'axios';
export default{
  data:function(){
    return{
      nombre:"",
      tipo:"",
      edad:0,
      submitted:false
    }
  },
  methods:{
    crearMascota:function(){
      const url = "https://crudcrud.com/api/ca5e548fed4c4460b89630fdec1bae22/mascotas"

      this.submitted=true
      axios({
        "method":"post",
        "url": url,
        "data":{
          "nombre": this.nombre,
          "tipo": this.tipo,
          "edad": this.edad
        }
      })
    }
  }
}
</script>
<template>
  <div class="container">
    <h1>Ingresa tu mascota</h1>
    <form @submit.prevent="crearMascota">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input class="form-control" type="text" v-model="nombre" name="nombre" placeholder="Ingresa aqui el nombre">
      </div>
      <div class="mb-3">
        <label class="form-label">Tipo de Animal</label>
        <select class="form-select" name="tipo" v-model="tipo">
          <option value="">Selecciona el tipo</option>
          <option>Perro</option>
          <option>Gato</option>
          <option>Hamster</option>
          <option>Perico</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Edad</label>
        <input class="form-control" type="number" v-model="edad" name="edad" placeholder="Ingresa aqui la edad">
      </div>
      <button type="submit" class="btn btn-primary mb-3">Enviar</button>
    </form>
    <div v-if="submitted" class="alert alert-success" role="alert">
      Se ha creado un registro!
    </div>
  </div>
</template>
