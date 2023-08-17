<script>
import axios from 'axios';
export default{
  data:function(){
    return{
      nombre:"",
      tipo:"",
      email:"",
      especie:"",
      razas:[],
      edad:0,
      submitted:false
    }
  },
  methods:{
    crearMascota:function(){
      const url = `${import.meta.env.VITE_APP_URL}/mascotas`

      this.submitted=true
      axios({
        "method":"post",
        "url": url,
        "data":{
          "nombre": this.nombre,
          "email": this.email,
          "tipo": this.tipo,
          "edad": this.edad,
          "especie": this.especie
        }
      })
      this.$router.push({name:'mascotas'})

    }
  },
  watch:{
    email: function(){
      this.email = this.email.toLowerCase()
    },
    tipo:function(){
      if(this.tipo=="Perro"){
        this.razas=["Chihuahua","Pastor Aleman","Pug","Bulldog"]
        this.especie=this.razas[0]
      }
      else if(this.tipo=="Gato"){
        this.razas=["Balinés","Bengalí","Calico","Carey","Sphinx"]
        this.especie=this.razas[0]
      }
      else if(this.tipo=="Hamster"){
        this.razas=["Roborowski","Dorado"]
        this.especie=this.razas[0]
      }
      else{
        this.razas=[]
        this.especie=""
      }
    },
    nombre:function(){
      console.log("El nombre cambio!")
    },
    edad: function(){
      console.log("La edad cambio!")
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
        <label class="form-label">Email del dueño</label>
        <input class="form-control" type="text" v-model="email" name="email" placeholder="Ingresa aqui el email">
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
      <div v-if="razas.length>0" class="mb-3">
        <label class="form-label">Raza</label>
        <select class="form-select" name="tipo" v-model="especie">
          <option v-for="(raza, n) in razas">{{raza}}</option>
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
