<script>
  export default{
    props:{
      modelValue:{
        type: String
      }
    },
    emits: ['update:modelValue'],
    data:function(){
      return{
        dia:1,
        mes:1,
        anio:2000
      }
    },
    beforeMount:function(){
      const fecha = this.modelValue.split('-')
      if(fecha.length==3){
        this.dia=fecha[0]
        this.mes=fecha[1]
        this.anio=fecha[2]
        
      }
    },
    computed:{
      formatoZero: function(){
        return (i) =>{
          //return (i<10)? `0${i}`: i
          if(i<10){
            return "0"+i;
          }else{
            return i
          }
        }
      },
      fechaCompleta:function(){
        return this.dia+"-"+this.mes+"-"+this.anio
      }
    },
    methods:{
     
    },
    watch:{
      dia:function(){
        this.$emit("update:modelValue",this.fechaCompleta)
      },
      mes:function(){
        this.$emit("update:modelValue",this.fechaCompleta)
      },
      anio:function(){
        this.$emit("update:modelValue",this.fechaCompleta)
      }
    }
  }
</script>
<template>
  <div>
    <label>Dia</label>
    <select v-model="dia">
      <option :value="formatoZero(i)" v-for="i in 31">{{ formatoZero(i) }}</option>
    </select>
    <label>Mes</label>
    <select v-model="mes">
      <option :value="formatoZero(i)" v-for="i in 12">{{ formatoZero(i)  }}</option>
    </select>
    <label>Año</label>
    <select v-model="anio">
      <option v-for="i in 35">{{ 1990 + i }}</option>
    </select>
  </div>
</template>