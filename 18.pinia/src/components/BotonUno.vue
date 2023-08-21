<script>
import { useCounterStore } from '../store/modules/counter';
export default{
  setup(){
    const counterStore = useCounterStore()
    return {counterStore}
  },
  methods:{
    sumar: function(){
      this.counterStore.sum()
    }
  }
}
</script>
<template>
  <button @click="sumar">Sumar +1</button>
</template>