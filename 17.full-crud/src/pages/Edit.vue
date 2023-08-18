<script>
import axios from 'axios';
import SimpleVueValidation from 'simple-vue-validator'

export default{
  props:{
    id:{
      type:String
    }
  },
  data:function(){
    return{
      Validator:null,
      nombre:"",
      tipo:"",
      email:"",
      especie:"",
      razas:[],
      edad:0,
      submitted:false
    }
  },
  validators:{
    nombre: function(value){
      return this.Validator.value(value).required()
    },
    email: function(value){
      return this.Validator.value(value).required().email()
    },
    tipo: function(value){
      return this.Validator.value(value).required()
    }
  },
  beforeMount:function(){
    this.Validator = SimpleVueValidation.Validator
    this.getMascota()
  },
  methods:{
    actualizarMascota:function(){
      this.$validate()
        .then((success) => {
          if(success){
            const url = `${import.meta.env.VITE_APP_URL}/mascotas/${this.id}`
            this.submitted=true
            axios({
              url:url,
              method:'put',
              data:{
                nombre:this.nombre,
                tipo:this.tipo,
                email:this.email,
                especie:this.especie,
                edad:this.edad
              }
            })
            this.$router.push({name:'mascotas'})
        }else{
            console.log("No es necesario, pero hubo error en la validacion")
        }
      })
    },
    getMascota:async function(){
      const response = await axios({
        method:'get',
        url: `${import.meta.env.VITE_APP_URL}/mascotas/${this.id}`
      })
      this.nombre=response.data.nombre
      this.tipo=response.data.tipo
      this.email=response.data.email
      this.especie=response.data.especie
      this.edad=response.data.edad
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
    <h1 class="mt-4 mb-4">Edita tu mascota</h1>
    <form @submit.prevent="actualizarMascota">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input class="form-control" type="text" v-model="nombre" name="nombre" placeholder="Ingresa aqui el nombre">
      </div>
      <div v-if="validation.hasError('nombre')" class="alert alert-danger" role="alert">
        Ingresa tu nombre por favor
      </div>
      <div class="mb-3">
        <label class="form-label">Email del dueño</label>
        <input class="form-control" type="text" v-model="email" name="email" placeholder="Ingresa aqui el email">
      </div>
      <div v-if="validation.hasError('email')" class="alert alert-danger" role="alert">
        Ingresa tu email por favor
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
