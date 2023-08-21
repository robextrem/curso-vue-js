<script>
import {useCounterStore} from './store/modules/counter'
import BotonUno from './components/BotonUno.vue'
import BotonDos from './components/BotonDos.vue'
import BotonTres from './components/BotonTres.vue'

export default{
  setup(){ // Anteriormente se usaba created
    const counterStore = useCounterStore()
    return {counterStore}
  },
  components:{
    BotonUno,
    BotonDos,
    BotonTres
  }
}
</script>
<template>
  <h1>Bienvenido al contador</h1>
  <p>La cuenta es: {{ counterStore.getCount }}</p>
  <BotonUno></BotonUno>
  <BotonDos></BotonDos>
  <BotonTres></BotonTres>
</template>