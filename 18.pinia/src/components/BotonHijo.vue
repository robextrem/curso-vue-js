<script>
import { useCounterStore } from '../store/modules/counter';
export default{
  setup(){
    const counterStore = useCounterStore()
    return {counterStore}
  },
  methods:{
    sumar: function(){
      this.counterStore.substract()
      this.counterStore.substract()
    }
  }
}
</script>
<template>
  <button @click="sumar">Restar -2</button>
</template>