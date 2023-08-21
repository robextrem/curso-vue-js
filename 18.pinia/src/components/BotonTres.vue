<script>
import { useCounterStore } from '../store/modules/counter';
import BotonHijo from './BotonHijo.vue';
export default{
  setup(){
    const counterStore = useCounterStore()
    return {counterStore}
  },
  components:{
    BotonHijo
  },
  methods:{
    sumar: function(){
      this.counterStore.sum()
      this.counterStore.sum()
    }
  }
}
</script>
<template>
  <button @click="sumar">Sumar +2</button>
  <BotonHijo></BotonHijo>
</template>