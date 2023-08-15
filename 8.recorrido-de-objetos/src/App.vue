<script>
export default{
  data:function(){
    return{
    alumnos:[
    {
      nombre: "Ulises",
      edad: 18,
      pasatiempo: "videojuegos",
      certificaciones:['java','vue']
    },
    {
      nombre: "Zabdiel",
      edad: 22,
      pasatiempo: "hockey",
      certificaciones:['javascript','react']
    },
    {
      nombre: "Ana",
      edad: 16,
      pasatiempo: "pasteleria",
      certificaciones:['php','html']
    },
    {
      nombre: "Marcelino",
      edad: 17,
      pasatiempo: "videojuegos",
      certificaciones:['html','vue']
    },
    ]
  }
  }
}
</script>
<template>
  <h1>Alumnos</h1>
  <!--div>
    <p>{{ alumnos }}</p>
  </div-->
  <div v-for="(alumno,i) in alumnos" class="alumno">
    <h3>Nombre: {{alumno.nombre}}</h3>
    <p>Edad: {{ alumno.edad }}</p>
    <p v-if="alumno.edad<18">ES MENOR DE EDAD</p>
    <p>Pasatiempo: {{ alumno.pasatiempo }}</p>
    <p>Certificaciones</p>
    <ul>
      <li v-for="(certificacion, j) in alumno.certificaciones">
        {{ certificacion }}
      </li>
    </ul>
  </div>
</template>
<style>
  .alumno{
    border: 1px solid white;
  }
</style>
