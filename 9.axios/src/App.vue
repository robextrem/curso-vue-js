<script>
import axios from 'axios';
export default{
  data:function(){
    return{
      pokemones:[]
    }
  },
  beforeMount:function(){
    this.getPokemones()
  },
  methods:{
    getPokemones:async function(){
      const response = await axios.get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
      this.pokemones = response.data
    }
  }
}
</script>
<template>
  <h1>Pokemones</h1>
  <template v-if="pokemones.length">
    <p v-for="(pokemon, i) in pokemones">{{i+1}} {{ pokemon.name }}</p>
  </template>
  <template v-else>
    No hay pokemones
  </template>
</template>