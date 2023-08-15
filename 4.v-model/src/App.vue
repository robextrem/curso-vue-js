<script>
  export default{
    data: function(){
      return{
        nombre: "Luis",
        email: "",
        submitted:false,
        password:"",
        aceptoTerminos:false,
        alumno: "",
        comentarios:"",
        fecha:"2023-08-15",
        bateria: 50,
        edad: 15
      }
    },
    methods:{
      enviar:function(){
        if(this.aceptoTerminos){
          this.submitted=true
          console.log(this.nombre,this.email)
        }else{
          alert("Tienes que aceptar terminos y condiciones")
        }
      }
    }
  }
</script>
<template>
  <form @submit.prevent="enviar">
    <h1>Bienvenido {{ nombre }}</h1>
    <div>
      <label>Nombre:</label>
      <!--input type="text" :value="nombre"-->
      <input type="text" v-model="nombre">
    </div>
    <div>
      <label>Email:</label>
      <input type="email" v-model="email">
    </div>
    <div>
      <label>Edad:</label>
      <input type="number" v-model="edad">
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="password">
    </div>
    <div>
      <label>Fecha de nacimiento:</label>
      <input type="date" v-model="fecha">
    </div>
    <div>
      <label>Bateria:</label>
      <input type="range" v-model="bateria">
    </div>
    <div>
      <input type="checkbox" v-model="aceptoTerminos">
      <label>Leí terminos y condiciones</label>
    </div>
    <div>
      <textarea v-model="comentarios"></textarea>
    </div>
    <div>
      <select v-model="alumno">
        <option value="">Selecciona una opcion</option>
        <option value="1">Zabdiel</option>
        <option value="2">Ulises</option>
        <option value="3">Ana</option>
        <option value="4">Marcelino</option>
      </select>
    </div>
    <button>Registrarse</button>
  </form>
  <div v-if="submitted">
    <h3>{{ nombre }}</h3>
    <p>{{ email }}</p>
  </div>
</template>