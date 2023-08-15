<script>
export default{
  data:function(){
    return{
      temperatura:0,
      aceptoTerminos: false
    }
  }
}
</script>
<template>
<div class="container">
  <input class="form-control" type="number" v-model="temperatura"><br/>
  <div class="p-3 rounded-3" :class="{
    'bg-danger-subtle':temperatura>=30,
    'bg-primary-subtle':temperatura<=0,
    'bg-warning-subtle':temperatura>0&&temperatura<30,
    'border border-dark-subtle': temperatura>0
    }
    ">
    Example element with utilities
  </div>
  <!-- font-size: 18px -->
  <p :style="{fontSize:temperatura+'px'}">La temperatura es: {{ temperatura }}</p>
  <br/>
  <input type="checkbox" v-model="aceptoTerminos"><label>Acepto términos</label>
  <br/>
  <button class="btn btn-primary" :class="{'disabled':!aceptoTerminos}">Enviar</button>
  <br/><br/>
  <button class="btn btn-success" :class="{'disabled':!aceptoTerminos || temperatura < 10}">Enviar con temperatura</button>

</div>
</template>